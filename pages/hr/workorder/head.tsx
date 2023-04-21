import Typography from "@/components/Typography"
import variants from "@/components/Typography/textcss"
import AddButton from "@/components/addButton"
import { getWorkOrder } from "@/redux/HR/action/workorder"
import React, { useState, useEffect } from "react"
import ReactDatePicker from "react-datepicker"
import { useDispatch, useSelector } from "react-redux"

const Head = ({
  setModal,
  fromDate,
  setFromDate,
  toDate,
  setToDate,
  handleStatusChange,
}: any) => {
  return (
    <div className="flex  items-center mb-3 mr-2 justify-between">
      <div className="flex">
        <div className="mx-2 py-2">
          <Typography variant={variants.basemedium}>Range date : </Typography>
        </div>
        <div>
          <ReactDatePicker
            placeholderText="set from ..."
            selected={fromDate}
            onChange={date => setFromDate(date)}
            selectsStart
            startDate={fromDate}
            endDate={toDate}
            dateFormat="dd/MM/yyyy"
            className="px-3 py-2 w-28 text-xs text-[#667085] bg-white border-[#8A92A6] border-2 rounded-md outline-none mr-2"
            popperPlacement="bottom-start"
          />
        </div>
        <div className="mx-2 py-2">
          <Typography variant={variants.basemedium}>to : </Typography>
        </div>
        <div>
          <ReactDatePicker
            placeholderText="set to ..."
            selected={toDate}
            onChange={date => setToDate(date)}
            selectsEnd
            startDate={fromDate}
            endDate={toDate}
            minDate={fromDate}
            dateFormat="dd/MM/yyyy"
            className="px-3 py-2 w-28 text-xs text-[#667085] bg-white border-[#8A92A6] border-2 rounded-md outline-none"
            popperPlacement="bottom-start"
          />
        </div>

        <select
          onChange={handleStatusChange}
          className="mx-3 px-3 py-2 w-28 text-xs text-[#667085] bg-white border-[#8A92A6] border-2 rounded-md outline-none"
        >
          <option value="" selected hidden>
            STATUS
          </option>
          <option value="">ALL</option>
          <option value="OPEN">OPEN</option>
          <option value="CLOSED">CLOSED</option>
          <option value="CANCELLED">CANCELLED</option>
        </select>
      </div>

      <div className="flex">
        <AddButton onClick={() => setModal({ isShown: true })} />
      </div>
    </div>
  )
}

export default Head
