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
    <div className="w-full h-auto gap-3 p-3 border-2 border-black justify-evenly">

        {/* nav bar */}
        <div className=" h-[10vh] mx-auto gap-3 items-center m-5 justify-evenly  w-[70%] rounded-lg flex">
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
        <div className="h-[70vh] flex gap-3 p-3  justify-evenly">
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