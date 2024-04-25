import { useState } from "react";
import { addEducationalPopup } from "../services/Operations/educationalPopup.op";
import Loader from "../Components/Loader";
import Modal from "../Components/Modal";

const AddEducationalPopup = () => {
    
    const [formData, setFormData] = useState({
        title:"",
        description:""
    })
    const [loading, setLoading] = useState(false)

    function changeHandler(e) {
        const {name,value} = e.target;
        
        setFormData({
            ...formData,
            [name]:value
        });
    }

    function submitHandler() {
        addEducationalPopup(formData,setLoading)
    }
    
  return (
    <div className="w-full h-full">

        <div class=" w-full rounded-xl bg-gray-100 shadow-lg p-5 text-gray-800 relative overflow-hidden  " >

            <div class="flex items-start justify-between p-2 border-b rounded-t">
                <h3 class="text-xl font-semibold">
                    Add E-Waste
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
                Add
            </button>
            
            <div class="absolute top-0 left-0 w-full h-2 flex">
                <div class="h-2 bg-[#111827] flex-1"></div>
            </div>
            
        </div>

        {/* loader and modal */}
        {loading && <Loader/>}
        
    </div>
  )
}

export default AddEducationalPopup