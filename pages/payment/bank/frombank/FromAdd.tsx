import { createDataBank, updateDataBank } from "@/redux/PAYMENT/action/bank"
import React, { useState } from "react"
import { useForm, FieldErrors, Resolver } from "react-hook-form"
import Select from "react-select"
import { useDispatch, useSelector } from "react-redux"
import Swal from "sweetalert2"

type FormValues = {
  type: string
  bank_code: string
  bank_name: string
}
const resolver: Resolver<FormValues> = async values => {
  const { bank_code, bank_name } = values
  const errors: FieldErrors<FormValues> = {}

  if (!bank_code) {
    errors.bank_code = {
      type: "required",
      message: "This is required.",
    }
  } else if (!bank_name) {
    errors.bank_name = {
      type: "required",
      message: "This is required.",
    }
  }

  return { values: { bank_code, bank_name } ? values : {}, errors }
}

export const FormAdd = (props: any) => {
  const dispatch = useDispatch()

  const handleFrom = (data: any) => {
    if (props.id) {
      const payload = {
        id: props.id,
        data,
      }
      
      dispatch(updateDataBank(payload))
      Swal.fire({
        title: "Sukses",
        text: `Berhasil Update Data`,
        icon: "success",
      })
      props.setIsOpen({ isShow: false })
    } else {
      dispatch(createDataBank(data))

      Swal.fire({
        title: "Sukses",
        text: `Berhasil Tambah Data`,
        icon: "success",
      })
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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(handleFrom, handleError)}>
        <div className="mb-4">
          <div className="w-full mb-3">Bank Code</div>
          <input
            type="number"
            className="w-full px-4 py-2 border border-[#DADADA] rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
            placeholder="Masukkan Kode Bank"
            defaultValue={props.code}
            
            {...register("bank_code")}
          />
          {errors?.bank_code && <p>{errors.bank_code.message}</p>}
        </div>

        <div className="mb-4">
          <div className="w-full mb-3">Bank Name</div>
          <input
            type="text"
            className="w-full px-4 py-2 border border-[#DADADA] rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
            placeholder="Masukkan Nama Bank"
            defaultValue={props.name}
            {...register("bank_name")}
          />
          {errors?.bank_code && <p>{errors.bank_code.message}</p>}
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
    </div>
  )
}
