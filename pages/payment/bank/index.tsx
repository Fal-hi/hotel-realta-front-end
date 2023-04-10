import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tableConstants } from "./listHeader"
import { deleteDataBank, getDataBank } from "@/redux/PAYMENT/action/bank"
import Table from "@/components/Table"
import AddButton from "@/components/addButton"
import Breadcumb from "@/components/breadcumb"
import { Modal } from "@/components/modal"
import { SearchInput } from "@/components/searchInput"
import { FormAdd } from "@/pages/payment/bank/frombank/FromAdd"
import { ConfirmationDelete } from "@/pages/payment/bank/frombank/Delete"
import Swal from "sweetalert2"

const Bank = () => {
  const { bank, refresh } = useSelector((state: any) => state.bankReducers)
  const [search, setSearch] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState({
    code: "",
    bank: "",
    id: 0,
    isShow: false,
  })
  console.log(isOpen)

  const [isDelete, setIsDelete] = useState({
    bank_name: "",
    id: 0,
    isShow: false,
  })
  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }
  const handleAddData = () => {
    setIsOpen({ code:"", bank: "", id: 0, isShow: true })
  }
  const handleDelete = (id: number) => {
    dispatch(deleteDataBank(id))
    Swal.fire({
      title: "Sukses",
      text: `Berhasil Hapus Data`,
      icon: "success",
    })
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
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
       await dispatch(getDataBank(search))
      setIsLoading(false)
    }
    fetchData()
  }, [dispatch,search, refresh])

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
          <AddButton className={'transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 shadow-md'} onClick={handleAddData} />
          </div>
        </div>

       
          <Table
          cols={tableConstants(setIsOpen, setIsDelete)}
          data={bank?.data}
        />
      

        {isOpen.isShow ? (
          <Modal onClose={handleClose} header={"Bank"}>
            <FormAdd id={isOpen.id} name={isOpen.bank} code={isOpen.code} setIsOpen={setIsOpen} />
          </Modal>
        ) : null}
        {isDelete.isShow ? (
          <Modal onClose={handleClose} header={"Hapus Data"}>
            <ConfirmationDelete
              data={isDelete.bank_name}
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

export default Bank



