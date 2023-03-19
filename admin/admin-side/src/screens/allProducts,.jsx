import { useEffect, useState } from "react";
import axios from "axios";
import RowProduct from "../components/rowProduct";
import { SERVER_URL } from "../../config/config";

export default function AllProducts() {
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
        console.log(err);
      }
    })();
  }, []);

  return (
    <section id="all product" className="hidde">
      <h1 className="ml-[55vh] mt-[5vh] text-2xl font-bold">
        List of Products
      </h1>
      <table className="table-auto  mx-auto mt-[5vh] shadow-xl  bg-white">
        <thead>
          <tr>
            <th className="border border-gray-400 p-2">_id</th>
            <th className="border border-gray-400 p-2">Name</th>
            <th className="border border-gray-400 p-2">Price</th>
            <th className="border border-gray-400 p-2">Status</th>
            <th className="border border-gray-400 p-2">Image</th>
            <th className="border border-gray-400 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => {
            return <RowProduct product={product} key={product._id} />;
          })}
        </tbody>
      </table>
    </section>
  );
}
