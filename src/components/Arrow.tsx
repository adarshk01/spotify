import { useState } from "react";
import { FilterBtn } from "./FilterBtn";

export function Arrow() {
  const [whiteCol, setWhiteCol] = useState<string | null>("button1");

  function getBtnCOl(buttonName: string) {
    setWhiteCol(buttonName);
  }

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-full bg-stone-950 opacity-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 h-7 pt-1 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="h-8 w-8 rounded-full bg-stone-950 opacity-50 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-7 h-7 pt-1 text-white pl-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="relative h-8 w-36 bg-white text-black font-semibold rounded-full text-sm transition duration-10 hover:scale-105 flex justify-center pb-2">
            <button className="pt-1 px-2 font-semibold">Explore Premium</button>
          </div>
          <div className="relative h-8 w-28 bg-stone-950 opacity-75 text-white font-semibold rounded-full text-sm flex justify-center pb-1 transition duration-10 hover:scale-105">
            <div className="pt-1 pr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <button className=" font-semibold text-white">Install App</button>
          </div>
          <div className="relative rounded-full bg-stone-950 opacity-75 w-8 flex justify-center items-center hover:scale-105 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
          </div>
          <div className="rounded-full bg-stone-950 opacity-75 w-8 flex justify-center text-white ">
            A
          </div>
        </div>
      </div>
      <div className={`flex gap-2`}>
        <FilterBtn
          onClick={function () {
            getBtnCOl("button1");
          }}
          name="All"
          width={40}
          bgColor={`${whiteCol == "button1" ? "white" : "#4f2724"}`}
          textCol={`${whiteCol == "button1" ? "black" : "white"}`}
        />

        <FilterBtn
          onClick={function () {
            getBtnCOl("button2");
          }}
          name="Music"
          width={60}
          bgColor={`${whiteCol == "button2" ? "white" : "#4f2724"}`}
          textCol={`${whiteCol == "button2" ? "black" : "white"}`}
        />

        <FilterBtn
          onClick={function () {
            getBtnCOl("button3");
          }}
          name="Podcasts"
          width={80}
          bgColor={`${whiteCol == "button3" ? "white" : "#4f2724"}`}
          textCol={`${whiteCol == "button3" ? "black" : "white"}`}
        />
      </div>
    </div>
  );
}
