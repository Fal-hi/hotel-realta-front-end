import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SearchInput } from "@/components/searchInput"
import Table from "@/components/Table"
import { tableConstants } from "./listHeader"
import Breadcumb from "@/components/breadcumb"
import { Pagination } from "@/components/pagination"
import {
  doReqGetListOrder,
} from "@/redux/PURCHASING/action/actionListOrder"
import SwitchStatus from "./switchStatus"
import { Modal } from "@/components/modal"
import DeleteListOrder from "./deleteListOrder"
import AddButton from "@/components/addButton"
import AddListOrder from "./addListOrder"

export default function ListOrder() {
  const [isEdit, setIsEdit] = useState({
    status: false,
    id: 0,
  })
  const editOpen = (id: number) => {
    setIsEdit(prev => {
      return { ...prev, status: true, id: id }
    })
  }
  const [isDelete, setIsDelete] = useState({
    status: false,
    id: 0,
  })
  const deleteOpen = (id: number) => {
    setIsDelete(prev => {
      return { ...prev, status: true, id: id }
    })
  }

  const { listOrder, message, refresh } = useSelector(
    (state: any) => state.listOrderReducers
  )
  console.log(listOrder)

  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [searchStat, setSearchStat] = useState("")
  const [page, setPage] = useState(1)
  const [entry, setEntry] = useState(5)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(doReqGetListOrder(search, page, entry, searchStat))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, search, page, entry, searchStat])

  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }

  const handleSearchStatChange = (e: any): void => {
    setSearchStat(e.target.value)
  }

  return (
    <div>
      <Breadcumb
        child="List Order"
        parent="Dashboard"
        detail="List Order"
      ></Breadcumb>
      <div className="flex items-center">
        <div className="flex flex-row w-full justify-between py-4 mb-4">
          <div>
            <SearchInput onChange={handleSearchChange} />
          </div>
          <div
            className="grid grid-cols-1 gap-4 max-w-xl m-auto"
          >
            <select
              id="pohe_status"
              className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleSearchStatChange}
            value={searchStat}
            >
              <option selected value="">Choose a status</option>
              <option value="1">Pending</option>
              <option value="2">Approved</option>
              <option value="3">Rejected</option>
              <option value="4">Received</option>
              <option value="5">Completed</option>
            </select>
          </div>
          <div className="flex ">
            <AddButton onClick={() => setIsOpen(true)} />
          </div>
        </div>
      </div>

      <Table
        cols={tableConstants(editOpen, deleteOpen)}
        data={listOrder?.data?.data}
      >
        <Pagination
          pagination={{
            totalPage: listOrder?.data?.totalPage,
            page: listOrder?.data?.currentPage,
          }}
          setPage={setPage}
        />
      </Table>

      {isOpen ? (
        <Modal header="Add List Order" onClose={() => setIsOpen(false)}>
          <AddListOrder isOpen={isOpen} closeModal={() => setIsOpen(false)} />
        </Modal>
      ) : null}

      {isEdit.status ? (
        <Modal
          header="Switch Status"
          onClose={() =>
            setIsEdit(prev => {
              return { ...prev, status: false }
            })
          }
        >
          <SwitchStatus
            isEdit={isEdit}
            closeModal={() =>
              setIsEdit(prev => {
                return { ...prev, status: false }
              })
            }
          />
        </Modal>
      ) : null}

      {isDelete.status ? (
        <Modal
          header="Delete List Order"
          onClose={() =>
            setIsDelete(prev => {
              return { ...prev, status: false }
            })
          }
        >
          <DeleteListOrder
            isDelete={isDelete}
            closeModal={() =>
              setIsDelete(prev => {
                return { ...prev, status: false }
              })
            }
          />
        </Modal>
      ) : null}
    </div>
  )
}
