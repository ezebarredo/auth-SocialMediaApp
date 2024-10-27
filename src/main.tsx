import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout.tsx";
import Login from "./components/Login.tsx";
import SignUp from "./components/Signup.tsx";
import TagPage from "./components/TagPage.tsx";
import HomePost from "./components/HomePost.tsx";

const router = createBrowserRouter([
  {
    path: "/user",
    element: <Layout />,
    children: [
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
    element: <HomePost />,
  },
  {
    path: "/user/socialmedia/tag/:tagId",
    element: <TagPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
