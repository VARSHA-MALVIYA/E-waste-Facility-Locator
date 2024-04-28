
import { toast } from 'react-toastify'
import {EducationalPopup} from '../ApiConstants.js'
import { apiConnector } from '../apiConnector'


const {
    ADD_EDUCATIONAL_POPUP,
    GET_ALL_EDUCATIONAL_POPUP,
    UPDATE_EDUCATIONAL_POPUP,
} = EducationalPopup



export const addEducationalPopup = async(formData,setLoading,setFormData,setShowModal)=>{
    setLoading(true)
    try {
        const res = await apiConnector("POST",ADD_EDUCATIONAL_POPUP,formData)
        const data = res.data ;
        if(data.success)
        {
            toast.success("Added",{position:'top-center',autoClose:1000,hideProgressBar:true,closeButton:false})
            setShowModal(true)
            setFormData({title:"",description:""})
        }
        else{
            toast.error("Something went wrong",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
        }
    } catch (error) {
        console.log("Error in frontend addEducationalPopup")
        console.log(error)
        toast.error("Something went wrong",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
    }
    setLoading(false)
}

export const getAllEducationalPopup = async(setAllEducationalPopup,setLoading)=>{
    setLoading(true)
    try {
        const res = await apiConnector("GET",GET_ALL_EDUCATIONAL_POPUP)
        const {data} = res ;
        setAllEducationalPopup(data)
    } catch (error) {
        console.log(error)
        toast.error("Something went wrong",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
    }
    setLoading(false)
}

export const updateEducationalPopup = async(formData,setLoading,setShowModal) => {
    setLoading(true)
    try {
        const res = await apiConnector('PUT',UPDATE_EDUCATIONAL_POPUP,formData)
        const {data} = res ;
        if(data.success)
        {
            toast.success("Updated",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
            setShowModal(true)
        }
        else toast.error("Something went wrong",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
    } catch (error) {
        console.log(error)
        toast.error("Something went wrong",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
    }
    setLoading(false)
}

