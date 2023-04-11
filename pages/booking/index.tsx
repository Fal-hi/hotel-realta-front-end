import CardBooking from "@/pages/booking/cards"
import SearchBooking from "@/components/booking/searchBooking"
import SidebarBooking from "@/components/booking/sidebarBooking"
import BookingDetails from "./details"
import ModifyBooking from "./modify"
import InvoiceBooking from "./invoice"
import Layout from "@/components/layout"

const Booking = () => {
  return (
    <Layout>
     <main className="w-[85%] mx-auto font-poppins-regular">
      <SearchBooking />
      <div className="flex gap-4 items-start mt-4">
        <SidebarBooking />
        <CardBooking />
      </div>
    </main>
  </Layout>
   
  )
}

export default Booking
