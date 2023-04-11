import React, { Fragment, useEffect, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"

import { doReqUpdateEditGeneral } from "@/redux/USERS/action/generalAction"
import InputText from "../input/InputText"
import InputDate from "../input/InputDate"
import InputEmail from "../input/InputEmail"
import Intext from "../input/InText"
import Image from "next/image"
import { profile } from "console"

export default function ModalEdit(props: any) {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<FormValue>()

  type FormValue = {
    user_full_name: string
    user_type?: "T" | "C" | "I"
    user_email: string
    user_company_name: string
    usro_role_id: any
    uspro_national_id?: string
    uspro_job_title?: string
    uspro_gender?: "M" | "F"
    uspro_birt_date?: Date | string
    uspro_marital_status?: "M" | "S"
  }
  let { users, bonus } = useSelector((state: any) => state.generalReducers)
  const dispatch = useDispatch()
  const [birthDate, setBirthDate] = useState<Date | null>(null)
  const [EditProfil, setIsEditProfil] = useState<any>({})
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const [nadhir, setIsNadhir] = useState<any>({})
  useEffect(() => {
    // setIsNadhir(users.filter((pro: any) => pro.id === props.isEdit.id)[0])
    // reset(users.filter((pro: any) => pro.id === props.isEdit.id)[0])
  }, [props.isEdit.id, users, reset])

  const handleError = (errors: any) => {}

  const handleEdit = async (data: any) => {
    const formData = new FormData()

    formData.append("username", data.user_full_name)
    formData.append("Type", data.user_type)
    formData.append("HandPhone", data.user_phone_number)
    formData.append("Email", data.user_email)
    formData.append("Company", data.user_company_name)
    formData.append("Role Type", data.usro_role_id)
    formData.append("National_id", data.uspro_national_id)
    formData.append("Job Title", data.uspro_job_title)
    formData.append("Gender", data.uspro_gender)
    formData.append("Phone Number", data.user_phone_number)
    formData.append("Birth Date", data.uspro_birt_date)
    formData.append("Marriage", data.user_marital_status)

    // dispatch(updateProduct(props.isEdit.id, formData)).then((result) => {
    //   toast.success(result.message);
    // });

    dispatch(doReqUpdateEditGeneral({ id: props.isEdit.id, data: formData }))
    props.closeModal()
  }
  const registerOptions = {
    user_full_name: { required: "Username is required" },
    user_type: { required: "User type is required" },
    phoneNumber: { required: "Handphone number is required" },
    user_email: { required: "Email is required" },
    user_company_name: { required: "Company name is required" },
    usro_role_id: { required: "Role type is required" },
    uspro_national_id: { required: "National ID is required" },
    uspro_job_title: { required: "Job title is required" },
    uspro_gender: { required: "Gender is required" },
    user_phone_number: { required: "Phone number is required" },
    uspro_birt_date: { required: "Birth date is required" },
    user_marital_status: { required: "Marital status is required" },
  }

  return (
    <div>
      <Transition appear show={props.isEdit.status} as={Fragment}>
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
                    Edit Page
                  </Dialog.Title>

                  <form onSubmit={handleSubmit(handleEdit, handleError)}>
                    <div className="card-header">
                      <h1 className="text-lg text-primary font-poppins-bold text-white">
                        General
                      </h1>
                      <hr className="mt-1" />
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="mt-4">
                        <label>Full Name</label>
                        <input
                          type="text"
                          defaultValue={EditProfil.user_full_name}
                          {...register(
                            "user_full_name",
                            registerOptions.user_full_name
                          )}
                          className={`outline-none border border-spacing-2 border-gray-400 block w-full px-3 py-2 mt-2 ${
                            errors?.user_full_name
                              ? "active:border-red-700 focus:border-red-700 active:bg-red-200 focus:bg-red-200"
                              : "active:border-blue-700 focus:border-blue-700 active:bg-blue-200 focus:bg-blue-200"
                          }`}
                        />
                        <small className="text-red-600">
                          {errors?.user_full_name &&
                            errors.user_full_name.message}
                        </small>
                      </div>

                      <div className="flex flex-col text-white">
                        <label
                          htmlFor="Email"
                          className="text-sm font-poppins-semibold leading-6 "
                        >
                          Email
                        </label>
                        <InputEmail placeholder="John@aol.com" width="12rem" />
                      </div>
                    </div>

                    <div className="flex justify items-end mt-4">
                      <div className="flex flex-col mr-6">
                        <label
                          htmlFor="Type"
                          className="text-[0.75rem] leading-6 ml-1 font-poppins-semibold text-white"
                        >
                          Type
                        </label>
                        <InputText placeholder="T,C,I" width="12rem" />
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="Type"
                          className="text-[0.75rem] leading-6 ml-1 font-poppins-semibold text-white"
                        >
                          Company
                        </label>
                        <InputText placeholder="Facebook" width="12rem" />
                      </div>
                    </div>
                    <div className="flex justify items-end mt-4">
                      <div className="flex flex-col mr-6">
                        <label
                          htmlFor="Handphone"
                          className="text-[0.75rem] leading-6 ml-1 font-poppins-semibold text-white"
                        >
                          Handphone
                        </label>
                        <InputText placeholder="089608234617" width="12rem" />
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="dropdown"
                          className="text-[0.75rem] leading-6 ml-1 font-poppins-semibold text-white"
                        >
                          RoleType
                        </label>
                        <select
                          id="dropdown"
                          name="dropdown"
                          className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="">
                            -- Please select an option --
                          </option>
                          <option value="1">1 = Guest</option>
                          <option value="2">2 = Manager</option>
                          <option value="3">3 = OfficeBoy</option>
                          <option value="4">4 = Admin</option>
                          <option value="5">5 = User</option>
                        </select>
                      </div>
                    </div>
                    <div className="card-header">
                      <h1 className="text-2xl text-primary font-poppins-bold text-white">
                        Profile
                      </h1>
                      <hr className="mt-1" />
                    </div>

                    <div className="flex justify items-end mt-4">
                      <div className="flex flex-col mr-6">
                        <label
                          htmlFor="National Id"
                          className="text-[0.75rem] leading-6 ml-1 font-poppins-semibold text-white"
                        >
                          National Id
                        </label>
                        <InputText placeholder="123-456-789" width="12rem" />
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="date"
                          className="text-[0.75rem] leading-6 ml-1 font-poppins-semibold  text-white"
                        >
                          Birth Date
                        </label>
                        <InputDate
                          name="date"
                          value={birthDate}
                          onClick={(e: React.ChangeEvent<HTMLInputElement>) =>
                            e.target.select()
                          }
                          onChange={(date: Date | null) => setBirthDate(date)}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col mr-6">
                      <label
                        htmlFor="Job Title"
                        className="text-[0.75rem] leading-6 ml-1 font-poppins-semibold text-white "
                      >
                        Job Title
                      </label>
                      <InputText placeholder="Sr.Developer" width="12rem" />
                    </div>
                    <div className="flex justify items-end mt-4">
                      <div className="flex flex-col mr-6">
                        <label
                          htmlFor="dropdown"
                          className="block font-medium text-sm mb-2 text-white"
                        >
                          Gender
                        </label>
                        <select
                          id="dropdown"
                          name="dropdown"
                          className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="">
                            -- Please Select an option --
                          </option>
                          <option value="M">Male</option>
                          <option value="S">Female</option>
                        </select>
                      </div>
                      <div className="flex flex-col">
                        <label
                          htmlFor="dropdown"
                          className="text-[0.75rem] leading-6 ml-1 font-poppins-semibold text-white"
                        >
                          Marriage
                        </label>
                        <select
                          id="dropdown"
                          name="dropdown"
                          className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="">
                            -- Please Select an option --
                          </option>
                          <option value="S">Single</option>
                          <option value="M">Married</option>
                        </select>
                      </div>
                    </div>
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden  bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                      <Image
                        src={
                          selectedImage
                            ? URL.createObjectURL(selectedImage)
                            : EditProfil.user_photo_profile
                        }
                        alt={
                          selectedImage
                            ? selectedImage.name
                            : EditProfil.user_photo_profile
                        }
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
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
