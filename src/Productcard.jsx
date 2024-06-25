import SingleProductInfo from "./SingleProductInfo";
import {Link} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import PaymentPage from "./PaymentPage.jsx"
import { ThemeStore } from "./utils/ThemeContoller.jsx";
import { useContext } from "react";
// import { handleAddToCart } from "./Handler.jsx";
// import { handleBuyNow } from "./Handler.jsx";



export let handleBuyNow; 



const Productcard = ({ obj }) => {
  let { title, thumbnail, rating, price, brand, category ,id} = obj;
  let navigate = useNavigate();

   const handleCartClick = ()=>{
       navigate(`/products/${id}`);

   }



  //  const handleBuyNow = (event)=>{
  //   event.stopPropagation();
  //   navigate('/PaymentPage');

  // }
  handleBuyNow = (event)=>{
    event.stopPropagation();
    navigate('/PaymentPage');
  
   }


  const handleAddToCart = (event)=>{
    event.stopPropagation();
   

   }

   const {theme} = useContext(ThemeStore);
   const darkTheme = "card h-[25rem] w-96 bg-base-100 shadow-xl m-4";
   const lightTheme = "card h-[25rem] w-96 bg-gray-300 shadow-xl m-4 text-black";
  // console.log(handleBuyNow);
  return (
    
    <div className= {theme == "light" ? lightTheme: darkTheme} onClick={handleCartClick}>
      <figure>
        <img src={thumbnail} alt={category} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
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
