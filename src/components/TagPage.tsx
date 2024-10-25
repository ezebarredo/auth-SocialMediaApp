import store from "../store/store";
import Tag from "./Tag";

export default function TagPage() {
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
            <b>{name}</b>
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
                <a
                  href="/user/socialmedia/"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/user/login"
                  style={{ color: "#fff", textDecoration: "none" }}
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
            <Tag />
          </main>
        </div>
      </div>
    </>
  );
}
