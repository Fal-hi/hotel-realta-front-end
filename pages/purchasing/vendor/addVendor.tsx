import React, { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { doAdd } from "@/redux/PURCHASING/action/actionVendor"

export default function AddVendor(props: any) {
  type FormValues = {
    vendor_name: string
    vendor_active: string
    vendor_priority: string
    vendor_register_date: string
    vendor_weburl: string
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const dispatch = useDispatch()
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleRegistration = async (data: FormValues) => {
    const hari = new Date(selectedDate ? selectedDate : "").getDate()
    const bulan = new Date(selectedDate ? selectedDate : "").getMonth()
    const tahun = new Date(selectedDate ? selectedDate : "").getFullYear()
    const fullDate = tahun + "/" + (bulan + 1) + "/" + hari

    const dataAll = {
      vendor_name: data.vendor_name,
      vendor_active: data.vendor_active,
      vendor_priority: data.vendor_priority,
      vendor_register_date: fullDate,
      vendor_weburl: data.vendor_weburl,
    }
    dispatch(doAdd(dataAll)), props.closeModal()
  }

  const handleDateChange = (date: any | null) => {
    setSelectedDate(date)
    // const formattedDate = date?.toISOString()
    register("vendor_register_date", {
      required: "Register date is required",
      value: date,
    })
  }

  const handleError = (errors: any) => {}

  const registerOptions = {
    vendor_name: { required: "Name is required" },
    vendor_active: { required: "Status is required" },
    vendor_priority: { required: "Priority is required" },
    vendor_register_date: { required: "Register is required" },
    vendor_weburl: { required: "Web URL is required" },
  }

  return (
    <div>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" static onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center"
                  >
                    Add Vendor
                  </Dialog.Title>
                  <div className="mt-2">
                    <form
                      onSubmit={handleSubmit(handleRegistration, handleError)}
                    >
                      <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
                        <label>Vendor Name</label>
                        <input
                          className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                          type="text"
                          {...register(
                            "vendor_name",
                            registerOptions.vendor_name
                          )}
                        />
                        <small className="text-danger">
                          {errors?.vendor_name && errors.vendor_name.message}
                        </small>
                      </div>
                      <div
                        className="grid grid-cols-1 gap-4 max-w-xl m-auto relative"
                        style={{ marginBottom: "1rem" }}
                      >
                        <label>Status</label>
                        <select
                          id="vendor_active"
                          className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          {...register(
                            "vendor_active",
                            registerOptions.vendor_active
                          )}
                        >
                          <option selected>Choose a status</option>
                          <option value="1">Active</option>
                          <option value="0">Inactive</option>
                        </select>
                      </div>
                      <div
                        className="grid grid-cols-1 gap-4 max-w-xl m-auto relative"
                        style={{ marginBottom: "1rem" }}
                      >
                        <label>Priority</label>
                        <select
                          id="vendor_priority"
                          className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          {...register(
                            "vendor_priority",
                            registerOptions.vendor_priority
                          )}
                        >
                          <option selected>Choose a status</option>
                          <option value="1">Priority</option>
                          <option value="0">No Priority</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 gap-4 max-w-xl m-auto relative">
                        <label>Register Date</label>
                        <div className="grid grid-cols-1 gap-4 max-w-xl relative">
                          <DatePicker
                            dateFormat="yyyy/MM/dd"
                            className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                            selected={selectedDate}
                            onChange={handleDateChange}
                          />
                          {errors.vendor_register_date && (
                            <span className="text-red-500">
                              {errors.vendor_register_date.message}
                            </span>
                          )}
                        </div>
                        <small className="text-danger">
                          {errors?.vendor_register_date &&
                            errors.vendor_register_date.message}
                        </small>
                      </div>
                      {/* <div className='grid grid-cols-1 gap-4 max-w-xl m-auto relative'>
                                                <label>Register Date</label>
                                                <div className="grid grid-cols-1 gap-4 max-w-xl relative">
                                                    <input className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                                                        type='text'
                                                        {...register('vendor_register_date', registerOptions.vendor_register_date)}
                                                    />
                                                </div>
                                                <small className="text-danger">
                                                    {errors?.vendor_register_date && errors.vendor_register_date.message}
                                                </small>
                                            </div> */}
                      <div className="grid grid-cols-1 gap-4 max-w-xl m-auto relative">
                        <label>Web URL</label>
                        <div className="grid grid-cols-1 gap-4 max-w-xl relative">
                          <input
                            className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                            type="text"
                            {...register(
                              "vendor_weburl",
                              registerOptions.vendor_weburl
                            )}
                          />
                        </div>
                        <small className="text-danger">
                          {errors?.vendor_weburl &&
                            errors.vendor_weburl.message}
                        </small>
                      </div>
                      <div className="flex-row space-x-4 mt-4 text-right">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border-transparent bg-blue-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Submit
                        </button>
                        <button
                          className="inline-flex justify-center rounded-md border-transparent bg-red-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
                          onClick={props.closeModal}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}