import "react-datepicker/dist/react-datepicker.css"
import Layout from "@/components/layout"
import { ChevronRight, Magnifier } from "@/components/icons"
import DatePicker from "react-datepicker"
import { useState } from "react"
import Link from "next/link"
import RoomGuest from "@/components/select/RoomGuest"
import RoomIndex from "@/components/select/RoomIndex"

export default function App() {
  const [checkinDate, setCheckinDate] = useState<Date | null>(
    new Date("2023/03/31")
  )
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(
    new Date("2023/04/01")
  )
  return (
    <Layout>
      <div className="w-[85%] mx-auto py-8">
        <div>
          <div className="rounded-lg">
            <img
              className="rounded-3xl w-[1170px] h-[500px]"
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=50"
              alt=""
            />
          </div>
          <div className="px-20">
            <div className="-my-16 w-full rounded-2xl bg-white shadow-lg px-5 py-8 flex items-center justify-between relative">
              <div className="flex">
                <span className="inline-flex items-center pl-3 text-sm  border-gray-300 rounded-l-lg  dark:text-gray-300 ">
                  <Magnifier />
                </span>
                <input
                  type="text"
                  className="rounded-none rounded-r-lg  text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:placeholder-gray-300 dark:text-white focus:border-gray-300 focus:outline-none focus:ring-0 active:border-gray-300 "
                />
              </div>
              <div className="border border-l-[#D8DCE8] h-6"></div>
              <div className="flex justify-center items-center text-md">
                <DatePicker
                  selected={checkinDate}
                  onChange={date => setCheckinDate(date)}
                  selectsStart
                  startDate={checkinDate}
                  endDate={checkoutDate}
                  dateFormat="d MMMM, yyyy"
                  className="px-2 py-1  w-44  text-md text-center text-[#323437] bg-white  rounded-md outline-none mr-2"
                  popperPlacement="bottom-start"
                />
                <DatePicker
                  selected={checkoutDate}
                  onChange={date => setCheckoutDate(date)}
                  selectsEnd
                  startDate={checkinDate}
                  endDate={checkoutDate}
                  minDate={checkinDate}
                  dateFormat="d MMMM, yyyy"
                  className="px-2 w-44 py-1 text-md text-center text-[#323437] bg-white  rounded-md outline-none"
                  popperPlacement="bottom-start"
                />
              </div>
              <div className="border border-l-[#D8DCE8] h-6"></div>
              <div className="px-5">
                <RoomIndex />
              </div>
              <div
                className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
                id="nav-content"
              >
                <div className="auth flex items-center w-full md:w-full">
                  <button className="text-gray-800  px-5 py-2 rounded-xl bg-[#E7F2FF]  hover:bg-gray-100 hover:text-gray-700">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-36">
          <div className="flex justify-between items-center mb-5">
            <div className="text-xl font-poppins-semibold">Hotel Populer</div>
            <Link href="/booking" target="_blank">
              <div className="flex gap-2 justify-end items-center text-xs text-textPurple cursor-pointer">
                <span>Lihat Semua</span>
                <ChevronRight width="7" fill="#7743DB" />
              </div>
            </Link>
          </div>
          <div>
            <div className="grid grid-rows-4 grid-flow-col gap-5">
              <div className="row-span-4 bg-slate-400 rounded-lg ">
                <img
                  className="rounded-lg "
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=50"
                  alt=""
                />
              </div>
              <div className="row-span-2 bg-slate-400 rounded-lg h-30">
                {" "}
                <img
                  className="rounded-lg h-30"
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=50"
                  alt=""
                />
              </div>
              <div className="row-span-2 bg-slate-400 rounded-lg h-30">
                <img
                  className="rounded-lg h-30"
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=50"
                  alt=""
                />
              </div>
              <div className="row-span-2 bg-slate-400 rounded-lg">
                <img
                  className="rounded-lg h-30"
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=50"
                  alt=""
                />
              </div>
              <div className="row-span-2 bg-slate-400 rounded-lg">
                <img
                  className="rounded-lg h-30"
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=50"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14">
          <div className="flex justify-between items-center mb-5">
            <div className="text-xl font-poppins-semibold">Resto Populer</div>
            <Link href="/resto/restomenus" target="_blank">
              <div className="flex gap-2 justify-end items-center text-xs text-textPurple cursor-pointer">
                <span>Lihat Semua</span>
                <ChevronRight width="7" fill="#7743DB" />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div>
            <img
                  className="rounded-lg h-30"
                  src="https://images.unsplash.com/photo-1645696329525-8ec3bee460a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80"
                  alt=""
                />
            </div>
            <div>
            <img
                  className="rounded-lg h-30"
                  src="https://images.unsplash.com/photo-1645696329525-8ec3bee460a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80"
                  alt=""
                />
            </div>
            <div>
            <img
                  className="rounded-lg h-30"
                  src="https://images.unsplash.com/photo-1645696329525-8ec3bee460a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80"
                  alt=""
                />
            </div>
            <div>
            <img
                  className="rounded-lg h-30"
                  src="https://images.unsplash.com/photo-1645696329525-8ec3bee460a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1029&q=80"
                  alt=""
                />
            </div>

          </div>
        </div>
      </div>
    </Layout>
  )
}
