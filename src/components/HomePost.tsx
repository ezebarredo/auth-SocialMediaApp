import store from "../store/store";
import Post from "./Post";

export default function HomePost() {
  const { name } = store();

  return (
    <>
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
            <ul
              style={{
                listStyleType: "none",
              }}
            >
              <li>
                <a
                  href="#"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
                  Home
                </a>
              </li>
              {/* <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Users
                </a>
              </li>
              <li>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
                  Settings
                </a>
              </li> */}
              <li>
                <a
                  href="/user/login"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
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
