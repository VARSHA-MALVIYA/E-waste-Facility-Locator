import { useState } from "react";
import { ContactUs } from "../services/Operations/admin.op";
import Loader from "../Components/Loader";
import { useSelector } from "react-redux";
import Modal from "../Components/Modal";


const OperatorRequestAdmin = () => {

  const {user} = useSelector(store => store.Auth)
  const [formData, setFormData] = useState({
    email:user?.Email,
    message:"",
    firstName:user?.Name,
    lastName:"",
  })
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  function changeHandler(e) {
    const {name,value} = e.target ;
    setFormData({...formData, [name]:value })
}

  function submitHandler(e){
    e.preventDefault();
    ContactUs(formData,setShowModal,setLoading)
  }

  const closeModal = ()=> setShowModal(false)

  return (
    <div className="relative">

      {loading && <Loader/> }

      <form onSubmit={submitHandler} class="max-w-xl mx-auto  flex w-full flex-col border rounded-lg bg-white p-5">
        <h2 class="title-font mb-1 text-lg font-medium text-gray-900">Contact With Admin</h2>
        <p class="mb-5 leading-relaxed text-gray-600">You can send your request message to Admin to get yourself approved!</p>
        <div class="mb-4">
          <label for="email" class="text-sm leading-7 text-gray-600">Email</label>
          <input type="email" id="email" name="email" onChange={changeHandler} value={formData?.email} required disabled class="w-full disabled:cursor-not-allowed rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200" />
        </div>
        <div class="mb-4">
          <label for="message" class="text-sm leading-7 text-gray-600">Message</label>
          <textarea id="message" name="message" onChange={changeHandler} value={formData?.message} required class="h-20 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"></textarea>
        </div>
        <button type="submit" class="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">Send</button>
        <p class="mt-3 text-xs text-gray-500">This message will be visible to Admin on his/her requests.</p>
      </form>

      {
        setShowModal && 
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

export default OperatorRequestAdmin