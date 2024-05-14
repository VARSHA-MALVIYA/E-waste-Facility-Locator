import mapPinIcon from '../assets/mapPin-ani-unscreen.gif'
// import showonmapIcon from '../assets/showonmap_ani.gif'
import showonmapIcon from '../assets/showonmap.png'
import appointmentIcon from '../assets/appointment.png'
import { useDispatch, useSelector } from 'react-redux'
import { setCenterClickedForAppointment } from '../slices/User.slice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const CenterDetailCard = ({centerDets,NextHandler}) => {
  
  const dispatch = useDispatch()
  const {user} = useSelector(store => store.Auth)
  const navigator = useNavigate()
  
  const {name,address,id} = centerDets ;
  return (
    <div class="w-full gap-2 m-3 p-2 h-auto border border-gray-500  rounded-md shadow-sm shadow-gray-400 flex ">

        {/* pin icon */}
        <div className=''>
            <img src={mapPinIcon} alt="" />
        </div>

        {/* details */}
        <div className='h-full'>
            <p className='text-lg font-semibold '>{name}</p>
            <p className='mt-1 text-sm leading-none text-gray-500'>{address}.</p>

            <div className='flex gap-10'>
              
              <button onClick={bookAppointmentHandler}
                class="inline-flex gap-2 my-4 items-center justify-center px-4 py-1 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                <img src={appointmentIcon} alt="" className='w-5 h-5' />
                Book Appointment
              </button>
              
              <button  class="inline-flex text-gray-900 my-4 items-center justify-center gap-1 px-4 py-1 text-base font-medium leading-6  whitespace-no-wrap bg-[#45DB7C] border border-[#4dff8e] rounded-md shadow-sm hover:bg-[#41c371] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                <img src={showonmapIcon} alt="" className='w-5 h-5' />
                Show on Map
              </button>
            </div>

        </div>
        
    </div>
  )

  function bookAppointmentHandler(){
    loginChecker()
    dispatch(setCenterClickedForAppointment(centerDets));
    NextHandler()
  }

  function loginChecker() {
    if(!user)
    {
        toast.error("Please Login First",{position:'top-center',autoClose:2000,hideProgressBar:true,closeButton:false})
        navigator("/login")
    }
  }
  
}

export default CenterDetailCard