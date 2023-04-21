import React, {useState, useEffect} from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import "react-datepicker/dist/react-datepicker.css"
import { useRouter } from "next/router"
import { getStocks } from "@/api/purchasing/apiPurchasing"
import { doAddPode } from "@/redux/PURCHASING/action/actionPode"

export default function AddStockListOrder(props: any) {
  const router = useRouter()
  const poheId = router.query.pohe_id
  type Stocks = {
    stock_id: number
    stock_name: string
  }
  type FormValues = {
    pode_order_qty: number
    pode_price: number
    pode_received_qty: number
    pode_rejected_qty: number
    pode_stocked_qty: number
    pode_stock_id: number
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
      console.log(data)
      setStocks(data)
    }
    fetchStocks()
  }, [])

  const handleRegistration = async (data: FormValues) => {
    const dataForm = {
      pode_pohe_id: poheId,
      pode_order_qty: data.pode_order_qty,
      pode_price: data.pode_price,
      pode_received_qty: data.pode_received_qty,
      pode_rejected_qty: data.pode_rejected_qty,
      pode_stock_id: data.pode_stock_id,
      pode_stocked_qty: data.pode_stocked_qty
    }
    console.log(dataForm)
    dispatch(doAddPode(dataForm))
    props.closeModal()
  }

  const handleError = (errors: any) => {}

  const registerOptions = {
    pode_order_qty: { required: "Order Qty is required" },
    pode_price: { required: "Price is required" },
    pode_received_qty: { required: "Received Qty  is required" },
    pode_rejected_qty: { required: "Rejected Qty is required" },
    pode_stocked_qty: { required: "Rejected Qty is required" },
    pode_stock_id: { required: "Stock Id Qty is required" },
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
              className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("pode_stock_id", registerOptions.pode_stock_id)}
            >
              <option selected>Choose a stock</option>
              {stocks.map(stock => (
                <option value={stock.stock_id} key={stock.stock_id}>
                  {stock.stock_name}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
            <label>Price</label>
            <input
              className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
              type="text"
              {...register(
                "pode_price",
                registerOptions.pode_price
              )}
            />
            <small className="text-danger">
              {errors?.pode_price && errors.pode_price.message}
            </small>
          </div>

          <div className="flex gap-4 max-w-xl m-auto">
            <div className="w-1/2 grid grid-cols-1 gap-4">
              <label htmlFor="quantity">Order Qty </label>
              <input
                type="number"
                id="quantity"
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
      text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                style={{ width: "100px" }}
                {...register(
                  "pode_order_qty",
                  registerOptions.pode_order_qty
                )}
              />
              <small className="text-danger">
                {errors?.pode_order_qty && errors.pode_order_qty.message}
              </small>
            </div>

            <div className="w-1/2 grid grid-cols-1 gap-4">
              <label htmlFor="quantity">Received Qty</label>
              <input
                type="number"
                id="quantity"
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
      text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                style={{ width: "100px" }}
                {...register(
                  "pode_received_qty",
                  registerOptions.pode_received_qty
                )}
              />
              <small className="text-danger">
                {errors?.pode_received_qty && errors.pode_received_qty.message}
              </small>
            </div>

            <div className="w-1/2 grid grid-cols-1 gap-4">
              <label htmlFor="quantity">Rejected Qty </label>
              <input
                type="number"
                id="quantity"
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
      text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                style={{ width: "100px" }}
                {...register(
                  "pode_rejected_qty",
                  registerOptions.pode_rejected_qty
                )}
              />
              <small className="text-danger">
                {errors?.pode_rejected_qty && errors.pode_rejected_qty.message}
              </small>
            </div>
   
            <div className="w-1/2 grid grid-cols-1 gap-4">
              <label htmlFor="quantity">Stocked Qty </label>
              <input
                type="number"
                id="quantity"
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
      text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                style={{ width: "100px" }}
                {...register(
                  "pode_stocked_qty",
                  registerOptions.pode_stocked_qty
                )}
              />
              <small className="text-danger">
                {errors?.pode_stocked_qty && errors.pode_stocked_qty.message}
              </small>
            </div>
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

          {/* <div className="flex justify-center items-center mt-4 p-5">
            <button
              className="flex items-center bg-[#7743DB] hover:bg-[#5f35ac] text-white py-2 px-4 rounded mr-4"
              onClick={props.closeModal}
            >
              Generate Barcode
            </button>
          </div> */}

        </form>
      </div>
    </div>
  )
}
