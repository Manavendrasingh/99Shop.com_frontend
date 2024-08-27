import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addData } from "./utils/ReduxStore/UserSlice";


let Login = () => {
   let navigate = useNavigate();
   let emailRef = useRef("");
   let passwordRef = useRef("");
   let [isLoading,setIsLoading] = useState(false);
   let dispatch = useDispatch();


  const handelSubmit = async(event)=>{

    event.preventDefault();
    let email = emailRef.current.value;
    let password = passwordRef.current.value;
    passwordRef.current.value = "";
    emailRef.current.value = "";

    const credential = {
      password : password,
      email : email
    }
    try{
      setIsLoading(true);
      let response = await axios.post("https://backend-ecomerce-wnyq.onrender.com/user/login",credential, {headers : {"content-type" : "application/json"},withCredentials: true});
          if(response.data.result == true)
            {
              dispatch(addData(response.data.data));
              console.log(response.data.message)
              navigate("/");
            }
     
    }catch(error){
      console.log(error.message)
    }finally{setIsLoading(false);}
   
  }  
 

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handelSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    ref = {emailRef}
                  />
                  <p className="text-red-600 "> email </p>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    ref = {passwordRef}
                  />

                  <p className="text-red-600 "> password </p>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  
                  {isLoading ? <span className="loading loading-spinner loading-md"></span> : "Login"}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                  <Link
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Signup
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
