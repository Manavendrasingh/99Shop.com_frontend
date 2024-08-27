import React, { useState } from "react";
import Home from "./Home";
import Navbar from "./Navbar";
import ShimmerUI from "./ShimmerUI";
import { Outlet } from "react-router-dom";
import ThemeContoller from "./utils/ThemeContoller.jsx";
import { createContext } from "react";
import Footer from "./Footer.jsx";

const App  = ()=>{
 
  return (
    <ThemeContoller>
       
          <Navbar></Navbar>
          <Outlet></Outlet> 
          <Footer></Footer>
  
    </ThemeContoller>
  )
}

export default App;