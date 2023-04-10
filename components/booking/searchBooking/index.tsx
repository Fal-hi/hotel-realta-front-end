import { User } from "@/components/icons"
import { OutlineButton } from "@/components/buttons/OutlineButton"
import Logo from "@/assets/image/logo.png"
import Image from "next/image"
import Link from "next/link"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react"
import RoomGuest from "@/components/select/RoomGuest"

export default function SearchBooking(props: any) {
  const [checkinDate, setCheckinDate] = useState<Date | null>(
    new Date("2023/03/31")
  )
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(
    new Date("2023/04/01")
  )

  return (
    <>
      <div className="sticky top-0 bg-[#FBFBFB] h-6 z-50"></div>
      <div className="sticky top-6 z-50 flex justify-between items-center bg-white shadow rounded-md px-4 py-4 text-[#1C2434]">
        <figure>
          <Image
            width={220}
            height={100}
            src={Logo}
            alt="Logo Realta"
            className=""
          />
        </figure>
        <div className="flex gap-4 items-center -ml-40">
          <form>
            <input
              type="search"
              name="hotel"
              id="hotel"
              className="px-4 py-2 text-xs text-[#667085] bg-white border-[#8A92A6] border-2 rounded-md outline-none"
              placeholder="Search Hotel"
            />
          </form>
          <div className="flex justify-center items-center text-xs">
            <DatePicker
              selected={checkinDate}
              onChange={date => setCheckinDate(date)}
              selectsStart
              startDate={checkinDate}
              endDate={checkoutDate}
              dateFormat="d MMMM, yyyy"
              className="px-3 py-1 w-32 text-xs text-[#667085] bg-white border-[#8A92A6] border-2 rounded-md outline-none mr-2"
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
              className="px-3 py-1 w-32 text-xs text-[#667085] bg-white border-[#8A92A6] border-2 rounded-md outline-none"
              popperPlacement="bottom-start"
            />
          </div>
          <RoomGuest />
          <OutlineButton title="Search" padding="0.3rem" />
        </div>
        <Link href="/" className="flex gap-1 items-center">
          <User width="20" stroke="#7743DB" />
          <span className="text-xs font-semibold text-textPurple mr-2">
            Sign In
          </span>
        </Link>
      </div>
    </>
  )
}
