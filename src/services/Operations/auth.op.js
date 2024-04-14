import { toast } from "react-toastify";
import { setToken, setUser } from "../../slices/Auth.slice.js";
import { apiConnector } from "../apiConnector";


import {Auth} from '../ApiConstants.js'


const {
    LOGIN,
    SIGNUP,
}  = Auth ;


export function login(loginDets,navigator,setLoading,setError)
{
    return async(dispatch) => {
        setLoading(true)
        try {
            const res = await apiConnector('POST',LOGIN,loginDets);
            const data = res?.data ;
            console.log(data)
            if(data?.success)
            {
                dispatch(setToken(data?.token))
                console.log(data.user)
                dispatch(setUser(data?.user))
                navigator("/")
                toast.success("Logged in")
            }
            else{
                setError(data?.message)
                toast.error("Failed")
            }
        } catch (error) {
            toast.error("Something went wrong.")
        }
        setLoading(false)
    }
}