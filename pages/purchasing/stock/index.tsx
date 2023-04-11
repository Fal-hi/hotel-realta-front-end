import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AddButton from "@/components/addButton"
import { SearchInput } from "@/components/searchInput"
import Table from "@/components/Table"
import { tableConstants } from "./listHeader"
import Breadcumb from "@/components/breadcumb"
import {
  doReqGetStock,
} from "@/redux/PURCHASING/action/actionStock"
import { Pagination } from "@/components/pagination"
import AddStock from "./addStock"
import EditStock from "./editStock"
import { Modal } from "@/components/modal"
import DeleteStock from "./deleteStock"
import UploadPhoto from "./uploadPhoto"

export default function Stock() {
  const [isEdit, setIsEdit] = useState({
    status: false,
    id: 0,
  })
  const [isPhotos, setIsPhotos] = useState({
    status: false,
    id: 0,
  })
  const [isDelete, setIsDelete] = useState({
    status: false,
    id: 0,
  })
  const photosOpen = (id: number) => {
    setIsPhotos(prev => {
      return { ...prev, status: true, id: id }
    })
  }
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

  const { stock, message, refresh } = useSelector(
    (state: any) => state.stockReducers
  )
  console.log(stock)

  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [entry, setEntry] = useState(5)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(doReqGetStock(search, page, entry))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, search, page, entry])

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

      <Table
        cols={tableConstants(editOpen, deleteOpen, photosOpen)}
        data={stock?.data?.data}
      >
        <Pagination
          pagination={{
            totalPage: stock?.data?.totalPage,
            page: stock?.data?.currentPage,
          }}
          setPage={setPage}
        />
      </Table>

      {isOpen ? (
        <Modal header="Add Stock " onClose={() => setIsOpen(false)}>
          <AddStock isOpen={isOpen} closeModal={() => setIsOpen(false)} />
        </Modal>
      ) : null}

      {isPhotos.status ? (
        <Modal
          header="Upload Photos Stock "
          onClose={() =>
            setIsPhotos(prev => {
              return { ...prev, status: false }
            })
          }
        >
          <UploadPhoto
            isPhotos={isPhotos}
            closeModal={() =>
              setIsPhotos(prev => {
                return { ...prev, status: false }
              })
            }
          />
        </Modal>
      ) : null}

      {isEdit.status ? (
        <Modal
          header="Edit Stock "
          onClose={() =>
            setIsEdit(prev => {
              return { ...prev, status: false }
            })
          }
        >
          <EditStock
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
          header="Delete Stock"
          onClose={() =>
            setIsDelete(prev => {
              return { ...prev, status: false }
            })
          }
        >
          <DeleteStock
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
