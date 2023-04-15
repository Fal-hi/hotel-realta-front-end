import { Combobox } from "@headlessui/react"
import React, { useEffect, useState } from "react"
import { FieldErrors, useForm, Resolver } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { Magnifier } from "../icons"
import {
  createWorkOrderDetail,
  getEmployeeNameOption,
  getTaskName,
} from "@/redux/HR/action/workorder"

type FormValues = {
  name: string
}
const resolver: Resolver<FormValues> = async values => {
  const { name } = values
  const errors: FieldErrors<FormValues> = {}

  if (!name) {
    errors.name = {
      type: "required",
      message: "This is required.",
    }
  }

  return { values: name ? values : {}, errors }
}
const CreateTask = ({ workOrderId }: any) => {
  const [employeeList, setEmployeeList] = useState([{ id: 0, name: "" }])
  const [taskList, settaskList] = useState([{ id: 0, name: "" }])
  const dispatch = useDispatch()

  const { employeeNameOption, taskName } = useSelector(
    (state: any) => state.workorderReducers
  )

  const [selectedId, setSelectedId] = useState(0)
  const [selectedIdTask, setSelectedIdTask] = useState(0)

  const handleRegistration = (data: any) => {
    const payload = {
      assignTo: selectedId,
      taskId: selectedIdTask,
      notes: data.notes,
      faciId: 2,
      workOrderId: +workOrderId,
    }
    dispatch(createWorkOrderDetail(payload))
  }
  const handleError = (errors: any) => {}
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>()

  const [selectedPerson, setSelectedPerson] = useState("")
  const [selectedTask, setSelectedTask] = useState("")

  const [inputName, setinputName] = useState("")
  const [inputTask, setinputTask] = useState("")

  useEffect(() => {
    setEmployeeList(employeeNameOption)
  }, [employeeNameOption])

  useEffect(() => {
    settaskList(taskName)
  }, [taskName])

  useEffect(() => {
    dispatch(getEmployeeNameOption(inputName))
    dispatch(getTaskName(inputTask))
  }, [inputName, inputTask])

  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div className="bg-white   pt-5 pb-4 sm:p-6 sm:pb-4 border-b">
        <div className="w-full mb-3">Task Name</div>

        <Combobox value={selectedTask} onChange={setSelectedTask}>
          <div className="flex">
            <Combobox.Input
              placeholder="Search Task ..."
              className="border border-r-0 rounded-l-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
              onChange={event => setinputTask(event.target.value)}
            />
            <div className="border rounded-r-md p-1.5 mb-3">
              <Magnifier />
            </div>
          </div>
          <Combobox.Options className={"absolute z-10"}>
            {(taskList || []).map(task => (
              <Combobox.Option
                key={task.id}
                value={task.name}
                onClick={() => setSelectedIdTask(task.id)}
                className={
                  "p-1.5 bg-[#F9FAFB]  hover:bg-[#DADADA] cursor-pointer"
                }
              >
                {task.name}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
        <div className="w-full mb-3">Assign To</div>

        <Combobox value={selectedPerson} onChange={setSelectedPerson}>
          <div className="flex">
            <Combobox.Input
              placeholder="Search employee ..."
              className="border border-r-0 rounded-l-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
              onChange={event => setinputName(event.target.value)}
            />
            <div className="border rounded-r-md p-1.5 mb-3">
              <Magnifier />
            </div>
          </div>
          <Combobox.Options className={"absolute z-10"}>
            {(employeeList || []).map(employee => (
              <Combobox.Option
                key={employee.id}
                value={employee.name}
                onClick={() => setSelectedId(employee.id)}
                className={
                  "p-1.5 bg-[#F9FAFB]  hover:bg-[#DADADA] cursor-pointer"
                }
              >
                {employee.name}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
        <div className="w-full mb-3">Notes</div>
        <textarea
          placeholder="Notes ..."
          className="w-full h-16 rounded-md p-1.5 resize-none border bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
          {...register("notes")}
        >
          {" "}
        </textarea>
      </div>

      <div className="bg-gray-50  py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="submit"
          className="inline-flex w-full justify-center rounded-md bg-[#1D4ED8] px-3 py-2   text-white shadow-sm hover:bg-[#143694] sm:ml-3 sm:w-auto"
        >
          Save
        </button>
      </div>
    </form>
  )
}

export default CreateTask
