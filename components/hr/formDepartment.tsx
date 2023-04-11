import {
  createDepartment,
  updateDepartment,
} from "@/redux/HR/action/department"
import React from "react"
import { useForm, FieldErrors, Resolver } from "react-hook-form"

import { useDispatch, useSelector } from "react-redux"

type FormValues = {
  name: string
}
const resolver: Resolver<FormValues> = async values => {
  const { name } = values
  const errors: FieldErrors<FormValues> = {}

  if (!name) {
    errors.name = {
      type: "required",
      message: "This is required.",
    }
  }

  return { values: name ? values : {}, errors }
}

export const FormDepartment = (props: any) => {
  const dispatch = useDispatch()

  const handleRegistration = (data: any) => {
    if (props.id) {
      // untuk membuat
      const payload = {
        id: props.id,
        data,
      }
      dispatch(updateDepartment(payload))
      props.setIsOpen({ isShow: false })
    } else {
      dispatch(createDepartment(data))
      props.setIsOpen({ isShow: false })
    }
  }
  const handleError = (errors: any) => {}

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver })
  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div className="bg-white   pt-5 pb-4 sm:p-6 sm:pb-4 border-b">
        <div className="w-full mb-3">Department Name</div>
        <input
          type="text"
          className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
          defaultValue={props.department}
          {...register("name")}
        />
        {errors?.name && <p>{errors.name.message}</p>}
      </div>

      <div className="bg-gray-50  py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-[#1D4ED8] px-3 py-2   text-white shadow-sm hover:bg-[#143694] sm:ml-3 sm:w-auto"
        >
          Save
        </button>
      </div>
    </form>
  )
}
