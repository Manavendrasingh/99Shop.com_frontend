import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name : "Cart",
    initialState : {
        Items : []
    },
    reducers : {
        addItems : (state,action)=>{
            let data = action.payload;
            let findObj = state.Items.find((cartObj)=>{return cartObj.dataObj.id === data.id});
            
            if(findObj == undefined){
                let cartObj = {dataObj : data , quantity : 1};
                state.Items.push(cartObj);
            }
            else{
                findObj.quantity = findObj.quantity +1;
1                
            }
        },
        removeItems : (state,action)=>{
            let id = action.payload;
            let objidx = state.Items.findIndex((cartObj)=>cartObj.dataObj.id === id);
            state.Items.splice(objidx,1);
          
        },

        clearCart : (state)=>{
            state.Items.length = 0;
        },
        handelQuantity :(state,action)=>{
            let obj = action.payload;
            let findObj = state.Items.find((cartObj)=>{return cartObj.dataObj.id === obj.id});
            if(findObj != undefined){
                if(obj.handle === -1 && findObj.quantity === 1)
                    {
                        let objidx = state.Items.findIndex((cartObj)=>cartObj.dataObj.id === obj.id);
                        state.Items.splice(objidx,1);
                    }
                    else  findObj.quantity = findObj.quantity + obj.handle;
            }


        },
        handlePriceSort : (state,action)=>{
            if(action.payload === 1)
                {
                      state.Items.sort((cartObjA,cartObjB)=> {return cartObjA.dataObj.price - cartObjB.dataObj.price})
                }
            else     state.Items.sort((cartObjA,cartObjB)=> {return cartObjB.dataObj.price - cartObjA.dataObj.price})

        }
    }
})

export const {addItems,removeItems,clearCart,handelQuantity,handlePriceSort} = cartSlice.actions;
export default cartSlice.reducer;

