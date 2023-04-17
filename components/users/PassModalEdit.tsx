import React, { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import UserButton from "@/components/buttons/userButton"
import { useForm } from "react-hook-form"
import InText from "@/components/input/InText"
import { MdError } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { doUpdatePassword } from "@/redux/USERS/action/passwordAction"
import { useRouter } from "next/router"
import { BsCheckCircleFill } from "react-icons/bs"

export default function EditPassword({ isPassword, closeModal }: any) {
  const dispatch = useDispatch()
  const router = useRouter()

  const { payload, message, refresh } = useSelector(
    (state: any) => state.passwordReducers
  )

  type FormValueType = {
    current_password: string
    new_password: string
    retype_password: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValueType>()

  const onSubmit = (data: any) => {
    const { id } = router.query
    dispatch(doUpdatePassword({ id, data }))
    closeModal()
  }

  const registerOptions = {
    currentPassword: { required: "Current Password is Required" },
    Password: { required: "New Password is Required" },
    retypePass: { required: "Confirmation Password is Required" },
  }
  return (
    <>
      <Transition appear show={isPassword.status} as={Fragment}>
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
<Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded text-left align-middle shadow-xl transition-all bg-purple-600 bg-opacity-80 backdrop-filter backdrop-blur-sm">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-white bg-primary p-5"
                  >
                  </Dialog.Title>
                  <div className="mt-2 p-6">
                    <h2 className="text-2xl font-bold text-primary">
                      Change Password
                    </h2>

                    <hr className="mt-2" />

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                      {message &&
                        (payload?.statusCode >= 400 ||
                          message?.response?.data?.statusCode >= 400) && (
                          <div
                            className="p-4 my-4 text-sm text-danger-secondary rounded bg-danger font-medium bg-opacity-10 border-2 border-danger"
                            role="alert"
                          >
                            {message?.response?.data ? (
                              message?.response?.data?.message.map(
                                (m: string, index: number) => {
                                  return (
                                    <ul
                                      key={index}
                                      className="flex flex-1 items-center gap-2 my-2"
                                    >
                                      <MdError className="text-xl" />
                                      <li className="flex-1">{m}</li>
                                    </ul>
                                  )
                                }
                              )
                            ) : (
                              <div className="flex flex-1 items-center gap-2 my-2">
                                <MdError className="text-xl" />
                                <p>{message}</p>
                              </div>
                            )}
                          </div>
                        )}

                      {message && payload?.statusCode === 200 && (
                        <div
                          className="p-4 mb-4 text-sm text-secondary rounded bg-secondary font-medium bg-opacity-10 flex items-center gap-2 border-2 border-secondary"
                          role="alert"
                        >
                          <BsCheckCircleFill className="text-xl" />
                          {message.errors ? message.errors[0].message : message}
                        </div>
                      )}

                      <div className="form-group mt-6">
                        <InText
                          name="currentPassword"
                          label="Current Password"
                          placeholder="Your Current Password"
                          type="password"
                          errors={errors}
                          register={register}
                          registerOptions={registerOptions}
                          className="w-full md:w-1/2"
                        />
                      </div>

                      <div className="form-group mt-6">
                        <InText
                          name="Password"
                          label="New Password"
                          placeholder="Your New Password"
                          type="password"
                          errors={errors}
                          register={register}
                          registerOptions={registerOptions}
                          className="w-full md:w-1/2"
                        />
                      </div>

                      <div className="form-group mt-6">
                        <InText
                          name="retypePass"
                          label="Confirmation Password"
                          placeholder="Confirmation Password"
                          type="password"
                          errors={errors}
                          register={register}
                          registerOptions={registerOptions}
                          className="w-full md:w-1/2"
                        />
                      </div>
                      <div className="flex justify-end p-6 mt-2 gap-4">
                        <UserButton
                          label="Cancel"
                          size="small"
                          type="main"
                          variant="danger-secondary"
                          onClick={closeModal}
                        />

                        <UserButton
                          label="Edit"
                          size="small"
                          type="main"
                          variant="secondary"
                        />
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
// import React, { Fragment, useEffect, useState } from "react"
// import { Dialog, Transition } from "@headlessui/react"
// import { useForm } from "react-hook-form"
// import { useDispatch, useSelector } from "react-redux"

// import { doUpdatePassword } from "@/redux/USERS/action/passwordAction"
// import InputText from "../input/InputText"
// import InputDate from "../input/InputDate"
// import InputEmail from "../input/InputEmail"
// import Intext from "../input/InText"
// import InText from "../input/InText"

// export default function PassModalEdit(props: any) {
//   const {
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<FormValue>()

//   type FormValue = {
//     uspa_passwordhash: string
//     uspa_passwordsalt: string
//   }
//   let { users, bonus } = useSelector((state: any) => state.generalReducers)
//   const dispatch = useDispatch()
//   const [birthDate, setBirthDate] = useState<Date | null>(null)

//   const [nadhir, setIsNadhir] = useState<any>({})
//   useEffect(() => {
//     // setIsNadhir(users.filter((pro: any) => pro.id === props.isPassword.id)[0])
//     // reset(users.filter((pro: any) => pro.id === props.isPassword.id)[0])
//   }, [props, users, reset])
//   console.log(props.id)
//   const handleError = (errors: any) => {}

//   const handleEdit = async (data: any) => {
//     const formData = new FormData()

//     formData.append("Current Password", data.uspa_passwordhash)
//     formData.append("New Password", data.uspa_passwordhash)
//     formData.append("Retype_Password", data.uspa_passwordsalt)

//     // dispatch(updateProduct(props.isPassword.id, formData)).then((result) => {
//     //   toast.success(result.message);
//     // });

//     dispatch(doUpdatePassword({ id: props.isPassword.id, data: formData }))
//     props.closeModal()
//   }

//   const generalEdit = {
//     current_password: { required: "Current Password is Required" },
//     new_password: { required: "New Password is Required" },
//     retype_password: { required: "Confirmation Password is Required" },
//   }
//   const [password, setPassword] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")

//   const handlePasswordChange = (e: any) => {
//     setPassword(e.target.value)
//   }

//   const handleConfirmPasswordChange = (e: any) => {
//     setConfirmPassword(e.target.value)
//   }

//   return (
//     <div>
//       <Transition appear show={props.isPassword.status} as={Fragment}>
//         <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
//           <Transition.Child
//             as={Fragment}
//             enter="ease-out duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="ease-in duration-200"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             <div className="fixed inset-0 bg-black bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 overflow-y-auto ">
//             <div className="flex min-h-full items-center justify-center p-4 text-center">
//               <Transition.Child
//                 as={Fragment}
//                 enter="ease-out duration-300"
//                 enterFrom="opacity-0 scale-95"
//                 enterTo="opacity-100 scale-100"
//                 leave="ease-in duration-200"
//                 leaveFrom="opacity-100 scale-100"
//                 leaveTo="opacity-0 scale-95"
//               >
//                 <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-3xl bg-purple-800 p-6 text-left align-middle shadow-xl transition-all  mt-4">
//                   <Dialog.Title
//                     as="h3"
//                     className="text-2xl font-poppins-bold leading-6 text-white"
//                   >
//                     Change Password
//                   </Dialog.Title>

//                   <form onSubmit={handleSubmit(handleEdit, handleError)}>
//                     <div className="card-header">
//                       <h1 className="text-lg text-primary font-poppins-bold text-white"></h1>
//                       <hr className="mt-1" />
//                     </div>
//                     <div className="flex justify-between items-end">
//                       <div className="text-sm font-poppins-semibold leading-8 text-white">
//                         <label htmlFor="password">Current Password</label>
//                         <InputText placeholder=" Current password" />
//                       </div>
//                     </div>
//                     <div>
//                       <label htmlFor="password">Password</label>
//                       <InputText
//                         placeholder="Enter password"
//                         value={password}
//                         onChange={handlePasswordChange}
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="confirm-password">
//                         Confirm Password
//                         </label>
//                       <InputText
//                         placeholder="Retype password"
//                         value={confirmPassword}
//                         onChange={handleConfirmPasswordChange}
//                       />
//                     </div>

//                     <div className="flex-row space-x-4 mt-4 text-rigt">
//                       <button className="inline-flex justify-center  border-2 border-black px-4 py-2 text-sm font-medium text-blue-500 hover:bg-black hover:text-white transition-colors ease-out duration-300  focus:outline-none focus-visible:ring-2">
//                         Submit
//                       </button>

//                       <button
//                         className="inline-flex justify-center border-2 border-red-700 text-blue-500 hover:bg-red-800 hover:text-white px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 transition-colors ease-out duration-500"
//                         onClick={props.closeModal}
//                       >
//                         Cancel
//                       </button>
//                     </div>
//                   </form>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </Dialog>
//       </Transition>
//     </div>
//   )
// }
