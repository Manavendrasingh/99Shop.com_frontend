import React from "react";
import {useState,useEffect} from "react";


const useSingleProductData = (id)=>{

const [obj,setObj] = useState();
 
const gotoData = async () => {
    let fetchData = await fetch(`https://dummyjson.com/products/${id}`);
    let obj = await fetchData.json();
    setObj(obj);
  };

  useEffect(() => {
    gotoData();
  }, []);

 return obj

}

export default useSingleProductData;