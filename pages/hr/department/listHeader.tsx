import { Pencil, Trash } from "@/components/icons"
import React from "react"

// This is the table constant/settings which needed to render table elements
export const tableConstants = (setIsOpen?: any, setIsDelete?: any) => {
  return [
    {
      title: "Departmen ID",
      render: (data: any) => {
        return <span>{data.id}</span>
      },
    },
    {
      title: "Department",
      render: (data: any) => {
        return <span>{data.name}</span>
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
                  department: data.name,
                  id: data.id,
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
                  department: data.name,
                  id: data.id,
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
