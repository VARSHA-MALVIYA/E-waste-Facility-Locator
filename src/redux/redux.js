import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AuthReducer from '../slices/Auth.slice';


const rootReducer = combineReducers({
    Auth : AuthReducer
});

const store = configureStore({
    reducer:rootReducer
});

export default store;