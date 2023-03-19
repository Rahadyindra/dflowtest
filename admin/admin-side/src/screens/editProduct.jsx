import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../config/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditProduct() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    imgUrl: "",
    status: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios({
          method: "get",
          url: `${SERVER_URL}/products/${productId}`,
        });
        setProduct(data);
      } catch (err) {
        toast.error(err.response.data.message);
      }
    })();
  }, []);

  function handleForm(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  async function submitEdit(e) {
    try {
      e.preventDefault();
      const { _id, ...productWithoutId } = product;
      const { data } = await axios({
        method: "put",
        url: `${SERVER_URL}/products/${productId}`,
        data: {
          product: productWithoutId,
        },
      });
      console.log(data.message);
      navigate("/");
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  return (
    <section id="editProduct">
      <div className="container">
        <div className="bg-[#ffff] shadow-xl w-[85vh] h-[80vh] rounded-lg border border-[#99980] mx-auto mt-[10vh] pl-[16vh] relative">
          <form
            action="submit"
            className="flex flex-col pt-[8vh] gap-y-5"
            onSubmit={submitEdit}
          >
            <h1 className="text-xl font-semibold">Edit Product</h1>
            <input
              type="text"
              name="name"
              value={product.name}
              placeholder="name"
              className="w-[50vh] h-12 border-2 rounded pl-3 mt-1"
              onChange={handleForm}
            />
            <input
              type="text"
              placeholder="Image Url"
              value={product.imgUrl}
              name="imgUrl"
              className="w-[50vh] h-12 border-2 rounded pl-3"
              onChange={handleForm}
            />
            <input
              type="text"
              name="description"
              value={product.description}
              placeholder="description"
              className="w-[50vh] h-12 border-2 rounded pl-3"
              onChange={handleForm}
            />
            <input
              type="text"
              name="price"
              value={product.price}
              placeholder="price"
              className="w-[50vh] h-12 border-2 rounded pl-3"
              onChange={handleForm}
            />
            <select
              className="border-2 rounded w-[50vh] h-12"
              name="status"
              value={product.status}
              onChange={handleForm}
            >
              <option disabled>-- Select Status Here --</option>
              <option value="Pre-Order">Pre-Order</option>
              <option value="Purchase">Purchase</option>
            </select>

            <button
              type="submit"
              className="bg-[#bd2333] text-white absolute bottom-[10vh]  align-middle w-44 h-[52px] rounded text-center py-3 font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
