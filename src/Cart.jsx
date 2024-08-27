import React from "react";
import { useContext } from "react";
import { useEffect, useState } from "react";
import CartProduct from "./CartProduct";
import { useSelector,useDispatch } from "react-redux";
import { clearCart,handlePriceSort } from "./utils/ReduxStore/CartSlice";

import { ThemeStore } from "./utils/ThemeContoller";



const Cart = () => {


  let {theme,setTheme} = useContext(ThemeStore);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.Items);

  let light = "overflow-x-auto bg-gray-100 h-[90vh]";
  let dark = "overflow-x-auto bg-teal-300 h-[90vh]";


  return (
    <div className={theme == "light" ? light :dark}>
      <table className="table">
        <thead>
          <tr className="text-xl text-black">
            <th className="px-20">Name</th>
            <th><span className="mx-1" onClick = {()=>dispatch(handlePriceSort(-1))}>⬆️</span>Price<span className="mx-1" onClick = {()=>dispatch(handlePriceSort(1))}>⬇️</span></th>
            <th>Rating</th>
            <th>Quantity</th>
           <th><button className="btn bg-blue-500 w-[120px]" onClick={()=>dispatch(clearCart())}>Clear Cart</button></th>
          </tr>
        </thead>
        <tbody className=" text-black">
          {/* row 1 */}

            {cartItems.map((cartObj) => (
              <CartProduct 
                obj={cartObj.dataObj}
                quantity={cartObj.quantity}
                key = {cartObj.dataObj.id}
              ></CartProduct>
            ))}
          {/* row 2 */}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
