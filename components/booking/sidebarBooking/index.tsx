import { OutlineButton } from "@/components/buttons/OutlineButton"
import { Filter } from "@/components/icons"
import InputCheckbox from "../../input/InputCheckbox"
import PriceRange from "../../select/PriceRange"

const SidebarBooking = (props: any) => {
  const handlePriceRangeChange = (minPrice: number, maxPrice: number) => {
    // Do something with the selected price range
  }

  const hotelFacilities = [
    {
      id: 1,
      checkbox: <InputCheckbox width="13px" height="13px" />,
      faci: "Parking Facility",
    },
    {
      id: 2,
      checkbox: <InputCheckbox width="13px" height="13px" />,
      faci: "Security",
    },
    {
      id: 3,
      checkbox: <InputCheckbox width="13px" height="13px" />,
      faci: "Restaurant",
    },
    {
      id: 4,
      checkbox: <InputCheckbox width="13px" height="13px" />,
      faci: "Swimming Pool",
    },
    {
      id: 5,
      checkbox: <InputCheckbox width="13px" height="13px" />,
      faci: "Gym",
    },
  ]

  return (
    <aside className="fixed top-26 text-[#1C2434] max-w-max h-screen bg-white shadow rounded px-4 py-3">
      <div className="flex justify-between items-start">
        <div className="flex gap-1 items-center mb-4">
          <Filter width="15" />
          <h1 className="font-semibold">FILTERS</h1>
        </div>
        <OutlineButton title="Clear All" padding="0.3rem 0.2rem" />
      </div>
      <h3 className="font-semibold text-sm mt-2 mb-2">Price Range</h3>
      <PriceRange onChange={handlePriceRangeChange} />
      <h3 className="font-semibold text-sm mt-4 mb-2">Hotel Facilities</h3>
      <ul>
        {hotelFacilities.map(item => (
          <li key={item.id} className="flex gap-2 items-center mb-3 ml-1">
            {item.checkbox}
            <p className="text-xs font-semibold">{item.faci}</p>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default SidebarBooking
