import React, { useState, useEffect } from "react"
import { Modal } from "../modal"
import { useDispatch } from "react-redux"
import { createWorkOrder } from "@/redux/HR/action/workorder"

const AddWorkorder = ({ setModal }: any) => {
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(
    new Date().toISOString().substr(0, 10)
  )

  const [userId, setUserId] = useState(1)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatch(createWorkOrder({ startDate, userId }))
    setModal({ isShown: false })
  }

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value)
  }

  return (
    <>
      <Modal
        header="Add Workorder"
        onClose={() => setModal({ isShown: false })}
      >
        <form onSubmit={handleSubmit}>
          <div className="p-5">
            <div className="mb-2">Start Date: </div>
            <input
              type="date"
              value={startDate}
              onChange={handleDateChange}
              className="border rounded-md p-2 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
              name=""
              id=""
            />
          </div>
          <div className="bg-gray-50  py-5 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-md bg-[#1D4ED8] px-9 py-2   text-white shadow-sm hover:bg-[#143694] sm:ml-3 sm:w-auto"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default AddWorkorder
