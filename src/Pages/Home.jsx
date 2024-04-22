

import Footer from "../Components/Footer"
import Gadgets from "../Components/Gadgets"
import HowWeWork from "../Components/HowWeWork"
import Stats from "../Components/Stats"
import SwiperImage from "../Components/SwiperImage"
import WhyGiveEwaste from "../Components/WhyGiveEwaste"
import { Cursor, Typewriter } from 'react-simple-typewriter'

import { Link } from "react-router-dom"


const Home = () => {

    const words = ['Environment','EcoGreen','Sustainability']
    
  return (
    <div className="w-full min-h-screen mt-[13vh] ">

        {/* hero section */}
        <section className="py-5">
          
                <div className="items-center justify-between max-w-screen-xl mx-auto overflow-hidden text-gray-600 gap-x-12 md:flex md:px-8">
                  
                    <div className="flex-none px-4 space-y-5 sm:max-w-lg md:px-0 lg:max-w-xl">
                      
                        <h2 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
                            Transforming <span className="text-green-700">E-Waste</span> into  <Typewriter words={words} loop={false}  /><Cursor cursorColor="green"  />
                        </h2>

                        <p className="w-[70%]">
                            Turn your old e-waste into Green : Give, Earn and contribute to a Sustainable future
                        </p>
                        
                        <div className="items-center space-y-3 gap-x-3 sm:flex sm:space-y-0">
                            <button  className="block px-4 py-2 font-medium text-center text-white duration-150 bg-green-600 rounded-lg shadow-lg hover:bg-green-500 active:bg-green-700 hover:shadow-none">
                                Explore
                            </button>
                            <Link to={"/dispose"}  className="flex items-center justify-center px-4 py-2 font-medium text-gray-700 duration-150 border rounded-lg gap-x-2 hover:text-gray-500 active:bg-gray-100 md:inline-flex">
                                Give E-Waste
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    
                    {/* swiper */}
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl md:rounded-tl-[108px] overflow-hidden">
                        <SwiperImage/>
                    </div>

                </div>
                
        </section>


        {/* why give E-waste */}
        <WhyGiveEwaste/>


        {/* How we work */}
        <HowWeWork/>

        {/* Gadgets */}
        <Gadgets/>


        {/* stats */}
        <Stats/>


        <Footer/>
        
        
    </div>
  )
}

export default Home