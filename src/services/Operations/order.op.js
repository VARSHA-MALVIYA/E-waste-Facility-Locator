import { toast } from "react-toastify";
import { Order } from "../ApiConstants";
import { apiConnector } from "../apiConnector";
import { setUser } from "../../slices/Auth.slice";


const {
    MAKE_ORDER,
    GET_ORDER_BY_USERID,
} = Order


export const MakeOrder = (formData,productClickedForPurchase,setLoading) => {
    return async(dispatch) => {
        setLoading(true);
        try {
            const reqBody = {
                ...formData,
                productId:productClickedForPurchase._id,
            }
            
            const res = await apiConnector("POST",MAKE_ORDER,reqBody)
            const data = res.data ;

            if(data.success)
            {
                toast.success("Order Booked",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
                dispatch(setUser(data.updatedUser))
            }
            else{
                console.log("Something error occured",data)
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false);
    }
}


export const GetOrderByUserId = async(setUserOrders,setLoading) => {
    setLoading(true);
    try {
        const res = await apiConnector("GET",GET_ORDER_BY_USERID)
        const data = res.data ;
        setUserOrders(data)
    } catch (error) {
        console.log(error)
    }
    setLoading(false);
}