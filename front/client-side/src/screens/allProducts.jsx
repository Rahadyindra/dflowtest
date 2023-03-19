import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { SERVER_URL } from "../../config/config";
import ProductCard from "../components/productCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AllProducts() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: `${SERVER_URL}/products`,
        });
        setProducts(data);
      } catch (err) {
        toast.error(err.response.data?.message);
      }
    })();
  }, []);

  return (
    <section id="all products">
      <div className="flex-col my-10">
        <div className="flex flex-wrap">
          <h1 className="text-4xl mx-[22vh] mb-5 font-bold">Our Catalogue</h1>
          <Link
            to="/cart"
            className="bg-slate-800 hover:bg-slate-900 text-white ml-[70vh] align-middle w-32 h-[50px] rounded text-center py-3 "
          >
            Your Cart
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
          {products?.map((product) => {
            return <ProductCard product={product} key={product._id} />;
          })}
        </div>
      </div>
    </section>
  );
}
