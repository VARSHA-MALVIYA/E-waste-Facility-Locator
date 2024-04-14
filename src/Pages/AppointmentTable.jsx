import { useSelector } from "react-redux"
import appointmentIcon from '../assets/appointment.png'

const AppointmentTable = () => {
    const {user} = useSelector(store => store.Auth);
    const {centerClickedForAppointment,deviceSelected} = useSelector(store => store.User);
    

    const centerDetails = centerClickedForAppointment;
    const deviceDetails = deviceSelected;
    
  return (
    <div className="items-center  text-black w-[80%] mx-auto flex flex-col " >

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
                        // value={formData.date}
                        // onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-100 rounded"
                        />
                    </div>

                    <div className=' w-[50%] ' >
                        <label htmlFor="time" className="block">Time:</label>
                        <input
                        type="time"
                        id="time"
                        name="time"
                        // value={formData.time}
                        // onChange={handleChange}
                        className="w-full px-3 py-2 bg-gray-100 rounded"
                        />
                    </div>

                </div>

        </form>

        <button 
                class="inline-flex gap-2 my-4 items-center justify-center px-4 py-1 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                <img src={appointmentIcon} alt="" className='w-5 h-5' />
                Book Appointment
        </button>


    </div>
  )
}

export default AppointmentTable