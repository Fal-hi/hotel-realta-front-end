import Table from "@/components/Table"
import AddButton from "@/components/addButton"
import FormEmployee from "@/components/hr/formEmployee"
import PopUp from "@/components/hr/popUp"
import DotsVertical from "@/components/icons/DotsVertical"
import { Modal } from "@/components/modal"
import { SearchInput } from "@/components/searchInput"
import ShowingResult from "@/components/showingResult"
import { getEmployee } from "@/redux/HR/action/employee"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const Employee = () => {
  const dispatch = useDispatch()
  const handleSearchChange = () => {}
  const { data, refresh } = useSelector((state: any) => state.employeeReducers)
  const [update, setUpdate] = useState({
    id: 0,
    isShown: false,
  })

  const handleUpdateClose = () => {
    setUpdate(prev => {
      return { ...prev, isShown: false }
    })
  }

  useEffect(() => {
    dispatch(getEmployee({ page: 1, entry: 10 }))
  }, [])

  useEffect(() => {}, [refresh, dispatch])

  return (
    <div className="flex w-full font-poppins-regular">
      <div className="flex flex-col items-start px-5 mt-10 w-full">
        <div className="flex flex-row w-full justify-between">
          <div>
            <SearchInput onChange={handleSearchChange} />
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
          <ShowingResult from={0} to={0} totalData={0} />
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
              title: "National ID",
              render: (data: any) => {
                return <span>{data.emp_national_id}</span>
              },
            },
            {
              title: "Birth Date",
              render: (data: any) => {
                return <span>{data.emp_birth_date}</span>
              },
            },
            {
              title: "Hire Date",
              render: (data: any) => {
                return <span>{data.emp_hire_date}</span>
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
                        setUpdate({
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
          data={data.employee || []}
        ></Table>
      </div>
      {update.isShown ? (
        <Modal
          header="Edit Employee"
          onClose={handleUpdateClose}
          terserah="sm:max-w-screen-xl"
        >
          <FormEmployee />
        </Modal>
      ) : null}
    </div>
  )
}

export default Employee
