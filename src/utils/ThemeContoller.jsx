import React from "react";
import { createContext } from "react";
import { useState } from "react";


export let ThemeStore = createContext(null);

const ThemeContoller = (({children})=>{

    const [theme ,setTheme] = useState(localStorage.getItem("theme"));

    return(
         <ThemeStore.Provider value = {{theme , setTheme}}>
            {children}
         </ThemeStore.Provider>
    )



})

export default ThemeContoller;