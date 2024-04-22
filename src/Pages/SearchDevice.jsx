import { useEffect,useState } from 'react'
import DeviceInfoTable from '../Components/DeviceInfoTable'
import SearchIcon from '../assets/juicy-girl-and-boy-searching-for-the-right-files.gif'
import SearchDeviceImg from '../assets/juicy-hands-holding-gadgets-with-social-media.gif'
import { getEwastesCategory, getSelectedCategoryWasteInfo, getSelectedDeviceInfo } from '../services/Operations/waste.op'
import Loader from '../Components/Loader'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'

const SearchDevice = ({NextHandler}) => {

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

        <button  class={`flex mt-10 items-center justify-center w-[120px] px-8 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0 disabled:cursor-not-allowed mx-auto `}  onClick={NextHandler} disabled={ deviceDetails? false:true  } >
            Proceed
            <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>

        


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