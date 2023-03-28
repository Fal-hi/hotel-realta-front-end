import AddButton from "@/components/addButton"
import { SearchInput } from "@/components/searchInput"
import React from "react"

const Employee = () => {
  const handleSearchChange = () => {}
  return (
    <div className="flex w-full font-display">
      <div className="flex flex-col items-start px-5 mt-10 w-full">
        <div className="flex flex-row w-full justify-between">
          <div>
            <SearchInput onChange={handleSearchChange} />
          </div>
          <div className="flex ">
            <AddButton onClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Employee
