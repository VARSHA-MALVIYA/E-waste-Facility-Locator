import React,{useState,useEffect} from 'react'
import Map from './Map';
import SearchDevice from '../Pages/SearchDevice';
import AppointmentTable from '../Pages/AppointmentTable';


const Stepper = () => {
    
    const [currState, setCurrState] = useState(1);

    const NextHandler = ()=>{
        setCurrState((prevState)=>{
            if(prevState == NavData.length){
                return
            }
            else{
                return prevState+1;
            }
        })
    }
    
    const NavData = [
        {
            title:"Select E-Waste",
            Component:<SearchDevice NextHandler={NextHandler} />
        },
        {
            title:"Select Center",
            Component:<Map NextHandler={NextHandler} />
        },
        {
            title:"Book Appointment",
            Component:<AppointmentTable NextHandler={NextHandler} />
        },
    ]
    
    const [CurrComponent,setCurrComponent] = useState(NavData[currState-1].Component);

    
    

    useEffect(() => {
        setCurrComponent(NavData[currState-1].Component)
    }, [currState])
    

  return (
    <div className='w-full h-full p-5 mx-auto ' >

        {/* stepper navbar */}
        <div className='relative flex flex-col w-full h-auto gap-5 p-3 '>
            
            <div className='flex justify-evenly' >
                {
                    NavData.map((obj,i)=>(
                        <div className='z-10 flex flex-col items-center'>
                            <div className={`flex items-center justify-center w-10 h-10 font-semibold   rounded-full ${i+1 <= currState ? 'bg-blue-600 text-white':'bg-white text-black'} `}>{i+1}</div>
                            <p>{obj.title}</p>
                        </div>
                    ))
                }
            </div>

            <div className='h-0.2 w-[50%] border-dashed border-gray-400 border-[1.5px] absolute top-[35%] left-[50%] translate-x-[-52%] ' />

        </div>
        
        <div className='flex flex-col items-center w-full h-auto mt-2'>

            {
                CurrComponent
            }
            
            {/* <button className={`px-3 py-2 bg-blue-400 ${currState == NavData.length && 'hidden' } `}
                onClick={NextHandler}
            > Next</button> */}
            
            {/* <button  class={`inline-flex items-center justify-center w-full px-8 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0 ${currState == NavData.length && 'hidden' } `}  onClick={NextHandler} >
                Proceed
                <svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button> */}
            
        </div>
        
    </div>
  )
}

export default Stepper