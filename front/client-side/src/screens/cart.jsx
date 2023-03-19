import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../config/config";
import CartCard from "../components/cartCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const navigate = useNavigate();
  const [carts, setCarts] = useState([]);
  const [fetchTrigger, setFetchTrigger] = useState(true);

  function handleFetch() {
    setFetchTrigger(!fetchTrigger);
  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: `${SERVER_URL}/customer/cart`,
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        setCarts(data);
      } catch (error) {
        toast.error(err.response.data?.message);
      }
    })();
  }, [fetchTrigger]);

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
        <div className="mx-[22vh] flex flex-wrap gap-[6vh] mt-16">
          {carts?.map((cart) => {
            return (
              <CartCard cart={cart} key={cart._id} handleFetch={handleFetch} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
