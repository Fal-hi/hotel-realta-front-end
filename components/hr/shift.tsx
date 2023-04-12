import React, { useState, useEffect } from "react"
import ComboboxHr from "./comboboxHr"
import { useDispatch, useSelector } from "react-redux"
import { getShift, getShiftById } from "@/redux/HR/action/employee"
import { Combobox } from "@headlessui/react"
import { Magnifier } from "../icons"
import Typography from "../Typography"
import variants from "../Typography/textcss"

const Shift = () => {
  const dispatch = useDispatch()

  const [query, setQuery] = useState("")
  const { shifts, shift } = useSelector((state: any) => state.employeeReducers)
  useEffect(() => {
    dispatch(getShift(query))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  const [shiftTest, setShiftTest] = useState([
    {
      shiftID: 0,
      shiftStartTime: "00:00",
      shiftEndTime: "00:00",
      shiftName: "",
    },
  ])

  const handlePlusShift = () => {
    setShiftTest(prev => [
      ...prev,
      {
        shiftID: 0,
        shiftStartTime: "00:00",
        shiftEndTime: "00:00",
        shiftName: "",
      },
    ])
  }

  const handleChangeShiftTest = (id: any, index: any) => {
    const updatedShiftId = [...shiftTest]
    updatedShiftId[index].shiftID = id
    setShiftTest(updatedShiftId)

    dispatch(getShiftById(id))
  }

  useEffect(() => {
    if (shift && shift.shift_id !== 0) {
      const index = shiftTest.findIndex(o => o.shiftID === shift.shift_id)
      if (index !== -1) {
        handleTest(shift, index)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shift])

  const handleTest = (shift: any, index: any) => {
    const updatedShift = [...shiftTest]
    updatedShift[index].shiftStartTime = shift.shift_start_time
    updatedShift[index].shiftEndTime = shift.shift_end_time
    updatedShift[index].shiftName = shift.shift_name

    setShiftTest(updatedShift)
  }

  const handleMinShift = () => {
    if (shiftTest.length > 1) {
      setShiftTest(prev => prev.slice(0, prev.length - 1))
    }
  }

  console.log("shiftTest", shiftTest)

  return (
    <>
      <div className="flex px-5 mb-2">
        <div>
          <Typography variant={variants.lgbold}>Shift</Typography>
        </div>
        <div
          className="p-1 bg-bgPrimary text-white rounded-md mx-10 cursor-pointer"
          onClick={handlePlusShift}
        >
          +
        </div>
        <div
          className="p-1 bg-bgPrimary text-white rounded-md mx-10 cursor-pointer"
          onClick={handleMinShift}
        >
          -
        </div>
      </div>
      {shiftTest.map((test, index) => (
        <div key={index} className="flex">
          <div className="w-4/12 px-5">
            <label>Shift Day</label>
            <Combobox value={test.shiftName}>
              <div className="flex">
                <div className=" w-1/12 border relative rounded-l-md border-r-0 p-2 block mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none">
                  <Magnifier />
                </div>
                <Combobox.Input
                  autoComplete="off"
                  placeholder="Select"
                  onChange={(event: any) => {
                    setQuery(event.target.value)
                  }}
                  className={`border relative rounded-r-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none`}
                />
              </div>
              <Combobox.Options
                className={`absolute z-10 bg-white rounded-md shadow-lg ring-black ring-opacity-5 focus:outline-none`}
              >
                {shifts.map((data: any, i: number) => (
                  <Combobox.Option
                    key={i}
                    value={data.shift_name}
                    onClick={() => {
                      handleChangeShiftTest(data.shift_id, index)
                    }}
                    className={`py-2 px-2 cursor-pointer border-b hover:bg-bgGray `}
                  >
                    {data.shift_name}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Combobox>
          </div>
          <div className="w-4/12 px-5">
            <label>Start Time</label>
            <input
              type="time"
              value={test.shiftStartTime}
              className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
              disabled
            />
          </div>
          <div className="w-4/12 px-5">
            <label>End Time</label>
            <input
              type="time"
              value={test.shiftEndTime}
              className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
              disabled
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default Shift
