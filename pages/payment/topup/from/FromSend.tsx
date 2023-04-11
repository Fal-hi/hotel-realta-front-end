import formatRupiah from "@/functions/formatRupiah"
import { createDataTopUp } from "@/redux/PAYMENT/action/transaction"
import { getDataUserAccounts } from "@/redux/PAYMENT/action/userAccounts"
import classNames from "classnames"
import React, { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import Select from "react-select"
import Swal from "sweetalert2"

const FromSend = (props: any) => {
  const { accounts, refresh } = useSelector(
    (state: any) => state.accountReducers
  )
  const [recipient, setRecipient] = useState("")
  const [amount, setAmount] = useState<number>(0)

  const [customAmount, setCustomAmount] = useState(0)
  const [showCustomAmount, setShowCustomAmount] = useState(false)

  const handleFrom = (data: any) => {
    const result = {
      amount: data.amount,
      sourceNumber: data.sourceNumber.value,
      targetNumber: data.targetNumber,
      transactionType: "TP",
      userID: 2,
    }
    
    console.log("tess=>", result);
    
    dispatch(createDataTopUp(result))
    props.setIsOpen({ isShow: false })
  }
  type FormValues = {
    amount: number
    sourceNumber: string;
    targetNumber:string;
  }

  const handleError = (errors: any) => {}
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<FormValues>({})

  const handleInputChange = (event: any) => {
    const value = parseInt(event.target.value) || 0
    setAmount(value)
    setValue("amount", value)
  }

  const handlePresetClick = (amount: any) => {
    setAmount(amount)
    setValue("amount", amount)
  }
  
  const presetAmounts = [5000, 10000, 15000, 20000, 30000, 100000]
  const [options, setOptions]:any = useState([])

  const [selectedOption, setSelectedOption] = useState("")
  const [selected, setSelected] = useState("")
  const handleSelectChange = (selectedOption: any) => {
    setSelectedOption(selectedOption)
  }
  const handleSelect = (selectedOption: any) => {
    setSelected(selectedOption)
  }

  const filterOptions = (option: any, inputValue: any) => {
    return option.label.toLowerCase().includes(inputValue.toLowerCase())
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDataUserAccounts())
    const optionsData = accounts.map((item: any) => ({
      value: item.accountNumber,
      label: `${item.accountNumber}, ${item.paymentName}`,
    }))
    setOptions(optionsData)
  }, [])

  return (
    <div className="max-w-md mx-auto rounded-md p-2">
      <form onSubmit={handleSubmit(handleFrom, handleError)}>
        <div className="mb-4">
          <label
            htmlFor="amount"
            className="block text-gray-700 font-medium mb-2"
          >
            Jumlah
          </label>
          <div className="relative">
            <div className="">
              <input
                type="number"
                className="w-full px-4 py-2 border border-gray-400 rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo"
                placeholder="Masukkan jumlah saldo"
                value={amount}
                {...register("amount")}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="preset-amount"
            className="block text-gray-700 font-medium mb-2"
          >
            Pilih Jumlah
          </label>
          <div id="preset-amount" className="flex flex-wrap -mx-2">
            {presetAmounts.map(presetAmount => (
              <button
                key={presetAmount}
                type="button"
                className={`mx-2 my-1 px-3 py-2 text-sm font-medium rounded-md ${
                  amount === presetAmount
                    ? "bg-indigo-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => handlePresetClick(presetAmount)}
              >
                {formatRupiah(presetAmount)}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="recipient"
            className="block text-gray-700 font-medium mb-2"
          >
            Source
          </label>
          <Controller
            name="sourceNumber"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Select
                options={options}
                onChange={selectedOption => onChange(selectedOption)}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="recipient"
            className="block text-gray-700 font-medium mb-2"
          >
            Target
          </label>

          <div className="relative">
            <div className="">
              <input
                type="text"
                className="w-full px-4 py-2 border  border-gray-400 rounded-md focus:border-indigo-500 focus:outline-none focus:shadow-outline-indigo "
                placeholder="Masukkan"
                {...register("targetNumber")}
              />
            </div>
          </div>
        </div>

        <div className="  py-3 sm:flex sm:flex-row-reverse">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-indigo"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  )
}

export default FromSend
