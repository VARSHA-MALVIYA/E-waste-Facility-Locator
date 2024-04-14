import DeviceNotFoundForm from "../Components/DeviceNotFoundForm"
import DeviceNotFoundIcon from '../assets/notFound_ani.gif'


const DeviceNotFound = () => {
  return (
    <div className="flex w-11/12 min-h-screen py-5 mx-auto bg-white ">

        <div className="w-[60%] px-5  h-full  ">

            <div className="my-3 ">
                <p className="my-2 text-3xl font-semibold">Not Found Your <span className="text-green-400">Device</span> ?</p>
                <p >Dont Worry! Fill out this form.</p>
            </div>

            <DeviceNotFoundForm/>
            
        </div>
        
        <div className="w-[50%] h-full flex justify-center items-center ">
            <img src={DeviceNotFoundIcon} alt="" />
        </div>
        
    </div>
  )
}

export default DeviceNotFound