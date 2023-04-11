import React, { useEffect, useState } from "react"
import Typography from "../Typography"
import variants from "../Typography/textcss"
import "react-datepicker/dist/react-datepicker.css"
import DatePickerHr from "./datePicker"
import ComboboxHr from "./comboboxHr"
import UploadImage from "./uploadImage"
import ListBoxHr from "./listBoxHr"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import {
  createEmployee,
  geUsersForProfiles,
  getDepartmentOption,
  getJobRoleOption,
  getShift,
  getUsersForSearchEmployeeOption,
} from "@/redux/HR/action/employee"
import Shift from "./shift"

const FormEmployee = () => {
  const dispatch = useDispatch()
  const [fileName, setFileName] = useState(null)
  const { users, usersProfiles, jobRoles, departments } = useSelector(
    (state: any) => state.employeeReducers
  )
  const handleDrop = (event: any) => {
    event.preventDefault()
    event.stopPropagation()

    const file = event.dataTransfer.files[0]

    setFileName(file)
  }

  const handleFileSelect = (event: any) => {
    const file = event.target.files[0]

    setFileName(file)
  }

  const [selectedPerson, setSelectedPerson] = useState<number>(0)
  const [selected, setSelected] = useState<string>("")
  const [hireDate, sethireDate] = useState<Date | null>(new Date())
  const [birthDate, setbirthDate] = useState<Date | null>(new Date())

  const [maritalValue, setMaritalValue] = useState({
    value: "Not defined",
    option: "Select",
  })
  const [gender, setGender] = useState({
    value: "Not defined",
    option: "Select",
  })
  const [salariedFlag, setSalariedFlag] = useState({
    value: "Not defined",
    option: "Select",
  })
  const [currentFlag, setCurrentFlag] = useState({
    value: "Not defined",
    option: "Select",
  })
  const [jobRole, setJobRole] = useState({
    value: "Not defined",
    option: "Select",
  })
  const [frequency, setFrequency] = useState({
    value: "1",
    option: "Monthly",
  })
  const [department, setDepartment] = useState({
    value: "Not defined",
    option: "Select",
  })

  const [usersData, setUsersData] = useState([
    {
      option: "",
      value: "",
    },
  ])

  const [thisJobroles, setthisJobroles] = useState([
    {
      option: "",
      value: "",
    },
  ])

  const [departmentList, setDepartmentList] = useState([
    { option: "", value: "" },
  ])

  useEffect(() => {
    if (jobRoles !== undefined && jobRoles?.jobRole) {
      const thisJobroles = jobRoles.jobRole.map((item: any, i: number) => ({
        value: item.id,
        option: item.name,
      }))
      setthisJobroles(thisJobroles)
    }
  }, [jobRoles])

  useEffect(() => {
    if (departments !== undefined && departments?.department) {
      const departmentList = departments.department.map(
        (item: any, i: number) => ({
          value: item.id,
          option: item.name,
        })
      )

      setDepartmentList(departmentList)
    }
  }, [departments])

  useEffect(() => {
    if (usersProfiles !== undefined && usersProfiles?.uspro_marital_status) {
      setMaritalValue({
        value: usersProfiles.uspro_marital_status,
        option:
          usersProfiles.uspro_marital_status == "M" ? "Married" : "Single",
      })
    }
    if (usersProfiles !== undefined && usersProfiles?.uspro_gender) {
      setGender({
        value: usersProfiles.uspro_gender,
        option: usersProfiles.uspro_gender == "M" ? "Male" : "Female",
      })
    }
  }, [usersProfiles])

  const handleError = () => {}
  const { register, handleSubmit } = useForm<any>()

  const handleSelected = (val: any, key: any) => {
    setSelected(val)
    setSelectedPerson(key)
  }

  const handleGetUserFullName = (like: string) => {
    dispatch(getUsersForSearchEmployeeOption(like))
  }

  useEffect(() => {
    dispatch(geUsersForProfiles(selectedPerson))

    dispatch(getJobRoleOption())

    dispatch(getDepartmentOption())

    const usersData = []
    for (let i = 0; i < users?.length; i++) {
      const element = users[i]
      usersData.push({
        option: element.user_id,
        value: element.user_full_name,
      })
    }

    setUsersData(usersData)
  }, [dispatch, users, selectedPerson])

  const [shiftId, setShiftId] = useState<number[]>([])

  const handleSetShiftId = (id: number, index: number) => {
    const updatedShiftId = [...shiftId]
    updatedShiftId[index] = id
    setShiftId(updatedShiftId)
  }

  const [shiftTime, setShiftTime] = useState<any>([])
  const handleShiftTIme = (nomor: number, val: any) => {
    // setShiftTime({
    //   startTime: val.shift_start_time,
    //   endTime: val.shift_end_time,
    // })
    console.log("val", val)
    // const updatedShiftTime = [...shiftTime]
    // updatedShiftTime[index] = {
    //   startTime: val.shift_start_time,
    //   endTime: val.shift_end_time,
    // }
    // // console.log(index)
    // setShiftTime(updatedShiftTime)
    // // console.log("updatedShiftTime", updatedShiftTime)
  }

  const handlePlusShift = () => {
    setShiftTime((prev: any) => {
      return [...prev, { id: shiftTime.length + 1 }]
    })
  }

  React.useEffect(() => {
    setShiftTime([
      {
        id: 1,
      },
    ])
  }, [])

  const handleMinShift = () => {
    const lastIndex = shiftTime.length - 1
    setShiftTime(shiftTime.slice(0, lastIndex))
    const updatedShiftId = [...shiftId]
    updatedShiftId.pop()
    setShiftId(updatedShiftId)
  }

  console.log(shiftTime)

  const arrShift = []

  for (let i = 0; i < shiftTime.length; i++) {
    console.log(shiftTime[i])
    const element = shiftTime[i]
    arrShift.push(
      <Shift
        key={i}
        id={shiftTime[i].id}
        handle={handleSetShiftId}
        shiftTime={shiftTime}
        setShiftTime={setShiftTime}
        handleShiftTIme={handleShiftTIme}
        nomor={i}
      />
    )
  }

  const handleRegistration = (data: any) => {
    const employeValue = {
      user_id: usersProfiles.user_id,
      nationalId: usersProfiles.uspro_national_id,
      birth: birthDate,
      hireDate: hireDate,
      status: maritalValue.value,
      gender: gender.value,
      salariedFlag: salariedFlag.value,
      currentFlag: salariedFlag.value,
      vacationHours: data.vacationHours,
      sickLeaveHours: data.sickLeaveHours,
      jobRole: jobRole.value,
      department: department.value,
      startDate: data.startDate,
      endDate: data.endDate,

      salary: data.salaryRate,
      frequency: frequency.value,
      image: fileName,

      shift_id: JSON.stringify(shiftId),
    }
    console.log("employeValue => ", employeValue)
    dispatch(createEmployee(employeValue))
  }
  return (
    <>
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
        <div className="px-4 py-5 border-b">
          <div className="flex px-5 pb-2">
            <Typography variant={variants.lgbold}>General</Typography>
          </div>
          <div>
            <div className="flex">
              <div className="w-10/12">
                <div className="flex">
                  <div className="w-6/12 px-5">
                    <label>Full Name</label>

                    <ComboboxHr
                      inputChanges={(e: any) =>
                        handleGetUserFullName(e.target.value)
                      }
                      data={usersData}
                      onChange={setSelectedPerson}
                      value={selected}
                      handleSelected={handleSelected}
                    />
                  </div>
                  <div className="w-6/12 px-5">
                    <label>National ID</label>
                    <input
                      type="text"
                      value={usersProfiles?.uspro_national_id}
                      className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
                      disabled
                    />
                  </div>
                </div>
                <div className="flex mt-6">
                  <div className="w-6/12 px-5">
                    <label>Birth Date</label>

                    <DatePickerHr
                      value={
                        new Date(usersProfiles?.uspro_birt_date || "01-01-1998")
                      }
                      onChange={(date: Date) => setbirthDate(date)}
                      isHeader={true}
                    />
                  </div>
                  <div className="w-6/12 px-5">
                    <label>Hire Date</label>
                    <DatePickerHr
                      value={hireDate}
                      onChange={(date: Date) => sethireDate(date)}
                      isHeader={true}
                    />
                  </div>
                </div>
              </div>
              <div className="w-2/12">
                <UploadImage
                  handleDrop={handleDrop}
                  fileName={fileName}
                  setFileName={setFileName}
                  handleFileSelect={handleFileSelect}
                />
              </div>
            </div>
            <div className="w-10/12 mt-2">
              <div className="flex">
                <div className="w-6/12">
                  <div className="flex">
                    <div className="w-6/12 px-5 ">
                      <label>Marital Status</label>
                      <ListBoxHr
                        value={maritalValue.option}
                        setData={setMaritalValue}
                        data={[
                          { value: "M", option: "Married" },
                          { value: "S", option: "Single" },
                        ]}
                      />
                    </div>
                    <div className="w-6/12 px-5">
                      <label>Gender</label>
                      <ListBoxHr
                        value={gender.option}
                        setData={setGender}
                        data={[
                          { value: "M", option: "Male" },
                          { value: "F", option: "Female" },
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <div className="w-6/12">
                  <div className="flex">
                    <div className="w-6/12 px-5 ">
                      <label>Salaried Flag</label>
                      <ListBoxHr
                        value={salariedFlag.option}
                        setData={setSalariedFlag}
                        data={[
                          { value: "0", option: "Hourly" },
                          { value: "1", option: "Daily" },
                        ]}
                      />
                    </div>
                    <div className="w-6/12 px-5">
                      <label>Current Flag</label>
                      <ListBoxHr
                        value={currentFlag.option}
                        setData={setCurrentFlag}
                        data={[
                          { value: "0", option: "Inactive" },
                          { value: "1", option: "Active" },
                        ]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-10/12 mt-2">
              <div className="flex">
                <div className="w-6/12">
                  <div className="flex">
                    <div className="w-6/12 px-5 ">
                      <label>Vacation Hours</label>
                      <input
                        type="number"
                        {...register("vacationHours")}
                        className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
                      />
                    </div>
                    <div className="w-6/12 px-5">
                      <label>Sick Leaver Hours</label>
                      <input
                        type="number"
                        {...register("sickLeaveHours")}
                        className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-6/12">
                  <div className=" px-5 ">
                    <label>Job Role</label>

                    <ListBoxHr
                      value={jobRole.option}
                      setData={setJobRole}
                      data={thisJobroles}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex px-5 mb-2">
            <Typography variant={variants.lgbold}>Salary</Typography>
          </div>
          <div className="flex">
            <div className="w-6/12 px-5">
              <label>Salary Rate</label>
              <input
                type="text"
                {...register("salaryRate")}
                className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
              />
            </div>
            <div className="w-6/12 px-5">
              <label>Frequency</label>
              <ListBoxHr
                value={frequency.option}
                setData={setFrequency}
                data={[
                  { value: "1", option: "Monthly" },
                  { value: "2", option: "Weekly" },
                ]}
              />
            </div>
          </div>
          <div className="flex px-5 mb-2">
            <Typography variant={variants.lgbold}>Assigment</Typography>
          </div>
          <div className="flex">
            <div className="w-4/12 px-5">
              <label>Department</label>
              <ListBoxHr
                value={department.option}
                setData={setDepartment}
                data={departmentList}
              />
            </div>
            <div className="w-4/12 px-5">
              <label>Start Date</label>
              <input
                type="date"
                {...register("startDate")}
                className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
              />
            </div>
            <div className="w-4/12 px-5">
              <label>End Date</label>
              <input
                type="date"
                {...register("endDate")}
                className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
              />
            </div>
          </div>
          <div className="flex px-5 mb-2">
            <div>
              <Typography variant={variants.lgbold}>Shift</Typography>
            </div>
            <div
              className="p-1 bg-bgPrimary text-white rounded-md mx-10 cursor-pointer"
              onClick={handlePlusShift}
            >
              +
            </div>
            <div
              className="p-1 bg-bgPrimary text-white rounded-md mx-10 cursor-pointer"
              onClick={handleMinShift}
            >
              -
            </div>
          </div>

          {arrShift}
          {/* {(muchShift || []).map((sh: any, i: number) => (
            <Shift
              key={i}
              handle={handleSetShiftId}
              shiftTime={shiftTime}
              handleShiftTIme={handleShiftTIme}
              index={i}
            />
          ))} */}
        </div>
        <div className="bg-gray-50  py-5 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md bg-[#1D4ED8] px-9 py-2   text-white shadow-sm hover:bg-[#143694] sm:ml-3 sm:w-auto"
          >
            Save
          </button>
        </div>
      </form>
    </>
  )
}

export default FormEmployee
