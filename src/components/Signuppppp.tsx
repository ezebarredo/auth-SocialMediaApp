import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("test@email.com");
  const [password, setPassword] = useState("12345");
  const [repassword, setRePassword] = useState("12345");
  const [userCreated, setUserCreated] = useState(false);
  const navigate = useNavigate();

  const usernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername((_username: string) => e.target.value);
  };

  const passwordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((_password: string) => e.target.value);
  };

  const rePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRePassword((_repassword: string) => e.target.value);
  };

  const signUpPost = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/user/signup", {
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
      alert("User Created!");
      console.log(data.message);
      setUserCreated(!userCreated);
      navigate("/user/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <a href="http://localhost:5175/user/login">Login</a>
          <h2>SignUp</h2>
          <form action="post">
            <p>Username</p>
            <input type="email" value={username} onInput={usernameInput} />
            <p>Password</p>
            <input type="password" value={password} onInput={passwordInput} />
            <p>Re-enter Password</p>
            <input
              type="password"
              value={repassword}
              onInput={rePasswordInput}
            />
          </form>
          <br />
          <button onClick={() => signUpPost()}>Submit</button>
        </div>
      </div>
    </>
  );
}
