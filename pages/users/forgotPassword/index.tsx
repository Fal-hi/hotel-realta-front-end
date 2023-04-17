import userButton from "@/components/buttons/userButton"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import Logo from "@/assets/image/logo.png"
import { useForm } from "react-hook-form"
import axios from "axios"
import { BiLoaderAlt } from "react-icons/bi"
import { MdError } from "react-icons/md"
import Head from "next/head"
import InText from "@/components/input/InText"
import UserButton from "@/components/buttons/userButton"
import BgButton from "@/components/buttons/BgButton"

export default function ForgotPassword() {
  const [message, setMessage] = useState<any>(null)
  const [loading, setIsLoading] = useState(false)
  type FormValues = {
    email: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const registerOptions = {
    user_email: { required: "Email is required" },
  }

  const onSubmit = async (data: any) => {
    setIsLoading(true)
    setMessage(null)

    await axios
      .post(`${process.env.BACKEND_URL}/changePassword/forgotPassword`, {
        email: data.user_email,
      })
      .then(function (response: any) {
        setIsLoading(false)
        setMessage({
          statusCode: response.data.statusCode,
          message: response.data.message,
        })
      })
      .catch(function (err: any) {
        console.log(err)
        setIsLoading(false)

        setMessage(err.response.data.message)
      })
  }

  return (
    <>
      <Head>
        <title>Hotel Realta - Forgot Password</title>
      </Head>
      <section className="h-screen grid place-content-center bg-gray-200 p-4 md:p-0">
        <Link href="/">
          <Image
            src={Logo}
            alt="hotel logo"
            width={450}
            height={250}
            className="mx-auto md:max-w-md md:mt-1 w-full"
            priority
          />
        </Link>

        <div className="w-full md:max-w-md mx-auto rounded px-6 py-6 border border-gray-100 bg-white shadow-lg  mt-5">
          <h3 className="text-3xl font-semibold text-center">
            Forgot Password
          </h3>

          <p className="mt-5 text-sm text-center text-gray-500">
            Please Enter your Email Address for Reset Password. You will receive
            a link to create your new password
          </p>

          <hr className="mt-4" />

          {message && message?.statusCode === 200 && (
            <div
              className="p-4 my-4 text-sm text-secondary rounded bg-secondary font-medium bg-opacity-10 flex items-center gap-2 border-2 border-secondary"
              role="alert"
            >
              <MdError className="text-xl" />
              {message.message}
            </div>
          )}

          {message && message?.statusCode >= 400 && (
            <div
              className="p-4 my-4 text-sm text-danger-secondary rounded bg-danger font-medium bg-opacity-10 border-2 border-danger flex items-center gap-2"
              role="alert"
            >
              <MdError className="text-xl" />
              {message.message}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mt-5">
              <InText
                name="user_email"
                label="Email"
                placeholder="Your Email"
                type="email"
                errors={errors}
                register={register}
                registerOptions={registerOptions}
                className="w-full"
              />
            </div>

            {loading ? (
              <button
                disabled
                className="px-8 py-2 flex gap-2 items-center justify-center bg-gray-500 w-full mt-5 rounded font-medium text-white"
              >
                <BiLoaderAlt className="animate-spin h-5 w-5" />
                Loading
              </button>
            ) : (
              <BgButton
                title="Forgot Password"
                padding="0.5rem,0.1rem"
                width="100%"
              />
            )}
          </form>

          <Link href="/users/loginEmployee">
            <p className="text-center mt-4 uppercase text-danger-secondary font-medium hover:text-danger-secondary-hover hover:font-semibold">
              Back To Login
            </p>
          </Link>
        </div>
      </section>
    </>
  )
}
