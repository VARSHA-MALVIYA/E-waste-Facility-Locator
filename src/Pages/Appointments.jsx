import Loader from '../Components/Loader'
import appointmentGif from '../assets/appointment_ani.gif'
import { getUserAppointment } from '../services/Operations/appointment'
import { useEffect,useState } from 'react'
import ThreeGuysStandingImg from '../assets/three_guys_standing.svg'
import notFoundGif from '../assets/Data_notfound_ani.gif'

const Appointments = () => {

  const [UserAppointments, setUserAppointments] = useState(null)
  const [loading, setLoading] = useState(false)
  
  
  useEffect(() => {
    getUserAppointment(setUserAppointments,setLoading)
  }, [])
  
  
  return (
    <div className="w-full h-full pt-[15vh]">

    {loading&&<Loader/>}
      
    {
      UserAppointments?.length > 0 ? 
      UserAppointments.map((appointment,i)=>(
        <div key={i}  class=" shadow-lg rounded p-4 mb-4 flex">

            <div class="flex-shrink-0">
                <img src={ThreeGuysStandingImg} alt="Map 1" class="h-full w-48 object-cover rounded" /> 
            </div>

            <div class="ml-4 flex flex-col justify-between">
                <div class="flex items-center justify-between mb-2">
                  
                    <div className='flex items-center'>
                      <div class="bg-green-500 w-4 h-4 flex items-center justify-center rounded mr-2">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 text-white">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53 .53-.53-.53a.75.75 0 011.06 0z" />
                          </svg>
                      </div>
                      <h2 class="text-xl font-semibold">{appointment?.waste?.name}</h2>
                    </div>
                    
                    <div className='relative'>
                      <span>{appointment?.processed ? 'Completed' : 'Active'}</span>
                    </div>
                    
                </div>
                <div class="flex justify-between">
                    <table>
                      
                       <tr className='text-sm'> Name : {appointment?.waste?.name} </tr>
                       <tr className='text-sm'> Model : {appointment?.waste?.modelNumber} </tr>
                       <tr className='text-sm'> Green Points : {appointment?.waste?.greenPoints} </tr>
                       <tr className='text-sm'> Centre Name : {appointment?.centerName} </tr>
                       <tr className='text-xs'> Centre Address : {appointment?.centerAddress} </tr>
                       
                    </table>
                </div>
            </div>
        </div>
      ))
      :
      <div className='flex flex-col items-center justify-center'>
        <img src={notFoundGif} alt="" className='w-[200px] h-[200px]' />
        <p className='font-semibold text-center text-red-600'>Data Not Found</p>
      </div>
    }
        
        
    </div>
  )
}

export default Appointments