import { toast } from "react-toastify";
import { apiConnector } from "../apiConnector"
import {Category} from '../ApiConstants'


const {
    GET_ALL_CATEGORIES,
} = Category


export const getAllCategories = async(setAllCategories)=>{
    try {
        const res = await apiConnector("GET",GET_ALL_CATEGORIES);
        const data = res.data;
        setAllCategories(data);

    } catch (error) {
        toast.error("Something went wrong",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
        
    }
}