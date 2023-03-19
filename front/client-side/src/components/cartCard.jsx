import axios from "axios";
import { SERVER_URL } from "../../config/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CartCard({ cart, handleFetch }) {
  async function handleDelete() {
    try {
      await axios({
        method: "delete",
        url: `${SERVER_URL}/customer/cart/${cart._id}`,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      handleFetch();
      toast.success("Successfully Delete Cart Item!");
    } catch (err) {
      toast.error(err.response.data.message);
    }
  }
  return (
    <div className="h-[678px] w-[370px] bg-white rounded shadow-xl relative">
      <img
        src={cart?.imgUrl}
        alt="post image"
        className="w-full h-[50vh] rounded-t object-cover"
      />
      <div className="p-5">
        <p className="font-semibold text-2xl line-clamp-3">{cart?.name}</p>
        <p className="mt-2 line-clamp-3">{cart?.description}</p>
        <p className="mt-2 line-clamp-3">{cart?.status}</p>
        <p className="mt-2 line-clamp-3 absolute bottom-24 text-xl font-bold">
          Rp. {cart?.price}
        </p>

        <button
          onClick={handleDelete}
          className="bg-[#bd2333] text-white absolute bottom-5 ml-[100px] align-middle w-32 h-[50px] rounded text-center py-3 "
        >
          Delete Cart
        </button>
      </div>
    </div>
  );
}
