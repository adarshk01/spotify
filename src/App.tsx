import { SongCard } from "./components/SongCard";
import { Arrow } from "./components/Arrow";
import { TrendingCard } from "./components/TrendingCard";
import "./App.css";
import { DailyMixCard } from "./components/DailyMixCard";

function App() {
  let itemList = [];
  for (let i = 0; i < 6; i++) {
    if (i > 2) {
      itemList.push(
        <div key={i} style={{ marginTop: "-0.9375rem" }}>
          <TrendingCard />
        </div>
      );
    } else {
      itemList.push(
        <div key={i}>
          <TrendingCard />
        </div>
      );
    }
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="relative grid grid-cols-6 grid-rows-10 text-slate-300 p-2">
        <div
          className="bg-zinc-900 col-span-1  p-5 rounded-lg row-span-2 text-white h-30"
          style={{
            backgroundColor: "#121212",
            paddingRight: 50,
            width: "calc(100% + 25px)",
            marginBottom: 25,
          }}
        >
          <div className="pb-5 flex">
            <div
              className="pr-5  flex justify-start align-center"
              style={{ paddingTop: 2 }}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="">Home</div>
          </div>
          <div className="  flex" style={{}}>
            <div
              className="pr-5  flex justify-start align-center"
              style={{ paddingTop: 2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>Search</div>
          </div>
        </div>

        <div
          className="bg-gradient-to-t from-stone-900 from-50% to-rose-950 col-span-5 row-span-10 ml-10 p-5 rounded-lg"
          style={{ marginLeft: 35 }}
        >
          <Arrow />

          <div className="grid grid-cols-3 grid-row-2">{itemList}</div>
          <div className="flex justify-between mt-10 ">
            <div className="font-bold text-white text-2xl hover:underline hover:cursor-pointer w-fit">
              Made For User
            </div>
            <div className="cursor-pointer hover:underline text-sm font-semibold">
              Show all
            </div>
          </div>
          <div className="flex">
            <DailyMixCard />
            <DailyMixCard />
            <DailyMixCard />
            <DailyMixCard />
            <DailyMixCard />
            <DailyMixCard />
          </div>
        </div>
        <div
          className="bg-stone-900 col-span-1 col-start-1 rounded-lg row-span-8 p-5 flex justify-between"
          style={{
            backgroundColor: "#121212",
            // paddingRight: 50,
            width: "calc(100% + 25px)",
            // height: "calc(100% + 10px)",
            marginTop: -17,
          }}
        >
          <div className="font-semibold flex gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                />
              </svg>
            </div>
            <div>Your Library</div>
          </div>
          <div className="flex gap-5">
            <div
              className=" rounded-full h-8 w-8 hover:bg-stone-900 flex justify-center align-center pt-1 "
              style={{ top: -10 }}
            >
              <div className=" ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>

            <div className="rounded-full h-8 w-8  hover:bg-stone-900 flex justify-center align-center pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SongCard />
      </div>
    </div>
  );
}

export default App;
