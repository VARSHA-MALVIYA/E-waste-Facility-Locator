import { apiConnector } from "../apiConnector";


import {Auth} from '../ApiConstants.js'


const {
    LOGIN,
    SIGNUP,
}  = Auth ;


export function login(loginDets,navigator,setLoading)
{
    return async(dispatch) => {
        setLoading(true)
        const res = await apiConnector('POST',LOGIN,loginDets)
        console.log(res.data)
        navigator("/")
        setLoading(false)
    }
}