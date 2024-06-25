import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
      createBrowserRouter,
      RouterProvider} from 'react-router-dom';
import Home from './Home.jsx';
import Cart from "./Cart.jsx"
import Profile from "./Profile.jsx"
import CustomErrorPage from './CustomErrorPage.jsx';
import SingleProductInfo from './SingleProductInfo.jsx'
import PaymentPage from './PaymentPage.jsx';
import { lazy } from 'react'
import ShimmerUI from './ShimmerUI.jsx';
const FoodApp = lazy(()=>import ("./utils/FoodApp"));


const appRouter = createBrowserRouter([
      {
            path : "/",
            element : <App></App>,
            children :[
                  {
                  path : "/",
                  element : <Home></Home>
                  },
                  {
                        path : "/Cart",
                        element : <Cart></Cart>
                  },
                  {
                        path : "/Profile",
                        element : <Profile></Profile>
                  },
                  {
                        path :"/products/:id",
                        element : <SingleProductInfo></SingleProductInfo>
                  },
                  {
                        path :"/PaymentPage",
                        element :  <PaymentPage></PaymentPage>
                  }
                  ,{
                        path :"/food",
                        element :  (<Suspense fallback = {<ShimmerUI></ShimmerUI>}>
                                   <FoodApp></FoodApp>
                              </Suspense> )
                       //element : <FoodApp></FoodApp>
                  }

            ],
            errorElement : <CustomErrorPage></CustomErrorPage>
            
      }
           

])

ReactDOM.createRoot(document.getElementById('root')).render(

      <RouterProvider router = {appRouter}></RouterProvider>
)
