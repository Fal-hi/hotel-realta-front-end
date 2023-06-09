import Table from "@/components/Table"
import AddButton from "@/components/addButton"
import DepartmentHistory from "@/components/hr/departmentHistories"
import FormEmployee from "@/components/hr/formEmployee"
import PopUp from "@/components/hr/popUp"
import SalaryHistory from "@/components/hr/salaryHistory"
import UpdateEmployee from "@/components/hr/updateEmployee"
import DotsVertical from "@/components/icons/DotsVertical"
import { Modal } from "@/components/modal"
import { Pagination } from "@/components/pagination"
// import { Pagination } from "@/components/pagination"
import { SearchInput } from "@/components/searchInput"
import ShowingResult from "@/components/showingResult"
import { TolocaleDate } from "@/functions/toLocaleDate"
import { getEmployee } from "@/redux/HR/action/employee"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Employee = () => {
  const dispatch = useDispatch()
  const { refresh, employee } = useSelector(
    (state: any) => state.employeeReducers
  )
  const [update, setUpdate] = useState({
    id: 0,
    isShown: false,
  })

  const handleUpdateClose = () => {
    setUpdate(prev => {
      return { ...prev, isShown: false }
    })
  }

  const [search, setSearch] = useState("")

  const [page, setPage] = useState(1)
  const handleSearchChange = (e: any) => {
    setSearch(e.target.value)
    setPage(1)
  }

  const [status, setStatus] = useState("")

  useEffect(() => {
    dispatch(
      getEmployee({ search: search, page: page, entry: 10, status: status })
    )
  }, [refresh, page, search, dispatch, status])

  useEffect(() => {}, [refresh, dispatch])

  const handleStatusChange = (e: any) => {
    setStatus(e.target.value)
  }

  const [edit, setEdit] = useState({
    id: 0,
    isShown: false,
  })

  const [salary, setSalary] = useState({
    id: 0,
    isShown: false,
  })
  const [department, setdepartment] = useState({
    id: 0,
    isShown: false,
  })

  return (
    <div className="flex w-full font-poppins-regular">
      <div className="flex flex-col items-start px-5 mt-10 w-full">
        <div className="flex flex-row w-full justify-between">
          <div className="flex">
            <div>
              <SearchInput onChange={handleSearchChange} />
            </div>
            <div>
              <select
                className="inline-flex items-center p-2.5 mx-2 p-r-5  text-sm border  border-gray-400 rounded-md  dark:text-gray-400"
                name="status"
                id="status"
                onChange={handleStatusChange}
              >
                <option value="" hidden>
                  Status
                </option>
                <option value="">All</option>
                <option value="1">Active</option>
                <option value="0">Inactive</option>
              </select>
            </div>
          </div>
          <div className="flex ">
            <AddButton
              onClick={() =>
                setUpdate(prev => {
                  return {
                    ...prev,
                    isShown: true,
                  }
                })
              }
            />
          </div>
        </div>
        <div className="py-3">
          <ShowingResult
            from={employee.from}
            to={employee.to}
            totalData={employee.totalData}
          />
        </div>
        <Table
          cols={[
            {
              title: "Employee ID",
              render: (data: any) => {
                return <span>{data.emp_id}</span>
              },
            },
            {
              title: "Name",
              render: (data: any) => {
                return <span>{data.user_full_name}</span>
              },
            },
            {
              title: "National ID",
              render: (data: any) => {
                return <span>{data.emp_national_id}</span>
              },
            },
            {
              title: "Birth Date",
              render: (data: any) => {
                return <span>{TolocaleDate(data.emp_birth_date)}</span>
              },
            },
            {
              title: "Hire Date",
              render: (data: any) => {
                return <span>{TolocaleDate(data.emp_hire_date)}</span>
              },
            },
            {
              title: "status",
              render: (data: any) => {
                let status = ""
                if (data.emp_current_flag === 1) {
                  status = "Active"
                } else {
                  status = "Inactive"
                }
                return <span>{status}</span>
              },
            },
            {
              title: "Action",
              render: (data: any) => {
                return (
                  <>
                    <PopUp
                      handleEdit={() =>
                        setEdit({
                          id: data.emp_id,
                          isShown: true,
                        })
                      }
                      handleSalary={() =>
                        setSalary({
                          id: data.emp_id,
                          isShown: true,
                        })
                      }
                      handleDepartment={() =>
                        setdepartment({
                          id: data.emp_id,
                          isShown: true,
                        })
                      }
                    />
                  </>
                )
              },
            },
          ]}
          data={employee?.employee || []}
        >
          <Pagination
            pagination={{
              totalPage: employee?.totalPage,
              page: employee?.page,
            }}
            setPage={setPage}
          />
        </Table>
      </div>
      {update.isShown ? (
        <Modal
          header="Create Employee"
          onClose={handleUpdateClose}
          terserah="sm:max-w-screen-xl"
        >
          <FormEmployee />
        </Modal>
      ) : null}
      {edit.isShown ? (
        <Modal
          header="Update Emploee"
          onClose={() =>
            setEdit({
              id: 0,
              isShown: false,
            })
          }
          terserah="sm:max-w-screen-xl"
        >
          <UpdateEmployee idEmployee={edit.id} />
        </Modal>
      ) : null}
      {salary.isShown ? (
        <Modal
          header="Salary History"
          onClose={() =>
            setSalary({
              id: 0,
              isShown: false,
            })
          }
          terserah="sm:max-w-screen-xl"
        >
          <SalaryHistory idEmployee={salary.id} />
        </Modal>
      ) : null}
      {department.isShown ? (
        <Modal
          header="Department History"
          onClose={() =>
            setdepartment({
              id: 0,
              isShown: false,
            })
          }
          terserah="sm:max-w-screen-xl"
        >
          <DepartmentHistory idEmployee={department.id} />
        </Modal>
      ) : null}
    </div>
  )
}

export default Employee
