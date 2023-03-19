import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <section id="sidebar">
      <div className="bg-white border shadow-xl w-[30vh] h-full fixed top-0 left-0 rounded-b-xl">
        <div className="flex flex-col mt-5">
          <p className="mx-auto text-xl font-bold">Admin Dashboard</p>
          <div className="flex flex-col gap-y-[5vh] pt-10 mx-5">
            <Link
              to="/"
              className="text-center shadow-md py-2 px-auto rounded-xl mx-5 hover:bg-slate-200 cursor-pointer"
            >
              Products
            </Link>
            <Link
              to="/add"
              className="text-center shadow-md py-2 px-auto rounded-xl mx-5  hover:bg-slate-200 whitespace-nowrap cursor-pointer"
            >
              Add Product
            </Link>

            <p className="text-center font-semibold">Hello, Admin</p>
          </div>
        </div>
      </div>
    </section>
  );
}
