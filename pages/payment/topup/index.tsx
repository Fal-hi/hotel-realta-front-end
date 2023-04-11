import Table from "@/components/Table"
import Typography from "@/components/Typography"
import variants from "@/components/Typography/textcss"
import Breadcumb from "@/components/breadcumb"
import { Pagination } from "@/components/pagination"
import { SearchInput } from "@/components/searchInput"

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tableConstants } from "./listHeader"
import { getDataTopUp, getDataTransaction } from "@/redux/PAYMENT/action/transaction"
import { Chevron, Plus } from "@/components/icons"
import { Modal } from "@/components/modal"
import Send from "@/components/icons/Send"
import FromSend from "./from/FromSend"
import { getDataUserAccounts } from "@/redux/PAYMENT/action/userAccounts"
import formatRupiah from "@/functions/formatRupiah"
import FromAddSaldo from "./from/FromAnddsaldo"
import CardSaldo from "@/components/icons/cardSaldo"

const TopUp = () => {
  const [isOpen, setIsOpen] = useState({
    isShow: false,
  })
  const [isAdd, setIAdd] = useState({
    data: 0,
    isShow: false,
  })
  const { transaction, refresh } = useSelector(
    (state: any) => state.transactionReducers
  )
  const { accounts, refreshs } = useSelector(
    (state: any) => state.accountReducers
  )

  const [search, setSearch] = useState("")
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(5)
  const [type, setType] = useState('')
  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }

  const handleAddSend = () => {
    setIsOpen({ isShow: true })
  }

  const handleAddSaldo = () => {
    setIAdd({
      data:
        accounts[0].paymentName === "Realtapay" ? accounts[0].accountNumber : 0,
      isShow: true,
    })
  }


  const handleClose = () => {
    setIsOpen(prev => {
      return { ...prev, isShow: false }
    })

    setIAdd(prev => {
      return { ...prev, isShow: false }
    })
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataUserAccounts())
    dispatch(getDataTransaction(search, page, limit, type))
  }, [dispatch, refresh, search, page, limit, type])

  return (
    <div>
      <Breadcumb child={"Top Up"} parent={"Dashboard"} detail={"Topup"} />

      <div className="flex flex-col items-start mt-10  w-full">
        <div className="flex w-full gap-4">
          <div className="w-full h-[108px] items-center justify-center rounded-lg bg-[#7743DB] px-6 py-6 cursor-pointer shadow-md">
            <p className="text-white">Saldo RealtaPay</p>
            <Typography
              variant={variants.xlsemibold}
              customClass={"text-white"}
            >
              {accounts[0]?.paymentName === "Realtapay"
                ? formatRupiah(accounts[0]?.balance)
                : null}
            </Typography>
          </div>
        </div>
        <div className="flex flex-row w-full mt-5 justify-between">
          <div>
          <SearchInput onChange={handleSearchChange} />
          </div>
          <div className="flex gap-3">
            <div
              className="flex items-center rounded-lg  px-3 cursor-pointer shadow-md"
              onClick={handleAddSaldo}
            >
              <Plus stroke="#3B3D40" width="20px" height="20px" />
              <Typography variant={variants.xsmedium} customClass={"px-3"}>
                Add Saldo
              </Typography>
            </div>
            <div
              className=" flex items-center justify-center  px-4 rounded-lg cursor-pointer shadow-md"
              onClick={handleAddSend}
            >
              <Send stroke="#3B3D40" width="30px" height="30px" />
              <Typography variant={variants.xsmedium}>Send</Typography>
            </div>
          </div>
        </div>
        <div className="py-3"></div>
        <Table cols={tableConstants()} data={transaction.data}>
              <Pagination
                pagination={{
                  totalPage: transaction.totalPage,
                  page: page,
                }}
                setPage={setPage}
              />
            </Table>
      </div>
      {isOpen.isShow ? (
        <Modal onClose={handleClose} header={"Kirim Saldo"}>
          <FromSend setIsOpen={setIsOpen} />
        </Modal>
      ) : null}

      {isAdd.isShow ? (
        <Modal onClose={handleClose} header={"Add Saldo"}>
          <FromAddSaldo setIAdd={setIAdd} code={isAdd.data} />
        </Modal>
      ) : null}
    </div>
  )
}

export default TopUp
