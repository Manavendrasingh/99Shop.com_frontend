import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ThemeStore } from "./utils/ThemeContoller";
// import { countContext } from "./utils/UpdateCardValue";
import { useSelector,useDispatch} from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
      

    const {theme,setTheme} = useContext(ThemeStore);
    // const {count} = useContext(countContext);
   // console.log(count);
   let dispatch = useDispatch();
   let navigate = useNavigate();
   let [isLoading,setIsLoading] = useState(false);

   let cartItems = useSelector((store)=>store.cart.Items);// 
   let userData = useSelector((store)=>store.user.userData);
   

   const darkTheme = "navbar bg-base-200 text-white flex flex-wrap justify-normal ";
   const lightTheme = "navbar bg-gray-300 text-black flex flex-wrap justify-normal";

   const handelTheme = (()=>{
         // console.log("before set ",theme)
          setTheme(theme == "light" ? 'dark':'light');
         // localStorage.setItem("theme", theme); // not working because setTheme change the theme variable at rending bc its a ascy function 
          localStorage.setItem("theme", theme == "light" ? 'dark' : 'light');
          //console.log("before set ",theme)
   })

   const handelLogout = async()=>{

      try{
        setIsLoading(true);
        const response = await axios.post("https://backend-ecomerce-wnyq.onrender.com/user/logout",{},{headers : {"content-type" : "application/json"},withCredentials: true});
         if(response.data.result == true) {
          userData = [];
          navigate("/login");
        }
      }catch(error){console.log(error.message);

      }finally{setIsLoading(false);} 
         
   }


  return (
    <div className={theme == "light" ? lightTheme: darkTheme}>
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to = "/">99.Shop.Com</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="h-full">
            <Link to="/Cart" className="">cart <sup className="text-red-500">{cartItems.length}</sup></Link>
          </li>
          <li>
            <Link to="/food" className = "text-red-500">Food</Link>
          </li>
          <li>
            <Link to="/Profile">profile</Link>
          </li>
          <li>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller"
                onClick = {handelTheme}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </li>
          <li>
              <button className="btn btn-accent" onClick={handelLogout}>{isLoading ? <span className="loading loading-spinner loading-md"></span> : "LogOut"}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
