import Loader from '../Components/Loader'
import notFoundGif from '../assets/bubble-gum-error-404.gif'

import { useState } from 'react'
import { getAppointmentDetailsByTicketOrEmail } from '../services/Operations/appointment'
import Modal from '../Components/Modal'

const ProcessAppointment = () => {

    const [loading, setLoading] = useState(false)
    const [appointmentData, setAppointmentData] = useState(null)
    const [notFound, setNotFound] = useState(false)

    const [formData, setFormData] = useState({
        ticket:"",
        email:""
    })

    function changeHandler(e){
        const {name,value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    function searchHandler() {
        console.log(formData)
        getAppointmentDetailsByTicketOrEmail(formData,setAppointmentData,setLoading,setNotFound)
    }
    
    
  return (
    <div className="w-full min-h-full px-5" >

        {loading && <Loader/>}

        <div class=" w-full rounded-xl bg-gray-100 shadow-lg p-10 text-gray-800 relative overflow-hidden  " >
            
            <div class="relative mt-1 flex items-center justify-between">
                <input type="text" id="ticket" class="w-[40%] pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Ticket..."
                    value={formData.ticket}
                    name='ticket'
                    onChange={changeHandler}
                />
                <span>-or-</span>
                <input type="email" id="email" class="w-[40%] pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="Email..."
                    value={formData.email}
                    name='email'
                    onChange={changeHandler}
                />
            </div>
            
            <button onClick={searchHandler}  class="block mt-5 mx-auto w-[120px] items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                Search
            </button>
            
            <div class="absolute top-0 left-0 w-full h-2 flex">
                <div class="h-2 bg-[#111827] flex-1"></div>
            </div>
            
        </div>

        
        {
            appointmentData ?
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                
                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                    
                    <thead class="text-xs  uppercase text-white bg-gray-900 ">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                            Ticket
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Device Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Green Points
                            </th>
                            <th scope="col" class="px-6 py-3">
                                State
                            </th>
                            <th scope="col" class="px-6 py-3">
                                <span class="sr-only">Edit</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b  hover:bg-gray-100 ">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                Silver
                            </td>
                            <td class="px-6 py-4">
                                Laptop
                            </td>
                            <td class="px-6 py-4">
                                $2999
                            </td>
                            <td class="px-6 py-4">
                            <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                            </span>
                            </td>
                            <td class="px-6 py-4 text-right">
                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                </div>
            :
                notFound && 
                <div className='flex flex-col items-center justify-center'>
                    <img src={notFoundGif} alt="" className='w-[200px] h-[200px]' />
                    <p className='font-semibold text-center text-red-600'>Data Not Found</p>
                </div>
        }

    </div>
  )
}

export default ProcessAppointment