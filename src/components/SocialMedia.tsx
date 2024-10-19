import { useState } from "react";
import store from "../store/store";
import Post from "./Post";

export default function SocialMedia() {
  const [post, setPost] = useState("");

  const { name } = store.getState();

  const postInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost((_username: string) => e.target.value);
  };

  const handlePost = () => {
    setPost(post);
  };

  return (
    <>
      <h3>
        <a href="/user/login">Log Out</a>
      </h3>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <header
          style={{
            backgroundColor: "#646cff",
            color: "#fff",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <h2>SmileLoop</h2>
          <h3>
            {" "}
            Welcome <b>{name}</b> 😃
          </h3>
        </header>
        <div style={{ display: "flex", flex: 1 }}>
          <nav
            style={{
              width: "200px",
              backgroundColor: "#333",
              color: "#fff",
              padding: "10px",
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Users
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Settings
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Reports
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Logout
                </a>
              </li>
            </ul>
          </nav>
          <main
            style={{
              flex: 1,
              padding: "10px",
            }}
          >
            <Post />
          </main>
        </div>
      </div>
    </>
  );
}
