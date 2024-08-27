import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

let SignUp = () => {
  let navigate = useNavigate();
  let userNameRef = useRef("");
  let passwordRef = useRef("");
  let emailRef = useRef("");
  let [isLoading,setIsLoading] = useState(false);


  const handelSubmit = async(event) => {
    event.preventDefault();
    let userName = userNameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    userNameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";

    const credential = {
      password : password,
      email : email,
      userName : userName
    }
    try{
        setIsLoading(true);
        let response = await axios.post("https://backend-ecomerce-wnyq.onrender.com/user/signup",credential, {headers : {"content-type" : "application/json"},withCredentials: true});
        if(response.data.result == true)
          {
               navigate("/login");
          }
          else {
            throw({result : response.data.result,message : response.data.message});
          }
    
    }catch(error){
      console.log(error)
    }finally{setIsLoading(false);}
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handelSubmit}>
                <div>
                  <label
                    htmlFor="userName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    UserName
                  </label>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="John"
                    required=""
                    ref={userNameRef}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    ref={emailRef}
                  />
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
                    ref={passwordRef}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  {isLoading ? <span className="loading loading-spinner loading-md"></span> : "Sign UP"}
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                 
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
