import React from "react";
import { useState,useEffect } from "react";

const useAllProductData = ()=>{

    const [allData ,setAllData] = useState([]);

    const getData = async ()=>{
        let ApiData = await fetch('https://dummyjson.com/products');
        let obj = await ApiData.json();   
         setAllData(obj.products);
         
    
      }
    
      useEffect(()=>{ 
        getData();
      },[])

      return {allData} ;
}

export default useAllProductData;