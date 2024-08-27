import SingleProductInfo from "./SingleProductInfo";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import PaymentPage from "./PaymentPage.jsx"
import { ThemeStore } from "./utils/ThemeContoller.jsx";
import { useContext } from "react";
import {useDispatch} from "react-redux";
import {addItems} from "./utils/ReduxStore/CartSlice.jsx";
import {useSelector} from "react-redux";


const Productcard = ({obj}) => {
  let { title, thumbnail, rating, price, brand, category ,id} = obj;
  let navigate = useNavigate();
  let dispatch = useDispatch();


  let cartItem = useSelector((store)=>store.cart.Items);
  
  const checkCart = ()=>{
    let indx = cartItem.findIndex((cartObj)=> cartObj.dataObj.id == id);
    return indx;
}

  const handleCartClick = ()=>{
       navigate(`/products/${id}`);

   }



 const handleBuyNow = (event)=>{
    event.stopPropagation();
    navigate('/PaymentPage');
  
   }


  const handleAddToCart = (event)=>{
       event.stopPropagation();
       dispatch(addItems(obj));
       
    }
  

   const {theme} = useContext(ThemeStore);
   const darkTheme = "card h-[25rem] w-[20rem] bg-base-100 shadow-xl m-4 relative";
   const lightTheme = "card h-[25rem] w-[20rem] bg-gray-300 shadow-xl m-4 text-black relative";
  // console.log(handleBuyNow);


  return (
    
    <div className= {theme == "light" ? lightTheme: darkTheme} onClick={handleCartClick}>
      <div className="w-[50px] h-[50px]  absolute z-1 top-2 left-2">{checkCart() == -1 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14.1213 10.4792C13.7308 10.0886 13.0976 10.0886 12.7071 10.4792L12 11.1863C11.2189 11.9673 9.95259 11.9673 9.17154 11.1863C8.39049 10.4052 8.39049 9.13888 9.17154 8.35783L14.8022 2.72568C16.9061 2.24973 19.2008 2.83075 20.8388 4.46875C23.2582 6.88811 23.3716 10.7402 21.1792 13.2939L19.071 15.4289L14.1213 10.4792ZM3.16113 4.46875C5.33452 2.29536 8.66411 1.98283 11.17 3.53116L7.75732 6.94362C6.19523 8.50572 6.19523 11.0384 7.75732 12.6005C9.27209 14.1152 11.6995 14.1611 13.2695 12.7382L13.4142 12.6005L17.6568 16.8431L13.4142 21.0858C12.6331 21.8668 11.3668 21.8668 10.5858 21.0858L3.16113 13.6611C0.622722 11.1227 0.622722 7.00715 3.16113 4.46875Z"></path></svg>:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red"><path d="M14.1213 10.4792C13.7308 10.0886 13.0976 10.0886 12.7071 10.4792L12 11.1863C11.2189 11.9673 9.95259 11.9673 9.17154 11.1863C8.39049 10.4052 8.39049 9.13888 9.17154 8.35783L14.8022 2.72568C16.9061 2.24973 19.2008 2.83075 20.8388 4.46875C23.2582 6.88811 23.3716 10.7402 21.1792 13.2939L19.071 15.4289L14.1213 10.4792ZM3.16113 4.46875C5.33452 2.29536 8.66411 1.98283 11.17 3.53116L7.75732 6.94362C6.19523 8.50572 6.19523 11.0384 7.75732 12.6005C9.27209 14.1152 11.6995 14.1611 13.2695 12.7382L13.4142 12.6005L17.6568 16.8431L13.4142 21.0858C12.6331 21.8668 11.3668 21.8668 10.5858 21.0858L3.16113 13.6611C0.622722 11.1227 0.622722 7.00715 3.16113 4.46875Z"></path></svg>}</div>
      <figure>
        <img src={thumbnail} alt={category}  className="w-[15vw] h-[30vh]"/>
      </figure>
      <div className="card-body p-0 pr-2 pl-2 z-0">
        <h2 className="card-title">{title.length > 30 ? title.slice(0,29):title}</h2>
       
        <div className="flex justify-between">
          <div className=" text-xl font-bold ">{brand||"Unbrand"}</div> 
          <div className=" text-xl font-bold ">{category}</div>
        </div>
        <div className="flex justify-between">
          
            <div className=" text-xl font-bold ">Price : {price}</div>
            <div className=" text-xl font-bold ">Rating: {rating}</div>
        </div>
        <div className="card-actions justify-between">
          <button className="btn btn-primary" onClick = {handleBuyNow}>Buy Now</button>
          <button className="btn btn-primary" onClick = {handleAddToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
   
  );
};

export default Productcard;
