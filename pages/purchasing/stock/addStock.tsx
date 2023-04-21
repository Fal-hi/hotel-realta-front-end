import React from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import "react-datepicker/dist/react-datepicker.css"
import { doAddStock } from "@/redux/PURCHASING/action/actionStock"

export default function AddStock(props: any) {
  type FormValues = {
    stock_name: string
    stock_description: string
    stock_quantity: number
    stock_reorder_point: number
    stock_used: number
    stock_scrap: number
    stock_size: string
    stock_color: string
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const dispatch = useDispatch()
  // const { stock, message, refresh } = useSelector(
  //   (state: any) => state.stockReducers
  // )

  const handleRegistration = async (data: FormValues) => {
    const dataForm = {
      stock_name: data.stock_name,
      stock_description: data.stock_description,
      stock_quantity: data.stock_quantity,
      stock_reorder_point: data.stock_reorder_point,
      stock_used: data.stock_used,
      stock_scrap: data.stock_scrap,
      stock_size: data.stock_size,
      stock_color: data.stock_color,
    }
    dispatch(doAddStock(dataForm))
    props.closeModal()
  }

  const handleError = (errors: any) => {}

  const registerOptions = {
    stock_name: { required: "Name is required" },
    stock_description: { required: "Description is required" },
    stock_quantity: { required: "Quantity  is required" },
    stock_reorder_point: { required: "Reorder Point is required" },
    stock_used: { required: "Used is required" },
    stock_scrap: { required: "Scrap is required" },
    stock_size: { required: "Size is required" },
    stock_color: { required: "Color is required" },
  }

  return (
    <div>
      <div className="px-5">
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto"
          style={{ marginTop: "1rem" }}>
            <label>Stock Name</label>
            <input
              className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
              type="text"
              {...register("stock_name", registerOptions.stock_name)}
            />
            <small className="text-danger">
              {errors?.stock_name && errors.stock_name.message}
            </small>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
            <label>Description</label>
            <input
              className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
              type="text"
              {...register(
                "stock_description",
                registerOptions.stock_description
              )}
            />
            <small className="text-danger">
              {errors?.stock_description && errors.stock_description.message}
            </small>
          </div>

          <div className="flex gap-4 max-w-xl m-auto">
            {/* <div className="w-1/2 grid grid-cols-1 gap-4">
              <label htmlFor="quantity">Quantity </label>
              <input
                type="number"
                id="quantity"
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
      text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                style={{ width: "100px" }}
                {...register("stock_quantity", registerOptions.stock_quantity)}
              />
              <small className="text-danger">
                {errors?.stock_quantity && errors.stock_quantity.message}
              </small>
            </div> */}

            <div className="w-1/3 grid grid-cols-1 gap-4">
              <label htmlFor="reorder">Reorder </label>
              <input
                type="number"
                id="reorder"
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
      text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                style={{ width: "100px" }}
                {...register(
                  "stock_reorder_point",
                  registerOptions.stock_reorder_point
                )}
              />
              <small className="text-danger">
                {errors?.stock_reorder_point &&
                  errors.stock_reorder_point.message}
              </small>
            </div>
            {/* <div className="w-1/3 grid grid-cols-1 gap-4">
              <label htmlFor="quantity">Used </label>
              <input
                type="number"
                id="quantity"
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
      text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                style={{ width: "100px" }}
                {...register("stock_used", registerOptions.stock_used)}
              />
              <small className="text-danger">
                {errors?.stock_used && errors.stock_used.message}
              </small>
            </div>
          <div className="flex gap-4 max-w-xl m-auto">
            <div className="w-1/3 grid grid-cols-1 gap-4">
              <label htmlFor="reorder">Scrap </label>
              <input
                type="number"
                id="reorder"
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
      text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                style={{ width: "100px" }}
                {...register("stock_scrap", registerOptions.stock_scrap)}
              />
              <small className="text-danger">
                {errors?.stock_scrap && errors.stock_scrap.message}
              </small>
            </div>
          </div> */}
        
            <div className="w-1/3 grid grid-cols-1 gap-4">
              <label>Size</label>
              <input
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
      text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                type="text"
                style={{ width: "100px" }}
                {...register("stock_size", registerOptions.stock_size)}
              />
              <small className="text-danger">
                {errors?.stock_size && errors.stock_size.message}
              </small>
            </div>

            <div className="w-1/3 grid grid-cols-1 gap-4">
              <label>Color</label>
              <input
                className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
      text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                type="text"
                style={{ width: "100px" }}
                {...register("stock_color", registerOptions.stock_color)}
              />
              <small className="text-danger">
                {errors?.stock_color && errors.stock_color.message}
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
        </form>
      </div>
    </div>
  )
}
