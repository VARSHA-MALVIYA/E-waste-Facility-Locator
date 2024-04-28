import { WhyGiveEwasteData } from "../data/data"


const WhyGiveEwaste = () => {
  return (
    <div className="w-full px-8 py-16 bg-white">
    <div>
        <h2 className="py-5 mx-auto text-4xl font-extrabold text-center md:text-6xl lg:text-5xl">Why Give E-Waste?</h2>
    </div>

    <div className="flex flex-wrap justify-center w-full mt-6 gap-x-3 gap-y-6">
        {WhyGiveEwasteData?.map((info, i) => (
            <div key={i} className="group rounded-md border border-gray-200 relative overflow-hidden px-6 py-6 pb-5 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-[30vw] md:max-w-[30%] lg:max-w-[25%] select-none">
                <span className="absolute top-5 z-0 h-16 w-16 rounded-full bg-white transition-all duration-300 group-hover:scale-[10]"></span>
                <div className="relative z-10 max-w-md mx-auto">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-[#22c55eb9] transition-all duration-300 group-hover:bg-[#22c55e]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-white transition-all">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                    </span>
                    <div className="pt-2 space-y-2 text-base text-black transition-all duration-300 leading-2 group-hover:text-black">
                        <h4 className="text-xl font-semibold">{info.reason}</h4>
                        <p className="text-sm">{info.description}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>

  )
}

export default WhyGiveEwaste