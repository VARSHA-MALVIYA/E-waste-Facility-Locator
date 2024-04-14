import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AuthReducer from '../slices/Auth.slice.js';
import UserReducer from '../slices/User.slice.js'


const rootReducer = combineReducers({
    Auth : AuthReducer,
    User : UserReducer,
});

const store = configureStore({
    reducer:rootReducer
});

export default store;