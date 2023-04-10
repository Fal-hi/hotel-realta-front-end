
import { Pencil, Trash } from "@/components/icons"
import formatRupiah from "@/functions/formatRupiah"
import React from "react"

// This is the table constant/settings which needed to render table elements
export const tableConstants = (setIsOpen?: any, setIsDelete?: any, setIsEdit?:any) => {
  return [
    {
      title: "Account Number",
      render: (data: any) => {
        return <span>{data.accountNumber}</span>
      },
    },
    {
      title: "Type",
      render: (data: any) => {
        return <span>{data.paymentType}</span>
      },
    },

    {
      title: "Balance",
      render: (data: any) => {
        return <span>{formatRupiah(data.balance)}</span>
      },
    },

    {
      title: "Paymnet Type",
      render: (data: any) => {
        return <span>{data.paymentName}</span>
      },
    },

    {
      title: "Action",
      render: (data: any) => {
        return (
          <div className="flex">
            <div
              className="mx-2 cursor-pointer"
              onClick={() => {
                setIsDelete({
                  accounts: data.accountNumber,
                  id: data.accountNumber,
                  isShow: true,
                })
              }}
            >
              <Trash />
            </div>
            <div
              className="mx-2 cursor-pointer"
              onClick={() => {
                setIsEdit({
                  types:data.paymentType,
                  usac_expyear:data.expYear,
                  usac_expmonth: data.expMonth,
                  saldo: data.balance,
                  accounts: data.accountNumber,
                  id: data.accountNumber,
                  isShow: true,
                })
              }}
            >
              <Pencil />
            </div>
          </div>
        )
      },
    },
  ]
}
