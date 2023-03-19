import axios from "axios";
import { SERVER_URL } from "../../config/config";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RowProduct({ product, refetch }) {
  async function handleDelete() {
    try {
      await axios({
        method: "delete",
        url: `${SERVER_URL}/products/${product._id}`,
      });
      refetch();
      toast.success("Delete Sucessful");
    } catch (err) {
      toast.error(err.response.data?.message);
    }
  }
  return (
    <tr>
      <td className="border border-gray-400 p-2">{product?._id}</td>
      <td className="border border-gray-400 p-2">{product?.name}</td>
      <td className="border border-gray-400 p-2">{product?.price}</td>
      <td className="border border-gray-400 p-2 text-sm">{product?.status}</td>
      <td className="border border-gray-400 p-2">
        <img
          src={product?.imgUrl}
          className="h-[20vh] w-[30vh]"
          alt="post image"
        />
      </td>
      <td className="border border-gray-400 p-2">
        <span className="flex flex-col gap-y-2">
          <Link
            to={`/edit/${product._id}`}
            className="bg-neutral-200 hover:bg-neutral-400 rounded px-3 py-1 mt-5"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-700 text-white rounded px-3 py-1 mt-2"
          >
            Delete
          </button>
        </span>
      </td>
    </tr>
  );
}
