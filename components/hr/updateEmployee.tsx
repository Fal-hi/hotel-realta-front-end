import React, { useEffect } from "react"
import Typography from "../Typography"
import variants from "../Typography/textcss"
import ComboboxHr from "./comboboxHr"
import ComboboxUpdate from "./comboboxUpdate"
import { useDispatch, useSelector } from "react-redux"
import { getEmployeeForUpdate } from "@/redux/HR/action/employee"

const UpdateEmployee = ({ idEmployee }: any) => {
  const dispatch = useDispatch()
  const { oneEmployee } = useSelector((state: any) => state.employeeReducers)

  useEffect(() => {
    dispatch(getEmployeeForUpdate(idEmployee))
  }, [idEmployee])

  return (
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
                <ComboboxUpdate />
              </div>
              {/* <div className="w-6/12 px-5">
                <label>National ID</label>
                <input
                  type="text"
                  value={usersProfiles?.uspro_national_id}
                  className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
                  disabled
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateEmployee
