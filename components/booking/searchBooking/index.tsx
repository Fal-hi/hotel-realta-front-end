/* eslint-disable react/display-name */
import { OutlineButton } from "@/components/buttons/OutlineButton"
import Logo from "@/assets/image/logo.png"
import Image from "next/image"
import Link from "next/link"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react"
import RoomGuest from "@/components/select/RoomGuest"
import { useForm } from "react-hook-form"
import { format } from "date-fns"
import Person from "@/public/person1.jpg"
import BgButton from "@/components/buttons/BgButton"

export default function SearchBooking(props: any) {
  const [checkinDate, setCheckinDate] = useState<Date | null>(
    new Date("2023/04/01")
  )
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(
    new Date("2023/04/02")
  )

  function formatDate(date: string | undefined): string | undefined {
    if (date !== undefined && date !== "") {
      return format(new Date(date), "yyyy-MM-dd")
    }
    return undefined
  }

  const checkin = checkinDate
    ?.toLocaleString("id-ID", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-")

  const checkout = checkoutDate
    ?.toLocaleString("id-ID", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .replace(/\//g, "-")

  const handleSearch = (data: any) => {
    const dataForm = {
      search: data.hotel,
      checkinDate: checkin,
      checkoutDate: checkout,
    }
    props.setFilterHead(dataForm)
  }

  const handleError = () => {}

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({})

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
        <form
          className="flex gap-4 items-center -ml-40"
          onSubmit={handleSubmit(handleSearch, handleError)}
        >
          <input
            type="search"
            id="hotel"
            className="px-4 py-2 text-xs text-[#667085] bg-white border-[#8A92A6] border-2 rounded-md outline-none"
            placeholder="Search Hotel"
            {...register("hotel")}
          />
          <div className="flex justify-center items-center text-xs">
            <input
              type="date"
              value={formatDate(checkin)}
              onChange={(e: any) => setCheckinDate(e.target.value)}
              className="px-3 py-1 w-32 text-xs text-[#667085] bg-white border-[#8A92A6] border-2 rounded-md outline-none mr-2"
            />
            <input
              type="date"
              value={formatDate(checkout)}
              onChange={(e: any) => setCheckoutDate(e.target.value)}
              className="px-3 py-1 w-32 text-xs text-[#667085] bg-white border-[#8A92A6] border-2 rounded-md outline-none mr-2"
            />
          </div>
          <RoomGuest />
          <BgButton
            type="submit"
            title="Search"
            padding="0.3rem"
            textSize="8px"
          />
        </form>
        <Link href="/" className="flex gap-1 items-center">
          <figure>
            <Image
              src={Person}
              width={10}
              height={10}
              alt="Person"
              className="w-6 h-auto rounded-full mr-1"
            />
          </figure>
          <span className="text-xs font-semibold text-textPurple mr-2">
            Syaifal Illahi
          </span>
        </Link>
      </div>
    </>
  )
}
