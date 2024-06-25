import React from "react";

const Cart = () => {
  return (
    <div className="flex justify-center align-center flex-wrap">
      <div className="card card-side w-1/2 bg-gray-200 shadow-xl pt-1 pb-1 text-black">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
          <p>Click the button to watch on Jetflix app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
