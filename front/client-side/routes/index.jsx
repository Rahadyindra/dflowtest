import React from "react";
import { createBrowserRouter, redirect, Routes } from "react-router-dom";
import AllProducts from "../src/screens/allProducts";
import Cart from "../src/screens/cart";
import Login from "../src/screens/login";
import Register from "../src/screens/register";

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
      return null;
    },
  },
  {
    path: "register",
    element: <Register />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
      return null;
    },
  },
  {
    path: "/",
    element: <AllProducts />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null;
    },
  },
  {
    path: "cart",
    element: <Cart />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
      return null;
    },
  },
]);

export default router;
