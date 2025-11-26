import { Outlet } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";

export default function MainLayout() {
  return (
    <>
      <TopBar /> {/* ✔ inside router now */}
      <Outlet />
    </>
  );
}
