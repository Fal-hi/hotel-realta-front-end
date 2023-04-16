import React, { useEffect, useState, Fragment } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { doLoginEmployee, doLoginGuest } from "@/redux/USERS/action/loginAction"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/router"
import Logo from "@/assets/image/logo.png"
import { Listbox, Transition } from "@headlessui/react"
import { BsCheckCircleFill } from "react-icons/bs"

import Link from "next/link"
// import Image from "next/image";
// import mbappe from "./mbappe.jpg";
import { FaEyeSlash, FaEye } from "react-icons/fa"
import UserButton from "@/components/buttons/userButton"
import Image from "next/image"
import phoneNumberCode from "@/functions/phonenumber/PhoneCodeNumber"
import { MdArrowDropDown, MdError } from "react-icons/md"
import Button from "@/components/buttons/Button"
import BgButton from "@/components/buttons/BgButton"

export default function LoginGuest() {
  const dispatch = useDispatch()
  const router = useRouter()

  const [isLogin, setIsLogin] = useState<boolean>(false)
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  const { users, message, payload, refresh } = useSelector(
    (state: any) => state.loginReducers
  )
  // console.log(payload.token);
  const [selected, setSelected] = useState(phoneNumberCode[0].value)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  type FormValues = {
    phone_number_code: string
    phone_number: string
  }

  const registerOptions = {
    phone_number_code: { required: "Phone Number Code is required" },
    phone_number: { required: "Phone Number is required" },
  }

  const onSubmit = (data: any) => {
    dispatch(doLoginGuest(`${phoneNumberCode[0].value}${data.phone_number}`))
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const usId = localStorage.getItem("id")
      toast.success("🦄 yey berhasil!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      router.push(`/users/profile/${usId}`)
    } else {
      toast.error("Failed to login.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
  }, [router, message, refresh])

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[url(https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80)]">
        <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-2xl w-full max-w-md">
          <Image
            src={Logo}
            alt="hotel logo"
            width={450}
            height={150}
            className="mx-auto mt-10"
            priority
          />
          <div className="font-poppins-medium pt-8 self-center text-xl sm:text-2xl uppercase text-gray-800">
            Welcome Back Guest!
            <br />
            Login To Your Account
          </div>
          <div className="mt-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mb-6"></div>
              {message && payload?.statusCode >= 400 && (
                <div
                  className="p-4 mb-4 text-sm text-danger-secondary rounded bg-danger font-medium bg-opacity-10 flex items-center gap-2 border-2 border-danger"
                  role="alert"
                >
                  <MdError className="text-xl" />
                  {message}
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

              <label
                htmlFor="phone_number"
                className="text-left font-poppins-regular "
              >
                Phone Number
              </label>

              <div className="flex gap-2 items-center">
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative w-1/2">
                    <Listbox.Button className="w-full relative p-3 mt-2 border-2 border-pink-500 outline-none active:border-fuchsia-600 focus:border-fuchsia-800 rounded text-left">
                      <span className="block truncate">{selected}</span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <MdArrowDropDown
                          className="h-5 w-5 text-variant"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-purple-400 py-1 text-base shadow-lg ring-1 ring-red ring-opacity-5 focus:outline-none sm:text-sm">
                        {phoneNumberCode.map((code, index) => (
                          <Listbox.Option
                            key={index}
                            className={({ active }) =>
                              `relative cursor-default select-none p-3 ${
                                active ? "bg-primary text-white" : "text-red"
                              }`
                            }
                            value={code.value}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected
                                      ? "font-poppins-medium"
                                      : "font-normal"
                                  }`}
                                >
                                  {code.label}
                                </span>
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>

                <input
                  type="text"
                  {...register("phone_number", registerOptions.phone_number)}
                  className="w-full p-3 mt-2 border-2 border-gray-500 outline-none active:border-purple-600 focus:border-purple-800 rounded"
                  placeholder="Phone Number"
                />
              </div>
              <small className="text-red-600 block mt-2">
                {errors?.phone_number_code && errors.phone_number_code.message}
              </small>

              <small className="text-red-600 block mt-2">
                {errors?.phone_number && errors.phone_number.message}
              </small>

              <Link
                href="/users/forgotPassword"
                className="text-blue-700 hover:text-blue-800 font-medium text-sm md:text-base"
              >
                Forgot Your Password
              </Link>
              <div className="mt-3 grid-cols-2 mx-auto flex justify-center text-9xl">
                <BgButton title="Login" width="76%" padding="1rem" />
              </div>
            </form>
          </div>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />{" "}
      </div>
    </>
  )
}
