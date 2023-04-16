import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect } from "react"
import Logo from "@/assets/image/logo.png"
import { useForm } from "react-hook-form"
import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { useDispatch, useSelector } from "react-redux"
import { MdArrowDropDown, MdError } from "react-icons/md"
import { BsCheckCircleFill } from "react-icons/bs"
import { useRouter } from "next/router"
import { doRegisterEmployee } from "@/redux/USERS/action/registerType"
import phoneNumberCode from "@/functions/phonenumber/PhoneCodeNumber"
import InText from "@/components/input/InText"
import UserButton from "@/components/buttons/userButton"
import BgButton from "@/components/buttons/BgButton"

export default function SignupEmployee() {
  const [selected, setSelected] = useState(phoneNumberCode[0].value)
  const dispatch = useDispatch()
  const { message: registerMessage, payload: registerPayload } = useSelector(
    (state: any) => state.registerReducers
  )

  const router = useRouter()

  type FormValues = {
    username: string
    email: string
    password: string
    confirm_password: string
    phone_number_code: string
    phone_number: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit = (data: any) => {
    const phoneNumber = selected + data.phone_number

    dispatch(doRegisterEmployee({ ...data, phone_number: phoneNumber }))
    router.push("/users/loginEmployee")
  }

  const registerOptions = {
    username: { required: "Username or Full Name is required" },
    email: { required: "Email is required" },
    password: { required: "Password is required" },
    confirm_password: { required: "Confirm Password is required" },
    phone_number_code: { required: "Phone Number Code is required" },
    phone_number: { required: "Phone Number is required" },
  }

  return (
    <>
      <Head>
        <title>Hotel Realta - Signup Employee</title>
      </Head>
      <main className="grid grid-cols-2 h-screen items-center">
        <div className="w-3/4 mx-auto">
          <Link href="/">
            <Image
              src={Logo}
              alt="hotel logo"
              width={450}
              height={250}
              className="mx-auto mt-10"
              priority
            />
          </Link>

          <h1 className="text-2xl text-center uppercase font-poppins-medium mt-7">
            Signup Employee
          </h1>

          <form
            className="w-full md:w-3/4 mx-auto mt-7"
            onSubmit={handleSubmit(onSubmit)}
          >
            {registerMessage &&
              (registerPayload?.statusCode >= 400 ||
                registerMessage?.response?.data?.statusCode >= 400) && (
                <div
                  className="p-4 mb-4 text-sm text-danger-secondary rounded bg-danger font-medium bg-opacity-10 border-2 border-danger"
                  role="alert"
                >
                  {registerMessage?.response?.data ? (
                    registerMessage?.response?.data?.message.map(
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
                      <p>{registerMessage}</p>
                    </div>
                  )}
                </div>
              )}

            {registerMessage && registerPayload?.statusCode === 200 && (
              <div
                className="p-4 mb-4 text-sm text-secondary rounded bg-secondary font-medium bg-opacity-10 flex items-center gap-2 border-2 border-secondary"
                role="alert"
              >
                <BsCheckCircleFill className="text-xl" />
                {registerMessage.errors
                  ? registerMessage.errors[0].message
                  : registerMessage}
              </div>
            )}

            <InText
              name="username"
              label="Username"
              placeholder="Your Full Name"
              type="text"
              errors={errors}
              register={register}
              registerOptions={registerOptions}
              className="w-full"
              required={true}
            />

            <InText
              name="email"
              label="Email"
              placeholder="Your Email"
              type="email"
              errors={errors}
              register={register}
              registerOptions={registerOptions}
              className="w-full"
              required={true}
            />

            <InText
              name="password"
              label="Password"
              placeholder="Your Password"
              type="password"
              errors={errors}
              register={register}
              registerOptions={registerOptions}
              className="w-full"
              required={true}
            />

            <InText
              name="confirm_password"
              label="Confirm Password"
              placeholder="Your Confirm Password"
              type="password"
              errors={errors}
              register={register}
              registerOptions={registerOptions}
              className="w-full"
              required={true}
            />

            <div className="form-group mt-3">
              <label htmlFor="phone_number" className="text-lg font-medium">
                Phone Number<span className="text-danger">*</span>
              </label>

              <div className="flex gap-2 items-center">
                <Listbox value={selected} onChange={setSelected}>
                  <div className="relative w-1/2">
                    <Listbox.Button className="w-full relative p-3 mt-2 border-2 border-gray-500 outline-none active:border-blue-600 focus:border-blue-800 rounded text-left">
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
                      <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {phoneNumberCode.map((code, index) => (
                          <Listbox.Option
                            key={index}
                            className={({ active }) =>
                              `relative cursor-default select-none p-3 ${
                                active ? "bg-primary text-white" : "text-black"
                              }`
                            }
                            value={code.value}
                          >
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? "font-medium" : "font-normal"
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
                  className="w-full p-3 mt-2 border-2 border-gray-500 outline-none active:border-blue-600 focus:border-blue-800 rounded"
                  placeholder="Phone Number"
                />
              </div>

              <small className="text-red-600 block">
                {errors?.phone_number_code && errors.phone_number_code.message}
              </small>

              <small className="text-red-600">
                {errors?.phone_number && errors.phone_number.message}
              </small>
            </div>

            {/* <Button
              label="Signup"
              size="large"
              type="main"
              variant="primary"
              className="w-full mt-6"
            /> */}
            {/* className="bg-bgPrimary text-white px-6 py-2 rounded-lg" */}
            <div className="mt-3 grid-cols-2 mx-auto flex justify-center text-9xl">
              <BgButton title="Sign Up" width="100%" padding="1rem" />
            </div>
          </form>
          <Link href="/users/loginEmployee"></Link>

          <p className="font-medium text-center mt-2">
            If You are Realta Hotel,{" "}
            <Link
              href="/users/loginEmployee"
              className="text-blue-600 hover:text-blue-700"
            >
              Click This For login
            </Link>
          </p>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MDA5NzMwNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          width={1024}
          height={1024}
          alt="hotel-realta"
          className="h-screen w-full object-cover"
        />
      </main>
    </>
  )
}
