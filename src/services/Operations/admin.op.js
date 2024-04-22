import { toast } from "react-toastify"
import { apiConnector } from "../apiConnector"
import { Admin } from "../ApiConstants"


const {
    GET_UNAPPROVED_OPERATORS,
    APPROVE_OPERATOR,
    CONTACT_US
} = Admin

export const getUnapprovedOperators = async(setPendingOperators,setLoading)=>{
    setLoading(true)
    try {
        const res = await apiConnector('GET',GET_UNAPPROVED_OPERATORS)
        const data = res.data
        setPendingOperators(data)
    } catch (error) {
        console.log("error in getUnapprovedOperators frontend")
        toast.error("Something went wrong")
    }
    setLoading(false)
}

export const approveOperator = async(id,setLoading)=>{
    setLoading(true)
    try {
        const res = await apiConnector('PUT',APPROVE_OPERATOR,{id:id})
        const data = res.data
        if(data.success) toast.success("Approved")
        else toast.error("Error")
    } catch (error) {
        console.log("error in approveOperator frontend")
        toast.error("Something went wrong")
    }
    setLoading(false)
}

export const ContactUs = async(formData,setShowModal,setLoading) => {
    setLoading(true)
    try {
        const res = await apiConnector("POST",CONTACT_US,formData);
        const {data} = res ;
        if(data.success)
        {
            setShowModal(true)
        }
        else{
            toast.error("Something went wrong")
        }
    } catch (error) {
        console.log(error)
    }
    setLoading(false)
}