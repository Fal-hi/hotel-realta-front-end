import React, { useEffect, useState } from "react"
import Table from "../Table"
import { getEmployeeForUpdate } from "@/redux/HR/action/employee"
import { useDispatch, useSelector } from "react-redux"

const DepartmentHistory = ({ idEmployee }: any) => {
  const dispatch = useDispatch()
  const { oneEmployee } = useSelector((state: any) => state.employeeReducers)
  const [data, setData] = useState([
    {
      edhi_dept_id: 0,
      edhi_id: 0,
      edhi_start_date: "",
      edhi_end_date: "",
      department: {
        dept_id: 0,
        dept_name: "",
      },
      shift: null,
    },
  ])

  useEffect(() => {
    if (idEmployee && idEmployee !== 0) {
      dispatch(getEmployeeForUpdate(idEmployee))
    }
  }, [idEmployee])

  useEffect(() => {
    if (oneEmployee) {
      setData(oneEmployee.employee_department_histories)
    }
  }, [oneEmployee])
  return (
    <div className="p-5">
      <Table
        cols={[
          {
            title: "Start Date",
            render: (data: any) => {
              return <span>{data.edhi_start_date}</span>
            },
          },
          {
            title: "End Date",
            render: (data: any) => {
              return <span>{data.edhi_end_date}</span>
            },
          },
          {
            title: "Department Name",
            render: (data: any) => {
              return <span>{data.department.dept_name}</span>
            },
          },
        ]}
        data={data}
      ></Table>
    </div>
  )
}

export default DepartmentHistory
