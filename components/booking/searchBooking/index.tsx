import { Search, User } from "@/components/icons"
import { OutlineButton } from "@/components/buttons/OutlineButton"
import Logo from "@/assets/image/logo.png"
import Image from "next/image"
import Link from "next/link"
export default function SearchBooking(props: any) {
  return (
    <>
      <div className="sticky top-0 bg-[#FBFBFB] h-6 z-50"></div>
      <div className="sticky top-6 z-50 w-[84vw] flex justify-between items-center bg-white shadow rounded-md px-4 py-4 text-[#1C2434]">
        {/* <Search stroke={"#7743DB"} /> */}
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
          <form className="flex justify-center items-center text-xs">
            <input type="date" name="checkin" id="checkin" />
            <input type="date" name="checkout" id="checkout" />
          </form>
          <p className="font-semibold">1 Room, 2 Guests</p>
          <OutlineButton title="Search" />
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
