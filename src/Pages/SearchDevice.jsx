import { useEffect,useState } from 'react'
import DeviceInfoTable from '../Components/DeviceInfoTable'
import SearchIcon from '../assets/juicy-girl-and-boy-searching-for-the-right-files.gif'
import SearchDeviceImg from '../assets/juicy-hands-holding-gadgets-with-social-media.gif'
import { getEwastesCategory, getSelectedCategoryWasteInfo, getSelectedDeviceInfo } from '../services/Operations/waste.op'
import Loader from '../Components/Loader'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'

const SearchDevice = () => {

    const [wasteCategory, setWasteCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(null)

    const [selectedCategoryDevices,setSelectedCategoryDevices] = useState([])
    const [selectedDevice,setSelectedWaste] = useState(null);
    
    const [loading, setLoading] = useState(false)

    const [deviceDetails, setDeviceDetails] = useState(null)
    
    const navigator = useNavigate();
    const dispatch = useDispatch()

    
    

    useEffect(()=>{
        getEwastesCategory(setLoading,setWasteCategory)
    },[])
    
    useEffect(()=>{
        getSelectedCategoryWasteInfo(selectedCategory,setSelectedCategoryDevices)
    },[selectedCategory])

    
  return (
    <div className="w-full min-h-screen scroll-smooth ">
        
        {
            loading && <Loader/>
        }

        
        
        {/* top wala section  {img+searchForm} */}
        <div className='flex w-full justify-evenly '>
            
            <div className=''>
                <img src={SearchIcon} alt="" />
            </div>

            <div className=' w-[50%]'>
                <div class="bg-white shadow-md shadow-gray-400 rounded-lg px-8 py-6 max-w-md">
                    
                    <h1 class="text-2xl font-bold text-center mb-4 ">Select Your E-Waste</h1>
                    
                    <form>
                        
                        <div class="mb-4">
                            
                            <label for="" class="block text-sm font-medium text-gray-700  mb-2">Device Category</label>
                            
                            <select name="category" id="" 
                                onChange={categoryChangeHandler}
                             class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                                <option value="">Select</option>
                                {
                                    wasteCategory?.map((category,i)=>(
                                        <option value={category} key={i}>{category}</option>
                                    ))
                                }
                            </select>
                            
                        </div>
                        
                        <div class="mb-4">
                            
                            <label for="password" class="block text-sm font-medium text-gray-700  mb-2">Device Name</label>
                            
                            <select name="" id="" class="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 disabled:cursor-not-allowed " disabled={selectedCategory?false:true}
                                onChange={deviceChangeHandler} 
                            > 
                                <option value="">Select</option>
                                {
                                    selectedCategoryDevices?.map((device,i)=>(
                                        <option value={device} key={i}>{device}</option>
                                    ))
                                }
                            </select>
                            
                        </div>
                        
                        <button onClick={searchHandler}  class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Search</button>
                    </form>
                </div>
            </div>
            
        </div>

        {
            deviceDetails && 
            <div className='flex w-full my-[20vh] justify-evenly '  id='device_details'  >

            {/* table device information */}
            <DeviceInfoTable/>
            
            
            {/* animated gif */}
            <div>
                <img src={SearchDeviceImg} alt="" />
            </div>
            
            </div>
        }


    </div>
  )

    // handler functions
    
    function categoryChangeHandler(event){
        const {value} = event.target;
        setSelectedCategory(value)
    }

    function deviceChangeHandler(event){
        const {value} = event.target;
        setSelectedWaste(value)
    }

    function searchHandler(e){
        e.preventDefault()
        dispatch(getSelectedDeviceInfo(selectedCategory,selectedDevice,setDeviceDetails,setLoading,navigator))
    }
  
}

export default SearchDevice