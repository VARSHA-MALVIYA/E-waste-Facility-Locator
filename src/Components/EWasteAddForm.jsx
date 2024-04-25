import { useState,useEffect } from "react";
import { getAllCategories } from "../services/Operations/category";
import { addEwaste } from "../services/Operations/admin.op";
import Loader from "./Loader";
import Modal from "./Modal";
import { updateDeviceInfo } from "../services/Operations/waste.op";


const EWasteAddForm = ({isEdit,formInitial}) => {
    
    const [formData, setFormData] = useState(formInitial || {
        name: '',
        modelNumber: '',
        category: '',
        greenPoints: 0,
        preciousMetals: [{ name: '', weight: '' }]
    })
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const [allCategories, setAllCategories] = useState([])
    
    const handleInputChange = (key, value) => {
      
        if(key === "greenPoints"){
          value = (value==="") ? 0 : parseInt(value);
        }

        setFormData({
            ...formData,
            [key]: value
        });
    };

    const handleMetalInputChange = (index, key, value) => {
        const updatedMetals = [...formData.preciousMetals];
        updatedMetals[index][key] = value;
        setFormData({
            ...formData,
            preciousMetals: updatedMetals
        });
    };

    const addMoreInputFields = () => {
        setFormData({
            ...formData,
            preciousMetals: [...formData.preciousMetals, { name: '', weight: '' }]
        })
    };

    function handleSubmit(e) {
        e.preventDefault()
        
        isEdit ? 
        updateDeviceInfo(formData,setLoading,setShowModal) 
        :
        addEwaste(formData,setShowModal,setLoading,setFormData)
    }

    const closeModal = ()=> setShowModal(false)

    useEffect(() => {
        getAllCategories(setAllCategories)
    }, [])
    
  return (
    <div class="p-5 space-y-6 w-full"> 
    
        {loading && <Loader/>}
        
        <form >
            <div class="grid grid-cols-6 gap-6 w-full">
                
                <div class="col-span-6 sm:col-span-3">
                    <label for="name" class="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
                    <input type="text" name="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple Imac 27”" required="true" 
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                    />
                </div>
                
                <div class="col-span-6 sm:col-span-3">
                    <label for="modelNumber" class="text-sm font-medium text-gray-900 block mb-2">Model Number</label>
                    <input type="text" name="modelNumber" id="modelNumber" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="eg. note 7s" required="true"
                        value={formData.modelNumber}
                        onChange={(e) => handleInputChange('modelNumber', e.target.value)}
                    />
                </div>
                
                
                <div class="col-span-6 sm:col-span-3">
                    <label for="greenPoints" class="text-sm font-medium text-gray-900 block mb-2">Green Points</label>
                    <input type="number" name="greenPoints" id="greenPoints" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="50" required=""
                        value={formData.greenPoints}
                        onChange={(e) => handleInputChange('greenPoints', e.target.value)}
                    />
                </div>
                
                
                <div class="col-span-6 sm:col-span-3">
                    <label for="category" class="text-sm font-medium text-gray-900 block mb-2">Category</label>
                    <select name="category" id="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" onChange={(e) => handleInputChange('category', e.target.value)} value={formData?.category} >
                        <option value="none" defaultChecked={true} >Select</option>
                        {
                            allCategories?.map((categoryDoc)=>(
                                <option value={categoryDoc.categoryName} >{categoryDoc.categoryName}</option>
                            ))
                        }
                    </select>
                </div>
                
                <div className="w-full col-span-6 sm:col-span-3">
                    <label for="preciousMetals" class="text-sm font-medium text-gray-900 block mb-2">Precious Metals</label>
                    
                    {formData.preciousMetals.map((metal, index) => (
                        <div key={index} className="flex justify-between w-full space-x-2">
                            <input
                                type="text"
                                placeholder="Name"
                                value={metal.name}
                                onChange={(e) => handleMetalInputChange(index, 'name', e.target.value)}
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            />
                            <input
                                type="text"
                                placeholder="Weight"
                                value={metal.weight}
                                onChange={(e) => handleMetalInputChange(index, 'weight', e.target.value)}
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                            />
                        </div>
                    ))}

                    <button type="button" onClick={addMoreInputFields} className="w-[100px] h-[30px] text-center flex  items-center justify-center mt-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add More  </button>
                </div>

            </div>
            
            <div class=" py-1.5 w-full rounded-b">
                <button onClick={handleSubmit}
                     class="flex mx-auto items-center justify-center w-[120px] px-3 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-400  sm:mb-0" >
                        { isEdit ? 'Update' : 'Add' }
                </button>
            </div>
        </form>

        {
            showModal && 
            <Modal isOpen={showModal} onClose={closeModal}>
                <div class="relative p-4 text-center bg-white rounded-lg shadow sm:p-5">
                    <div class="w-12 h-12 rounded-full bg-green-100  p-2 flex items-center justify-center mx-auto mb-3.5">
                        <svg aria-hidden="true" class="w-8 h-8 text-green-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>
                    <p class="mb-4 text-lg font-semibold text-gray-900 ">Successfully {isEdit ? 'updated' : 'added'} product.</p>
                    <button onClick={closeModal}  type="button" class="py-2 px-3 text-sm font-medium text-center text-black rounded-lg bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 ">
                        Continue
                    </button>
                </div>
            </Modal>
        }
        
    </div>
  )
}

export default EWasteAddForm