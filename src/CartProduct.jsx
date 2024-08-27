import React from "react";
import { handelQuantity,removeItems} from "./utils/ReduxStore/CartSlice";
import { useDispatch } from "react-redux";


const CartProduct = ({obj,quantity}) => {


  const {thumbnail,price,rating,brand,warrantyInformation,returnPolicy,title,id} = obj;
  const dispatch = useDispatch();


  return (
    <tr className="text-xl">
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle bg-white h-20 w-20">
                    <img 
                      src={thumbnail}
                      alt={title}
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{title}</div>
                  <div className="text-sm opacity-50">{brand}</div>
                  <div className="text-sm opacity-50">{returnPolicy}</div>
                  <div className="text-sm opacity-50">{warrantyInformation}</div>
                </div>
              </div>
            </td>
            <td>
              ${price}
            </td>
            <td>{rating}</td>
            <td><span className="mx-3" onClick={( )=>dispatch(handelQuantity({id:id ,handle : -1}))}>-</span>{quantity}<span className="mx-3" onClick={()=>dispatch(handelQuantity(obj = {id:id ,handle : 1}))}>+</span></td>
            <th>
              <button className="btn bg-gray-50 text-black" onClick={()=>dispatch(removeItems(id))}>Remove Item</button>
            </th>
          </tr>
  );
};

export default CartProduct;
