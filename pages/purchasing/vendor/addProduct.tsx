import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import AddButton from "@/components/addButton"
import AddVendorProduct from "./addVendorProduct"
import BgButton from "@/components/buttons/BgButton"
import { doRequestGetProductid } from "@/redux/PURCHASING/action/actionVendor"
import { useRouter } from "next/router"
import Table from "@/components/Table"
import { tableConstants } from "./listHeaderAddProduct"
import Breadcumb from "@/components/breadcumb"
import { Modal } from "@/components/modal"
import DeleteVendorProduct from "./deleteVendorProduct"
import EditVendorProduct from "./editVendorProduct"

export default function Vepro(props: any) {
  const router = useRouter()
  const vendorEntityId = router.query.vendor_entity_id
  const vendorName = router.query.vendor_name
  const { vendor, message, refresh } = useSelector(
    (state: any) => state.vendorReducers
  )
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const [selectedVendorEntityId, setSelectedVendorEntityId] = useState(0)

  useEffect(() => {
    dispatch(doRequestGetProductid(vendorEntityId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh])
  // console.log(vendorEntityId)

  const handleAddButtonClick = () => {
    if (typeof router.query.vendor_entity_id === "string") {
      const id = parseInt(router.query.vendor_entity_id)
      if (!isNaN(id)) {
        setSelectedVendorEntityId(id)
        setIsOpen(true)
      }
    }
  }
  // console.log(vendor?.data?.data[0]?.vendor_product)

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

  return (
    <div>
      <Breadcumb
        child={"Vendor " + vendorName}
        parent={"Vendor " + vendorName}
        detail="Add Item Product"
      ></Breadcumb>
      <div className="flex items-center text-center"></div>
      <div className="flex items-center">
        <div className="flex py-3 ">
          <AddButton onClick={handleAddButtonClick} />
        </div>
      </div>

      <Table
        cols={tableConstants(editOpen, deleteOpen)}
        data={vendor?.data?.data[0]?.vendor_product}
      />

      <div style={{ marginTop: "1rem" }}>
        <BgButton
          title="Back"
          onClick={() => {
            router.push("/purchasing/vendor")
          }}
        />
      </div>

      {isOpen ? (
        <Modal header="Add Vendor Product" onClose={() => setIsOpen(false)}>
          <AddVendorProduct
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            vendorEntityId={selectedVendorEntityId}
          />
        </Modal>
      ) : null}

      {isEdit.status ? (
        <Modal
          header="Edit Vendor Product"
          onClose={() =>
            setIsEdit(prev => {
              return { ...prev, status: false }
            })
          }
        >
          <EditVendorProduct
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
          header="Delete Vendor Product"
          onClose={() =>
            setIsDelete(prev => {
              return { ...prev, status: false }
            })
          }
        >
          <DeleteVendorProduct
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
