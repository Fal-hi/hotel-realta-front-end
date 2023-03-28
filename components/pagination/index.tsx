import React from "react"
import { ChevronLeft, ChevronRight } from "../icons"

interface Props {
  pagination: {
    totalPage: number
    page: number
  }
  setPage: any
}

export const Pagination = ({ pagination, setPage }: Props) => {
  const itemList = []
  for (let i = 0; i < pagination.totalPage; i++) {
    if (i + 1 === pagination.page) {
      itemList.push(
        <a
          key={i}
          onClick={() => {}}
          aria-current="page"
          className="relative rounded-md mx-1 inline-flex items-center px-4 py-2 text-sm font-semibold text-[#4200FF] ring-1 ring-inset ring-[#4200FF]  focus:z-20 focus:outline-offset-0  cursor-pointer"
        >
          {i + 1}
        </a>
      )
    } else {
      itemList.push(
        <a
          key={i}
          onClick={() => {
            setPage(i + 1)
          }}
          aria-current="page"
          className="relative rounded-md mx-1 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-700  focus:z-20 focus:outline-offset-0  cursor-pointer hover:bg-purple-900"
        >
          {i + 1}
        </a>
      )
    }
  }

  return (
    <div className="flex-1 flex justify-center">
      <a
        onClick={() => {
          if (pagination.page - 1 !== 0) {
            setPage(pagination.page - 1)
          }
        }}
        aria-current="page"
        className="relative rounded-md  inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-700  focus:z-20 focus:outline-offset-0  cursor-pointer hover:bg-purple-900"
      >
        <ChevronLeft />
      </a>
      {itemList}
      <a
        onClick={() => {
          if (pagination.page < pagination.totalPage) {
            setPage(+pagination.page + 1)
          }
        }}
        aria-current="page"
        className="relative rounded-md mx-1 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-700  focus:z-20 focus:outline-offset-0  cursor-pointer hover:bg-purple-900"
      >
        <ChevronRight />
      </a>
    </div>
  )
}
