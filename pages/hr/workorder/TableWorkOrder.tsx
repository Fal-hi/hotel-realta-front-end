import React, { useState, useEffect } from "react"
import Table from "../../../components/Table"
import PopUpWorkorder from "../../../components/hr/PopUpWorkorder"
import { Pagination } from "../../../components/pagination"
import { useSelector } from "react-redux"

const TableWorkOrder = ({
  setmodalEdit,
  workorderData,
  workorder,
  setPage,
  onEditClick,
}: any) => {
  return (
    <Table
      cols={[
        {
          title: "Workorder Date",
          render: (data: any) => {
            return <span>{data.workorderDate}</span>
          },
        },
        {
          title: "Status",
          render: (data: any) => {
            return <span>{data.status}</span>
          },
        },
        {
          title: "Created By",
          render: (data: any) => {
            return <span>{data.createdBy}</span>
          },
        },
        {
          title: "Action",
          render: (data: any) => {
            return (
              <PopUpWorkorder
                onEditClick={() => onEditClick(data.startDate)}
                idWorkOrder={data.id}
              />
            )
          },
        },
      ]}
      data={workorderData}
    >
      <Pagination
        pagination={{
          totalPage: workorder?.totalPage,
          page: workorder?.page,
        }}
        setPage={setPage}
      />
    </Table>
  )
}

export default TableWorkOrder
