 import arijitCover from "../assets/coverArijit.jpg"

export function DailyMixCard(){
     

    return(
        <div>
            <div className="group h-72 w-48 hover:bg-stone-800 mt-5 rounded-md cursor-pointer transition duration-300 ease-in-out" style={{width:200}}>
                <div className=" relative p-3 ">
                    <img className="relative h-auto rounded-lg " style={{width:180}} src={arijitCover} alt="" />
                     
                    <div className=" absolute  left-32 
                     transition opacity-0 translate translate-y-1/2 group-hover:opacity-100 group-hover:translate-y-0
                     group-hover:duration-900"   style={{top:"8rem"}}>
                    <div className=" w-12 h-12 rounded-full bg-green-500 m-2 shadow-zinc-800 
                    shadow-lg hover:scale-105 hover:bg-green-400">
                    <div className="flex justify-center items-center pt-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="bg-black " 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    className="w-6 h-6 overflow-hidden text-black  ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>

                    </div>
                </div>
                    </div>
                </div>
                <div className="font-semibold text-white pl-3">
                    Daily Mix 1
                </div>
                <div className="text-sm pt-2 pl-3">
                    Arijit Singh, Pritam, vishal-shekhar and more
                </div>
            </div>
        </div>
    )
}