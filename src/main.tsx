import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout.tsx";
import LoginHome from "./components/LoginHome.tsx";
import Login from "./components/Login.tsx";
import SignUp from "./components/Signup.tsx";
import SocialMedia from "./components/SocialMedia.tsx";

const router = createBrowserRouter([
  {
    path: "/user",
    element: <Layout />,
    children: [
      {
        path: "/user",
        element: <LoginHome />,
      },
      {
        path: "/user/signup",
        element: <SignUp />,
      },
      {
        path: "/user/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/user/socialmedia",
    element: <SocialMedia />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
