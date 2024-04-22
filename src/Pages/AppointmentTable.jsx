import { useSelector } from "react-redux"
import appointmentIcon from '../assets/appointment.png'
import { useState } from "react";
import { bookAppointment } from "../services/Operations/appointment";
import Loader from '../Components/Loader'
import BookedIcon from '../assets/bookedAppointment_ani.gif'
import { useNavigate } from "react-router-dom";

const AppointmentTable = () => {
    
    const {user} = useSelector(store => store.Auth);
    const {centerClickedForAppointment,deviceSelected} = useSelector(store => store.User);
    

    const centerDetails = centerClickedForAppointment;
    const deviceDetails = deviceSelected;

    const [formData,setFormData] = useState({
        date:"",
        time:""
    })
    const [loading,setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const navigator = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
        ...prevState,
        [name]: value
        }));
    };

    const reqBody = {
        userId: user._id,
        wasteId: deviceDetails._id,
        centerName: centerDetails.name,
        centerAddress: centerDetails.address,
        centerId: centerDetails.id,
        date: formData.date,
        time: formData.time,
    }

    const  handleSubmit = ()=>{
        bookAppointment(reqBody,setLoading,setShowModal,navigator)
    }
    
  return (
    <div className="items-center  text-black w-[80%] mx-auto flex flex-col " >

        {loading&&<Loader/>}

        <p className=' py-1 bg-white w-[80%] text-center font-semibold '>APPOINTMENT INFORMATION</p>
            
        <table className="w-[80%] border">
            <caption className="py-1 font-bold text-center bg-gray-200">User Details</caption>
            <tbody>
            <tr>
                <td className="px-4 py-2 border">Your Name:</td>
                <td className="px-4 py-2 border"> {user.Name} </td> 
            </tr>
            <tr>
                <td className="px-4 py-2 border">Your Email:</td>
                <td className="px-4 py-2 border"> {user.Email} </td>
            </tr>
            </tbody>
        </table>

        <table className="w-[80%] border">

            <caption className="py-1 font-bold text-center bg-gray-200">E-waste Details</caption>

            <tbody>

                <tr>
                    <td className="px-4 py-2 border">Name:</td>
                    <td className="px-4 py-2 border">{deviceDetails.name}</td>
                </tr>

                <tr>
                    <td className="px-4 py-2 border">Category:</td>
                    <td className="px-4 py-2 border">{deviceDetails.category}</td>
                </tr>

                <tr>
                    <td className="px-4 py-2 border">Green Points:</td>
                    <td className="px-4 py-2 border"> {deviceDetails.greenPoints} </td>
                </tr>

                <label className="px-4 py-2 font-semibold ">Precious Metals:</label>
                
                <tr>
                    <td className="px-4 py-2 border" colSpan="4">
                            <table className="w-full border">
                                <thead>
                                <tr>
                                    <th className="px-4 py-2 border">Name</th>
                                    <th className="px-4 py-2 border">Weight</th>
                                </tr>
                                </thead>
                                <tbody>
                                {deviceDetails.preciousMetals.map((metal, index) => (
                                    <tr key={index}>
                                    <td className="px-4 py-2 border">{metal.name}</td>
                                    <td className="px-4 py-2 border">{metal.weight}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                    </td>
                </tr>

            </tbody>
        </table>

        <table className="w-[80%] border">

            <caption className="py-1 font-bold text-center bg-gray-200">Center Details</caption>
            <tbody>
            <tr>
                <td className="px-4 py-2 border">Center Name:</td>
                <td className="px-4 py-2 border">{centerDetails.name}</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">Center Id:</td>
                <td className="px-4 py-2 border">{centerDetails.id}</td>
            </tr>
            <tr>
                <td className="px-4 py-2 border">Center Address:</td>
                <td className="px-4 py-2 border">{centerDetails.address}</td>
            </tr>
            </tbody>
        </table>

        <form  className="w-[80%] flex flex-col gap-5 items-center ">

                <div className='flex w-full gap-10 '>

                    <div className=' w-[50%] '>
                        <label htmlFor="date" className="block">Date:</label>
                        <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-100 rounded"
                        />
                    </div>

                    <div className=' w-[50%] ' >
                        <label htmlFor="time" className="block">Time:</label>
                        <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-100 rounded"
                        />
                    </div>

                </div>

        </form>

        <button 
                onClick={handleSubmit}
                class="inline-flex gap-2 my-4 items-center justify-center px-4 py-1 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                <img src={appointmentIcon} alt="" className='w-5 h-5' />
                Book Appointment
        </button>

        {
            showModal &&
            <div
                class="fixed inset-0 px-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
                <div class="w-full max-w-md bg-white shadow-lg rounded-md px-5 py-5 relative mx-auto text-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                    class="w-24 h-24 fill-green-500 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 60 60">
                    <circle cx="30" cy="30" r="29" data-original="#5edd60" />
                    <path fill="#fff"
                        d="m24.262 42.07-6.8-6.642a1.534 1.534 0 0 1 0-2.2l2.255-2.2a1.621 1.621 0 0 1 2.256 0l4.048 3.957 11.353-17.26a1.617 1.617 0 0 1 2.2-.468l2.684 1.686a1.537 1.537 0 0 1 .479 2.154L29.294 41.541a3.3 3.3 0 0 1-5.032.529z"
                        data-original="#ffffff" />
                    </svg>
                    <div class="mt-8">
                    <img src={BookedIcon} alt="" className="w-[150px] h-[150px] mx-auto" />
                    <h3 class="text-2xl font-semibold flex-1">Appointment Booked!</h3>
                    <p class="text-sm text-gray-500 mt-2">Your booking has been confirmed. <br />
                        Check your email for details.</p>
                    <button type="button" onClick={()=>{setShowModal(false); navigator('/')}}
                        class="px-6 py-2.5 mt-8 w-full rounded text-white text-sm font-semibold border-none outline-none bg-green-500 hover:bg-green-600">Got
                        it</button>
                    </div>
                </div>
            </div>
        }

    </div>
  )
}

export default AppointmentTable