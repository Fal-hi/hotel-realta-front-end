import AddButton from "@/components/addButton"
import Breadcumb from "@/components/breadcumb"
import { SearchInput } from "@/components/searchInput"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tableConstants } from "./listHeader"
import Table from "@/components/Table"
import { doGetRestoMenuAll, getNamaResto } from "@/redux/RESTO/action/actionadmin"
import { Pagination } from "@/components/pagination"
import { Modal } from "@/components/modal"
import InputText from "@/components/input/InputText"


const Adminresto =()=> {
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [entry, setEntry] = useState(5)

    const { adminresto, refresh } = useSelector(
        (state: any) => state.adminRestoReducer)


        const [isOpen, setIsOpen] = useState({
            admin: "",
            id: 0,
            isShow: false,
          })
          const handleClose = () => {
            setIsOpen(prev => {
              return { ...prev, isShow: false }
            })}
          const [isDelete, setIsDelete] = useState({
            admin: "",
            id: 0,
            isShow: false,
          })

          
            const [status, setStatus] = useState(false);
          
            const handleStatusChange = () => {
              setStatus(!status);
            };
          
      const handleSearchChange = (e: any): void => {
        setSearch(e.target.value)
      }
      const dispatch = useDispatch()
   
      useEffect(() => {
        dispatch(doGetRestoMenuAll(search, page, entry))
      }, [refresh, search, page, entry])

    
  return (
    <div className="">
    <div>
      <Breadcumb child={"Resto"} parent={"Dashboard"} detail={"Resto"} />
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
      <Table cols={tableConstants(setIsOpen, setIsDelete)} data={adminresto?.data} >
        <Pagination pagination={{totalPage: adminresto?.totalPage, page: adminresto?.currentPage}} setPage={setPage}/>
        </Table >
        {isOpen.isShow ? (
          <Modal onClose={handleClose} header={"Edit Resto Menu"}>
              <div className="flex justify-center">
              <div className="flex-col space-y-2">
                <div className="flex items-center mt-2">
                  <p className="text-gray-700 font-medium">Resto Menu</p>
                  <div className=" ml-8">
                  <InputText/>
                    </div>
                    </div>
                <div className="flex items-center mt-2">
                  <p className="text-gray-700 font-medium">Price</p>
                  <div className=" ml-20">
                  <InputText/>
                    </div>
                </div>
                <div className="flex items-center">
                <p className="text-gray-700 font-medium">Status</p>
                  <label htmlFor="toggle" className="flex items-center cursor-pointer">
                    <div className="relative ml-20 ">
                      <input
                        id="toggle"
                        type="checkbox"
                        className="sr-only"
                        checked={status}
                        onChange={handleStatusChange}
                      />
                      <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                      <div
                        className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                          status ? 'translate-x-6' : ''
                        }`}
                      ></div>
                    </div>
                    <div className="ml-3 text-gray-700 font-medium">{status ? 'Available' : 'Empty'}</div>
                  </label>
                </div>
              </div>
            </div>

          </Modal>
        ) : null}
        {isDelete.isShow ? (
          <Modal
            onClose={handleClose}
            header={"Apakah Anda Ingin Menghapus Data"}
          >
          </Modal>
        ) : null}

    </div>

    <div>
    </div>
  </div>
  )
}

export default Adminresto