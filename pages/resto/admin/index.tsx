import AddButton from "@/components/addButton"
import Breadcumb from "@/components/breadcumb"
import { SearchInput } from "@/components/searchInput"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tableConstants } from "./listHeader"
import Table from "@/components/Table"
import { doGetRestoMenuAll, getNamaResto } from "@/redux/RESTO/action/actionadmin"
import { Pagination } from "@/components/pagination"


const Adminresto =()=> {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [entry, setEntry] = useState(10)

    const { adminresto, refresh } = useSelector(
        (state: any) => state.adminRestoReducer)
        const [isOpen, setIsOpen] = useState({
            admin: "",
            id: 0,
            isShow: false,
          })
          const [isDelete, setIsDelete] = useState({
            admin: "",
            id: 0,
            isShow: false,
          })

      const handleSearchChange = (e: any): void => {
        setSearch(e.target.value)
      }
      const dispatch = useDispatch()
   
      useEffect(() => {
        dispatch(doGetRestoMenuAll())
      }, [dispatch, refresh])

      useEffect(() => {
        dispatch(getNamaResto(search))
      }, [dispatch, search])
    
  return (
    <div className="">
    <div>
      <Breadcumb child={"Admin"} parent={"Dashboard"} detail={"Admin"} />
    </div>
    <div className="flex flex-col items-start mt-10 w-full">
      <div className="flex flex-row w-full justify-between">
        <div>
          <SearchInput onChange={handleSearchChange} />
        </div>
        <div className="flex ">
          <AddButton />
        </div>
      </div>
      <div className="py-3"></div>
      <Table cols={tableConstants(setIsOpen, setIsDelete)} data={adminresto} >
        {/* <Pagination setPage={10} pagination={""}/> */}
        </Table >
    </div>

    <div>
    </div>
  </div>
  )
}

export default Adminresto