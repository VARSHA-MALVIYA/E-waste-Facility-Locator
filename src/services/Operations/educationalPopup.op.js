
import { toast } from 'react-toastify'
import {EducationalPopup} from '../ApiConstants.js'
import { apiConnector } from '../apiConnector'


const {
    ADD_EDUCATIONAL_POPUP
} = EducationalPopup



export const addEducationalPopup = async(formData,setLoading)=>{
    setLoading(true)
    try {
        const res = await apiConnector("POST",ADD_EDUCATIONAL_POPUP,formData)
        const data = res.data ;
        if(data.success)
        {
            // success
        }
        else{
            toast.error("Something went wrong")
        }
    } catch (error) {
        console.log("Error in frontend addEducationalPopup")
        console.log(error)
        toast.error("Something went wrong")
    }
    setLoading(false)
}