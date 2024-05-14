import React, { useEffect } from 'react'
import { useState } from 'react';
import EWasteAddForm from '../Components/EWasteAddForm';
import Modal from '../Components/Modal'
import { getAllDevices, updateDeviceInfo } from '../services/Operations/waste.op';
import DataNotFoundGif from '../assets/Data_notfound_ani.gif'
import Loader from '../Components/Loader';

const E_Waste = () => {

    const [modalData, setModalData] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [allDevices, setAllDevices] = useState([])
    const [loading, setLoading] = useState(false)
    

    
    function addDeviceHandler() {
        setModalData(<EWasteAddForm/>)
        setShowModal(true)
    }
    
    const closeModal = ()=> setShowModal(false)

    function editHandler(device) {
        setShowModal(true)
        setModalData(<EWasteAddForm isEdit={true} formInitial={device} />)
    }


    useEffect(()=>{
        getAllDevices(setAllDevices,setLoading)
    },[])

  return (
    <div className='w-full h-full bg-white'>

        {loading && <Loader/>}

        <section class="bg-gray-50  p-3 sm:p-5">
            <div class="mx-auto max-w-screen-xl px-4 lg:px-5">
                
                <div class="bg-white  relative shadow-md sm:rounded-lg overflow-hidden">
                    
                    <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        
                        {/* search field */}
                        <div class="w-full md:w-1/2">
                            <form class="flex items-center">
                                <label for="simple-search" class="sr-only">Search</label>
                                <div class="relative w-full">
                                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 " placeholder="Search" required="" />
                                </div>
                            </form>
                        </div>
                        
                        {/* add device button */}
                        <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <button onClick={addDeviceHandler}
                              class="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                                    <svg viewBox="0 0 24 24" className='h-8 w-8 invert font-bold ' fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle> <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                                    Add Device
                            </button>
                        </div>
                        
                    </div>
                    
                    <div class="overflow-x-auto">
                        
                        {
                            allDevices ? 
                                <table class="w-full text-sm text-left text-gray-500 ">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                                        <tr>
                                            <th scope="col" class="px-4 py-3">Device Name</th>
                                            <th scope="col" class="px-4 py-3">Category</th>
                                            <th scope="col" class="px-4 py-3">Model No.</th>
                                            <th scope="col" class="px-4 py-3">Points</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allDevices?.map((device,i)=>(
                                                <tr key={i}  class="border-b ">
                                                    <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap ">{device?.name}</th>
                                                    <td class="px-4 py-3">{device?.category}</td>
                                                    <td class="px-4 py-3">{device?.modelNumber}</td>
                                                    <td class="px-4 py-3">{device?.greenPoints}</td>
                                                    <td class="px-4 py-3 flex items-center justify-center">
                                                        <button onClick={()=>editHandler(device)}  class="flex p-2.5 bg-gray-50 rounded-xl hover:rounded-3xl hover:bg-gray-100 transition-all duration-300 ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            :
                                <div className="flex flex-col items-center justify-center py-10">
                                    <img src={DataNotFoundGif} alt="" />
                                    <p className="font-bold text-red-600">Data Not Found</p>
                                </div>
                        }
                        
                    </div>
                    
                </div>
            </div>
        </section>

        {
            showModal && 
            <Modal isOpen={showModal} onClose={closeModal} >
                {modalData}
            </Modal>
        }
        
    </div>
  )
}

export default E_Waste