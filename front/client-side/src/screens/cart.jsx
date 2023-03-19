import { Link, useNavigate } from "react-router-dom";
export default function Cart() {
  const navigate = useNavigate();
  return (
    <section id="your cart">
      <div className="flex-col my-10">
        <div className="flex flex-wrap">
          <h1 className="text-4xl mx-[22vh] mb-5 font-bold">Your Cart</h1>
          <Link
            to="/"
            className="bg-slate-800 hover:bg-slate-900 text-white ml-[70vh] align-middle w-48 h-[50px] rounded text-center py-3 "
          >
            Go Back To Catalogue
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("access_token");
              navigate("/login");
            }}
            className="bg-red-700 hover:bg-red-800 text-white ml-[70vh] align-middle w-32 h-[50px] rounded text-center py-3 absolute top-10 right-10 "
          >
            Logout
          </button>
        </div>
        <div className="mx-[22vh] flex flex-wrap gap-[10vh]">
          <div className="h-[678px] w-[370px] bg-white rounded shadow-xl relative">
            <img
              src="{post.imgUrl}"
              alt="post image"
              className="w-full h-[50vh] rounded-t object-cover"
            />
            <div className="p-5">
              <p className="font-semibold text-2xl line-clamp-3">post.title</p>
              <p className="mt-2 line-clamp-3">post.content</p>
              <p className="mt-2 line-clamp-3">post.price</p>
              <p className="mt-2 line-clamp-3">post.status</p>

              <button className="bg-[#bd2333] text-white absolute bottom-5 ml-[100px] align-middle w-32 h-[50px] rounded text-center py-3 ">
                Delete Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
