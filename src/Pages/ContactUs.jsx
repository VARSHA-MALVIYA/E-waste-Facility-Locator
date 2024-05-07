import PhoneIcon from '../assets/telephone.png'
import ClockIcon from '../assets/clock.png'
import Modal from '../Components/Modal'
import Loader from '../Components/Loader'
import { useState } from 'react'
import { ContactUs } from '../services/Operations/admin.op'

const ContactUsPage = () => {
    
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        message:""
    })
    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(false)

    function changeHandler(e) {
        const {name,value} = e.target ;
        setFormData({...formData, [name]:value })
    }

    function submitHandler(e) {
        e.preventDefault()
        ContactUs(formData,setShowModal,setLoading)
        setFormData({
            firstName:"",
            lastName:"",
            email:"",
            message:""
        })
    }

    const closeModal = () => setShowModal(false)
    
  return (
    <div className=" mx-auto p-5 bg-white">

    {loading && <Loader/>}

    <div className="grid grid-cols-1 md:grid-cols-12">

        <div className= "md:col-span-4 p-10 text-black overflow-x-hidden">
            {/* <p className="mt-4 text-sm leading-7 font-regular uppercase">
                Contact
            </p> */}
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                Get In <span className="text-indigo-600">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-gray-700">
              If you have any questions or concerns regarding e-waste disposal, please feel free to contact us. Our email address and physical location are provided below. You can also visit your nearest e-waste center,
              where our employees can assist you with any issues related to your e-waste.
            </p>

            <div className="flex items-center mt-5">
                <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.536 489.536"
                    xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 489.536 489.536">
                    <g>
                        <g>
                            <path
                                d="m488.554,476l-99-280.2c-1-4.2-5.2-7.3-9.4-7.3h-45.6c12.9-31.1 19.6-54.9 19.6-70.8 0-64.6-50-117.7-112.5-117.7-61.5,0-112.5,52.1-112.5,117.7 0,17.6 8.2,43.1 19.9,70.8h-39.7c-4.2,0-8.3,3.1-9.4,7.3l-99,280.2c-3.2,10.3 6.3,13.5 9.4,13.5h468.8c4.2,0.5 12.5-4.2 9.4-13.5zm-246.9-455.3c51,1.06581e-14 91.7,43.7 91.7,96.9 0,56.5-79.2,182.3-91.7,203.1-31.3-53.1-91.7-161.5-91.7-203.1 0-53.1 40.6-96.9 91.7-96.9zm-216.7,448l91.7-259.4h41.7c29.9,64.1 83.3,151 83.3,151s81.4-145.7 83.8-151h47.4l91.7,259.4h-439.6z">
                            </path>
                            <rect width="136.5" x="177.054" y="379.1" height="20.8"></rect>
                            <path
                                d="m289.554,108.2c0-26-21.9-47.9-47.9-47.9s-47.9,21.9-47.9,47.9 20.8,47.9 47.9,47.9c27.1,0 47.9-21.8 47.9-47.9zm-75-1c0-14.6 11.5-27.1 27.1-27.1s27.1,12.5 27.1,27.1-11.5,27.1-27.1,27.1c-14.6,2.84217e-14-27.1-12.5-27.1-27.1z">
                            </path>
                        </g>
                    </g>
                </svg>
                <span className="text-sm ml-2">G H-2 , I.T.I Staff Colony, Govindpura, Bhopal.</span>
            </div>
            <div className="flex items-center mt-5">
             <span className='h-7 w-7'>📩</span>
                <span className="text-sm ml-2">malviyavarsha2004@gmail.com</span>
            </div>
            <div className="flex items-center mt-5">
                <img src={PhoneIcon} className='w-5 h-5' alt="" />
                <span className="text-sm ml-2">+91 9174 802 507</span>
            </div>
            <div className="flex items-center mt-5">
            <img src={ClockIcon} className='w-5 h-5' alt="" />
                <span className="text-sm ml-2">24/7</span>
            </div>

        </div>
        <form className="md:col-span-8 p-10">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name">
                        First Name
                    </label>
                    <input
                        name='firstName' onChange={changeHandler} value={formData.firstName}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name" type="text" placeholder="Jane" required={true}  />
                    
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name">
                        Last Name
                    </label>
                    <input
                        name='lastName' onChange={changeHandler} value={formData.lastName}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name" type="text" placeholder="Doe" required={true} />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Email Address
                    </label>
                    <input
                        name='email' onChange={changeHandler} value={formData.email}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email" type="email" placeholder="example@email.com" required={true} />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password">
                        Your Message
                    </label>
                    <textarea rows="10" placeholder='Write Your Message Here' required={true}
                        name='message' onChange={changeHandler} value={formData.message}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                </div>
                <div className="flex justify-between w-full px-3">
                    
                    <button onClick={submitHandler}
                        className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                    >
                        Send Message
                    </button>
                </div>

            </div>

        </form>

    </div>

    {
        showModal && 
        <Modal isOpen={showModal} onClose={closeModal} >
            <div className="relative p-4 text-center bg-white rounded-lg shadow  sm:p-5">
                <div className="w-12 h-12 rounded-full bg-green-100  p-2 flex items-center justify-center mx-auto mb-3.5">
                    <svg aria-hidden="true" className="w-8 h-8 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Success</span>
                </div>
                <p className="mb-4 text-lg font-semibold text-gray-900 ">Message Sent Successfully</p>
                <button  type="button"
                    onClick={()=>setShowModal(false)}
                className="py-2 px-3 text-sm font-medium text-center text-black rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 ">
                    Continue
                </button>
            </div>
        </Modal>
    }
    
    </div>
  )
}

export default ContactUsPage