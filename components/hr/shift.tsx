import React, { useState, useEffect } from "react"
import ComboboxHr from "./comboboxHr"
import { useDispatch, useSelector } from "react-redux"
import { getShift, getShiftById } from "@/redux/HR/action/employee"

const Shift = ({
  handle,
  index,
  handleStart,
  shiftStartTime,
  handleEnd,
  shiftEndTime,
}: any) => {
  const { shifts, shift } = useSelector((state: any) => state.employeeReducers)
  const dispatch = useDispatch()
  const [shiftId, setShiftId] = useState(0)
  const [shiftName, setShiftName] = useState<string>("")

  const handleGetShift = (like: string) => {
    dispatch(getShift(like))
  }
  const [shiftData, setShiftData] = useState([
    {
      option: "",
      value: "",
    },
  ])

  const handleShift = (val: any, key: any) => {
    dispatch(getShiftById(key))
    setShiftName(val)
    setShiftId(key)
    handle(key, index)
  }

  useEffect(() => {
    if (shift !== undefined) {
      handleStart(shift.shift_start_time, index)
      handleEnd(shift.shift_end_time, index)
    }
  }, [shift])

  useEffect(() => {
    const shiftsData = []
    for (let i = 0; i < shifts?.length; i++) {
      const element = shifts[i]
      shiftsData.push({
        option: element.shift_id,
        value: element.shift_name,
      })
    }
    setShiftData(shiftsData)
  }, [shiftId, shifts])

  console.log("shiftStartTime", shiftStartTime)

  return (
    <div className="flex">
      <div className="w-4/12 px-5">
        <label>Shift Day</label>
        <ComboboxHr
          inputChanges={(e: any) => handleGetShift(e.target.value)}
          data={shiftData}
          onChange={setShiftId}
          value={shiftName}
          handleSelected={handleShift}
        />
      </div>
      <div className="w-4/12 px-5">
        <label>Start Time</label>
        <input
          type="time"
          value={shiftStartTime[index]}
          className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
          disabled
        />
      </div>
      <div className="w-4/12 px-5">
        <label>End Time</label>
        <input
          type="time"
          value={shiftEndTime[index]}
          className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
          disabled
        />
      </div>
    </div>
  )
}

export default Shift
