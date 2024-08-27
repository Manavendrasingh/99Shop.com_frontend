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
import { AppStore } from './utils/ReduxStore/Store.js';
import {Provider} from 'react-redux'
import Login from './Login.jsx';
import SignUp from './SingUp.jsx';
import AuthWrapper from './AuthWrapper.jsx';


const appRouter = createBrowserRouter([
      {
            path : "/",
            element : <AuthWrapper><App></App></AuthWrapper>,
            children :[
                  {
                  path : "/",
                  element :<Home></Home> 
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
            
      },{
            path : "/login",
            element : <Login></Login>
      },
      {
            path : "/signup",
            element : <SignUp></SignUp>
      }

           

])

ReactDOM.createRoot(document.getElementById('root')).render(

      <Provider store={AppStore}>
            <RouterProvider router = {appRouter}></RouterProvider>
      </Provider>
      
)
