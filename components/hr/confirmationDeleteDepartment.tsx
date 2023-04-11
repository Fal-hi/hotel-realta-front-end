import React from "react"
import Typography from "../Typography"
import variants from "../Typography/textcss"

interface Iprops {
  department: string
  handleDeleteDepartment: (id: number) => void
  id: number
  handleClose: () => void
}

export const ConfirmationDeleteDepartment = (props: Iprops) => {
  return (
    <>
      <div className="bg-white  px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border-b">
        <Typography variant={variants.baseregular}>
          Are you sure you want to delete{" "}
          <a className="text-[#7743DB]">{props.department}</a>?{" "}
        </Typography>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          onClick={() => {
            props.handleDeleteDepartment(props.id)
          }}
          className="inline-flex w-full justify-center rounded-md bg-[#7743DB] px-7 py-2 text-white shadow-sm hover:bg-[#143694] sm:ml-3 sm:w-auto"
        >
          <Typography variant={variants.baseregular}>Save</Typography>
        </button>
        <button
          onClick={props.handleClose}
          className="inline-flex w-full justify-center rounded-md border border-[#7743DB] px-4 py-2   shadow-sm hover:bg-[#143694] sm:ml-3 sm:w-auto"
        >
          <Typography variant={variants.baseregular}>Cancel</Typography>
        </button>
      </div>
    </>
  )
}
