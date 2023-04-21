import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { BsCalendar2Date } from "react-icons/bs"
import { getVendors } from "@/api/purchasing/apiPurchasing"

export default function AddListOrder(props: any) {
  type Vendors = {
    vendor_entity_id: number,
    vendor_name: number
  }
  type FormValues = {
    pohe_status: number
    pohe_order_date: string
    pohe_tax: number
    pohe_refund: number
    pohe_arrival_date: string
    pohe_pay_type: string
    pohe_emp_id: number
    pohe_vendor_id: number
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const dispatch = useDispatch()

  const [vendors, setVendor] = useState<Vendors[]>([])

  useEffect(() => {
    const fetchVendors = async () => {
      const data = await getVendors()
      console.log(data)
      setVendor(data)
    }
    fetchVendors()
  }, [])
  
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedDate2, setSelectedDate2] = useState(new Date())

  const handleRegistration = async (data: FormValues) => {
    const hari = new Date(selectedDate ? selectedDate : "").getDate()
    const bulan = new Date(selectedDate ? selectedDate : "").getMonth()
    const tahun = new Date(selectedDate ? selectedDate : "").getFullYear()
    const fullDate = tahun + "/" + (bulan + 1) + "/" + hari

    const hari2 = new Date(selectedDate2 ? selectedDate2 : "").getDate()
    const bulan2 = new Date(selectedDate2 ? selectedDate2 : "").getMonth()
    const tahun2 = new Date(selectedDate2 ? selectedDate2 : "").getFullYear()
    const fullDate2 = tahun2 + "/" + (bulan2 + 1) + "/" + hari2

    const dataAll = {
      pohe_status: data.pohe_status,
      pohe_order_date: fullDate,
      pohe_tax: data.pohe_tax,
      pohe_refund: data.pohe_refund,
      pohe_arrival_date: fullDate2,
      pohe_pay_type: data.pohe_pay_type,
      pohe_emp_id: data.pohe_emp_id,
      pohe_vendor_id: data.pohe_vendor_id,
    }
    console.log(dataAll)
    // dispatch(doAdd(dataAll)), props.closeModal()
  }

  const handleDateChange = (date: any | null) => {
    setSelectedDate(date)
    // const formattedDate = date?.toISOString()
    register("pohe_order_date", {
      required: "Register date is required",
      value: date,
    })
  }

  const handleDateChange2 = (date: any | null) => {
    setSelectedDate2(date)
    // const formattedDate = date?.toISOString()
    register("pohe_arrival_date", {
      required: "Register date is required",
      value: date,
    })
  }

  const handleError = (errors: any) => {}

  const registerOptions = {
    pohe_status: { required: "Status is required" },
    vendor_register_date: { required: "Register is required" },
    pohe_tax: { required: "Tax is required" },
    pohe_refund: { required: "Refund is required" },
    pohe_arrival_date: { required: "Arrival is required" },
    pohe_pay_type: { required: "Pay type is required" },
    pohe_emp_id: { required: "Employee type is required" },
    pohe_vendor_id: { required: "Vendor type is required" },
  }


  return (
    <div>
      <div className="px-5">
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div
            className="grid grid-cols-1 gap-4 max-w-xl m-auto"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
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

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto relative">
            <label>Register Date</label>
            <div className="grid grid-cols-1 gap-4 max-w-xl relative">
              <DatePicker
                dateFormat="yyyy/MM/dd"
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium w-full
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                selected={selectedDate}
                onChange={handleDateChange}
              /> <BsCalendar2Date className="absolute right-0 top-0 mt-3 mr-3 text-gray-400" size={20} />
              {errors.pohe_order_date && (
                <span className="text-red-500">
                  {errors.pohe_order_date.message}
                </span>
              )}
            </div>
            <small className="text-danger">
              {errors?.pohe_order_date &&
                errors.pohe_order_date.message}
            </small>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto relative">
            <label>Tax %</label>
            <div className="grid grid-cols-1 gap-4 max-w-xl relative">
              <input
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                type="text"
                {...register("pohe_tax", registerOptions.pohe_tax)}
              />
            </div>
            <small className="text-danger">
              {errors?.pohe_tax && errors.pohe_tax.message}
            </small>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto relative">
            <label>Refund Date</label>
            <div className="grid grid-cols-1 gap-4 max-w-xl relative">
              <input
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                type="text"
                {...register("pohe_refund", registerOptions.pohe_refund)}
              />
            </div>
            <small className="text-danger">
              {errors?.pohe_refund && errors.pohe_refund.message}
            </small>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto relative">
            <label>Arrival Date</label>
            <div className="grid grid-cols-1 gap-4 max-w-xl relative">
              <DatePicker
                dateFormat="yyyy/MM/dd"
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium w-full
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                selected={selectedDate2}
                onChange={handleDateChange2}
              /> <BsCalendar2Date className="absolute right-0 top-0 mt-3 mr-3 text-gray-400" size={20} />
              {errors.pohe_arrival_date && (
                <span className="text-red-500">
                  {errors.pohe_arrival_date.message}
                </span>
              )}
            </div>
            <small className="text-danger">
              {errors?.pohe_arrival_date &&
                errors.pohe_arrival_date.message}
            </small>
          </div>

          <div
            className="grid grid-cols-1 gap-4 max-w-xl m-auto"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            <label>Pay Type</label>
            <select
              id="pohe_pay_type"
              className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("pohe_pay_type", registerOptions.pohe_pay_type)}
            >
              <option selected>Choose a pay type</option>
              <option value="TR">TRANSFER</option>
              <option value="CA">CASH</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto relative">
            <label>Empolyee ID</label>
            <div className="grid grid-cols-1 gap-4 max-w-xl relative">
              <input
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                type="text"
                {...register("pohe_emp_id", registerOptions.pohe_emp_id)}
              />
            </div>
            <small className="text-danger">
              {errors?.pohe_emp_id && errors.pohe_emp_id.message}
            </small>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto"
          style={{ marginBottom: "1rem", marginTop: "1rem" }}>
            <label>Vendor</label>
            <select
              id="countries"
              className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("pohe_vendor_id", registerOptions.pohe_vendor_id)}
            >
              <option selected>Choose a vendor</option>
              {vendors.map(vendor => (
                <option value={vendor.vendor_entity_id} key={vendor.vendor_entity_id}>
                  {vendor.vendor_entity_id}
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
              className="flex items-center bg-[#7743DB] hover:bg-[#5f35ac] text-white py-2 px-4 rounded mr-0"
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
