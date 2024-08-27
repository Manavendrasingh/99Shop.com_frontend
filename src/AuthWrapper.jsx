import axios from 'axios';
import React, { useState } from 'react'
import { useEffect} from 'react'
import { Navigate } from 'react-router-dom';

const AuthWrapper = ({children}) => {

    let [isAuthenticated ,setIsAuthenticated] = useState(false);
    let [loading , setLoading] = useState(true);

    let auth = async()=>{
        try{
            let response = await axios.get("https://backend-ecomerce-wnyq.onrender.com/user",{withCredentials:true})
                setIsAuthenticated(response.data.result);
                setLoading(false)
                     
            
        }catch(error){
            setLoading(false);
        }
    }

    useEffect(()=>{
        auth();
    },[]);
   
   if(loading == true)
    {
       
        return (<div>Loading</div>);

    }else{
      
        return isAuthenticated == true ? (children) : (<Navigate to="/login"></Navigate>)
    }
}

export default AuthWrapper
