import Productcard from "./Productcard";
import Data from "./Data.js";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI.jsx";

import { ThemeStore } from "./utils/ThemeContoller.jsx";
import { useContext } from "react";




const Home = () => {
  const [allData ,setAllData] = useState([]);
  const [productData , setProductData] = useState([])
  const [query,setQuery] = useState("");
  const handelToRated= ()=>{
          let filterData = 
              allData.filter((obj)=>{
                return obj.rating > 4;
              })
          //console.log(filterData);
          
          setProductData(filterData);  
          
  }
  const handelCategory = (category)=>{
    let filterData = allData.filter((obj)=>{
      return obj.category == category;
    })
    //console.log(filterData);
    setProductData(filterData);
  }

  const handelSearch = ()=>{

          let searchData = allData.filter((obj)=>{

            return obj.title.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase(),0);

          })
          //console.log(query);
          setProductData(searchData);
  
  }


  const handelHighToLow = (()=>{
    let copyData = [...productData];
    copyData.sort((a,b)=>{
      return b.price - a.price;
    })
    setProductData(copyData);
   //console.log(copyData);


  })

  const handelLowToHigh = (()=>{
    let copyData = [...productData];
    copyData.sort((a,b)=>{
      return a.price - b.price;
    })

    setProductData(copyData);

  })

  const getData = async ()=>{
    let ApiData = await fetch('https://dummyjson.com/products');
    //let ApiData = await fetch('https://dummyjson.com/RESOURCE/?limit=10');
    let obj = await ApiData.json();
    // console.log(obj.products);


     
     setAllData(obj.products);
     setProductData(obj.products);
 



  }



  useEffect(()=>{ 
    getData();
  },[])
 
   const {theme} = useContext(ThemeStore);
   const darkTheme = "min-h-[90vh] w-screen bg-teal-300 text-white";
   const lightTheme = "min-h-[90vh] w-screen bg-gray-100 text-white";
 



// understanding of dependncy array

  // useEffect(()=>{ // to create simmer ui
  //   console.log("[]")
  // },[])

  // useEffect(()=>{ // to create simmer ui
  //   console.log("No array")
  // })

  // useEffect(()=>{ // to create simmer ui
  //   console.log("query")
  // },[query])



  if(allData.length == 0)
    {
     // console.log("shimmer rendering");
      return(
      
         <ShimmerUI></ShimmerUI>
     
     
      )
    }
  
  
  return (
    
    <div className={theme == "light" ? lightTheme : darkTheme}>
      <div className="flex justify-around p-3">
        <button className="btn btn-accent" onClick={handelToRated}>TopRated</button>
        
        <button className="btn btn-accent" onClick={handelHighToLow}>High-To-Low</button>
        <button className="btn btn-accent" onClick={handelLowToHigh}>Low-To-High</button>
        <div className="search-bar flex justify-normal">
          <label className="input input-bordered flex items-center gap-2 mr-2">
            <input type="text" className="grow" placeholder="Search"
            value = {query}
            onChange={(event)=>{setQuery(event.target.value)}} />
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <button className="btn btn-accent" onClick={handelSearch}>Search</button>
        </div>
        <button className="btn btn-accent" onClick={()=>handelCategory('groceries')}>Glocery</button>
        <button className="btn btn-accent" onClick={()=>handelCategory('furniture')}>Furniture</button>
        <button className="btn btn-accent" onClick={()=>handelCategory('beauty')}>Electronics</button>
        <button className="btn btn-accent" onClick={()=>handelCategory('beauty')}>Beauty</button>
      </div>
      <div className="cards flex justify-around w-100 flex-wrap margin-3">
        {productData.map((obj) => (
          <Productcard obj={obj} key={obj.id}></Productcard>
        ))}
      </div>
    </div>
  );
};

export default Home;
