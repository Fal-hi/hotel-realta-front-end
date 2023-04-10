import Table from "@/components/Table"
import AddButton from "@/components/addButton"
import Breadcumb from "@/components/breadcumb"
import { Pagination } from "@/components/pagination"
import { SearchInput } from "@/components/searchInput"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tableConstants } from "./listHeader"
import { getDataTransaction } from "@/redux/PAYMENT/action/transaction"
import { useForm } from "react-hook-form"

const Transaction = () => {
  const { transaction, refresh } = useSelector(
    (state: any) => state.transactionReducers
  )
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(5)
  const [type, setType] = useState("")

  const handleSearch = (e: any) => {
    const code = e.target.value
    
    if (code !== null && code !== undefined) {

    const orderType = code.match(/(.*)#/)?.[1]

    switch (orderType) {
      case "TRX":
        const transactionCode = code.replace("TRX#", "")
        setSearch(transactionCode)
        break
      case "trx":
        const transaction = code.replace("trx#", "")
        setSearch(transaction)
        break
      default:
        break
    }
  }
  }

  const handleType = (e: any) => {
    setType(e.target.value)
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataTransaction(search, page, limit, type))
  }, [dispatch, refresh, search, page, limit, type])

  // console.log("tes->", transaction.page);

  return (
    <div>
      <Breadcumb
        child={"Transaction"}
        parent={"Dashboard"}
        detail={"FinTransaction"}
      />
      <div className="py-3"></div>
      <div>
        {/* <SearchInput onChange={handleSearchChange} /> */}
        <div className="w-full">
          <div className="flex">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
              Your Email
            </label>
            <select
              className="flex-shrink-0 z-10 inline-flex items-center py-3 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
              onChange={handleType}
            >
              <option value="">Payment Type</option>
              <option value="TP">TP</option>
              <option value="TRB">TRB</option>
              <option value="ORM">ORM</option>
            </select>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            ></div>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block p-3 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                placeholder="Search"
                onChange={handleSearch}
              />
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
      <div className="flex flex-col items-start mt-4 w-full">
        <Table cols={tableConstants()} data={transaction.data}>
          <Pagination
            pagination={{ totalPage: transaction.totalPage, page: page }}
            setPage={setPage}
          />
        </Table>
      </div>
    </div>
  )
}

export default Transaction
