import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AddButton from "@/components/addButton"
import { SearchInput } from "@/components/searchInput"
import Table from "@/components/Table"
import { tableConstants } from "./listHeader"
import Breadcumb from "@/components/breadcumb"
import { Pagination } from "@/components/pagination"
import { doReqGetListOrder } from "@/redux/PURCHASING/action/actionListOrder"

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

  const deleteOpen = async (id: number) => {
    // const corfirmed = window.confirm(
    //   `Apakah Anda yakin ingin menghapus user dengan id-${id}?`
    // )
    // if (corfirmed) {
    //   dispatch(doDelete(id))
    // }
  }

  const { listOrder, message, refresh } = useSelector(
    (state: any) => state.listOrderReducers
  )

  console.log(listOrder)

  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [entry, setEntry] = useState(5)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(doReqGetListOrder(search, page, entry))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[refresh, search, page, entry])

  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <Breadcumb child="List Order" parent="Dashboard" detail="List Order"></Breadcumb>
      <div className="flex items-center">
      <div className="flex flex-row w-full justify-between py-4 mb-4">
          <div>
            <SearchInput onChange={handleSearchChange} />
          </div>
        </div>
      </div>

      <Table cols={tableConstants(editOpen,deleteOpen)} data={listOrder?.data?.data}>
      <Pagination pagination={{totalPage: listOrder?.data?.totalPage, 
          page: listOrder?.data?.currentPage}} setPage={setPage}/>
      </Table>

      {/* 
      {isEdit.status ? (
        <EditVendor
          isEdit={isEdit}
          closeModal={() =>
            setIsEdit(prev => {
              return { ...prev, status: false }
            })
          }
        />
      ) : null} */}
    </div>
  )
}