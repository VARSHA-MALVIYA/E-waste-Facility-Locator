import { useEffect, useState } from "react";
import Loader from "./Loader";
import { addEducationalPopup, updateEducationalPopup } from "../services/Operations/educationalPopup.op";
import Modal from "./Modal";

const EduPopupAddForm = ({isEdit,formInitial}) => {

    const [formData, setFormData] = useState(formInitial || {
        title:"",
        description:""
    })
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)


    function changeHandler(e) {
        const {name,value} = e.target;
        
        setFormData({
            ...formData,
            [name]:value
        });
    }
    const closeModal = ()=> setShowModal(false)

    function submitHandler() {
        isEdit ? updateEducationalPopup(formData,setLoading,setShowModal) 
        :
        addEducationalPopup(formData,setLoading,setFormData,setShowModal)
    }


    useEffect(()=>{
        
    },[])

  return (
    <div class=" max-w-lg w-screen p-5 space-y-6  rounded-xl bg-gray-100 shadow-lg  text-gray-800 relative overflow-hidden  " >

        {loading && <Loader/>}

        <div class="flex items-start justify-between p-2 border-b rounded-t">
            <h3 class="text-xl font-semibold">
                Add Educational Popup
            </h3>
        </div>
        
        <div class="relative mt-1">
            
            <label for="title" class="text-sm font-medium text-gray-900 block ">Title</label>
            <input type="text" id="title" class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" placeholder="eg. E-waste Information"
                value={formData.title}
                name='title'
                onChange={changeHandler}
            />
            
            <label for="name" class="text-sm mt-2 font-medium text-gray-900 block ">Description</label>
            <textarea  class="w-full pl-3 pr-10 py-2 border-2 border-gray-200 rounded-xl hover:border-gray-300 focus:outline-none focus:border-blue-500 transition-colors" rows={5} placeholder="Give the description here.."
                value={formData.description}
                name='description'
                onChange={changeHandler}
            />
            
        </div>
        
        <button onClick={submitHandler}  class="block mt-5  w-[120px] items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-blue-600 border border-blue-700 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" data-rounded="rounded-md" data-primary="blue-600" data-primary-reset="{}">
            {isEdit ? 'Edit':'Add'}
        </button>
        
        {
            showModal && 
            <Modal isOpen={showModal} onClose={closeModal}>
                <div class="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
                    <div class="w-12 h-12 rounded-full bg-green-100  p-2 flex items-center justify-center mx-auto mb-3.5">
                        <svg aria-hidden="true" class="w-8 h-8 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                    <p class="mb-4 text-lg font-semibold text-gray-900 ">Successfully { isEdit ? 'updated' : 'added' } Educational Popup.</p>
                    <button onClick={closeModal}  type="button" class="py-2 px-3 text-sm font-medium text-center text-black rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 ">
                        Continue
                    </button>
                </div>
            </Modal>
        }
        
        </div>
  )
}

export default EduPopupAddForm