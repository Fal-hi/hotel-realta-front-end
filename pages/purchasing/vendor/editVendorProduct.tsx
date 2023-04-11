import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import "react-datepicker/dist/react-datepicker.css"
import { useRouter } from "next/router"
import { getStocks } from "@/api/purchasing/apiPurchasing"
import { doUpdateVepro } from "@/redux/PURCHASING/action/actionVepro"

export default function EditVendroProduct(props: any) {
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

  let { vendor, message, refresh } = useSelector(
    (state: any) => state.vendorReducers
  )
  const dispatch = useDispatch()

  const [data, setData] = useState<any>({})
  console.log(data)
  console.log(vendor?.data?.data)

  const [stocks, setStocks] = useState<Stocks[]>([])

  useEffect(() => {
    const fetchStocks = async () => {
      const data = await getStocks()
      setStocks(data)
    }
    fetchStocks()
  }, [])

  const handleEdit = async (data: FormValues) => {
    const dataForm = {
      vepro_qty_stocked: data.vepro_qty_stocked,
      vepro_qty_remaining: data.vepro_qty_remaining,
      vepro_price: data.vepro_price,
      vepro_vendor_id: vendorId,
      vepro_stock_id: data.vepro_stock_id,
    }
    dispatch(doUpdateVepro(props.isEdit.id, dataForm))
    props.closeModal()
  }

  const handleError = (errors: any) => {}

  useEffect(() => {
    const getData = async () => {
      setData(
        vendor?.data?.data.filter(
          (vendor: any) => vendor.vendor_id === props.isEdit.id
        )[0]
      )
    }
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const registerOptions = {
    vepro_qty_stocked: { required: "Qty Stocked is required" },
    vepro_qty_remaining: { required: "Qty Remaining is required" },
    vepro_price: { required: "Price is required" },
    vepro_stock_id: { required: "Scrap is required" },
  }

  return (
    <div>
      <div className="px-5">
        <form onSubmit={handleSubmit(handleEdit, handleError)}>
          <div
            className="grid grid-cols-1 gap-4 max-w-xl m-auto"
            style={{ marginBottom: "1rem", marginTop: "1rem" }}
          >
            <label>Stock Name</label>
            <select
              id="countries"
              className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("vepro_stock_id", registerOptions.vepro_stock_id)}
            >
              <option selected>Choose a category</option>
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
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
      text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                style={{ width: "100px" }}
                defaultValue={data?.vepro_qty_stocked}
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
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
      text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
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
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
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
