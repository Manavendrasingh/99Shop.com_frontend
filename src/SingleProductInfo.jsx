import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { handleBuyNow } from "./Productcard";
import Review from "./Review";

const SingleProductInfo = () => {
  let { id } = useParams();
  let [obj, setObj] = useState(null);

  const gotoData = async () => {
    let fetchData = await fetch(`https://dummyjson.com/products/${id}`);
    let obj = await fetchData.json();
    setObj(obj);
    //let { thumbnail, price, rating, brand, category, stock } = obj;
  };

  useEffect(() => {
    gotoData();
  }, []);

  let navigate = useNavigate();

  //  const handleBuyNow = (event)=>{
  //   event.stopPropagation();
  //   navigate('/PaymentPage');

  // }
  if (obj == null) {
    return (
      <>shimmer ui call</> // shimmer ui
    );
  }

  let { thumbnail, price, rating, brand, category, stock,reviews} = obj;

  //console.log(reviews);
  //console.log({thumbnail, price, rating, brand, category, stock })
  return (
    <div className=" bg-base-200 h-[92vh] w-screen pt-4">
      <div className="card card-side bg-base-100 shadow-xl  w-1/2  mx-auto">
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
            <button className="btn btn-primary" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="box bg-gray-200 h-1/2 w-[50vw]  mx-auto rounded-2xl">
        {reviews.map((obj,index)=>{
          <Review obj = {obj}></Review>

        })}
      </div>
    </div>
  );
};

export default SingleProductInfo;
