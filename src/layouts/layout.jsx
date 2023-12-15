import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Sorter from "./sorter/Sorter";
import { Slider } from "@mui/material";


const Layout = () => {
  return (
    <div className="">
     <div><Navbar/></div>
      <main className="grid p-3 gap-3 grid-cols-12">
        <div className="border shadow rounded-md p-3 col-span-2">
          <Sorter/>
        </div>
        <div className="col-span-10">
          <Outlet />
        </div>
      </main>
      <div><Footer/></div>
    </div>
  );
};

export default Layout;
