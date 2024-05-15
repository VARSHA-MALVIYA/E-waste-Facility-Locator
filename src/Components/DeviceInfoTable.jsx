

const DeviceInfoTable = ({deviceDetails}) => {
    const name = "Redmi Note 7s";
    const category = "Mobile";
    const modelNumber = '7s'
    const greenPoints = 50;
    const preciousMetals = [
        {
            name:"Gold",
            weight:20,
        },
        {
            name:"Gold",
            weight:20,
        },
        {
            name:"Gold",
            weight:20,
        }
    ]
  return (
    <div className=" w-full sm:w-[30%] h-auto border  border-gray-600 shadow-lg shadow-slate-300  ">
        <p className='w-full text-xl font-semibold text-center text-white bg-[#22C55E] '> Waste Details </p>

        <table  className="w-full bg-white ">

        <tbody className='w-full '>

            <tr className="overflow-hidden font-montserrat">
            <td className="px-4 py-2 font-semibold text-gray-800">Name:</td>
            <td className="px-4 py-2">{deviceDetails?.name}</td>
            </tr>

            <tr className="overflow-hidden font-montserrat">
            <td className="px-4 py-2 font-semibold text-gray-800">Category:</td>
            <td className="px-4 py-2">{deviceDetails?.category}</td>
            </tr>

            <tr className="overflow-hidden font-montserrat">
            <td className="px-4 py-2 font-semibold text-gray-800">Model Number:</td>
            <td className="px-4 py-2">{deviceDetails?.modelNumber}</td>
            </tr>

            <tr className="overflow-hidden font-montserrat">
            <td className="px-4 py-2 font-semibold text-gray-800">Green Points:</td>
            <td className="px-4 py-2">{deviceDetails?.greenPoints}</td>
            </tr>

        </tbody>

        </table>

        <p className='w-full text-xl font-semibold text-center text-white bg-[#22C55E] '> Precious Metals </p>

        <table className='w-full bg-white '>
            

        <tbody className='w-full '>

            <tr className='text-lg font-semibold text-center border-b border-gray-200 font-montserrat'>
                <td>Name</td>
                <td>Weight</td>
            </tr>

            {
                deviceDetails?.preciousMetals.map((metal)=>(
                    <tr className=' text-center font-montserrat' >
                        <td> {metal.name} </td>
                        <td> {metal.weight} </td>
                    </tr>
                ))
            }

        </tbody>

        </table>
    </div>
  )
}

export default DeviceInfoTable