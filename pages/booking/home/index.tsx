import CardBooking from "@/components/booking/cardBooking"
import SearchBooking from "@/components/booking/searchBooking"
import SidebarBooking from "@/components/booking/sidebarBooking"
import BookingDetails from "../details"

const HomeBooking = () => {
  return (
    <main className="w-[85%] mx-auto font-poppins-regular">
      <SearchBooking />
      {/* <div className="flex gap-4 items-start mt-4">
        <SidebarBooking />
        <CardBooking />
      </div> */}
      <BookingDetails />
    </main>
  )
}

export default HomeBooking
