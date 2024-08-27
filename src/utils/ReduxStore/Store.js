import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './CartSlice.jsx'
import userReducer from './UserSlice.jsx'

export const AppStore = configureStore({
    reducer : {
        cart : cartReducer , /// adding the slice in store
        user : userReducer
    }
})

