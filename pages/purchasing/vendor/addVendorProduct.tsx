import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import "react-datepicker/dist/react-datepicker.css"
import { doAddVepro } from "@/redux/PURCHASING/action/actionVepro"
import { useRouter } from "next/router"
import { getStocks } from "@/api/purchasing/apiPurchasing"

export default function AddVendorProduct(props: any) {
  const router = useRouter()
  const vendorId = router.query.vendor_entity_id
  // console.log(vendorId)
  type Stocks = {
    stock_id: number
    stock_name: string
  }
  type FormValues = {
    vepro_qty_stocked: number
    vepro_qty_remaining: number
    vepro_price: number
    vepro_stock_id: number
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const dispatch = useDispatch()

  const [stocks, setStocks] = useState<Stocks[]>([])

  useEffect(() => {
    const fetchStocks = async () => {
      const data = await getStocks()
      setStocks(data)
    }
    fetchStocks()
  }, [])

  const handleRegistration = async (data: FormValues) => {
    const dataForm = {
      vepro_qty_stocked: data.vepro_qty_stocked,
      vepro_qty_remaining: data.vepro_qty_remaining,
      vepro_price: data.vepro_price,
      vepro_vendor_id: vendorId,
      vepro_stock_id: data.vepro_stock_id,
    }
    dispatch(doAddVepro(dataForm)), props.closeModal()
  }

  const handleError = (errors: any) => {}

  const registerOptions = {
    vepro_qty_stocked: { required: "Stocked is required" },
    vepro_qty_remaining: { required: "Remaining is required" },
    vepro_price: { required: "Price is required" },
    vepro_stock_id: { required: "Stock Id is required" },
  }

  return (
    <div>
      <div className="px-5">
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto"
          style={{ marginBottom: "1rem", marginTop: "1rem" }}>
            <label>Stock Name</label>
            <select
              id="countries"
              className="w-full px-4 py-2 border border-[#DADADA] rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
              {...register("vepro_stock_id", registerOptions.vepro_stock_id)}
            >
              <option selected>Choose a product</option>
              {stocks.map(stock => (
                <option value={stock.stock_id} key={stock.stock_id}>
                  {stock.stock_name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-4 max-w-xl m-auto">
            <div className="w-1/2 grid grid-cols-1 gap-4">
              <label htmlFor="quantity">Qty Stocked </label>
              <input
                type="number"
                id="quantity"
                className="w-full px-4 py-2 border border-[#DADADA] rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
                style={{ width: "100px" }}
                {...register(
                  "vepro_qty_stocked",
                  registerOptions.vepro_qty_stocked
                )}
              />
              <small className="text-danger">
                {errors?.vepro_qty_stocked && errors.vepro_qty_stocked.message}
              </small>
            </div>

            <div className="w-1/2 grid grid-cols-1 gap-4">
              <label htmlFor="reorder">Qty Remaining </label>
              <input
                type="number"
                id="reorder"
                className="w-full px-4 py-2 border border-[#DADADA] rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
                style={{ width: "100px" }}
                {...register(
                  "vepro_qty_remaining",
                  registerOptions.vepro_qty_remaining
                )}
              />
              <small className="text-danger">
                {errors?.vepro_qty_remaining &&
                  errors.vepro_qty_remaining.message}
              </small>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto relative">
            <label>Sell Price</label>
            <div className="grid grid-cols-1 gap-4 max-w-xl relative">
              <input
                className="w-full px-4 py-2 border border-[#DADADA] rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
                type="text"
                {...register("vepro_price", registerOptions.vepro_price)}
              />
            </div>
            <small className="text-danger">
              {errors?.vepro_price && errors.vepro_price.message}
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
