import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import BgButton from "@/components/buttons/BgButton"
import Table from "@/components/Table"
import { tableConstants } from "./listHeaderDetail"
import Breadcumb from "@/components/breadcumb"
import { useRouter } from "next/router"
import { doGetFindListOrder } from "@/redux/PURCHASING/action/actionListOrder"
import DeleteListDetail from "./deleteListDetail"
import EditListDetail from "./editStockListOrder"
import { Modal } from "@/components/modal"
import AddButton from "@/components/addButton"
import AddStockListOrder from "./addStockListOrder"
import AddGenerate from "./addGenerate"
import { BgPrimary } from "@/components/icons"

export default function DetailListOrder(props: any) {
  const router = useRouter()
  const purchaseOrder = router.query.pohe_number
  const poheId = router.query.pohe_id
  const poDate = router.query.pohe_order_date
  const dateString = Array.isArray(poDate) ? poDate[0] : poDate
  const date = dateString ? new Date(dateString) : new Date()
  const newPO = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
  const status = `${router.query.pohe_status}`
  let newStatus = "";
  switch (parseInt(status)) {
    case 1:
      newStatus = "Pending";
      break;
    case 2:
      newStatus = "Approved";
      break;
    case 3:
      newStatus = "Rejected";
      break;
    case 4:
      newStatus = "Received";
      break;
    case 5:
      newStatus = "Completed";
      break;
    default:
      newStatus = "Unknow";
      break;
  }

  const vendorName = router.query.vendor_name

  const subTotal = router.query.pohe_subtotal
  const amount = router.query.pohe_total_amount
  const tax = router.query.pohe_tax

  const { listOrder, message, refresh } = useSelector(
    (state: any) => state.listOrderReducers
  )
  // const [isOpen, setIsOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  const [isDelete, setIsDelete] = useState({
    status: false,
    id: 0,
  })
  const deleteOpen = (id: number) => {
    setIsDelete(prev => {
      return { ...prev, status: true, id: id }
    })
  }

  const [isEdit, setIsEdit] = useState({
    status: false,
    id: 0,
  })
  const editOpen = (id: number) => {
    setIsEdit(prev => {
      return { ...prev, status: true, id: id }
    })
  }

  const [isGenerate, setIsGenerate] = useState({
    status: false,
    id: 0,
  })
  const generateOpen = (id: number) => {
    setIsGenerate(prev => {
      return { ...prev, status: true, id: id }
    })
  }

  const [selectedPodePoheId, setSelectedPodePoheId] = useState(0)

  const handleAddButtonClick = () => {
    if (typeof router.query.pohe_id === "string") {
      const id = parseInt(router.query.pohe_id)
      console.log(id)
      if (!isNaN(id)) {
        setSelectedPodePoheId(id)
        setIsOpen(true)
      }
    }
  }

  useEffect(() => {
    if (purchaseOrder) {
      dispatch(doGetFindListOrder(purchaseOrder))
      localStorage.setItem('purchaseOrder', JSON.stringify(purchaseOrder))
    }
    return () => {
      localStorage.removeItem('purchaseOrder')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, purchaseOrder])
  
  // console.log(purchaseOrder)
  // console.log("ts=>",listOrder?.data?.data[0]?.purchase_order_details)

  return (
    <div>
      <Breadcumb
        // child={"PO Number: " + purchaseOrder}
        parent={purchaseOrder}
        detail="Detail List Order"
      ></Breadcumb>
      <div
        className="grid grid-cols-1 gap-4 max-w-xl m-auto"
        style={{ marginTop: "1rem" }}
      ></div>
      <div className="hotel-info-container mt-5 relative flex items-center content-center">
          <BgPrimary width={"100%"} height={"100%"} />
          <div className="hotel-info flex justify-between px-5 absolute top-50 w-full">
            <div className="info-1 flex flex-col justify-center">
              <h1 className="font-semibold text-white text-xl">
                {"Vendor " + vendorName}
              </h1>
              <p className="text-white font-thin text-sm">
                {"PO Number: " + purchaseOrder}
              </p>
            </div>
            <div className="info-2 flex flex-col justify-center ">
              <p className="text-white font-thin text-sm">
                {"PO Date  : " + newPO}
              </p>
              <p className="text-white font-thin text-sm">
                {"Status : " + newStatus}
              </p>
            </div>
            <div className="info-3 flex flex-col justify-center ">
              <p className="text-white font-thin text-sm">
                {"Sub Total : Rp." + subTotal}
              </p>
              <p className="text-white font-thin text-sm">
                {"Total Amount : Rp." + amount} *include tax 10%
              </p>
            </div>
          </div>
        </div>
      <div
        className="grid grid-cols-1 gap-4 max-w-xl m-auto"
        style={{ marginTop: "1rem" }}
      ></div>
      <div className="flex ">
        <AddButton onClick={handleAddButtonClick} />
      </div>
      <div
        className="grid grid-cols-1 gap-4 max-w-xl m-auto"
        style={{ marginTop: "1rem" }}
      ></div>

      <Table
        cols={tableConstants(generateOpen, editOpen, deleteOpen)}
        data={listOrder?.data?.data[0]?.purchase_order_details}
      />

      <div style={{ marginTop: "1rem" }}>
        <BgButton
          title="Back"
          onClick={() => {
            router.push("/purchasing/listOrder")
          }}
        />
      </div>
      {isDelete.status ? (
        <Modal
          header="Delete List Detail"
          onClose={() =>
            setIsDelete(prev => {
              return { ...prev, status: false }
            })
          }
        >
          <DeleteListDetail
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
          header="Edit Stock"
          onClose={() =>
            setIsEdit(prev => {
              return { ...prev, status: false }
            })
          }
        >
          <EditListDetail
            isEdit={isEdit}
            closeModal={() =>
              setIsEdit(prev => {
                return { ...prev, status: false }
              })
            }
          />
        </Modal>
      ) : null}

      {isGenerate.status ? (
        <Modal
          header="Add Generate"
          onClose={() =>
            setIsGenerate(prev => {
              return { ...prev, status: false }
            })
          }
        >
          <AddGenerate
            isGenerate={isGenerate}
            closeModal={() =>
              setIsGenerate(prev => {
                return { ...prev, status: false }
              })
            }
          />
        </Modal>
      ) : null}

      {isOpen ? (
        <Modal header="Add Stock " onClose={() => setIsOpen(false)}>
          <AddStockListOrder
            isOpen={isOpen}
            closeModal={() => setIsOpen(false)}
            podePoheId={selectedPodePoheId}
          />
        </Modal>
      ) : null}
    </div>
  )
}
