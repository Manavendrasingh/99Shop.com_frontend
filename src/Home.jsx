import Productcard from "./Productcard";
import Data from "./Data.js";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";



const Home = () => {
  const [allData ,setAllData] = useState([...Data]);
  const [productData , setProductData] = useState([...Data])
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
          //  let searchInput = document.querySelector(".grow");
          //  let productSearch = searchInput.value;
          //  let searchData = allData.filter((obj)=>{
          //   // console.log(allData);
          //   return obj.title.toLocaleLowerCase().includes(productSearch.trim().toLocaleLowerCase(),0);

          //  })
          //  setProductData(searchData);

          let searchData = allData.filter((obj)=>{

            return obj.title.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase(),0);

          })
          //console.log(query);
          setProductData(searchData);
  
  }

  const getData = async ()=>{
    let ApiData = await fetch('https://dummyjson.com/products');
    let obj = await ApiData.json();
   // console.log(obj.products);
     setAllData(obj.products);
     setProductData(obj.products);



  }
  useEffect(()=>{ // to create simmer ui
    getData();
  },[])

  if(allData.length == 0)
    {
      <ShimmerUi></ShimmerUi>
    }
  return (
    <div className="min-h-[90vh] w-screen bg-white">
      <div className="flex justify-around p-3">
        <button className="btn btn-accent" onClick={handelToRated}>TopRated</button>
        <button className="btn btn-accent" onClick={()=>handelCategory('beauty')}>Beauty</button>
        <button className="btn btn-accent" onClick={()=>handelCategory('groceries')}>Glocery</button>
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
        <button className="btn btn-accent" onClick={()=>handelCategory('furniture')}>Furniture</button>
        <button className="btn btn-accent" onClick={()=>handelCategory('beauty')}>Electronics</button>
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
