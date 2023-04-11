import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AddButton from "@/components/addButton"
import { SearchInput } from "@/components/searchInput"
import AddVendor from "./addVendor"
import DeleteVendor from "./deleteVendor"
import EditVendor from "./editVendor"
import {doRequestGetVendor} from "@/redux/PURCHASING/action/actionVendor"
import Table from "@/components/Table"
import { tableConstants } from "./listHeader"
import Breadcumb from "@/components/breadcumb"
import { Pagination } from "@/components/pagination"
import { Modal } from "@/components/modal"

export default function Vendor() {
  const [isEdit, setIsEdit] = useState({
    status: false,
    id: 0,
  })
  const [isOpen, setIsOpen] = useState(false)
  const [isDelete, setIsDelete] = useState({
    status: false,
    id: 0,
  })
  
  const [search, setSearch] = useState("")
  const [searchPri, setSearchPri] = useState("")
  const [page, setPage] = useState(1)
  const [entry, setEntry] = useState(5)
  const editOpen = (id: number) => {
    setIsEdit(prev => {
      return { ...prev, status: true, id: id }
    })
  }
  const deleteOpen = (id: number) => {
    setIsDelete(prev => {
      return { ...prev, status: true, id: id }
    })
  }

  const { vendor, message, refresh } = useSelector(
    (state: any) => state.vendorReducers
  )
  console.log(vendor?.data?.data)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(doRequestGetVendor(search, page, entry, searchPri))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, search, page, entry, searchPri])

  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }

  const handleSearchPriChange = (e: any): void => {
    setSearchPri(e.target.value)
  }

  return (
    <div>
      <Breadcumb child="Vendor" parent="Dashboard" detail="Vendor"></Breadcumb>
      <div className="flex items-center">
        <div className="flex flex-row w-full justify-between py-4 mb-4">
          <div>
            <SearchInput onChange={handleSearchChange} />
          </div>
          <div
            className="grid grid-cols-1 gap-4 max-w-xl m-auto relative"
          >
            <select
              id="vendor_priority"
              className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleSearchPriChange}
            value={searchPri}
            >
              <option selected value="">Choose a priority</option>
              <option value="1">Priority</option>
              <option value="0">No Priority</option>
            </select>
          </div>
          <div className="flex ">
            <AddButton onClick={() => setIsOpen(true)} />
          </div>
        </div>
      </div>
      

      <Table
        cols={tableConstants(editOpen, deleteOpen)}
        data={vendor?.data?.data}
      >
        <Pagination
          pagination={{
            totalPage: vendor?.data?.totalPage,
            page: vendor?.data?.currentPage,
          }}
          setPage={setPage}
        />
      </Table>

      {isOpen ? (
        <Modal header="Add Vendor" onClose={() => setIsOpen(false)}>
          <AddVendor isOpen={isOpen} closeModal={() => setIsOpen(false)} />
        </Modal>
      ) : null}

      {isDelete.status ? (
        <Modal
          header="Delete Vendor"
          onClose={() =>
            setIsDelete(prev => {
              return { ...prev, status: false }
            })
          }
        >
          <DeleteVendor
            isDelete={isDelete}
            closeModal={() =>
              setIsDelete(prev => {
                return { ...prev, status: false }
              })
            }
          />
        </Modal>
      ) : null}

      {isEdit.status ? (
        <Modal
          header="Edit Vendor"
          onClose={() =>
            setIsEdit(prev => {
              return { ...prev, status: false }
            })
          }
        >
          <EditVendor
            isEdit={isEdit}
            closeModal={() =>
              setIsEdit(prev => {
                return { ...prev, status: false }
              })
            }
          />
        </Modal>
      ) : null}
    </div>
  )
}
