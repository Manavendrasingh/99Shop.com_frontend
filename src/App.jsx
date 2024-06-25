import React from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import ShimmerUI from "./ShimmerUI";
import { Outlet } from "react-router-dom";
import ThemeContoller from "./utils/ThemeContoller.jsx";

const App  = ()=>{
  return (
    <ThemeContoller>
         <Navbar></Navbar>
         <Outlet></Outlet>    
    </ThemeContoller>
  )
}

export default App;