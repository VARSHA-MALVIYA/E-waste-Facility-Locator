import { toast } from "react-toastify"
import { apiConnector } from "../apiConnector"
import { Product } from "../ApiConstants"

const {
    GET_ALL_PRODUCTS,
} = Product 

export const getAllProducts = async(setAllProducts,setLoading) => {
    setLoading(true)
    try {
        const res = await apiConnector('GET',GET_ALL_PRODUCTS)
        const data = res.data ;
        setAllProducts(data);
    } catch (error) {
        console.log(error)
        toast.error("Something went wrong")
    }
    setLoading(false)
}