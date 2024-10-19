import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <h2>SmileLoop</h2>
      <Outlet />
    </>
  );
}
