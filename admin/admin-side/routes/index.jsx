import React from "react";
import { createBrowserRouter, redirect, Routes } from "react-router-dom";
import AddProduct from "../src/screens/addProduct";
import AllProducts from "../src/screens/allProducts,";
import EditProduct from "../src/screens/editProduct";
import Layout from "../src/screens/layout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AllProducts />,
      },
      {
        path: "add",
        element: <AddProduct />,
      },
      {
        path: "edit/:productId",
        element: <EditProduct />,
      },
    ],
  },
]);

export default router;
