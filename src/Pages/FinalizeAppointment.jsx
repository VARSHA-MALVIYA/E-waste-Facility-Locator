import appointmentIcon from '../assets/appointment.png'
import { useState } from 'react'
import { formatDate } from '../data/utils';
import { processAppointment } from '../services/Operations/appointment';
import Loader from '../Components/Loader';

const FinalizeAppointment = ({appointmentInfo}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [greenPoints, setGreenPoints] = useState(appointmentInfo?.waste?.greenPoints || 0)
    const [loading, setLoading] = useState(false)


    function submitHandler(){
        processAppointment(appointmentInfo?.user?._id,appointmentInfo?._id,greenPoints,setLoading);
    }
    
  return (
    <div className="h-auto p-3 w-[60vw] mx-auto shadow-xl border border-black">

        {loading && <Loader/>}

        <div>
            <h3 className="p-2 text-xl font-semibold">Appointment Details</h3>
            <hr />
        </div>

        <div className="px-6 py-2">

            <div className="flex justify-between">

                <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-800">createdAt :</span>
                    <span className="text-sm text-gray-700">{formatDate(appointmentInfo?.createdAt)}</span>
                </div>
                
                <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-800">Ticket :</span>
                    <span className="text-sm text-gray-700">{appointmentInfo?.ticket}</span>
                </div>
                
                <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-800">Appointment Date :</span>
                    <span className="text-sm text-gray-700">{formatDate(appointmentInfo?.date)}</span>
                </div>
            </div>
            
        </div>

        <hr className="bg-gray-300 h-0.5" />

    
        <div>
            <h3 className="p-2 text-xl font-semibold">Center Details</h3>
            <hr />
        </div>

        <div className="px-6 py-2">

            <div className="flex justify-between mb-2">

                <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-gray-800">Center ID :</span>
                    <span className="text-sm text-gray-700">{appointmentInfo?.centerId}</span>
                </div>
                
                <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-gray-800">Center Name :</span>
                    <span className="text-sm text-gray-700">{appointmentInfo?.centerName}</span>
                </div>
                
            </div>
            
            <div className="flex justify-between">
                <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-gray-800">Center Address :</span>
                    <span className="text-xs text-gray-700">{appointmentInfo?.centerAddress}</span>
                </div>
            </div>
            
        </div>


        <hr className="bg-gray-300 h-0.5" />


        <div>
            <h3 className="p-2 text-xl font-semibold">Device Details</h3>
            <hr />
        </div>

        <div className="px-6 py-2">

            <div className="flex justify-between">

                <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-800">Name :</span>
                    <span className="text-sm text-gray-700">{appointmentInfo?.waste?.name}</span>
                </div>
                
                <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-800">Category :</span>
                    <span className="text-sm text-gray-700">{appointmentInfo?.waste?.category}</span>
                </div>
                
                <div className="flex items-center gap-3">
                    <span className="font-semibold text-gray-800">Model :</span>
                    <span className="text-sm text-gray-700">{appointmentInfo?.waste?.modelNumber}</span>
                </div>
            </div>

            <div className="flex justify-between">
                <span className="font-semibold text-gray-800">Precious Metals :</span>
            </div>
            
            <div>
                {
                    appointmentInfo?.waste?.preciousMetals?.map((metalInfo)=>(
                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-700">{metalInfo?.name}</span>
                            <span className="font-semibold text-gray-700">{metalInfo?.weight} gm</span>
                        </div>
                    ))
                }
            </div>

            <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-800">Green Points :</span>
                {
                    isEdit ? 
                    <input type="number"
                        value={greenPoints}
                        onChange={(e) => setGreenPoints(e.target.value)}
                         className='w-10 bg-[#E2E8F0] ' />
                    : 
                    <span className="text-sm text-gray-700">{appointmentInfo?.waste?.greenPoints}</span>
                }
                <button onClick={()=>setIsEdit(true)}  className={`h-3 w-3 hover:bg-gray-100 hover:cursor-pointer`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="edit"><path d="M3.5,24h15A3.51,3.51,0,0,0,22,20.487V12.95a1,1,0,0,0-2,0v7.537A1.508,1.508,0,0,1,18.5,22H3.5A1.508,1.508,0,0,1,2,20.487V5.513A1.508,1.508,0,0,1,3.5,4H11a1,1,0,0,0,0-2H3.5A3.51,3.51,0,0,0,0,5.513V20.487A3.51,3.51,0,0,0,3.5,24Z"></path><path d="M9.455,10.544l-.789,3.614a1,1,0,0,0,.271.921,1.038,1.038,0,0,0,.92.269l3.606-.791a1,1,0,0,0,.494-.271l9.114-9.114a3,3,0,0,0,0-4.243,3.07,3.07,0,0,0-4.242,0l-9.1,9.123A1,1,0,0,0,9.455,10.544Zm10.788-8.2a1.022,1.022,0,0,1,1.414,0,1.009,1.009,0,0,1,0,1.413l-.707.707L19.536,3.05Zm-8.9,8.914,6.774-6.791,1.4,1.407-6.777,6.793-1.795.394Z"></path></svg>
                </button>
            </div>
            
        </div>


        <button 
                onClick={submitHandler}
                class="flex mx-auto w-[120px] gap-2 items-center justify-center px-4 py-1 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
                <img src={appointmentIcon} alt="" className='w-5 h-5' />
                Complete
        </button>
        
    </div>
  )
}

export default FinalizeAppointment