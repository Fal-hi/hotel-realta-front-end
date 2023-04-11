import React from "react"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { Magnifier } from "../icons"

type Props = {
  onChange?: any
}

export const SearchInput = ({ onChange }: Props) => {
  return (
    <div className="flex">
      <span className="inline-flex items-center pl-3 text-sm border-2 border-r-0 border-gray-300 rounded-l-lg  dark:text-gray-300 ">
        <Magnifier />
      </span>
      <input
        onChange={onChange}
        type="text"
        className="rounded-none rounded-r-lg border-2 border-l-0 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:placeholder-gray-300 dark:text-white focus:border-gray-300 focus:outline-none focus:ring-0 active:border-gray-300 "
        placeholder="Search"
        
      />
    </div>
  )
}
