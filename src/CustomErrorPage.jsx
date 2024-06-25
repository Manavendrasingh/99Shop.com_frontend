import React from "react";
import { useRouteError } from "react-router-dom";

const CustomErrorPage = ()=>{

    const err = useRouteError();
    err.error.message = "Soory Wrong URL";
    console.log(err);
    return (
         <div>
            <h1> this is CustomErrorPage </h1>
         </div>
    )
}

export default CustomErrorPage;