

const DeviceNotFoundForm = () => {
  return (
    <form class="  w-[80%] h-full flex flex-col  bg-white   ">

        <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="DeviceName" id="deviceName" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="deviceName" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Device Name</label>
        </div>

        <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="DeviceCategory" id="DeviceCategory" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="DeviceCategory" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Device Category</label>
        </div>

        <div class="relative z-0 w-full mb-5 group">
            <input type="text" name="ModelNumber" id="ModelNumber" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
            <label for="ModelNumber" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Model Number</label>
        </div>

        <div class=" w-full ">
            <textarea name="" id="" placeholder="Description"  className="w-full p-1 rounded-lg bg-[#EFF6FF] outline-none "></textarea>
        </div>

        <label htmlFor="" className="text-sm text-gray-800">Device Image :</label>
        <div
         class="bg-gray-50 w-full text-center px-4 rounded  flex flex-col items-center justify-center cursor-pointer border-2 border-gray-400 border-dashed mx-auto font-[sans-serif]">

            <div class="py-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10  fill-gray-600 inline-block" viewBox="0 0 32 32">
                <path
                    d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                    data-original="#000000" />
                <path
                    d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                    data-original="#000000" />
                </svg>
                <h4 class="text-base font-semibold text-gray-600">Drag and drop files here</h4>
            </div>
            <hr class="w-full border-gray-400 my-1" />
            <div class="py-1">
                <input type="file" id='uploadFile1' class="hidden" />
                <label for="uploadFile1"
                class="block px-6 py-2.5 rounded text-gray-600 text-sm tracking-wider font-semibold border-none outline-none bg-gray-200 hover:bg-gray-100">Browse Files</label>
                <p class="text-xs text-gray-400 mt-4">PNG, JPEG, JPG are Allowed.</p>
            </div>

        </div>
        
        <button  class="w-[80%] my-2 block items-center justify-center  px-3 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
            SUBMIT
        </button>
        
    </form>
  )
}

export default DeviceNotFoundForm