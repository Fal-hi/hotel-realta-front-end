import { Combobox } from "@headlessui/react"
import React from "react"
import { Magnifier } from "../icons"

interface Idata {
  handleSelected: any
  value: string
  onChange: any
  data: {
    option: number | string
    value: string
  }[]
  inputChanges: any
  selectedPerson: any
}

const ComboboxHr = ({
  value,
  handleSelected,
  onChange,
  data,
  inputChanges,
}: any) => {
  return (
    <Combobox value={value} onChange={onChange} name="fullname">
      <div className="flex">
        <div className=" w-1/12 border relative rounded-l-md border-r-0 p-2 block mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none">
          <Magnifier />
        </div>
        <Combobox.Input
          placeholder="Select"
          onChange={inputChanges}
          className={`border relative rounded-r-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none`}
        />
      </div>
      <Combobox.Options
        className={`absolute z-10 bg-white rounded-md shadow-lg ring-black ring-opacity-5 focus:outline-none`}
      >
        {data.map((data: any, i: number) => (
          <Combobox.Option
            key={i}
            value={data.option}
            onClick={() => {
              handleSelected(data.value, data.option)
            }}
            className={`py-2 px-2 cursor-pointer border-b hover:bg-bgGray `}
          >
            {data.value}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  )
}

export default ComboboxHr
