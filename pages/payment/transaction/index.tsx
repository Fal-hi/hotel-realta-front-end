import Table from "@/components/Table"
import Typography from "@/components/Typography"
import variants from "@/components/Typography/textcss"
import AddButton from "@/components/addButton"
import Breadcumb from "@/components/breadcumb"
import { Pagination } from "@/components/pagination"
import { SearchInput } from "@/components/searchInput"

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tableConstants } from "./listHeader"
import { getDataTransaction } from "@/redux/PAYMENT/action/transaction"

const Transaction = () => {
  const { transaction, refresh } = useSelector(
    (state: any) => state.transactionReducers
  )
  const [search, setSearch] = useState("")
  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataTransaction())
  }, [dispatch, search])

  return (
    <div>
      <Breadcumb child={"Fintech"} parent={"Dashboard"} detail={"Fintech"} />
      <div className="flex flex-col items-start mt-10 w-full">
        <div className="flex flex-row w-full justify-between">
          <div>
            <SearchInput onChange={handleSearchChange} />
          </div>
          <div className="flex ">
            <AddButton />
          </div>
        </div>
        <div className="py-3"></div>
        <Table cols={tableConstants()} data={transaction}>
          <Pagination setPage={10} pagination={{totalPage: 100, page:1}} />
        </Table>
      </div>
    </div>
  )
}

export default Transaction
