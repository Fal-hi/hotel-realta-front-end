import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AddButton from "@/components/addButton"
import { SearchInput } from "@/components/searchInput"
import Table from "@/components/Table"
import { tableConstants } from "./listHeader"
import Breadcumb from "@/components/breadcumb"
import { doReqGetStock } from "@/redux/PURCHASING/action/actionStock"
import { Pagination } from "@/components/pagination"

export default function Stock() {
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

  const { stock, message, refresh } = useSelector(
    (state: any) => state.stockReducers
  )
  // console.log(stock.data)

  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [entry, setEntry] = useState(5)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(doReqGetStock(search, page, entry))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[refresh, search, page, entry])

  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }

  return (
    <div>
      <Breadcumb child="Stock" parent="Dashboard" detail="Stock"></Breadcumb>
      <div className="flex items-center">
      <div className="flex flex-row w-full justify-between py-4 mb-4">
          <div>
            <SearchInput onChange={handleSearchChange} />
          </div>
          <div className="flex ">
            <AddButton onClick={() => setIsOpen(true)} />
          </div>
        </div>
      </div>

      <Table cols={tableConstants(editOpen,deleteOpen)} data={stock?.data?.data}>
      <Pagination pagination={{totalPage: stock?.data?.totalPage, 
          page: stock?.data?.currentPage}} setPage={setPage}/>
      </Table>

      {/* {
      isOpen ? (
        <AddVendor isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      ) : null}

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