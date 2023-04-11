
import { Pencil, Trash } from "@/components/icons"
import React from "react"

// This is the table constant/settings which needed to render table elements
export const tableConstants = (setIsOpen?: any, setIsDelete?: any) => {
  return [
    {
      title: "Fintech Code",
      render: (data: any) => {
        return <span>{data.paga_code}</span>
      },
    },
    {
      title: "FIntech Name",
      render: (data: any) => {
        return <span>{data.paga_name}</span>
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
                  bank: data.paga_name,
                  id: data.paga_entity_id,
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
                  code: data.paga_code,
                  name: data.paga_name,
                  id: data.paga_entity_id,
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
