import CardBooking from "@/components/booking/cardBooking"
import SearchBooking from "@/components/booking/searchBooking"
import SidebarBooking from "@/components/booking/sidebarBooking"

const HomeBooking = () => {
  return (
    <main className="w-[85%] mx-auto font-poppins-regular">
      <SearchBooking />
      <div className="flex gap-8 items-start">
        <SidebarBooking />
        <CardBooking />
      </div>
    </main>
  )
}

export default HomeBooking
