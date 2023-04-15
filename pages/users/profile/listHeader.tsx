import { Pencil, Trash } from "@/components/icons"
import React from "react"

// This is the table constant/settings which needed to render table elements
export const TablePoint = () => {
  return [

    {
      title: "Created On",
      render: (data: any) => {
        return <span>{data.ubpo_created_on}</span>
      },
    },
    
    {
      title: "Bonus Type",
      render: (data: any) => {
        return <span>{data.ubpo_bonus_type}</span>
      },
    },
    {
      title: "Total Points",
      render: (data: any) => {
        return <span>{data.ubpo_total_points}</span>
      },
    },

    
  ]
}
