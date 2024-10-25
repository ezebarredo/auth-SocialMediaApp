import store from "../store/store";

export default function Nav() {
  const { name } = store.getState();

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
          ></main>
        </div>
      </div>
    </>
  );
}
