import { useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "../store/store";
import SrcImg from "../img/img.tsx";

export default function Login() {
  const [username, setUsername] = useState("test@email.com");
  const [password, setPassword] = useState("12345");
  const [isLoginEnabled, setLoginEnabled] = useState(false);
  const navigate = useNavigate();
  const { setName } = store();

  const usernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername((_username: string) => e.target.value);
    enabledLoginBtn((e.target as HTMLInputElement).value);
  };

  const passwordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((_password: string) => e.target.value);
  };

  const enabledLoginBtn = (username: string) => {
    const isUsernameValid = username.length > 5;
    setLoginEnabled(isUsernameValid);
  };

  const loginPost = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setName(data.user.username);
      console.log(`username: ${data.user.username}`);
      console.log(`token ${data.token}`);
      navigate("/user/socialmedia");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="grid-container">
        <div className="card">
          <a href="http://localhost:5175/user/signup">Sign Up</a>
          <h2>Login</h2>
          <form action="post">
            <p>Username</p>
            <input type="email" value={username} onInput={usernameInput} />
            <p className={username.length > 5 ? "white" : "red"}>
              {username.length > 5 ? "- Valid Username" : "- Min 5 Characters"}
            </p>
            <p>Password</p>
            <input type="password" value={password} onInput={passwordInput} />
          </form>
          <br />
          <button onClick={() => loginPost()} disabled={!isLoginEnabled}>
            Login
          </button>
        </div>
        <div className="picture">
          <img src={SrcImg.loginImg} alt="login" />
        </div>
      </div>
    </>
  );
}
