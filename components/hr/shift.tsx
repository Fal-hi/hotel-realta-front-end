import React, { useState, useEffect } from "react"
import ComboboxHr from "./comboboxHr"
import { useDispatch, useSelector } from "react-redux"
import { getShift, getShiftById } from "@/redux/HR/action/employee"

const Shift = ({
  handle,
  nomor,
  shiftTime,
  handleShiftTIme,
  setShiftTime,
  id,
}: any) => {
  const { shifts, shift } = useSelector((state: any) => state.employeeReducers)
  const dispatch = useDispatch()
  const [shiftId, setShiftId] = useState(0)
  const [shiftName, setShiftName] = useState<string>("")

  const handleGetShift = (like: string) => {
    dispatch(getShift(like))
  }

  const [time, setTime] = useState({
    startTime: "00:00",
    endTime: "00:00",
  })

  const [shiftData, setShiftData] = useState([
    {
      option: "",
      value: "",
    },
  ])

  const [timeDay, setTImeDay] = React.useState()

  console.log(setTImeDay)

  const handleShift = (val: any, key: any) => {
    dispatch(getShiftById(key))

    setShiftName(val)
    setShiftId(key)
    handle(key, nomor)
    setShiftTime(
      shiftTime.map((sft: any) => {
        console.log(id)
        console.log(sft)
        console.log(time)
        if (sft.id == id) {
          return {
            ...sft,
            startTime: shift?.shift_start_time,
            endTime: shift?.shift_end_time,
          }
        } else {
          return sft
        }
      })
    )
  }

  useEffect(() => {
    if (shift) {
      setTImeDay(shift)
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
          value={"00:00"}
          className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
          disabled
        />
      </div>
      <div className="w-4/12 px-5">
        <label>End Time</label>
        <input
          type="time"
          value={"00:00"}
          className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
          disabled
        />
      </div>
    </div>
  )
}

export default Shift
