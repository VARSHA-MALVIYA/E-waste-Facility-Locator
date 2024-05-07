import GadgetCard from "./GadgetCard"
import { ECardNavItems,ECardData } from "../data/data"
import { useState } from "react"

const Gadgets = () => {
  const [currCards,setCurrCards] = useState(ECardData[0]?.data)
  const [currNav,setCurrNav] = useState(ECardNavItems[0])

  function NavChangeHandler(item) {
    setCurrNav(item)
    ECardData.map((NavDets)=>{
      if(NavDets?.title == item) setCurrCards(NavDets?.data)
    })
  }
  
  return (
    <div className="w-full h-auto gap-3 p-3 justify-evenly md:py-16">

        <div className="max-w-2xl mx-auto text-center">
            <h2 className=" text-2xl  text-black font-bold mx-auto md:text-6xl lg:text-5xl">Some common categories of <span className="text-green-800">E-Waste</span></h2>
        </div>

        {/* nav bar */}
        <div className="lg:h-[10vh] h-[35vh] mx-auto gap-3 items-center m-5 justify-evenly  w-[70%] rounded-lg flex flex-wrap">
            {
                ECardNavItems.map((item,i) => (
                    <button
                      key={i}
                      className={`py-2 px-6 text-sm font-semibold hover:bg-gray-100 border-b-2 hover:text-black rounded-xl ${item==currNav ? 'border-blue-500' : 'border-white'} `}
                      onClick={()=>{NavChangeHandler(item)}}
                    > {item} </button>
                ))
            }
        </div>

        {/* card shown as per selection */}
        <div className="lg:h-[70vh] h-auto flex gap-4 p-3  justify-evenly flex-wrap">
          {
            currCards.map((cardData,i) => (
              <GadgetCard key={i} cardData={cardData} />
            ))
          }
        </div>
        
    </div>
  )
}

export default Gadgets