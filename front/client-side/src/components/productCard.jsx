import axios from "axios";
import { SERVER_URL } from "../../config/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductCard({ product }) {
  async function buyProduct() {
    try {
      await axios({
        method: "post",
        url: `${SERVER_URL}/customer/cart/${product._id}/`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      toast.success("Successfully Bought Product");
    } catch (err) {
      toast.error(err);
    }
  }

  return (
    <div className="h-[678px] w-[370px] bg-white rounded shadow-xl relative">
      <img
        src={product?.imgUrl}
        alt="post image"
        className="w-full h-[50vh] rounded-t object-cover"
      />
      <div className="p-5">
        <p className="font-semibold text-2xl line-clamp-3">{product?.name}</p>
        <p className="mt-2 line-clamp-3">{product?.description}</p>
        <p className="mt-2 line-clamp-3 absolute bottom-24 text-xl font-bold">
          Rp. {product?.price}
        </p>

        <button
          onClick={buyProduct}
          className="bg-sky-700 hover:bg-sky-800 text-white absolute bottom-5 ml-[100px] align-middle w-32 h-[50px] rounded text-center py-3 "
        >
          {product?.status}
        </button>
      </div>
    </div>
  );
}
