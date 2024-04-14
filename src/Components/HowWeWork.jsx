import GPIcon from '../assets/GPIcon.png'
import LaptopAni from '../assets/laptop_ani.gif'
import CentreAni from '../assets/centre_ani.gif'
import { useSelector } from 'react-redux'

const HowWeWork = () => {
    const {user} = useSelector(store => store.Auth);
    console.log("got this user => ",user);

  return (
    <div class="bg-white">
        <div class="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

            <div class="text-center">
                <p class="mt-4 text-sm leading-7 text-gray-500 font-regular">
                    STEPS
                </p>
                <h3 class="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                    How it <span class="text-indigo-600">Works?</span>
                </h3>

            </div>

            <div class="mt-20 w-full">
                <ul class="w-full">

                    <li class=" w-full text-left mb-10">
                        <div class="flex flex-row items-start">
                            <div class="flex flex-col items-center justify-center mr-5">
                                <div
                                    class="flex items-center justify-center h-20 w-20 rounded-full  text-white border border-black text-xl font-semibold">
                                    <img src={LaptopAni} alt="" className='flex items-center justify-center object-cover h-[50%] w-[50%] ' />
                                </div>
                                <span class="text-gray-500">STEP 1</span>
                            </div>
                            <div class="bg-gray-100 p-5 pb-10 w-full">
                                <h4 class="text-lg leading-6 font-semibold text-gray-900">Select E-waste</h4>
                                <p class="mt-2 text-base leading-6 text-gray-500">
                                    Select the E-waste which you want to give to us.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li class="text-left mb-10">
                        <div class="flex flex-row items-start">
                            <div class="flex flex-col items-center justify-center mr-5">
                                <div
                                    class="flex items-center justify-center h-20 w-20 rounded-full  text-white border border-black text-xl font-semibold">
                                    <img src={CentreAni} alt="" className='flex items-center justify-center object-cover h-[50%] w-[50%] ' />
                                </div>
                                <span class="text-gray-500">STEP 2</span>
                            </div>
                            <div class="bg-gray-100 p-5 pb-10 ">
                                <h4 class="text-lg leading-6 font-semibold text-gray-900">Select Centre </h4>
                                <p class="mt-2 text-base leading-6 text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                                    suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                </p>
                            </div>
                        </div>
                    </li>

                    <li class="text-left mb-10">
                        <div class="flex flex-row items-start">
                            <div class="flex flex-col items-center justify-center mr-5">
                                <div
                                    class="flex items-center justify-center h-20 w-20 rounded-full  border-black text-white border  text-xl font-semibold">
                                    <img src={GPIcon} alt="" className='flex items-center justify-center object-cover h-[50%] w-[50%] ' />
                                </div>
                                <span class="text-gray-500">STEP 3</span>
                            </div>
                            <div class="bg-gray-100 p-5 pb-10 ">
                                <h4 class="text-lg leading-6 font-semibold text-gray-900">
                                        Earn GreenPoints
                                 </h4>
                                <p class="mt-2 text-base leading-6 text-gray-500">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                                    suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                </p>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>

        </div>
    </div>
  )
}

export default HowWeWork