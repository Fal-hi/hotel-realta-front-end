import { Pencil, Trash } from "@/components/icons"
import React from "react"

// This is the table constant/settings which needed to render table elements
export const tableConstants = (setIsOpen?: any, setIsDelete?: any) => {
  return [
    {
      title: "Bank Code",
      render: (data: any) => {
        return <span>{data.bank_code}</span>
      },
    },
    {
      title: "Bank Name",
      render: (data: any) => {
        return <span>{data.bank_name}</span>
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
                  bank: data.name,
                  id: data.bank_entity_id,
                  isShow: true,
                })
              }}
            >
              <Trash />
            </div>
            <div
              className="mx-2 cursor-pointer"
              onClick={() => {
                setIsOpen({
                  code: data.bank_code,
                  bank: data.bank_name,
                  id: data.bank_entity_id,
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
