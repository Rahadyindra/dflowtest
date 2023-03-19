import Sidebar from "../components/sidebar";
import { Outlet, Routes } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <div className="ml-40 mb-10">
        <Outlet />
      </div>
    </>
  );
}
