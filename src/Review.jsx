import React, { useState } from "react";

const Review = ({obj,idx ,showidx,setShowidx}) => {
    const {reviewerName,comment,rating} = obj;
    
  return (
    <div className="min-h-[60px] w-3/4 mx-auto ">
    {/* <div className={theme == "light" ? light:dark}> */}
      <div className="titlebox h-[60px] w-full text-black bg-gray-400 border-2 border-black rounded-2xl mx-auto flex justify-between items-center px-3  text-2xl">
        <p className="text-black-100">{reviewerName}</p>
        <p className="text-black-100" onClick={()=>setShowidx(idx)}>click</p>
      </div>
      {
        showidx == idx ? <div className="commentbox h-[60px] w-full text-black bg-gray-300 border-2 border-black rounded-2xl mx-auto flex justify-between items-center px-3  text-2xl">
        <p className="text-black-100">{comment}</p>
        <p className="text-black-100">{rating}</p>
      </div> : <></>
      } 
    </div>
  );
};
export default Review;