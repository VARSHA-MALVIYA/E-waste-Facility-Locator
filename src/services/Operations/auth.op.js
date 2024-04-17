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
            const res = await fetch(LOGIN, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(loginDets)
            });

            if(res.ok)
            {
                const data = await res.json()
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
            }
            
        } catch (error) {
            toast.error("Something went wrong.")
        }
        setLoading(false)
    }
}

export async function signup(signupDets,navigator,setLoading,setError)
{
    setLoading(true)
    try {
        const res = await fetch(SIGNUP, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(signupDets)
        });

        if(res.ok)
        {
            const data = await res.json()
            if(data?.success)
            {
                navigator("/login")
                toast.success("Signed Up")
            }
            else{
                setError(data?.message)
                toast.error("Failed")
            }
        }
        
    } catch (error) {
        toast.error("Something went wrong.")
    }
    setLoading(false)
}

export async function test(){
    const data = await apiConnector("GET","http://localhost:5000/test",{},{withCredentials: true});
    console.log(data);
}