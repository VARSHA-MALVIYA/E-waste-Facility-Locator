import aboutBg from '../assets/about_bg.png'
import GandhijiImg from '../assets/Gandhiji_img.png'
import ManAndTruck from '../assets/man_and_truck.jpg'
import appointmentIcon from '../assets/appointmentIconServices.png';
import { OurServicesData } from '../data/data';
import Footer from '../Components/Footer';

const AboutUs = () => {
      
  return (
   <div>

    {/* hero */}
    <div className='relative w-full flex justify-center items-center  h-[50vh] bg-cover bg-center border border-black' style={{backgroundImage:`url(${aboutBg})`}} >

        <div className='z-10'>
            <h2 class="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">About Us</h2>
        </div>

        {/* bg overlay */}
        <div class="absolute  inset-0 bg-black opacity-50"></div>
    </div>

    {/* about our mission */}
    <div class="py-16 bg-white">  
    <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
            <img src={ManAndTruck} alt="image" loading="lazy" width="" height="" />
            </div>
            <div class="md:7/12 lg:w-6/12">
            <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">About Our Mission</h2>
            <p class="mt-6 text-gray-600">Our mission encompasses not only the efficient collection and disposal of electronic waste but also the promotion of awareness and education about the importance of proper e-waste management. We aim to empower individuals, businesses, and communities to make informed choices that contribute to a cleaner and healthier world for generations to come.</p>
            <p class="mt-4 text-gray-600"> Together, we can make a significant difference in combating the e-waste crisis and building a more sustainable future for all. Join us in our mission to create a world where electronic waste is no longer a burden but a valuable resource for a circular economy.</p>
            </div>
        </div>
    </div>
    </div>

    {/* mahatma gandhi quote */}
    <section class="relative py-32 lg:py-20 bg-white">
        
        <div
            class="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
                
            <div class="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
                <span
                    class="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
                <span class="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80"></span>
            </div>
            
            <div class="relative  justify-center items-center flex  lg:py-3 xl:py-8 
                lg:flex-1 lg:w-1/2">
                    
                <div className=' sm:w-[65vw] lg:w-[30vw]'>
                    <p class="sm:mt-0 text-gray-700 font-bold  text-3xl ">
                        <i> “Earth provides enough to satisfy every man's needs, but not every man's greed.  ” </i>
                    </p>
                    <p className='text-right'> -Mahatma Gandhi </p>
                </div>
                
            </div>
            
            <div class="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                <img src={GandhijiImg} alt="Hero image" 
                    class="lg:absolute lg:w-full lg:h-full rounded-3xl  lg:max-h-none max-h-96 object-contain " /> 
            </div>
            
        </div>
        
    </section>

    {/* what we offer / our services */}
    <section class="pt-20 max-w-full lg:pt-[50px] pb-12 lg:pb-[50px]">
        
        <div class="flex flex-wrap">
            <div class="w-full px-4">
                <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
                    
                    <span class="font-semibold text-lg text-primary mb-2 block">
                        Our Services
                    </span>
                    
                    <h2
                        class="
                        font-bold
                        text-3xl
                        sm:text-4xl
                        md:text-[40px]
                        text-dark
                        mb-4
                        "
                        >
                        What We Offer
                    </h2>
                    
                    <p class="text-base text-body-color">
                        These are some of the major services which we provide to you.
                    </p>
                
                </div>
            </div>
        </div>
        
        <div class="flex flex-wrap justify-center items-center lg:px-[15vw]">
            {/* cards */}
            {
                OurServicesData?.map((dets,i)=>(
                    <div class="w-full md:w-1/2 lg:w-1/3 px-4 " key={i}>
                            <div
                            class="
                            p-10
                            md:px-7
                            xl:px-10
                            rounded-[20px]
                            bg-white
                            shadow-lg
                            hover:shadow-lg
                            mb-8
                            "
                            >
                            <div
                                class="
                                w-[70px]
                                h-[70px]
                                flex
                                items-center
                                justify-center
                                bg-blue-500
                                rounded-2xl
                                mb-2
                                "
                                >
                                <img src={dets.icon} alt="" className={'h-8 w-8 filter invert '} />
                            </div>
                            <h4 class="font-semibold text-xl text-dark mb-3">
                                {dets.title}
                            </h4>
                            <p class="text-body-color text-sm">
                                {dets.description}
                            </p>
                            </div>
                    </div>
                ))
            }
            
        </div>
    
    </section>


    <Footer/>

   </div>
  )
}

export default AboutUs