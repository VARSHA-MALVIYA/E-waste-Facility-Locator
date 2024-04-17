import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : localStorage.getItem("token") || null ,
    user : JSON.parse(localStorage.getItem("user")) || null,
};

const AuthSlice = createSlice({
    name:"Auth",
    initialState:initialState,
    reducers:{
        setToken : (state,value)=>{
            if(value.payload === null)
            {
                localStorage.removeItem("token")
                return;
            }
            state.token = value.payload ;
            localStorage.setItem("token",value.payload);
        },

        setUser : (state,value)=>{
            if(value.payload === null)
            {
                localStorage.removeItem("user")
                return;
            }
            state.user = value.payload ;
            const user = JSON.stringify(value.payload);
            localStorage.setItem("user",user) ;
        }
    }
});


export const {setToken,setUser} = AuthSlice.actions ;
export default AuthSlice.reducer ;