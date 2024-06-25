import { useNavigate } from "react-router-dom";

export let handleBuyNow;
export let handleAddToCart;

const Handler = ()=>{
let navigate = useNavigate();

  handleBuyNow = (event)=>{
    event.stopPropagation();
    navigate('/PaymentPage');
  
  }
  handleAddToCart = (event)=>{
    event.stopPropagation();

  }
  return(
    <>
    </>
  )

}
 console.log(handleAddToCart)
 console.log(handleAddToCart)
export default Handler;