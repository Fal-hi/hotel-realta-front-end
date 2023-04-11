import { Magnifier, User } from "@/components/icons"
import { OutlineButton } from "@/components/buttons/OutlineButton"
import Logo from "@/assets/image/logo.png"
import Image from "next/image"
import Link from "next/link"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react"
import RoomGuest from "@/components/select/RoomGuest"

export default function Search(props: any) {
  const [checkinDate, setCheckinDate] = useState<Date | null>(
    new Date("2023/03/31")
  )
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(
    new Date("2023/04/01")
  )

  return (
    <>
      <div className="sticky top-0 bg-[#FBFBFB] h-6 z-50"></div>
      <div className="sticky top-6 z-50 flex justify-between items-center bg-white  rounded-md px-4 py-2 text-[#1C2434]">
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
        <div className="flex">

          <input
            type="text"
            className="rounded-none rounded-r-lg  text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:placeholder-gray-300 dark:text-white focus:border-gray-300 focus:outline-none focus:ring-0 active:border-gray-300 "
          />
        </div>
        <div className="border border-l-[#D8DCE8] h-6"></div>
        <div className="px-5"></div>
        <div
          className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
          id="nav-content"
        >
          <div className="auth flex items-center w-full md:w-full">
            <button className="text-gray-800  px-5 py-2 rounded-xl bg-[#E7F2FF]  hover:bg-gray-100 hover:text-gray-700">
              Cari
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
