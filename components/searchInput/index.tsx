import React from "react"
import { HiMagnifyingGlass } from "react-icons/hi2"
import { Magnifier } from "../icons"

type Props = {
  onChange?: any
}

export const SearchInput = ({ onChange }: Props) => {
  return (
    <div className="flex">
      <span className="inline-flex items-center pl-3 text-sm border border-r-0 border-gray-400 rounded-l-md  dark:text-gray-400 ">
        <Magnifier />
      </span>
      <input
        onChange={onChange}
        type="text"
        className="rounded-none rounded-r-lg border border-l-0 text-gray-900 block flex-1 min-w-0 w-full text-sm border-gray-400 p-2.5  dark:placeholder-gray-400 dark:text-white focus:border-gray-400 focus:outline-none focus:ring-0 active:border-gray-400 "
        placeholder="Search"
      />
    </div>
  )
}
