import { Search } from "@/components/icons"
import { OutlineButton } from "@/components/buttons/OutlineButton"

export default function SearchBooking(props: any) {
  return (
    <div className="flex justify-between items-center bg-white mt-8 shadow rounded-md px-4 py-4 text-[#1C2434]">
      <Search stroke={"#7743DB"} />
      <form>
        <input
          type="search"
          name="hotel"
          id="hotel"
          className="px-4 py-2 text-xs text-[#667085] bg-white border-[#8A92A6] border-2 rounded-md outline-none"
          placeholder="Search Hotel"
        />
      </form>
      <div className="text-[#7743DB]">|</div>
      <form className="flex justify-center items-center">
        <input type="date" name="checkin" id="checkin" />
        <input type="date" name="checkout" id="checkout" />
      </form>
      <div className="text-[#7743DB]">|</div>
      <p className="font-semibold">1 Room, 2 Guests</p>
      <OutlineButton title="Search" />
    </div>
  )
}
