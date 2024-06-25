import React from "react";

const Review = ({obj}) => {
    const {reviewerName,comment,rating} = obj;
    console.log(reviewerName)
  

    
  return (
    <div className="h-1/2 w-3/4 mx-auto">
      <div className="titlebox h-1/4 w-3/4 text-black bg-gray-400 border-2 border-black rounded-2xl mx-auto flex justify-between item-center px-3  text-2xl">
        <p className="text-black-100">reviewerName</p>
        <p className="text-black-100">^</p>
      </div>
      <div className="commentbox h-1/4 w-3/4 text-black bg-gray-400 border-2 border-black rounded-2xl mx-auto flex justify-between item-center px-3  text-2xl">
        <p className="text-black-100">comment</p>
        <p className="text-black-100">ating</p>
      </div>
    </div>
  );
};
export default Review;