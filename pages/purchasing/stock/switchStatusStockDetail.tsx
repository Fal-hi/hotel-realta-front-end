import React, { Fragment, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import "react-datepicker/dist/react-datepicker.css"
import { doUpdateStod } from "@/redux/PURCHASING/action/actionStod"
import { getFacilities } from "@/api/purchasing/apiPurchasing"

export default function SwitchStatusStockDetail(props: any) {
  type FormValues = {
    stod_status: string,
    stod_faci_id: number,
  }
  type Facilities = {
    faci_id: number
    faci_room_number: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  let { stock, message, refresh } = useSelector(
    (state: any) => state.stockReducers
  )
  const dispatch = useDispatch()
  const [data, setData] = useState<any>({})
  console.log(data)

  const handleEdit = async (data: any) => {
    const dataForm = {
      stod_status: data.stod_status,
      stod_faci_id: data.stod_faci_id,
    }
    console.log(dataForm)
    dispatch(doUpdateStod(props.isEdit.id, dataForm))
    props.closeModal()
  }

  const handleError = (errors: any) => {}

  // useEffect(() => {
  //   const getData = async () => {
  //     setData(
  //       stock?.data?.data.filter(
  //         (stocks: any) => stocks.stod_id === props.isEdit.id
  //       )[0]
  //     )
  //   }
  //   getData()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const registerOptions = {
    stod_status: { required: "Name is required" },
    stod_faci_id: { required: "Tax is required" },
  }

  const [facilities, setFacilities] = useState<Facilities[]>([])

  useEffect(() => {
    const fetchFacilities = async () => {
      const data = await getFacilities()
      setFacilities(data)
    }
    fetchFacilities()
  }, [])

  return (
    <div>
      <div className="px-5">
        <form onSubmit={handleSubmit(handleEdit, handleError)}>
          <div
            className="grid grid-cols-1 gap-4 max-w-xl m-auto"
            style={{ marginTop: "1rem" }}
          >
            <label>Status</label>
            <select
              id="stod_status"
              className="w-full px-4 py-2 border border-[#DADADA] rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
              {...register("stod_status", registerOptions.stod_status)}
            >
              <option selected>Choose a status</option>
              <option value="1">Stocked</option>
              <option value="2">Expired</option>
              <option value="3">Broken</option>
              <option value="4">Used</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto relative"
          style={{ marginTop: "1rem" }}>
            <label>Use In Room</label>
            <select
              id="countries"
              className="w-full px-4 py-2 border border-[#DADADA] rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
              {...register("stod_faci_id", registerOptions.stod_faci_id)}
            >
              <option selected>Choose a room number</option>
              {facilities.map(facilitiess => (
                <option value={facilitiess.faci_id} key={facilitiess.faci_id}>
                  {facilitiess.faci_room_number}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end items-center mt-4 p-5">
            <button
              type="submit"
              className="flex items-center bg-[#7743DB] hover:bg-[#5f35ac] text-white py-2 px-4 rounded mr-4"
            >
              Submit
            </button>
            <button
              className="flex items-center bg-[#7743DB] hover:bg-[#5f35ac] text-white py-2 px-4 rounded mr-4"
              onClick={props.closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
