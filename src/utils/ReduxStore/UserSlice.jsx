import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({

    name : "User",
    initialState :{
        userData : []
    },
    reducers :{
        addData : (state ,action)=>{
            let {email ,_id ,userName,address} = action.payload;
            state.userData.pop();
            state.userData.push({data : {email:email , id : _id,userName : userName,address : address}});
            
        }
    }
})

export const {addData} = userSlice.actions;
export default userSlice.reducer;
