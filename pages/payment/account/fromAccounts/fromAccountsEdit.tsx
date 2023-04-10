import Accounts from "@/components/icons/Accounts"
import {
  createDataBank,
  getDataBank,
  updateDataBank,
} from "@/redux/PAYMENT/action/bank"
import { getDataFintech } from "@/redux/PAYMENT/action/fintech"
import {
  createDataAccounts,
  getDataAccountsFintech,
  updateDataAccounts,
} from "@/redux/PAYMENT/action/userAccounts"

import React, { useEffect, useState } from "react"
import { useForm, FieldErrors, Resolver, Controller } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import Select from "react-select"

export const FormAccountsEdit = (props: any) => {
  const { bank, refresh } = useSelector((state: any) => state.bankReducers)
  const { fint } = useSelector((state: any) => state.fintechReducers)
  const { userfintech } = useSelector((state: any) => state.accountReducers)
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
 
  const handleError = (errors: any) => {}

  type FormValues = {
    accounts: string
    saldo: string
    types: string
    bankcode: string
    control: any
    usac_expmonth: string
    usac_expyear: string
  }
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({})
  const handleFrom = (data: any) => {
    if(data.types !== "fintech"){
      const payload = {
        id: props.id,
        usac_user_id: 2,
        // usac_entity_id: data.bankcode.value,
        usac_account_number: data.accounts,
        usac_saldo: data.saldo,
        usac_type: data.types,
        usac_expmonth: data.usac_expmonth,
        usac_expyear: data.usac_expyear,
      }
      console.log(payload);
      
        dispatch(updateDataAccounts(props.id, payload))
        //   props.setIsEdit({ isShow: false })
    }else{
      const payload = {
        usac_user_id: 2,
        usac_account_number: data.accounts,
        usac_saldo: data.saldo,
        usac_type: data.types,
        usac_expmonth: data.usac_expmonth,
        usac_expyear: data.usac_expyear,
      }
      console.log(payload);
      
        dispatch(updateDataAccounts(props.id, payload))
      //  props.setIsEdit({ isShow: false })
    }
   
 
    // dispatch(updateDataAccounts(result))
    // props.setIsEdit({ isShow: false })
  }
  console.log("tes=>", props.types);
  
  // const [options, setOptions] = useState([
  //   { value: "debet", label: "Debet" },
  //   { value: "credit", label: "Credit" },
  //   { value: "fintech", label: "Fintech" },
  // ])

  const [typeCodeOptions, setTypeCodeOptions]: any = useState([])
  const [fintechCodeOptions, setFintechCodeOptions] = useState([])

  // const [selectedOption, setSelectedOption] = useState("")
  const [types, setTypes] = useState(props.types)
  const [accountfintech, setFintech] = useState(props.accounts)
  // const [banks, setBank] = useState()

  const handleInputChange = (event: any) => {
    const value = event.target.value
    setFintech(value)
    setValue("accounts", value)
  }
  // const handleSelectChange = (selectedOption: any) => {
  //   const separate = selectedOption.label
  //   const [code, label] = separate.split(",")
  //   const concat = code + userfintech.data.user_phone_number
  //   setFintech(concat)
  //   setValue("accounts", concat)
  // }

  const handleTypeChange = (event: any):any => {
    const type = event
    // setType(type)
    switch (type) {
      case "debet":
        setTypeCodeOptions(typeCodeOptions)
        break
      case "credit":
        setTypeCodeOptions(typeCodeOptions)
        break
      case "Fintech":
        setFintechCodeOptions(fintechCodeOptions)
        break
      default:
        setTypeCodeOptions([])
    }
  }

  useEffect(() => {
    dispatch(getDataBank(search))
    const optionsData = (bank.data || []).map((item: any) => ({
      value: item.bank_entity_id,
      label: `${item.bank_code}, ${item.bank_name}`,
    }))
    setTypeCodeOptions(optionsData)

    dispatch(getDataFintech(search))
    const optionsFintech = (fint || []).map((item: any) => ({
      value: item.paga_entity_id,
      label: `${item.paga_code}, ${item.paga_name}`,
    }))
    setFintechCodeOptions(optionsFintech)
    dispatch(getDataAccountsFintech(2))

    setValue("accounts", accountfintech)
    setValue("types", types)
  }, [dispatch, search, refresh])

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit(handleFrom, handleError)}>
        <div className="mb-4">
          <div className="w-full mb-3">Account Number</div>
          <div className="relative">
            <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
              <Accounts />
            </div>
            <input
              type="text"
              className={`text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border  ${
                props.type === "fintech"
                  ? "disabled:bg-gray-100 disabled:cursor-not-allowed"
                  : ""
              } `}
              placeholder="Masukkan Nomor Account Number"
          
              value={accountfintech}
              disabled={props.type === "fintech"}
              {...register("accounts")}
              onChange={handleInputChange}
            />
            {errors?.accounts && <p>{errors.accounts.message}</p>}
          </div>
        </div>

        <div className="mb-4">
          <div className="w-full mb-3">Masukkan Saldo</div>
          <div className="relative">
            <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
              <p>Rp.</p>
            </div>
            <input
              type="number"
              className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
              placeholder="Masukkan Jumlah Saldo"
              defaultValue={props.saldo}
              {...register("saldo")}
            />
            {errors?.saldo && <p>{errors.saldo.message}</p>}
          </div>
        </div>

        <div className="mb-4">
          <div className="w-full mb-3">Type</div>
          <input
                type="text"
                className={`w-full px-4 py-2 border border-[#DADADA] rounded-md focus:border-indigo-500 focus:outline-none 
                focus:shadow-outline-indigo   ${
                  props.types === "fintech" || props.types === "debet" || props.types === "credit"
                    ? "disabled:bg-gray-100 disabled:cursor-not-allowed"
                    : ""
                }`}
                disabled
                defaultValue={props.types && props.types}
                {...register("types")}
              />
     
          {errors?.types && <p>{errors.types.message}</p>}
        </div>

        {props.type !== "fintech" ? (
          <div className="mb-4">
            <div className="w-full mb-3">Expiry Date</div>
            <div className="flex gap-3">
              <input
                type="text"
                className="w-full px-4 py-2 border border-[#DADADA] rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
                placeholder="MM"
                defaultValue={props.usac_expmonth}
                {...register("usac_expmonth")}
              />
              <input
                type="text"
                className="w-full px-4 py-2 border border-[#DADADA] rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
                placeholder="YY"
                defaultValue={props.usac_expyear}
                {...register("usac_expyear")}
              />
            </div>
          </div>
        ) : null}

        <div className="  py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md bg-[#1D4ED8] px-3 py-2   text-white shadow-sm hover:bg-[#143694] sm:ml-3 sm:w-auto"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  )
}
