import Loader from '../Components/Loader'
import appointmentGif from '../assets/appointment_ani.gif'
import { getUserAppointment } from '../services/Operations/appointment'
import { useEffect,useState } from 'react'


const Appointments = () => {

  const [UserAppointments, setUserAppointments] = useState([])
  const [loading, setLoading] = useState(false)
  
  
  useEffect(() => {
     getUserAppointment(setUserAppointments,setLoading)
  }, [])
  
  
  return (
    <div className="w-full h-full pt-[15vh]">

    {loading&&<Loader/>}
      
    {
      UserAppointments.map((appointment)=>(
        <>
          {console.log(appointment)}
          <li class="relative mx-auto rounded-lg shadow-lg border py-2 max-w-3xl border-gray-500 flex flex-col items-center sm:flex-row xl:flex-col">
              <img src={appointmentGif} alt=""  class="mb-6 h-[150px] w-[150px] shadow-md rounded-lg bg-slate-50 sm:mb-0 xl:mb-6 xl:w-full"   />
              
              <div className='flex w-full gap-5 ml-5 text-sm'>
                  
                  <div>
                      <div className='m-1'><span>Center Name :</span> <span>Lorem ipsum dolor sit</span></div>
                      <div className='m-1'><span>Center Id :</span> <span>iPwxYzoasY</span></div>
                      <div className='ml-1'><span>Center Address :</span> <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, minima.</span></div>
                  </div>
                  
                  <div>
                      <div className='m-1'><span>Device Name :</span> <span>Redmi Note 7s</span></div>
                      <div className='m-1'><span>Model Number :</span> <span>Note 7s</span></div>
                      <div className='ml-1'><span>Green Points :</span> <span>50</span></div>
                  </div>
                  
              </div>

          </li>
        </>
      ))
    }
        
        
    </div>
  )
}

export default Appointments