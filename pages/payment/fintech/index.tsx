import Table from "@/components/Table"
import Typography from "@/components/Typography"
import variants from "@/components/Typography/textcss"
import AddButton from "@/components/addButton"
import Breadcumb from "@/components/breadcumb"
import { Pencil, Trash } from "@/components/icons"

import { SearchInput } from "@/components/searchInput"
import { getDataFintech } from "@/redux/PAYMENT/action/fintech"

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tableConstants } from "./listHeader"

const Fintech = () => {
  const { fint, refresh } = useSelector((state: any) => state.fintechReducers)
  const [search, setSearch] = useState("")
  const [isOpen, setIsOpen] = useState({
    fintech: "",
    id: 0,
    isShow: false,
  })
  const [isDelete, setIsDelete] = useState({
    fintech: "",
    id: 0,
    isShow: false,
  })
  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataFintech(search))
  }, [dispatch, search])

  return (
    <div>
      <Breadcumb child={"Fintech"} parent={"Dashboard"} detail={"Fintech"} />

      <div className="flex flex-col items-start mt-10 w-full">
        <div className="flex flex-row w-full justify-between mb-4">
          <div>
            <SearchInput onChange={handleSearchChange} />
          </div>
          <div className="flex ">
            <AddButton />
          </div>
        </div>

        <Table cols={tableConstants(setIsOpen, setIsDelete)} data={fint} />
      </div>
    </div>
  )
}

export default Fintech
