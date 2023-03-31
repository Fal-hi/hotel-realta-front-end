
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
                  resto: data.reme_name,
                  id: data.reme_id,
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
                  resto: data.reme_name,
                  id: data.reme_id,
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
