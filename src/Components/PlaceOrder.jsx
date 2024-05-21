import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { MakeOrder } from '../services/Operations/order.op'
import Loader from '../Components/Loader'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
    const {productClickedForPurchase} = useSelector(store => store.User)
    const {user} = useSelector(store => store.Auth)
    const productInfo = productClickedForPurchase;

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigator = useNavigate()

    const [formData, setFormData] = useState({
        name:user?.Name,
        email:user?.Email,
        address:"",
        city:"",
        zipcode:"",
    })

    const changeHanlder = (e) => {
        const {name,value} = e.target ;
        
        setFormData({
            ...formData,
            [name]:value,
        })
    }

    const submitHandler = (e)=> {
        e.preventDefault();
        if(!user) {
            toast.error("Please Login first",{position:'top-center',autoClose:1500,hideProgressBar:true,closeButton:false})
            navigator("/login");
        }
        dispatch(MakeOrder(formData,productClickedForPurchase,setLoading))
    }

  return (
    <div className='flex flex-col gap-5 sm:flex-row w-full h-auto sm:w-[70vw] sm:h-[80vh]'>

        {loading && <Loader/>}

        {/* left {product image} */}
        <div className=' w-full sm:w-[50%] h-full border sm:border-black'>
            <div className='object-contain w-full h-full'>

                <img src={productInfo?.Image}
                        alt="Product" class="h-[320px] w-72 rounded-t-xl mx-auto object-contain" />

                <div class="px-4 py-3 w-full flex justify-between items-center">
                    
                    <p class="text-lg font-bold text-black truncate block capitalize">{productInfo?.Name}</p>
                    
                    <div class="flex items-center">
                        <p class="text-lg font-semibold text-black cursor-auto my-3">{productInfo?.GreenPoints}</p>
                        <del>
                            <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                        </del>
                    </div>
                    
                </div>

            </div>
        </div>
        

        {/* right {form} */}
        <div className=' w-full sm:w-[50%] h-full border sm:border-black'>
            
                <form onSubmit={submitHandler}
                 class="bg-white h-full rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                    
                    <div class="grid gap-4 gap-y-2 justify-items-center text-sm grid-cols-1 lg:grid-cols-3">
                    

                        <div class="lg:col-span-2 justify-items-center">
                            
                            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                
                                <div class="md:col-span-5">
                                    <label for="full_name">Full Name</label>
                                    <input type="text" name="name" id="name" required class="h-8 border mt-1 rounded px-4 w-full bg-gray-50" value={formData.name} 
                                        onChange={changeHanlder}
                                     />
                                </div>

                                <div class="md:col-span-5">
                                    <label for="email">Email Address</label>
                                    <input type="email" name="email" id="email" required class="h-8 border mt-1 rounded px-4 w-full bg-gray-50" value={formData.email} placeholder="email@domain.com" 
                                        onChange={changeHanlder}
                                    />
                                </div>

                                <div class="md:col-span-3">
                                    <label for="address">Address / Street</label>
                                    <input type="text" name="address" id="address"j required class="h-8 border mt-1 rounded px-4 w-full bg-gray-50" value={formData.address} placeholder="" 
                                        onChange={changeHanlder} 
                                    />
                                </div>

                                <div class="md:col-span-2">
                                    <label for="city">City</label>
                                    <input type="text" name="city" id="city" required class="h-8 border mt-1 rounded px-4 w-full bg-gray-50" value={formData.city} placeholder=""
                                        onChange={changeHanlder} 
                                    />
                                </div>

                                <div class="md:col-span-2">
                                    <label for="zipcode">Zipcode</label>
                                    <input type="text" name="zipcode" id="zipcode" required class="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="462023" value={formData.zipcode}
                                        onChange={changeHanlder} 
                                    />
                                </div>

                                <div class="md:col-span-5 text-right">
                                    <div class="inline-flex items-end">
                                        <button type='submit'  
                                          class="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                                            Place Order
                                            <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        </button>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    
                    </div>
                    
                </form>
      
        </div>

    </div>
  )
}

export default PlaceOrder