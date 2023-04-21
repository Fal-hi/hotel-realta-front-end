import React, { Fragment, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import "react-datepicker/dist/react-datepicker.css"
import { doUpdateListOrder } from "@/redux/PURCHASING/action/actionListOrder"

export default function SwitchStatus(props: any) {
  type FormValues = {
    pohe_status: string,
    pohe_tax: number,
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
  console.log(data)

  const handleEdit = async (data: any) => {
    const dataForm = {
      pohe_status: data.pohe_status,
      pohe_tax: data.pohe_tax,
    }
    console.log(dataForm)
    dispatch(doUpdateListOrder(props.isEdit.id, dataForm))
    props.closeModal()
  }

  const handleError = (errors: any) => {}

  useEffect(() => {
    const getData = async () => {
      setData(
        listOrder?.data?.data.filter(
          (list: any) => list.pohe_id === props.isEdit.id
        )[0]
      )
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const registerOptions = {
    pohe_status: { required: "Name is required" },
    pohe_tax: { required: "Tax is required" },
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
              id="pohe_status"
              className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("pohe_status", registerOptions.pohe_status)}
            >
              <option selected>Choose a status</option>
              <option value="1">Pending</option>
              <option value="2">Approved</option>
              <option value="3">Rejected</option>
              <option value="4">Received</option>
              <option value="5">Completed</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto relative"
          style={{ marginTop: "1rem" }}>
            <label>Tax %</label>
            <div className="grid grid-cols-1 gap-4 max-w-xl relative">
              <input
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                type="text"
                defaultValue={data?.pohe_tax}
                {...register("pohe_tax", registerOptions.pohe_tax)}
              />
            </div>
            <small className="text-danger">
              {errors?.pohe_tax && errors.pohe_tax.message}
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
