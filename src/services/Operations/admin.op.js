import { toast } from "react-toastify"
import { apiConnector } from "../apiConnector"
import { Admin } from "../ApiConstants"


const {
    GET_UNAPPROVED_OPERATORS,
    APPROVE_OPERATOR,
    CONTACT_US,
    ADD_EWASTE,
    GET_ALL_MESSAGES
} = Admin

export const getUnapprovedOperators = async(setPendingOperators,setLoading)=>{
    setLoading(true)
    try {
        const res = await apiConnector('GET',GET_UNAPPROVED_OPERATORS)
        const data = res.data
        setPendingOperators(data)
    } catch (error) {
        console.log("error in getUnapprovedOperators frontend")
        toast.error("Something went wrong",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
    }
    setLoading(false)
}

export const approveOperator = async(id,setLoading)=>{
    setLoading(true)
    try {
        const res = await apiConnector('PUT',APPROVE_OPERATOR,{id:id})
        const data = res.data
        if(data.success) toast.success("Approved",{position:'top-center',autoClose:1000,hideProgressBar:true,closeButton:false})
        else toast.error("Error",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
    } catch (error) {
        console.log("error in approveOperator frontend")
        toast.error("Something went wrong",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
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
            toast.success("Message Sent Successfully",{position:'top-center',autoClose:1000,hideProgressBar:true,closeButton:false})
        }
        else{
            toast.error("Something went wrong",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
        }
    } catch (error) {
        console.log(error)
    }
    setLoading(false)
}

export const getAllMessages = async(setAllMessages,setLoading) => {
    setLoading(true)
    try {
        const res = await apiConnector("GET",GET_ALL_MESSAGES);
        const {data} = res ;
        if(data.success)
        {
            setAllMessages(data?.messages)
        }
        else{
            toast.error("Something went wrong",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
        }
    } catch (error) {
        console.log(error)
        toast.error("Something went wrong",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
    }
    setLoading(false)
}



export const addEwaste = async(formData,setShowModal,setLoading,setFormData) => {
    setLoading(true)
    try {
        const res = await apiConnector('POST',ADD_EWASTE,formData)
        const {data} = res ;
        if(data.success) {
            toast.success("Added",{position:'top-center',autoClose:1000,hideProgressBar:true,closeButton:false})
            setShowModal(true)
            setFormData({
                name: '',
                modelNumber: '',
                category: '',
                greenPoints: 0,
                preciousMetals: [{ name: '', weight: '' }]
            })
        }
        else toast.error("Something went wrong",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
    } catch (error) {
        console.log(error)
        toast.error("Something went wrong",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
    }
    setLoading(false)
}