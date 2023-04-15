import React, { useEffect, useState } from "react"
import Table from "../Table"
import { getEmployeeForUpdate } from "@/redux/HR/action/employee"
import { useDispatch, useSelector } from "react-redux"

const SalaryHistory = ({ idEmployee }: any) => {
  const dispatch = useDispatch()
  const { oneEmployee } = useSelector((state: any) => state.employeeReducers)
  const [data, setData] = useState([
    {
      ephi_emp_id: 0,
      ephi_rate_change_date: "",
      ephi_rate_salary: "",
      ephi_pay_frequence: 0,
    },
  ])

  useEffect(() => {
    if (idEmployee && idEmployee !== 0) {
      dispatch(getEmployeeForUpdate(idEmployee))
    }
  }, [idEmployee])

  useEffect(() => {
    if (oneEmployee) {
      setData(oneEmployee.employee_pay_histories)
    }
  }, [oneEmployee])
  console.log(data)
  return (
    <div className="p-5">
      <Table
        cols={[
          {
            title: "Rate Change Date",
            render: (data: any) => {
              return <span>{data.ephi_rate_change_date}</span>
            },
          },
          {
            title: "Rate Salary",
            render: (data: any) => {
              return <span>{data.ephi_rate_salary}</span>
            },
          },
          {
            title: "Frequence Pay",
            render: (data: any) => {
              return <span>{data.ephi_pay_frequence}</span>
            },
          },
        ]}
        data={data}
      ></Table>
    </div>
  )
}

export default SalaryHistory
