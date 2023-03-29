import Typography from "@/components/Typography"
import variants from "@/components/Typography/textcss"
import AddButton from "@/components/addButton"
import Breadcumb from "@/components/breadcumb"
import { SearchInput } from "@/components/searchInput"
import { getDataUserAccounts } from "@/redux/PAYMENT/action/userAccounts"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tableConstants } from "./listHeader"
import Table from "@/components/Table"

const Account = () => {
  const { accounts, refresh } = useSelector(
    (state: any) => state.accountReducers
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataUserAccounts())
  }, [dispatch])

  return (
    <div className="">
      <div>
        <Breadcumb child={"Bank"} parent={"Dashboard"} detail={"Bank"} />
      </div>
      <div className="flex flex-col items-start mt-10 w-full">
        <div className="flex flex-row w-full justify-between">
          <div>
            <SearchInput />
          </div>
          <div className="flex ">
            <AddButton />
          </div>
        </div>
        <div className="py-3"></div>
        <Table cols={tableConstants()} data={accounts} />
      </div>
    </div>
  )
}

export default Account
