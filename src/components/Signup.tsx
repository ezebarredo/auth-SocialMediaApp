import "../App.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SrcImg from "../img/img.tsx";

export default function SignUp() {
  const [username, setUsername] = useState("test@email.com");
  const [password, setPassword] = useState("12345");
  const [confirmPassword, setConfirmPassword] = useState("12345");
  const [isSignUpEnabled, setSignUpEnabled] = useState(false);
  const navigate = useNavigate();

  const usernameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername((_username: string) => e.target.value);
    enableSignUpBtn((e.target as HTMLInputElement).value);
  };
  const passwordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword((_password: string) => e.target.value);
  };
  const confirmPasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword((_confirmPassword: string) => e.target.value);
  };

  const enableSignUpBtn = (username: string) => {
    const isUsernameValid = username.length > 5;
    setSignUpEnabled(isUsernameValid);
  };

  const PostSignUp = async () => {
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
      console.log(data);
      alert("User Created!");
      navigate("/user/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="grid-container">
        <div className="card">
          <a href="http://localhost:5175/user/login">Login</a>
          <h2>Sign Up</h2>
          <form action="post">
            <p>Username</p>
            <input type="email" value={username} onInput={usernameInput} />
            <p className={username.length > 5 ? "white" : "red"}>
              {username.length > 5 ? "- Valid Username" : "- Min 5 Characters"}
            </p>
            <p>Password</p>
            <input type="password" value={password} onInput={passwordInput} />
            <p>Confirm Password</p>
            <input
              type="password"
              value={confirmPassword}
              onInput={confirmPasswordInput}
            />
          </form>
          <br />
          <br />
          <button onClick={() => PostSignUp()} disabled={!isSignUpEnabled}>
            Sign Up
          </button>
          <br />
        </div>
        <div className="picture">
          <img src={SrcImg.signUpImg} alt="signup" />
        </div>
      </div>
    </>
  );
}
