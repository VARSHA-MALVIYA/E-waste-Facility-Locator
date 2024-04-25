import notFoundGif from '../assets/bubble-gum-error-404.gif'
import { useState,useEffect } from 'react';
import { approveOperator, getUnapprovedOperators } from '../services/Operations/admin.op';
import { formatDate } from '../data/utils';
import Modal from '../Components/Modal';
import Loader from '../Components/Loader';
import DataNotFoundGif from '../assets/Data_notfound_ani.gif'

const Requests = () => {
    
    
    const [loading, setLoading] = useState(false);
    const [pendingOperators, setPendingOperators] = useState(null)

    useEffect(()=>{
        getUnapprovedOperators(setPendingOperators,setLoading)
    },[])



    function approveHandler(operatorInfo) {
        approveOperator(operatorInfo._id,setLoading)
    }
    
    
  return (
    <div className="w-full h-full">

        <div class="flex items-start justify-between p-2 border-b rounded-t">
            <h3 class="text-xl font-semibold">
                Approve Operators
            </h3>
        </div>

        <div className="relative w-full px-5 py-10 overflow-hidden text-gray-800 bg-gray-100 shadow-lg rounded-xl">

            {
                pendingOperators?.length > 0 ?
                    // show table
                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                            
                            <thead class="text-xs  uppercase text-white bg-gray-900 ">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Email
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Joined
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                {
                                    pendingOperators?.map((operatorInfo,i)=>(
                                        <tr key={i}  class="bg-white border-b  hover:bg-gray-100 ">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                                                {operatorInfo?.Name}
                                            </th>
                                            <td class="px-6 py-4">
                                            {operatorInfo?.Email}
                                            </td>
                                            <td class="px-6 py-4">
                                                {formatDate(operatorInfo?.createdAt)}
                                            </td>
                                            
                                            <td class="px-6 py-4">
                                                <span class={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${operatorInfo.Approved ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} `} >
                                                {operatorInfo?.Approved ? 'Active':'Pending'}
                                                </span>
                                            </td>
                                            
                                            <td class="px-6 py-4 whitespace-nowrap">
                                                <button onClick={()=>{approveHandler(operatorInfo)}}  class="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Approve</button>
                                                <button class="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                                            </td>
                                            
                                        </tr>
                                    ))
                                }
                            </tbody>
                            
                        </table>
                    </div>
                :
                    // error
                    <div className="flex flex-col items-center justify-center py-10">
                        <img src={DataNotFoundGif} alt="" />
                        <p className="font-bold text-red-600">Data Not Found</p>
                    </div>
            }

        </div>

        {loading && <Loader/>}

    </div>
  )

    
}

export default Requests