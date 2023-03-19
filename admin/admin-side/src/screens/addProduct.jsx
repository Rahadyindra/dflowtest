import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../config/config";

export default function AddProduct() {
  const navigate = useNavigate();

  const [addProduct, setAddProduct] = useState({
    name: "",
    price: "",
    description: "",
    imgUrl: "",
    status: "",
  });

  function handleForm(e) {
    setAddProduct({
      ...addProduct,
      [e.target.name]: e.target.value,
    });
  }

  async function handleAdd(e) {
    try {
      e.preventDefault();
      const product = addProduct;
      console.log(product);
      const { data } = await axios({
        method: "post",
        url: `${SERVER_URL}/products`,
        data: product,
      });
      console.log(data.message);
      navigate("/");
    } catch (err) {
      console.log(err.response.data.message);
    }
  }

  return (
    <section id="addProduct">
      <div className="container">
        <div className="bg-[#ffff] shadow-xl w-[85vh] h-[80vh] rounded-lg border border-[#99980] mx-auto mt-[10vh] pl-[16vh] relative">
          <form
            action="submit"
            className="flex flex-col pt-[8vh] gap-y-5"
            onSubmit={handleAdd}
          >
            <h1 className="text-xl font-semibold">Add Product</h1>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="w-[50vh] h-12 border-2 rounded pl-3 mt-1"
              onBlur={handleForm}
            />
            <input
              type="text"
              placeholder="Image Url"
              name="imgUrl"
              className="w-[50vh] h-12 border-2 rounded pl-3"
              onBlur={handleForm}
            />
            <input
              type="text"
              name="description"
              placeholder="description"
              className="w-[50vh] h-12 border-2 rounded pl-3"
              onBlur={handleForm}
            />
            <input
              type="text"
              name="price"
              placeholder="price"
              className="w-[50vh] h-12 border-2 rounded pl-3"
              onBlur={handleForm}
            />
            <select
              className="border-2 rounded w-[50vh] h-12"
              name="status"
              defaultValue=""
              onBlur={handleForm}
            >
              <option disabled value="">
                -- Select Status Here --
              </option>
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
