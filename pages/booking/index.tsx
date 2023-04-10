import CardBooking from "@/pages/booking/cards"
import SearchBooking from "@/components/booking/searchBooking"
import SidebarBooking from "@/components/booking/sidebarBooking"
import BookingDetails from "./details"
import ModifyBooking from "./modify"
import InvoiceBooking from "./invoice"

const Booking = () => {
  return (
    <main className="w-[85%] mx-auto font-poppins-regular">
      <SearchBooking />
      <div className="flex gap-4 items-start mt-4">
        <SidebarBooking />
        <CardBooking />
      </div>
    </main>
  )
}

export default Booking
