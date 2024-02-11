import React from "react";
import ReactDOM from "react-dom/client";
import BgRemover from "./bg-remover/BgRemover";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./about/About";
import Pricing from "./pricing/Pricing";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="main-container">
          <Navbar logo={"edit & craft"} />
          <Header />
        </div>
      </>
    ),
  },
  {
    path: "bg-remover",
    element: (
      <>
        <BgRemover />
      </>
    ),
  },
  {
    path: "about",
    element: (
      <>
        <About />
      </>
    ),
  },
  {
    path: "pricing",
    element: (
      <>
        <Pricing />
      </>
    ),
  },
]);
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
