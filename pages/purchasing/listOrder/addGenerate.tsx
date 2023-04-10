import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import "react-datepicker/dist/react-datepicker.css"
import { useRouter } from "next/router"
import { doAddStod } from "@/redux/PURCHASING/action/actionStod"

export default function AddGenerate(props: any) {
  const router = useRouter()
  const poheId = router.query.pohe_id
  console.log(poheId)
  const stockId = router.query.stock_id
  console.log(stockId)

  type FormValues = {
    stod_stock_id: number
    stod_status: string
    stod_notes: string
    stod_faci_id: number
    stod_pohe_id: number
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
   let { listOrder, message, refresh } = useSelector(
    (state: any) => state.listOrderReducers
   )
  const dispatch = useDispatch()

  const [data, setData] = useState<any>({})

  const handleEdit = async (data: FormValues) => {
    const dataForm = {
      stod_stock_id: stockId,
      stod_status: data.stod_status,
      stod_notes: data.stod_notes,
      stod_faci_id: data.stod_faci_id,
      stod_pohe_id: poheId,
    }
    console.log(dataForm)
    dispatch(doAddStod(dataForm))
    props.closeModal()
  }

  const handleError = (errors: any) => {}

  const registerOptions = {
    stod_stock_id: { required: "Order Qty is required" },
    stod_status: { required: "Status is required" },
    stod_notes: { required: "Notes Qty  is required" },
    stod_faci_id: { required: "Faci Qty is required" },
    stod_pohe_id: { required: "Pohe Qty is required" },
  }

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
              className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            <label>Notes</label>
            <div className="grid grid-cols-1 gap-4 max-w-xl relative">
              <input
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                type="text"
                {...register("stod_notes", registerOptions.stod_notes)}
              />
            </div>
            <small className="text-danger">
              {errors?.stod_notes && errors.stod_notes.message}
            </small>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto relative">
            <label>Use In</label>
            <div className="grid grid-cols-1 gap-4 max-w-xl relative">
              <input
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                type="text"
                {...register("stod_faci_id", registerOptions.stod_faci_id)}
              />
            </div>
            <small className="text-danger">
              {errors?.stod_faci_id && errors.stod_faci_id.message}
            </small>
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
