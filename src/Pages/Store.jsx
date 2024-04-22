import React, { useEffect } from 'react'
import ProductCard from '../Components/ProductCard'
import { ProductDetails } from '../data/data'
import { useState } from 'react'
import Modal from '../Components/Modal'
import PlaceOrder from '../Components/PlaceOrder'
import { getAllProducts } from '../services/Operations/products.op'
import Loader from '../Components/Loader'

const Store = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(false)



    useEffect(()=>{
      getAllProducts(setAllProducts,setLoading)
    },[])


    function closeModal() {
        setIsModalOpen(false)
    }

  return (
    <section id="Projects"
      class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"  >

        {loading && <Loader/>}

        {
            allProducts?.map((productInfo)=>(
                <ProductCard productInfo={productInfo} setIsModalOpen={setIsModalOpen} />
            ))
        }

        {
            isModalOpen &&
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <PlaceOrder/>
            </Modal>
        }

    </section>
  )
}

export default Store