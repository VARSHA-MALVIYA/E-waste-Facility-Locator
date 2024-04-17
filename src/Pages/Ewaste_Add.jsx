import { useState,useEffect } from "react";
import { getAllCategories } from "../services/Operations/category";

const Ewaste_Add = () => {

    const [formData, setFormData] = useState({
        name: '',
        modelNumber: '',
        category: '',
        greenPoints: 0,
        preciousMetals: [{ name: '', weight: '' }]
    })

    const [categoryNames,setCategoryNames] = useState([]);
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


    useEffect(() => {
      getAllCategories(setAllCategories)
    }, [])
    
    
    
  return (
    <div className='w-full h-full'>
        
        <div class=" w-[95%] mx-auto rounded-xl bg-gray-100 shadow-lg px-3 text-gray-800 relative overflow-hidden  " >
            
            {/* <form onSubmit={handleSubmit} className="flex flex-col items-center h-full w-[70%] mx-auto space-y-4">

    <div className="flex flex-col w-full">
    <label className="text-sm">Name:</label>
    <input
        type="text"
        placeholder="Item Name"
        value={formData.name}
        onChange={(e) => handleInputChange('name', e.target.value)}
        className="px-3 py-2 mt-1 border border-gray-300 rounded-md"
    />
    </div>

    <div className="flex flex-col w-full">
    <label className="text-sm">Model Number:</label>
    <input
        type="text"
        placeholder="Model Number"
        value={formData.modelNumber}
        onChange={(e) => handleInputChange('modelNumber', e.target.value)}
        className="px-3 py-2 mt-1 border border-gray-300 rounded-md"
    />
    </div>

    <div className="flex flex-col w-full">
    <label className="text-sm">Green Points:</label>
    <input
        type="number"
        placeholder="Green Points"
        value={formData.greenPoints}
        onChange={(e) => handleInputChange('greenPoints', e.target.value)}
        className="px-3 py-2 mt-1 border border-gray-300 rounded-md"
    />
    </div>

    <div className="flex flex-col w-full">
    <label className="text-sm">Category:</label>
    <select name="category" id="category"
        onChange={(e) => handleInputChange('category', e.target.value)}
    className="border-gray-600"  >

        <option value="none">Option</option>
        {
            categoryNames && categoryNames.map((obj,i)=>(
            <option value={obj.categoryName} key={i} className="text-gray-600"> {obj.categoryName} </option>
            )
            )
        }
        
    </select>

    </div>

    <div className="flex flex-col w-full">

    <label htmlFor="" className="text-sm">Precious Metals :</label>
    {formData.preciousMetals.map((metal, index) => (
        <div key={index} className="flex justify-between w-full space-x-2">
        <input
            type="text"
            placeholder="Name"
            value={metal.name}
            onChange={(e) => handleMetalInputChange(index, 'name', e.target.value)}
            className="border w-[50%] border-gray-300 rounded-md px-3 py-2 mt-1"
        />
        <input
            type="text"
            placeholder="Weight"
            value={metal.weight}
            onChange={(e) => handleMetalInputChange(index, 'weight', e.target.value)}
            className="border w-[50%] border-gray-300 rounded-md px-3 py-2 mt-1"
        />
        </div>
    ))}

    <button type="button" onClick={addMoreInputFields} className="w-[100px] h-[30px] text-center flex  items-center justify-center mt-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add More  </button>

    </div>

    <button type="submit" className="w-[150px] bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Submit</button>

            </form> */}

            

            <div class="flex items-start justify-between p-2 border-b rounded-t">
                <h3 class="text-xl font-semibold">
                    Add E-Waste
                </h3>
            </div>

            <div class="p-5 space-y-6 w-full">
                
                <form action="#" >
                    
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
                            <select name="category" id="category" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" onChange={(e) => handleInputChange('category', e.target.value)} >
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
                    
                </form>
                
            </div>

            <div class="px-5 py-1.5  border-t border-gray-200 rounded-b">
                <button onClick={handleSubmit} class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Save all</button>
            </div>

        </div>
            
    </div>
  )

    function handleSubmit() {
        console.log("testing")
        console.log(formData)
    }

}

export default Ewaste_Add