import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import BgButton from "@/components/buttons/BgButton"
import Table from "@/components/Table"
import { tableConstants } from "./listHeaderStockDetail"
import Breadcumb from "@/components/breadcumb"
import { useRouter } from "next/router"
import { doGetFindStock } from "@/redux/PURCHASING/action/actionStock"
import { Modal } from "@/components/modal"
import SwitchStatusStockDetail from "./switchStatusStockDetail"

export default function StockDetail(props: any) {
  const router = useRouter()
  const stockId = router.query.stock_id
  const stockName = router.query.stock_name

  const { stock, message, refresh } = useSelector(
    (state: any) => state.stockReducers
  )
  // console.log("tes",stock?.data?.data)
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

  console.log(stockId)

  useEffect(() => {
    dispatch(doGetFindStock(stockId))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh])
  // console.log(purchaseOrder)
  // console.log("ts=>",listOrder?.data?.data[0]?.purchase_order_details)

  return (
    <div>
      <Breadcumb
        child={stockName}
        parent={stockName}
        detail="Stock Details"
      ></Breadcumb>
      <div
        className="grid grid-cols-1 gap-4 max-w-xl m-auto"
        style={{ marginTop: "1rem" }}
      ></div>
      <div
        className="grid grid-cols-1 gap-4 max-w-xl m-auto"
        style={{ marginTop: "1rem" }}
      ></div>

      <Table
        cols={tableConstants(editOpen)}
        data={stock?.data?.data.stock_details}
      />

      <div style={{ marginTop: "1rem" }}>
        <BgButton
          title="Back"
          onClick={() => {
            router.push("/purchasing/stock")
          }}
        />
      </div>

      {/* {isDelete.status ? (
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
      ) : null} */}

      {isEdit.status ? (
        <Modal
          header="Switch Status"
          onClose={() =>
            setIsEdit(prev => {
              return { ...prev, status: false }
            })
          }
        >
          <SwitchStatusStockDetail
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
