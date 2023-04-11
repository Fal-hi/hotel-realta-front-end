import React, { Fragment, useEffect, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

import { doUpdatePassword } from "@/redux/USERS/action/passwordAction"
import InputText from "../input/InputText"
import InputDate from "../input/InputDate"
import InputEmail from "../input/InputEmail"

export default function PassModalEdit(props: any) {
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValue>()

  type FormValue = {
    uspa_passwordhash: string
    uspa_passwordsalt: string
  }
  let { users, bonus } = useSelector((state: any) => state.generalReducers)
  const dispatch = useDispatch()
  const [birthDate, setBirthDate] = useState<Date | null>(null)

  const [nadhir, setIsNadhir] = useState<any>({})
  useEffect(() => {
    // setIsNadhir(users.filter((pro: any) => pro.id === props.isPassword.id)[0])
    // reset(users.filter((pro: any) => pro.id === props.isPassword.id)[0])
  }, [props, users, reset])
  console.log(props.id)
  const handleError = (errors: any) => {}

  const handleEdit = async (data: any) => {
    const formData = new FormData()

    formData.append("Current Password", data.uspa_passwordhash)
    formData.append("New Password", data.uspa_passwordhash)
    formData.append("Retype_Password", data.uspa_passwordsalt)

    // dispatch(updateProduct(props.isPassword.id, formData)).then((result) => {
    //   toast.success(result.message);
    // });

    dispatch(doUpdatePassword({ id: props.isPassword.id, data: formData }))
    props.closeModal()
  }

  const generalEdit = {
    current_password: { required: "Current Password is Required" },
    new_password: { required: "New Password is Required" },
    retype_password: { required: "Confirmation Password is Required" },
  }

  return (
    <div>
      <Transition appear show={props.isPassword.status} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
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

          <div className="fixed inset-0 overflow-y-auto ">
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-3xl bg-purple-800 p-6 text-left align-middle shadow-xl transition-all  mt-4">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-poppins-bold leading-6 text-white"
                  >
                    Change Password
                  </Dialog.Title>

                  <form onSubmit={handleSubmit(handleEdit, handleError)}>
                    <div className="card-header">
                      <h1 className="text-lg text-primary font-poppins-bold text-white"></h1>
                      <hr className="mt-1" />
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="text-sm font-poppins-semibold leading-8 text-white">
                        <label htmlFor="password">Current Password</label>
                        <InputText
                          placeholder=" Current password"
                          isPassword={true}
                        />
                      </div>
                    </div>

                    <div className="flex justify items-end mt-2">
                      <div className="text-sm font-poppins-semibold leading-8 text-white">
                        <label htmlFor="password">New Password</label>
                        <InputText
                          placeholder="Enter your New password"
                          isPassword={true}
                        />
                      </div>
                    </div>
                    <div className="flex justify items-end mt-2">
                      <div className="text-sm font-poppins-semibold leading-8 text-white">
                        <label htmlFor="password">Retype Password</label>
                        <InputText
                          placeholder="Retype your password"
                          isPassword={true}
                        />
                      </div>
                    </div>

                    <div className="flex-row space-x-4 mt-4 text-rigt">
                      <button className="inline-flex justify-center  border-2 border-black px-4 py-2 text-sm font-medium text-blue-500 hover:bg-black hover:text-white transition-colors ease-out duration-300  focus:outline-none focus-visible:ring-2">
                        Submit
                      </button>

                      <button
                        className="inline-flex justify-center border-2 border-red-700 text-blue-500 hover:bg-red-800 hover:text-white px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 transition-colors ease-out duration-500"
                        onClick={props.closeModal}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
