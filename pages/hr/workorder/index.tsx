import Table from "@/components/Table"
import Typography from "@/components/Typography"
import variants from "@/components/Typography/textcss"
import AddButton from "@/components/addButton"
import PopUpWorkorder from "@/components/hr/PopUpWorkorder"
import TableWorkOrder from "@/pages/hr/workorder/TableWorkOrder"
import AddWorkorder from "@/components/hr/addWorkorder"
import { Modal } from "@/components/modal"
import { Pagination } from "@/components/pagination"
import { SearchInput } from "@/components/searchInput"
import { getWorkOrder } from "@/redux/HR/action/workorder"
import React, { useState, useEffect } from "react"
import ReactDatePicker from "react-datepicker"

import "react-datepicker/dist/react-datepicker.css"
import { useDispatch, useSelector } from "react-redux"
import Head from "./head"

const Workorder = () => {
  const { workorder, refresh } = useSelector(
    (state: any) => state.workorderReducers
  )

  const [page, setPage] = useState(1)

  const workorderData = []
  if (workorder && workorder?.workorder) {
    for (let i = 0; i < workorder.workorder.length; i++) {
      const element = workorder.workorder[i]
      workorderData.push({
        id: element.id,
        startDate: element.workorderDate,
        workorderDate: new Date(element.workorderDate).toLocaleDateString(
          "en-US",
          {
            day: "numeric",
            month: "short",
            year: "numeric",
          }
        ),
        status: element.status,
        createdBy: element.createdBy,
      })
    }
  }
  const [modal, setModal] = useState({
    isShown: false,
  })
  const [fromDate, setFromDate] = useState<Date | null | undefined>(undefined)
  const [toDate, setToDate] = useState<Date | null | undefined>(undefined)

  const [status, setStatus] = useState("")
  const dispatch = useDispatch()

  const handleStatusChange = (event: any) => {
    setStatus(event.target.value)
  }

  useEffect(() => {
    const payload = {
      page: page,
      entry: 10,
      status: status,
      from: fromDate,
      to: toDate,
    }
    dispatch(getWorkOrder(payload))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, page, status, fromDate, toDate])
  const onEditClick = () => {}
  return (
    <>
      <div className="w-full font-poppins-regular">
        <Head
          setModal={setModal}
          fromDate={fromDate}
          setFromDate={setFromDate}
          toDate={toDate}
          setToDate={setToDate}
          handleStatusChange={handleStatusChange}
        />
        <TableWorkOrder
          setmodalEdit={setModal}
          workorderData={workorderData}
          workorder={workorder}
          setPage={setPage}
          onEditClick={onEditClick}
        />
        {modal.isShown ? <AddWorkorder setModal={setModal} /> : null}
      </div>
    </>
  )
}

export default Workorder
