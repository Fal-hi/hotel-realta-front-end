import Table from "@/components/Table"
import AddButton from "@/components/addButton"
import { SearchInput } from "@/components/searchInput"
import ShowingResult from "@/components/showingResult"
import React from "react"

const Employee = () => {
  const handleSearchChange = () => {}
  return (
    <div className="flex w-full font-poppins-regular">
      <div className="flex flex-col items-start px-5 mt-10 w-full">
        <div className="flex flex-row w-full justify-between">
          <div>
            <SearchInput onChange={handleSearchChange} />
          </div>
          <div className="flex ">
            <AddButton onClick={() => {}} />
          </div>
        </div>
        <div className="py-3">
          <ShowingResult from={0} to={0} totalData={0} />
        </div>
        <Table
          cols={[
            {
              title: "Departmen ID",
              render: (data: any) => {
                return <span>{data.id}</span>
              },
            },
          ]}
          data={[
            {
              id: 1,
            },
          ]}
        ></Table>
      </div>
    </div>
  )
}

export default Employee
