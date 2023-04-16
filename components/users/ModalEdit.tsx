import React, { Fragment, useEffect, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import InText from "@/components/input/InText"

import { Listbox } from "@headlessui/react"
import ListBoxInput from "@/components/ListBox/index"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { useRouter } from "next/router"
import Image from "next/image"
import Avatar from "@/assets/image/avatar.png"
import {
  doGetUsers,
  doReqUpdateEditGeneral,
} from "@/redux/USERS/action/generalAction"
import BgButton from "../buttons/BgButton"
import { type } from "os"
import { MdArrowRightAlt } from "react-icons/md"

export default function EditProfile({ data, isEdit, closeModal }: any) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueType>()

  const { users, usersBonusPoints, usersHistoryMember } = useSelector(
    (state: any) => state.generalReducers
  )

  useEffect(() => {
    dispatch(doGetUsers(isEdit.id))
  }, [isEdit.id])

  const [dataUser, setDataUser] = useState({})

  // console.log("ini user coy", usersBonus)

  const [selectedImage, setSelectedImage] = useState<any>(null)
  const router = useRouter()
  const dispatch = useDispatch()

  const [userType, setUserType] = useState({
    label: "",
    value: "",
  })
  const [userGender, setUserGender] = useState<any>({
    label: "",
    value: "",
  })
  const [userRoles, setUserRoles] = useState<any>({
    label: "",
    value: "",
  })

  const [userMaritalStatus, setUserMaritalStatus] = useState<any>({
    label: "",
    value: "",
  })

  console.log(userType)

  const handleChangeUserRole = (e: any) => {
    // setUserRoles((prev: any) => {
    //   return { ...prev, label: value, value: value }
    setUserRoles({
      label: e.target.value,
      value: e.target.value,
    })
  }

  const handleChangeUserType = (e: any) => {
    // setUserType((prev: any) => {
    //   return { ...prev, label: value, value: value }
    // })
    setUserType({
      label: e.target.value,
      value: e.target.value,
    })
  }

  const handleChangeUserGender = (e: any) => {
    // setUserGender((prev: any) => {
    //   return { ...prev, label: value, value: value }
    setUserType({
      label: e.target.value,
      value: e.target.value,
    })
  }

  const handleChangeUserMaritalStatus = (e: any) => {
    // setUserMaritalStatus((prev: any) => {
    //   return { ...prev, label: value, value: value }
    setUserMaritalStatus({
      label: e.target.value,
      value: e.target.value,
    })
  }

  const userTypeList = [
    {
      label: "Travel Agent",
      value: "T",
    },
    {
      label: "Individual",
      value: "I",
    },
    {
      label: "Corporate",
      value: "C",
    },
  ]
  const userGenderList = [
    {
      label: "Male",
      value: "T",
    },
    {
      label: "Female",
      value: "F",
    },
  ]
  const MaritalStatusList = [
    {
      label: "Marriage",
      value: "M",
    },
    {
      label: "Single",
      value: "S",
    },
  ]

  const rolesList = [
    {
      label: "Guest",
      value: 1,
    },
    {
      label: "Manager",
      value: 2,
    },
    {
      label: "Office Boy",
      value: 3,
    },
    {
      label: "Admin",
      value: 4,
    },
    {
      label: "User",
      value: 5,
    },
  ]

  type FormValueType = {
    user_full_name?: string
    user_type?: "T" | "I" | "C"
    user_phone_number?: string
    user_photo_profile?: string
    user_email?: string
    user_company_name?: string
    uspro_national_id?: string
    uspro_job_title?: string
    uspro_gender?: "M" | "F"
    uspro_birt_date?: Date | string
    uspro_marital_status?: "M" | "S"
  }
  console.log(users)

  const onSubmit = (data: any) => {
    const { id } = router.query

    console.log(isEdit.id)
    const profileData = {
      username: data.username,
      email: data.email,
      MaritalStat: userMaritalStatus.value,
      // ...data,

      nationalId: data.nationalId,

      company: data.company,
      UroleId: userRoles.value,
      userType: userType.value,
      jobTitle: data.jobTitle,
      gender: userGender.value,
      birthDate: data.birthDate,

      // MaritalStat: users?.data?.userMaritalStatus?.value ?? "",
      // user_photo_profile: users?.data?.user_photo_profile?.[0] ?? "",
    }
    console.log("profileDataData", data)
    console.log("profileData", profileData)
    dispatch(doReqUpdateEditGeneral({ id: isEdit.id, data: profileData }))
    // setTimeout(() => {
    //   closeModal()
    // }, 1000)
    closeModal()
  }

  console.log(userType)

  useEffect(() => {
    if (users && users.data) {
      setUserType({
        label:
          users?.data?.user_type === "T"
            ? "Travel Agent"
            : users?.data?.user_type === "C"
            ? "Corporate"
            : "Individual",
        value: users?.data?.user_type,
      })

      setUserMaritalStatus({
        label:
          users?.data?.uspro_marital_status === "M" ? "Marriage" : "Single",
        value: users?.data?.uspro_marital_status,
      })

      setUserRoles({
        label:
          users?.data?.usro_role_id === 1
            ? "Guest"
            : users?.data?.usro_role_id === 2
            ? "Manager"
            : users?.data?.usro_role_id === 3
            ? "Office Boy"
            : users?.data?.usro_role_id === 4
            ? "Admin"
            : "User",
        value: users?.data?.usro_role_id,
      })

      setUserGender({
        label: users?.data?.uspro_gender === "M" ? "Male" : "Female",
        value: users?.data?.uspro_gender,
      })
    }
  }, [users,])

  // useEffect(() => {
  //   if (users && !users.data) {
  //     setUserMaritalStatus({
  //       label: users?.data?.user_marital_status === "M" ? "Marriage" : "Single",
  //       value: users?.data?.user_marital_status,
  //     })
  //   }
  // }, [users])

  // useEffect(() => {
  //   if (users && !users.data) {
  //     setUserRoles({
  //       label:
  //         users?.data?.usro_role_id === 1
  //           ? "Guest"
  //           : users?.data?.usro_role_id === 2
  //           ? "Manager"
  //           : users?.data?.usro_role_id === 3
  //           ? "Office Boy"
  //           : users?.data?.usro_role_id === 4
  //           ? "Admin"
  //           : "User",
  //       value: users?.data?.usro_role_id,
  //     })
  //   }
  // }, [users])

  // useEffect(() => {
  //   if (users && !users.data) {
  //     setUserGender({
  //       label: users?.data?.uspro_gender === "M" ? "Male" : "Female",
  //       value: users?.data?.uspro_gender,
  //     })
  //   }
  // }, [users])

  return (
    <>
      <Transition appear show={isEdit.status} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded text-left align-middle shadow-xl transition-all bg-white">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white bg-primary p-5"
                  >
                    User Profile
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-2 p-6">
                      <div className="mx-auto mt-4">
                        {/* <Image
                          src={
                            selectedImage
                              ? URL.createObjectURL(selectedImage)
                              : users.data.user_photo_profile
                          }
                          alt={
                            selectedImage
                              ? selectedImage.name
                              : users.data.user_photo_profile
                          }
                          className="w-full h-full object-cover object-center lg:h-44 lg:w-44 mx-auto rounded-full"
                          height={80}
                          width={80}
                        /> */}
                        {/* 
                        <div id="fileUpload">
                          <div className="flex items-center justify-center w-1/2 mx-auto">
                            <label
                              htmlFor="dropzone-file"
                              className="cursor-pointer"
                            >
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <p className="mb-2 text-md text-gray-500 hover:text-primary font-semibold">
                                  Click to upload
                                </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  SVG, PNG, JPG or GIF{" "}
                                  <span className="font-bold">(Max. 2 MB)</span>
                                </p>
                              </div>
                              <input
                                id="dropzone-file"
                                type="file"
                                className="hidden"
                                {...register("user_photo_profile")}
                                onInput={(e: any) =>
                                  setSelectedImage(e.target.files[0])
                                }
                              />
                            </label>
                          </div>
                        </div> */}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 items-center">
                        <div className="form-group">
                          <InText
                            name="username"
                            label="Username"
                            placeholder="Your Username"
                            type="text"
                            errors={errors}
                            register={register}
                            className="w-full"
                            defaultValue={users?.data?.user_full_name}
                          />
                        </div>

                        <div className="form-group">
                          <InText
                            name="email"
                            label="Email"
                            placeholder="Your Email"
                            type="email"
                            errors={errors}
                            register={register}
                            className="w-full"
                            defaultValue={users?.data?.user_email}
                          />
                        </div>

                        <div className="form-group mt-3">
                          <label
                            htmlFor="fullname"
                            className="block text-lg font-medium"
                          >
                            Type User
                          </label>

                          <select onChange={handleChangeUserType}>
                            {userTypeList.map((type: any, index: number) => (
                              <option
                                key={index}
                                value={type.value}
                                selected={
                                  userType.value === type.value ? true : false
                                }
                              >
                                {type.label}
                              </option>
                            ))}
                          </select>
                          {/* <ListBoxInput
                            data={userTypeList}
                            selectedValue={userType.value}
                            handleChangeUserType={handleChangeUserType}
                          /> */}
                        </div>

                        <div className="form-group">
                          <InText
                            name="company"
                            label="Company Name"
                            placeholder="Your Company Name"
                            type="text"
                            errors={errors}
                            register={register}
                            className="w-full"
                            defaultValue={users?.data?.user_company_name}
                          />
                        </div>

                        <div className="form-group">
                          <InText
                            name="phoneNumber"
                            label="Phone Number"
                            placeholder="Your Phone Number"
                            type="text"
                            errors={errors}
                            register={register}
                            className="w-full"
                            defaultValue={users?.data?.user_phone_number}
                          />
                        </div>

                        <div className="form-group mt-4">
                          <label htmlFor="password" className="block text-lg">
                            Role Type
                          </label>

                          <select>
                            {rolesList.map((role: any, index: number) => (
                              <option
                                key={index}
                                value={role.value}
                                selected={
                                  userRoles.value === role.value ? true : false
                                }
                              >
                                {role.label}
                              </option>
                            ))}
                          </select>

                          {/* <ListBoxInput
                            data={rolesList}
                            selectedValue={userRoles.value}
                            handleChangeUserType={handleChangeUserRole}
                          /> */}
                        </div>
                        {/* {Number(users?.data?.usro_role_id) === 4 ? (
                        ) : null} */}
                      </div>
                    </div>

                    <div className="mt-2 p-6">
                      <h2 className="text-2xl font-bold text-primary">
                        Profile
                      </h2>

                      <hr className="mt-2" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 items-center">
                        <div className="form-group">
                          <InText
                            name="nationalId"
                            label="National ID"
                            placeholder="Your National ID"
                            type="text"
                            errors={errors}
                            register={register}
                            className="w-full"
                            defaultValue={users?.data?.uspro_national_id}
                          />
                        </div>

                        <div className="form-group mt-4">
                          <InText
                            name="birthDate"
                            label="Birth Date"
                            placeholder="Your National ID"
                            type="date"
                            errors={errors}
                            register={register}
                            className="w-full"
                            defaultValue={users?.data?.uspro_birt_date}
                          />
                        </div>

                        <div className="form-group">
                          <InText
                            name="jobTitle"
                            label="Job Title"
                            placeholder="Your Job Title"
                            type="text"
                            errors={errors}
                            register={register}
                            className="w-full"
                            defaultValue={users?.data?.uspro_job_title}
                          />
                        </div>

                        <div className="form-group mt-10">
                          <label htmlFor="password" className="block text-lg">
                            Marital Status
                          </label>

                          <select>
                            {MaritalStatusList.map(
                              (Marital: any, index: number) => (
                                <option
                                  key={index}
                                  value={Marital.value}
                                  selected={
                                    userMaritalStatus.value === Marital.value
                                      ? true
                                      : false
                                  }
                                >
                                  {Marital.label}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="password" className="block text-lg">
                            Gender
                          </label>

                          <select onChange={handleChangeUserGender}>
                            {userGenderList.map(
                              (gender: any, index: number) => (
                                <option
                                  key={index}
                                  value={gender.value}
                                  selected={
                                    userGender.value === gender.value
                                      ? true
                                      : false
                                  }
                                >
                                  {gender.label}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>
                    </div>

                    <hr className="mt-4 mx-6" />

                    <div className="flex justify-end p-6 gap-4">
                      <BgButton title="Cancel" width="100%" padding="1rem" />
                      <BgButton title="Edit" width="100%" padding="1rem" />
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
