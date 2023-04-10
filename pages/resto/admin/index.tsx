import AddButton from "@/components/addButton"
import Breadcumb from "@/components/breadcumb"
import { SearchInput } from "@/components/searchInput"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { tableConstants } from "./listHeader"
import Table from "@/components/Table"
import { deleteRestoMenu, doGetRestoMenuAll } from "@/redux/RESTO/action/actionadmin"
import { Pagination } from "@/components/pagination"
import AddRestoMenu from "./addRestoMenu"
import { Modal } from "@/components/modal"
import { Delete } from "./delete"
import EditRestoMenu from "./editRestoMenu"
import AddRestoPhoto from "./addRestoPhoto"


const Adminresto =(props:any)=> {
  const { adminresto, refresh } = useSelector((state: any) => state.adminRestoReducers)
    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [entry, setEntry] = useState(5)
    const [isOpen, setIsOpen] = useState(false)
    const [isAdd, setIsAdd] = useState(false)


    const dispatch = useDispatch()

    const [isDelete, setIsDelete] = useState({
      id: 0,
      isShow: false,
    });
   
    const handleDelete = (id:number) => {
     dispatch(deleteRestoMenu(id))
     setIsDelete(prev=>{
      return {...prev, isShow:false }
     })
    }
          
    const [isEdit, setIsEdit] = useState({
      status: false,
      id: 0,
      data: {}
    })

    
    const editOpen = (id: number, data: any) => {
      setIsEdit(prev => {
        return { ...prev, status: true, id: id, data: data }
      })
    }
      const handleSearchChange = (e: any): void => {
        setSearch(e.target.value)
      }

      const handleClose = () => {
        setIsDelete(prev => ({ ...prev, isShow: false }));
      }


      useEffect(() => {
        dispatch(doGetRestoMenuAll(search, page, entry))
      }, [refresh, search, page, entry, dispatch,isOpen])

   

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
          <AddButton onClick={() => setIsOpen(true)}/>
        </div>
      </div>
      <div className="py-3"></div>
      {adminresto && <Table cols={tableConstants( editOpen, setIsDelete, setIsAdd)} data={adminresto.data} >
        <Pagination pagination={{totalPage: adminresto?.totalPage, page: adminresto?.currentPage}} setPage={setPage}/>
          </Table >}

        {
      isOpen ? (
        <Modal  header="ADD MENU RESTO" onClose={() => setIsOpen(false)}>
          <AddRestoMenu isOpen={isOpen} setIsOpen={setIsOpen} onClose={() => setIsOpen(false)} />
        </Modal>
      ) : null}

        {
        isDelete.isShow ? (
          <Modal header="Konfirmasi Hapus" onClose={() => setIsDelete(prev=>{
            return {...prev, isShow:false }
          })}>
            <Delete handleDelete={handleDelete} id={isDelete.id} onClose={handleClose}/>

          </Modal>
        ) : null}

        {
           isEdit.status ? (
            <Modal  header="EDIT MENU RESTO"  onClose={() => setIsEdit(prev => {return {...prev, status: false}})}>
            <EditRestoMenu isEdit={isEdit} dataResto={isEdit.data} closeModal={() => setIsEdit(prev => {return {...prev, status: false}})} />
             </Modal> ):null
        }

        {
      isAdd ? (
        <Modal  header="ADD MENU RESTO PHOTO" onClose={() => setIsAdd(false)}>
          <AddRestoPhoto dataId={isAdd} setIsAdd={setIsAdd} closeModal={() => setIsAdd(false)} />
        </Modal>
      ) : null}
    </div>``
  </div>
  )
}

export default Adminresto