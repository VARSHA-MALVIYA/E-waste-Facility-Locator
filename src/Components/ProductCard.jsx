import React from 'react'
import Modal from './Modal'
import PlaceOrder from './PlaceOrder'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProductClickedForPurchase } from '../slices/User.slice'

const ProductCard = ({productInfo,setIsModalOpen}) => {

    const {user} = useSelector(store => store.Auth)

    const dispatch = useDispatch();
    
    function clickHandler() {
        dispatch(setProductClickedForPurchase(productInfo));
        setIsModalOpen(true)
    }
    
  return (
    <div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

        <div onClick={ (user?.GreenPoints < productInfo?.GreenPoints) ? null : clickHandler }
            
           className={`${user?.GreenPoints < productInfo?.GreenPoints ? 'cursor-not-allowed' : 'cursor-pointer'} `} >

            <img src={productInfo?.Image}
                    alt="Product" class="h-80 w-72 rounded-t-xl object-contain" />
            
            <div class="px-4 py-3 w-72">
                <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                <p class="text-lg font-bold text-black truncate block capitalize">{productInfo?.Name}</p>
                <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">{productInfo?.GreenPoints}</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div>
                {
                    (user?.GreenPoints < productInfo?.GreenPoints) &&
                    <p className='text-xs font-semibold text-red-500'> *You do not have enough GreenPoints</p>
                }
            </div>

        </div>

    </div>
  )
}

export default ProductCard