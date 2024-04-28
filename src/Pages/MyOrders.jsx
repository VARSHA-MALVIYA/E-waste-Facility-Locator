
import { GetOrderByUserId } from '../services/Operations/order.op'
import Loader from '../Components/Loader'
import { useState,useEffect } from 'react'
import Modal from '../Components/Modal'
import notFoundGif from '../assets/Data_notfound_ani.gif'

const MyOrders = () => {
   
    const [UserOrders, setUserOrders] = useState([])
    const [loading, setLoading] = useState(false)
    
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalProduct, setModalProduct] = useState(null)

    const closeModal = () => setIsModalOpen(false)


    useEffect(() => {
      GetOrderByUserId(setUserOrders,setLoading)
    }, [])
    
    
  return (
    <div className="bg-white">
        
        {loading && <Loader/>}
        
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pb-24">
            
            <div className="max-w-xl">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
                <p className="mt-2 text-sm text-gray-500">
                    Check the status of recent orders, manage returns, and download invoices.
                </p>
            </div>

            <div className="mt-16">
                
                <div className="space-y-20">
                    
                    {
                        UserOrders?.length > 0 ? 
                        <table className="w-full mt-4 text-gray-500 sm:mt-6">
                            <caption className="sr-only">Products</caption>
                            <thead className="text-sm text-left text-gray-500 sr-only sm:not-sr-only">
                            <tr>
                                <th scope="col" className="py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3">
                                Product
                                </th>
                                <th scope="col" className="hidden w-1/5 py-3 pr-8 font-normal sm:table-cell">
                                Price
                                </th>
                                <th scope="col" className="hidden py-3 pr-8 font-normal sm:table-cell">
                                Status
                                </th>
                                <th scope="col" className="w-0 py-3 font-normal text-right">
                                Info
                                </th>
                            </tr>
                            </thead>
                            
                            <tbody className="text-sm border-b border-gray-200 divide-y divide-gray-200 sm:border-t">
                            {UserOrders.map((order,i) => (
                                <tr key={i}>
                                <td className="py-6 pr-8">
                                    <div className="flex items-center">
                                    <img
                                        src={order?.Product?.Image}
                                        className="object-cover object-center w-16 h-16 mr-6 rounded"
                                    />
                                    <div>
                                        <div className="font-medium text-gray-900">{order?.Product?.Name}</div>
                                        <div className="mt-1 sm:hidden">{order?.Product?.GreenPoints}</div>
                                    </div>
                                    </div>
                                </td>
                                <td className="hidden py-6 pr-8 sm:table-cell">{order?.Product?.GreenPoints}</td>
                                <td className="hidden py-6 pr-8 sm:table-cell">{order?.Status}</td>
                                <td className="py-6 font-medium text-right whitespace-nowrap">
                                    <button onClick={()=>{setIsModalOpen(true); setModalProduct(order)}}  className="text-indigo-600">
                                    View<span className="hidden lg:inline"> Product</span>
                                    </button>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                            
                        </table>
                        :
                        <div className='flex flex-col items-center justify-center'>
                            <img src={notFoundGif} alt="" className='w-[200px] h-[200px]' />
                            <p className='font-semibold text-center text-red-600'>Data Not Found</p>
                        </div>
                    }
                    
                </div>
            </div>
        
        </div>
        
        {
            isModalOpen &&
            <Modal isOpen={isModalOpen} onClose={setIsModalOpen} >
                <div className='object-contain w-full h-full'>

                    <img src={modalProduct?.Product?.Image}
                            alt="Product" class="h-[320px] w-72 rounded-t-xl mx-auto object-contain" />

                    <div class="px-4 py-3 w-full flex justify-between items-center">
                        
                        <p class="text-lg font-bold text-black truncate block capitalize">{modalProduct?.Product?.Name}</p>
                        
                        <div class="flex items-center">
                            <p class="text-lg font-semibold text-black cursor-auto my-3">{modalProduct?.Product?.GreenPoints}</p>
                            <del>
                                <p class="text-sm text-gray-600 cursor-auto ml-2">$200</p>
                            </del>
                        </div>
                        
                    </div>

                </div>
            </Modal>
        }
    
    </div> 
  )
}

export default MyOrders