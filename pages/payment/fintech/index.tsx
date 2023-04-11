import Table from "@/components/Table"
import Typography from "@/components/Typography"
import variants from "@/components/Typography/textcss"
import AddButton from "@/components/addButton"
import Breadcumb from "@/components/breadcumb"
import { Pencil, Trash } from "@/components/icons"

import { SearchInput } from "@/components/searchInput"
import { deleteDataFintech, getDataFintech } from "@/redux/PAYMENT/action/fintech"

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tableConstants } from "./listHeader"
import { Modal } from "@/components/modal"
import { FormAdd } from "@/pages/payment/bank/frombank/FromAdd"
import { ConfirmationDelete } from "@/pages/payment/bank/frombank/Delete"
import { FromAddFintech } from "@/pages/payment/fintech/fromFintech/FromAddFintech"
import Swal from "sweetalert2"

const Fintech = () => {
  const { fint, refresh } = useSelector((state: any) => state.fintechReducers)
  const [search, setSearch] = useState("")
  const [isOpen, setIsOpen] = useState({
    code:"",
    name: "",
    id: 0,
    isShow: false,
  })
  const [isDelete, setIsDelete] = useState({
    fintech: "",
    id: 0,
    isShow: false,
  })
  const handleClose = () => {
    setIsOpen(prev => {
      return { ...prev, isShow: false }
    })
    
    setIsDelete(prev => {
      return { ...prev, isShow: false }
    })
  }
  const handleAddData = () => {
    setIsOpen({code:"", name: "", id: 0, isShow: true })
  }
  const handleDelete = (id: number) => {
    dispatch(deleteDataFintech(id))
    Swal.fire({
      title: "Sukses",
      text: `Berhasil Hapus Data`,
      icon: "success",
    })
    handleClose()
  }
  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataFintech(search))
  }, [dispatch, search,refresh])

  return (
    <div>
      <Breadcumb child={"Fintech"} parent={"Dashboard"} detail={"Fintech"} />

      <div className="flex flex-col items-start mt-10 w-full">
        <div className="flex flex-row w-full justify-between mb-4">
          <div>
            <SearchInput onChange={handleSearchChange} />
          </div>
          <div className="flex ">
            <AddButton className={'transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 shadow-md'} onClick={handleAddData} />
          </div>
        </div>

        <Table cols={tableConstants(setIsOpen, setIsDelete)} data={fint} />

        {isOpen.isShow ? (
          <Modal onClose={handleClose} header={"Fintech"}>
            <FromAddFintech id={isOpen.id} code={isOpen.code} fintech={isOpen.name} setIsOpen={setIsOpen} />
          </Modal>
        ) : null}

        {isDelete.isShow ? (
          <Modal
            onClose={handleClose}
            header={"Hapus Data"}
          >
            <ConfirmationDelete
              data={isDelete.fintech}
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

export default Fintech
