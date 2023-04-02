import Typography from "@/components/Typography"
import variants from "@/components/Typography/textcss"
import AddButton from "@/components/addButton"
import Breadcumb from "@/components/breadcumb"
import { SearchInput } from "@/components/searchInput"
import { getDataUserAccounts } from "@/redux/PAYMENT/action/userAccounts"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tableConstants } from "./listHeader"
import Table from "@/components/Table"
import { Modal } from "@/components/modal"
import { FormAdd } from "@/components/payment/frombank/FromAdd"
import { ConfirmationDelete } from "@/components/payment/frombank/Delete"
import { FormAccounts } from "@/components/payment/fromAccounts/fromAccounts"

const Account = () => {
  const { accounts, refresh } = useSelector(
    (state: any) => state.accountReducers
  )

  const [isOpen, setIsOpen] = useState({
    accounts: "",
    id: 0,
    isShow: false,
  })
  const [isDelete, setIsDelete] = useState({
    accounts: "",
    id: 0,
    isShow: false,
  })
  const handleDelete = (id: number) => {
    // dispatch(deleteDataBank(id))
    handleClose()
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

  const handleAddData = () => {
    setIsOpen({ accounts: "", id: 0, isShow: true })
  }

  useEffect(() => {
    dispatch(getDataUserAccounts())
  }, [dispatch])

  return (
    <div className="">
      <div>
        <Breadcumb child={"Accounts"} parent={"Dashboard"} detail={"Accounts"} />
      </div>
      <div className="flex flex-col items-start mt-10 w-full">
        <div className="flex flex-row w-full justify-between">
          <div>
            <SearchInput />
          </div>
          <div className="flex ">
            <AddButton onClick={handleAddData} />
          </div>
        </div>
        <div className="py-3"></div>
        <Table cols={tableConstants()} data={accounts} />
        {isOpen.isShow ? (
          <Modal onClose={handleClose} header={"Bank"}>
            <FormAccounts id={isOpen.id} bank={isOpen.accounts} setIsOpen={setIsOpen} />
          </Modal>
        ) : null}
        {isDelete.isShow ? (
          <Modal
            onClose={handleClose}
            header={"Hapus Data"}
          >
            <ConfirmationDelete
              data={isDelete.accounts}
              handleDelete={handleDelete}
              id={isDelete.id}
              handleClose={() => {
                handleClose()
              }}
            />
          </Modal>
        ) : null}
      </div>
    </div>
  )
}

export default Account
