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
          className="relative rounded-md mx-1 inline-flex items-center px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-[#4200FF]  focus:z-20 focus:outline-offset-0 bg-indigo-600 cursor-pointer"
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
          className="relative rounded-md mx-1 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-700  focus:z-20 focus:outline-offset-0  cursor-pointer hover:bg-purple-900 hover:text-white"
        >
          {i + 1}
        </a>
      )
    }
  }

  const displayItemList =
    pagination.totalPage <= 5
      ? itemList
      : [
          itemList[0],
          itemList[1],
          itemList[2],

          <span key="dots" className="mx-1">
            ...
          </span>,
          ...itemList.slice(-3),
        ]

  const startDotsIndex = Math.max(3, pagination.page - 2)
  const endDotsIndex = Math.min(pagination.totalPage - 2, pagination.page + 1)

  const dynamicDisplayItemList =
    pagination.totalPage <= 5
      ? itemList
      : [
          itemList[0],
          itemList[1],
          startDotsIndex > 3 ? (
            <span key="dots-start" className="mx-1">
              ...
            </span>
          ) : null,

          ...itemList.slice(startDotsIndex - 1, endDotsIndex),

          endDotsIndex < pagination.totalPage - 2 ? (
            <span key="dots-end" className="mx-1">
              ...
            </span>
          ) : null,

          ...itemList.slice(-2),
        ]

  return (
    <div className="flex-1 flex justify-center">
      <a
        onClick={() => {
          if (pagination.page - 1 !== 0) {
            setPage(pagination.page - 1)
          }
        }}
        aria-current="page"
        className="relative rounded-md  inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-700  focus:z-20 focus:outline-offset-0  cursor-pointer hover:bg-purple-900 "
      >
        <ChevronLeft />
      </a>
      {dynamicDisplayItemList}
      <a
        onClick={() => {
          if (pagination.page < pagination.totalPage) {
            setPage(+pagination.page + 1)
          }
        }}
        aria-current="page"
        className="relative rounded-md mx-1 inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-700  focus:z-20 focus:outline-offset-0 cursor-pointer hover:bg-purple-900"
      >
        <ChevronRight />
      </a>
    </div>
  )
}
