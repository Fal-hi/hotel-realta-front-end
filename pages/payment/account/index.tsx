import Typography from "@/components/Typography"
import variants from "@/components/Typography/textcss"
import AddButton from "@/components/addButton"
import Breadcumb from "@/components/breadcumb"
import { SearchInput } from "@/components/searchInput"
import { deleteDataAccounts, getDataUserAccounts } from "@/redux/PAYMENT/action/userAccounts"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tableConstants } from "./listHeader"
import Table from "@/components/Table"
import { Modal } from "@/components/modal"
import { FormAdd } from "@/pages/payment/bank/frombank/FromAdd"
import { ConfirmationDelete } from "@/pages/payment/bank/frombank/Delete"
import { FormAccounts } from "@/pages/payment/account/fromAccounts/fromAccounts"
import { FormAccountsEdit } from "@/pages/payment/account/fromAccounts/fromAccountsEdit"

const Account = () => {
  const { accounts, refresh } = useSelector(
    (state: any) => state.accountReducers
  )

  const [isOpen, setIsOpen] = useState({
  
    accounts: "",
    id: 0,
    isShow: false,
  })

  const [isEdit, setIsEdit] = useState({
    types:"",
    usac_expyear: "",
    usac_expmonth:"",
    saldo: "",
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
    dispatch(deleteDataAccounts(id))
    handleClose()
  }
  const handleClose = () => {
    setIsOpen(prev => {
      return { ...prev, isShow: false }
    })

    setIsEdit(prev => {
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

  // const handleEditData = () => {
  //   setIsEdit({ type:"",usac_expyear:"",  usac_expmonth:"", saldo:"", accounts: "", id: 0, isShow: true })
  // }
  useEffect(() => {
    dispatch(getDataUserAccounts())
  }, [dispatch, refresh])

  return (
    <div className="">
      <div>
        <Breadcumb child={"Accounts"} parent={"Dashboard"} detail={"Accounts"} />
      </div>
      <div className="flex flex-col items-start mt-10 w-full">
        <div className="flex flex-row w-full justify-between">
          <div>
 
          </div>
          <div className="flex ">
            <AddButton onClick={handleAddData} />
          </div>
        </div>
        <div className="py-3"></div>
        <Table cols={tableConstants(setIsOpen, setIsDelete, setIsEdit)} data={accounts} />
        {isOpen.isShow ? (
          <Modal onClose={handleClose} header={"Accounts"}>
            <FormAccounts id={isOpen.id}  accounts={isOpen.accounts}  setIsOpen={setIsOpen} />
          </Modal>
        ) : null}

        {
          isEdit.isShow ? (
            <Modal onClose={handleClose} header={"Edit Accounts"}>
            <FormAccountsEdit  id={isEdit.id} usac_expmonth={isEdit.usac_expmonth} usac_expyear={isEdit.usac_expyear} accounts={isEdit.accounts} saldo={isEdit.saldo}   types={isEdit.types} setIsEdit={setIsEdit}/>
            </Modal>
          ): null
        }
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
