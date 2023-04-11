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
} from "@/redux/PAYMENT/action/userAccounts"
import classNames from "classnames"
import React, { useEffect, useState } from "react"
import { useForm, FieldErrors, Resolver, Controller } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import Select from "react-select"

export const FormAccounts = (props: any) => {
  const { bank, refresh } = useSelector((state: any) => state.bankReducers)
  const { fint } = useSelector((state: any) => state.fintechReducers)
  const { userfintech } = useSelector((state: any) => state.accountReducers)
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const handleFrom = (data: any) => {
    const result = {
      usac_user_id: 2,
      usac_entity_id: data.bankcode.value,
      usac_account_number: data.accounts,
      usac_saldo: data.saldo,
      usac_expmonth: data.usac_expmonth,
      usac_expyear: data.usac_expyear,
      usac_type: data.type,
    }
    dispatch(createDataAccounts(result))
    props.setIsOpen({ isShow: false })
  }
  const handleError = (errors: any) => {}

  type FormValues = {
    accounts: string
    saldo: string
    type: string
    bankcode: string
    control: any
    usac_expmonth: string
    usac_expyear: string
  }
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormValues>({})

  const [options, setOptions] = useState([
    { value: "debet", label: "Debet" },
    { value: "credit", label: "Credit" },
    { value: "fintech", label: "Fintech" },
  ])

  const [typeCodeOptions, setTypeCodeOptions]: any = useState([])
  const [fintechCodeOptions, setFintechCodeOptions] = useState([])

  const [selectedOption, setSelectedOption] = useState("")
  const [stype, setType] = useState("")
  const [accountfintech, setFintech] = useState(" ")
  const [banks, setBank] = useState()

  const handleInputChange = (event: any) => {
    const value = event.target.value
    setFintech(value)
    setValue("accounts", value)
  }
  const handleSelectChange = (selectedOption: any) => {
    const separate = selectedOption.label
    const [code, label] = separate.split(",")
    const concat = code + userfintech.data.user_phone_number
    setFintech(concat)
    setValue("accounts", concat)
  }

  const handleTypeChange = (event: any) => {
    const type = event.target.value
    setType(type)
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
                stype === "Fintech"
                  ? "disabled:bg-gray-100 disabled:cursor-not-allowed"
                  : ""
              } `}
              placeholder="Masukkan Nomor Account Number"
              value={accountfintech}
              defaultValue={props.accounts}
              disabled={stype === "fintech"}
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

          <select
            className="w-full px-4 py-2 border border-[#DADADA] rounded-md focus:border-indigo-500 focus:outline-none 
          focus:shadow-outline-indigo"
            defaultValue={props.type}
            {...register("type")}
            onChange={handleTypeChange}
          >
            <option value="">- Select Type -</option>
            {options.map((data, i) => (
              <option key={i} value={data.value}>
                {data.label}
              </option>
            ))}
          </select>
          {errors?.type && <p>{errors.type.message}</p>}
        </div>

        <div className="mb-4">
          <div className="w-full mb-3">Type Code</div>
          {stype === "debet" || stype === "credit" ? (
            <Controller
              name="bankcode"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Select
                  options={typeCodeOptions}
                  onChange={selectedOption => onChange(selectedOption)}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          ) : stype === "fintech" ? (
            <Controller
              name="bankcode"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Select
                  options={fintechCodeOptions}
                  onChange={handle => {
                    onChange(handle)
                    handleSelectChange(handle)
                  }}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          ) : (
            <Controller
              name="bankcode"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Select onBlur={onBlur} value={value} />
              )}
            />
          )}
        </div>
        {stype !== "fintech" ? (
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
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
