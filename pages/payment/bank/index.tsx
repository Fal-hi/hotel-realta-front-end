import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tableConstants } from "./listHeader"
import { getDataBank } from "@/redux/PAYMENT/action/bank"
import Table from "@/components/Table"
import AddButton from "@/components/addButton"
import Breadcumb from "@/components/breadcumb"
import { Modal } from "@/components/modal"
import { SearchInput } from "@/components/searchInput"

const Bank = () => {
  const { bank, refresh } = useSelector((state: any) => state.bankReducers)
  const [search, setSearch] = useState("")
  const [isOpen, setIsOpen] = useState({
    bank: "",
    id: 0,
    isShow: false,
  })
  const [isDelete, setIsDelete] = useState({
    bank: "",
    id: 0,
    isShow: false,
  })
  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }

  const handleAddData = () => {
    setIsOpen({ bank: "", id: 0, isShow: true })
  }
  const handleClose = () => {
    setIsOpen(prev => {
      return { ...prev, isShow: false }
    })

    setIsDelete(prev => {
      return { ...prev, isShow: false }
    })
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataBank(search))
  }, [dispatch, search])

  const listHead = [
    {
      nama: "Bank Code",
    },
    {
      nama: "Bank Name",
    },
    {
      nama: "Action",
    },
  ]
  return (
    <div className="">
      <div>
        <Breadcumb child={"Bank"} parent={"Dashboard"} detail={"Bank"} />
      </div>
      <div className="flex flex-col items-start mt-10 w-full">
        <div className="flex flex-row w-full justify-between mb-4">
          <div>
            <SearchInput onChange={handleSearchChange} />
          </div>
          <div className="flex ">
            <AddButton onClick={handleAddData} />
          </div>
        </div>

        <Table cols={tableConstants(setIsOpen, setIsDelete)} data={bank} />
        {isOpen.isShow ? (
          <Modal onClose={handleClose} header={"Add Bank"}>
            <p>tes</p>
          </Modal>
        ) : null}
        {isDelete.isShow ? (
          <Modal
            onClose={handleClose}
            header={"Apakah Anda Ingin Menghapus Data"}
          >
            <p>tes</p>
          </Modal>
        ) : null}
      </div>
    </div>
  )
}

export default Bank
