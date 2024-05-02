import { toast } from "react-toastify";
import { apiConnector } from "../apiConnector"


import {Appointment} from '../ApiConstants.js'

const {
    BOOK_APPOINTMENT,
    GET_USER_APPOINTMENTS,
    GET_APPOINTMENT_BY_TICKET_OR_EMAIL,
    PROCESS_APPOINTMENT
} = Appointment;

export const bookAppointment = async(reqBody,setLoading,setShowModal)=>{
    setLoading(true)
    try {
        const res = await apiConnector("POST",BOOK_APPOINTMENT,reqBody)
        console.log(res.data)
        toast.success("Appointment Booked",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
        setShowModal(true)
    } catch (error) {
        toast.error("Something went wrong")
        console.log(error.message)
    }
    setLoading(false)
}

export const getUserAppointment = async(setUserAppointments,setLoading)=>{
    setLoading(true)
    try {
        const res = await apiConnector('POST',GET_USER_APPOINTMENTS)
        const data = res.data;
        if(data.success)
        {
            setUserAppointments(data.appointmentDetails)
            console.log(data.appointmentDetails);
        }
        else{
            toast.error("Some error occured")
        }
    } catch (error) {
        console.log(error.message)
        toast.error("Something went wrong.")
    }
    setLoading(false)
}

export const getAppointmentDetailsByTicketOrEmail = async(formData,setAppointmentData,setLoading,setNotFound)=>{
    setLoading(true)
    try {
        const res = await apiConnector('POST',GET_APPOINTMENT_BY_TICKET_OR_EMAIL,formData)
        const data = res.data;
        console.log(data.appointments);

        if(data.appointments.length <= 0){
            setNotFound(true)
            setLoading(false)
            return
        }
        setAppointmentData(data.appointments)

    } catch (error) {
        toast.error("Something went wrong.")
        console.log(error.message)
    }
    setLoading(false)
}

export const processAppointment = async(userId,appointmentId,greenPoints,setLoading) =>
{
    setLoading(true)
    try {
        const bodyData = {
            userId,
            appointmentId,
            greenPoints
        }
        const res = await apiConnector('POST',PROCESS_APPOINTMENT,bodyData)
        const data = res.data ;
        if(data.success)
        {
            toast.success("Completed")
        }
        else toast.error("Something went wrong")
    } catch (error) {
        toast.error("Something went wrong")
        console.log("error occured in processAppointment")
        console.log(error.message)
    }
    setLoading(false)
}