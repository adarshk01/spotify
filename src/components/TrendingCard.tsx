import cover from "../assets/cover.jpg"
import { useState } from "react"

export function TrendingCard(){
    const [isHovered, setIsHovered] = useState(false)

    return(
        <div>
            <div className="h-16 w-96  mt-7 bg-rose-800 rounded text-white flex justify-between overflow-hidden cursor-pointer transition duration-300 
            hover:bg-rose-900"   onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}>
                <div className="flex">
                <div className="shadow-[black_10px_0px_100px_1px] hover:shadow-none "><img className="w-16 h-auto " src={cover} alt="" /></div>
                <div className="flex items-center pl-5 font-bold">Playlist 1</div>
                </div>
                {isHovered && <div className=" w-12 h-12 rounded-full bg-green-500 m-2 shadow-zinc-800 shadow-lg hover:scale-105 hover:bg-green-400">
                    <div className="flex justify-center items-center pt-3">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="bg-black " 
                    viewBox="0 0 24 24" 
                    stroke-width="1.5" 
                    stroke="currentColor" 
                    className="w-6 h-6 overflow-hidden text-black  ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>

                    </div>
                </div>}
            </div>
        </div>
    )
}