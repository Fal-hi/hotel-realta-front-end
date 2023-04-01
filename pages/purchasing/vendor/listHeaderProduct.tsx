import { Menu, Transition } from "@headlessui/react"
import { BsThreeDots } from "react-icons/bs"
import { Pencil, Trash } from "@/components/icons"
import React, { Fragment } from "react"
import { MdDelete, MdEdit, MdPlusOne } from "react-icons/md"
import { useRouter } from "next/router"

// This is the table constant/settings which needed to render table elements
export const tableConstants = (setIsOpen?: any, setIsDelete?: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  return [
    {
      title: "Stock",
      render: (data: any) => {
        return <span>{data.stock_name}</span>
      },
    },
    {
      title: "QTY Stocked",
      render: (data: any) => {
        return <span>{data.vendor_product?.vepro_qty_stocked}</span>
      },
    },

    {
      title: "QTY Remaining",
      render: (data: any) => {
        return (
          <span>{data.vendor_product?.vepro_qty_remaining}</span>
        )
      },
    },

    {
      title: "Price",
      render: (data: any) => {
        return (
          <span>{data.vendor_product?.vepro_price}</span>
        )
      },
    },
  ]
}
