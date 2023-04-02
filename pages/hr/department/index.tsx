import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SearchInput } from "@/components/searchInput"
import { Pagination } from "@/components/pagination"
import { Modal } from "@/components/modal"
import { Pencil, Trash } from "@/components/icons"
import { FormDepartment } from "@/components/hr/formDepartment"
import { ConfirmationDeleteDepartment } from "@/components/hr/confirmationDeleteDepartment"
import AddButton from "@/components/addButton"
import Typography from "@/components/Typography"
import variants from "@/components/Typography/textcss"
import { deleteDepartment, getDepartment } from "@/redux/HR/action/department"
import Table from "@/components/Table"
import { tableConstants } from "./listHeader"
import ShowingResult from "@/components/showingResult"

interface IDepartement {
  id: number
  name: string
}

const Department = () => {
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [entry, setEntry] = useState(10)
  const [isOpen, setIsOpen] = useState({
    department: "",
    id: 0,
    isShow: false,
  })
  const [isDelete, setIsDelete] = useState({
    department: "",
    id: 0,
    isShow: false,
  })
  const header = ["Departmen ID", "Department"]
  const { data, refresh } = useSelector(
    (state: any) => state.departmentReducers
  )
  const dispatch = useDispatch()
  const handleClose = () => {
    setIsOpen(prev => {
      return { ...prev, isShow: false }
    })
  }

  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }
  const closeDeleteModal = (): void => {
    setIsDelete((prev: any) => {
      return { ...prev, isShow: false }
    })
  }
  const handleDeleteDepartment = (id: number) => {
    closeDeleteModal()
    dispatch(deleteDepartment(id))
  }
  const handleAddOpen = () => {
    setIsOpen({ department: "", id: 0, isShow: true })
  }
  useEffect(() => {
    dispatch(getDepartment(search, page, entry))
  }, [search, page, entry, refresh, isOpen, dispatch, isDelete])
  // console.log(isDelete)
  return (
    <div className="flex w-full font-poppins-regular">
      <div className="flex flex-col items-start px-5 mt-10 w-full">
        <div className="flex flex-row w-full justify-between">
          <div>
            <SearchInput onChange={handleSearchChange} />
          </div>
          <div className="flex ">
            <AddButton onClick={handleAddOpen} />
          </div>
        </div>

        <div className="py-3">
          <ShowingResult
            from={data.from}
            to={data.to}
            totalData={data.totalData}
          />
        </div>

        <Table
          cols={tableConstants(setIsOpen, setIsDelete)}
          data={data.department || []}
        >
          <Pagination
            pagination={{
              totalPage: data.totalPage,
              page: data.page,
            }}
            setPage={setPage}
          />
        </Table>
      </div>
      {isOpen.isShow ? (
        <Modal onClose={handleClose} header={"Add Department"}>
          <FormDepartment
            id={isOpen.id}
            department={isOpen.department}
            setIsOpen={setIsOpen}
          />
        </Modal>
      ) : null}
      {isDelete.isShow ? (
        <Modal
          onClose={() => {
            closeDeleteModal()
          }}
          header={"Delete Department"}
        >
          <ConfirmationDeleteDepartment
            department={isDelete.department}
            handleDeleteDepartment={handleDeleteDepartment}
            id={isDelete.id}
            handleClose={() => {
              closeDeleteModal()
            }}
          />
        </Modal>
      ) : null}
    </div>
  )
}

export default Department
