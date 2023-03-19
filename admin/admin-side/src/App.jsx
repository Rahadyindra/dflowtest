import "./index.css";
import SideBar from "./components/sidebar";
import { RouterProvider } from "react-router-dom";
import router from "../routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
