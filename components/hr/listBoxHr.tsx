import { Listbox } from "@headlessui/react"
import React from "react"
import { ChevronDown } from "../icons"

interface IProps {
  value: any
  onChange: any
  data: {
    value: string
    key: string
  }[]
  onClick: any
}

const ListBoxHr = ({ value, onChange, data, setData }: any) => {
  return (
    <Listbox onChange={onChange}>
      <Listbox.Button className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none">
        <div className="flex justify-between">
          {value}
          <div>
            <ChevronDown />
          </div>
        </div>
      </Listbox.Button>
      <Listbox.Options className="absolute bg-white z-10 rounded-md shadow-lg ring-black ring-opacity-5 focus:outline-none">
        {data.map((data: any, i: number) => (
          <Listbox.Option
            key={i}
            value={data.value}
            onClick={() => {
              setData({ option: data.option, value: data.value })
            }}
            className={`py-2 px-2 cursor-pointer border-b hover:bg-bgGray `}
          >
            {data.option}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default ListBoxHr
