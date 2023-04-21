import React, { useState, useEffect } from "react"
import CardBooking from "@/pages/booking/cards"
import SearchBooking from "@/components/booking/searchBooking"
import SidebarBooking from "@/components/booking/sidebarBooking"

const Booking = () => {
  const [filterHead, setFilterHead] = useState({
    search: "",
    checkinDate: "",
    checkoutDate: "",
  })

  useEffect(() => {}, [filterHead])

  return (
    <main className="w-[85%] mx-auto font-poppins-regular">
      <SearchBooking setFilterHead={setFilterHead} />
      <div className="flex gap-4 items-start mt-4">
        {/* <SidebarBooking /> */}
        <CardBooking filterHead={filterHead} />
      </div>
    </main>
  )
}

export default Booking
