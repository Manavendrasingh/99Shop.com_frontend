import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import Review from "./Review";
import {useSelector,useDispatch} from "react-redux";
import { addItems } from "./utils/ReduxStore/CartSlice";
import useSingleProductData from './utils/useSingleProductData';
import { useContext } from "react";
import { ThemeStore } from "./utils/ThemeContoller";


const SingleProductInfo = () => {
  let {id} = useParams();
  const [show,setShow] = useState(null);

  let cartItem = useSelector((store)=>store.cart.Items);

  const checkCart = ()=>{
      let indx = cartItem.findIndex((cartObj)=> cartObj.dataObj.id == id);
      console.log(indx);
      return indx;
  }

   
  let disptch = useDispatch();

  let obj = useSingleProductData(id);


  let {theme,setTheme} = useContext(ThemeStore);
  let light = "bg-teal-300 h-[92vh] w-screen pt-4";
  let dark = "bg-gray-100 h-[92vh] w-screen pt-4";


  if (obj == null) {
    return (
      <>shimmer ui call</> // shimmer ui
    );

  }

  let { thumbnail, price, rating, brand, category, stock,reviews} = obj;

  return (
    <div className={theme == "light" ? light :dark}>
      <div className="card card-side bg-base-100 shadow-xl  w-1/2  mx-auto">
      {/* <div className="w-[50px] h-[50px]  absolute z-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.1213 10.4792C13.7308 10.0886 13.0976 10.0886 12.7071 10.4792L12 11.1863C11.2189 11.9673 9.95259 11.9673 9.17154 11.1863C8.39049 10.4052 8.39049 9.13888 9.17154 8.35783L14.8022 2.72568C16.9061 2.24973 19.2008 2.83075 20.8388 4.46875C23.2582 6.88811 23.3716 10.7402 21.1792 13.2939L19.071 15.4289L14.1213 10.4792ZM3.16113 4.46875C5.33452 2.29536 8.66411 1.98283 11.17 3.53116L7.75732 6.94362C6.19523 8.50572 6.19523 11.0384 7.75732 12.6005C9.27209 14.1152 11.6995 14.1611 13.2695 12.7382L13.4142 12.6005L17.6568 16.8431L13.4142 21.0858C12.6331 21.8668 11.3668 21.8668 10.5858 21.0858L3.16113 13.6611C0.622722 11.1227 0.622722 7.00715 3.16113 4.46875Z"></path></svg></div> */}
      <div className="w-[50px] h-[50px]  absolute z-1 top-2 left-2">{checkCart() == -1 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.1213 10.4792C13.7308 10.0886 13.0976 10.0886 12.7071 10.4792L12 11.1863C11.2189 11.9673 9.95259 11.9673 9.17154 11.1863C8.39049 10.4052 8.39049 9.13888 9.17154 8.35783L14.8022 2.72568C16.9061 2.24973 19.2008 2.83075 20.8388 4.46875C23.2582 6.88811 23.3716 10.7402 21.1792 13.2939L19.071 15.4289L14.1213 10.4792ZM3.16113 4.46875C5.33452 2.29536 8.66411 1.98283 11.17 3.53116L7.75732 6.94362C6.19523 8.50572 6.19523 11.0384 7.75732 12.6005C9.27209 14.1152 11.6995 14.1611 13.2695 12.7382L13.4142 12.6005L17.6568 16.8431L13.4142 21.0858C12.6331 21.8668 11.3668 21.8668 10.5858 21.0858L3.16113 13.6611C0.622722 11.1227 0.622722 7.00715 3.16113 4.46875Z"></path></svg>:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red"><path d="M14.1213 10.4792C13.7308 10.0886 13.0976 10.0886 12.7071 10.4792L12 11.1863C11.2189 11.9673 9.95259 11.9673 9.17154 11.1863C8.39049 10.4052 8.39049 9.13888 9.17154 8.35783L14.8022 2.72568C16.9061 2.24973 19.2008 2.83075 20.8388 4.46875C23.2582 6.88811 23.3716 10.7402 21.1792 13.2939L19.071 15.4289L14.1213 10.4792ZM3.16113 4.46875C5.33452 2.29536 8.66411 1.98283 11.17 3.53116L7.75732 6.94362C6.19523 8.50572 6.19523 11.0384 7.75732 12.6005C9.27209 14.1152 11.6995 14.1611 13.2695 12.7382L13.4142 12.6005L17.6568 16.8431L13.4142 21.0858C12.6331 21.8668 11.3668 21.8668 10.5858 21.0858L3.16113 13.6611C0.622722 11.1227 0.622722 7.00715 3.16113 4.46875Z"></path></svg>}</div>
        <figure>
          <img src={thumbnail} alt="Movie" />
        </figure>
        <div className="card-body">
          <div>
            <button className="btn m-2">
              Rating:
              <div className="badge badge-secondary">{rating}</div>
            </button>
            <button className="btn m-2">
              Price:
              <div className="badge badge-secondary">{price}</div>
            </button>
            <button className="btn m-2">
              Brand:
              <div className="badge badge-secondary">{brand}</div>
            </button>
            <button className="btn m-2">
              Category:
              <div className="badge badge-secondary">{category}</div>
            </button>
            <button className="btn m-2">
              Stock:
              <div className="badge badge-secondary">{stock}</div>
            </button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              Buy Now
            </button>
            <button className="btn btn-primary" onClick={()=>disptch(addItems(obj))}>
              add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="box bg-gray-200 h-1/2 w-[50vw]  mx-auto rounded-3xl">
        {reviews.map((obj,idx)=>(
          <Review obj = {obj} theme = {theme} idx = {idx} showidx= {show} setShowidx = {setShow} key = {idx}></Review>

        ))}
      </div>
    </div>
  );
};

export default SingleProductInfo;
