import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    nearbyCenters : [],
    centerClickedForAppointment : null ,
    productClickedForPurchase : null,
    deviceSelected : null ,
};

const UserSlice = createSlice({
    name:"User",
    initialState:initialState,
    reducers:{

    setUser : (state,value)=>{
        state.user = value.payload ;
        // localStorage.setItem("user",value.payload);
    },

    setUserNearbyCenters : (state,value)=>{
        state.nearbyCenters = value.payload ;
    },
    
    setCenterClickedForAppointment : (state,value)=>{
        state.centerClickedForAppointment = value.payload ;
    },

    setProductClickedForPurchase : (state,value)=>{
        state.productClickedForPurchase = value.payload ;
    },

    setDeviceSelected : (state,value)=>{
        state.deviceSelected = value.payload;
    }

    }
});


export const {setUser,setUserNearbyCenters,setCenterClickedForAppointment,setDeviceSelected,setProductClickedForPurchase} = UserSlice.actions ;
export default UserSlice.reducer ;