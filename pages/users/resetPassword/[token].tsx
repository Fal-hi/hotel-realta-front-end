import Button from "@/components/buttons/BgButton"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import Logo from "@/assets/image/logo.png"
import { useForm } from "react-hook-form"
import axios from "axios"
import Intext from "@/components/input/InText"
import { MdError } from "react-icons/md"
import { BsCheckCircleFill } from "react-icons/bs"
import Head from "next/head"

export default function ResetPassword({ token }: any) {
  const [message, setMessage] = useState<any>(null)
  const [loading, setIsLoading] = useState(false)
  type FormValues = {
    password: string
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const registerOptions = {
    password: { required: "Password is required" },
  }

  const onSubmit = async (data: any) => {
    setIsLoading(true)
    setMessage(null)

    await axios
      .post(`${process.env.BACKEND_URL}/changePassword/resetPassword`, {
        password: data.password,
        token: token,
      })
      .then(function (response) {
        setIsLoading(false)
        setMessage({
          statusCode: response.data.statusCode,
          message: response.data.message,
        })
      })
      .catch(function (err) {
        console.log(err)
        setIsLoading(false)
        setMessage({
          statusCode: err?.response.data.statusCode,
          message: err?.response?.data?.message,
        })
      })
  }

  return (
    <>
      <Head>
        <title>Hotel Realta - Reset Password</title>
      </Head>

      <section className="h-screen grid place-content-center bg-gray-200 p-4 md:p-0">
        <Link href="/">
          <Image
            src={Logo}
            alt="hotel logo"
            width={450}
            height={250}
            className="w-full md:max-w-md mx-auto md:mt-1"
            priority
          />
        </Link>

        <div className="w-full md:max-w-md mx-auto rounded px-6 py-6 border border-gray-100 bg-white shadow-lg  mt-5">
          <h3 className="text-3xl font-semibold text-center">Reset Password</h3>

          <p className="mt-5 text-sm text-center text-gray-500">
            Please Enter your New Password for Reset your Old Password.
          </p>

          <hr className="mt-4" />

          {message && message?.statusCode >= 400 && (
            <div
              className="p-4 my-4 text-sm text-danger-secondary rounded bg-danger font-medium bg-opacity-10 border-2 border-danger"
              role="alert"
            >
              {message?.message ? (
                message?.message.map((m: string, index: number) => {
                  return (
                    <ul
                      key={index}
                      className="flex flex-1 items-center gap-2 my-2"
                    >
                      <MdError className="text-xl" />
                      <li className="flex-1">{m}</li>
                    </ul>
                  )
                })
              ) : (
                <div className="flex flex-1 items-center gap-2 my-2">
                  <MdError className="text-xl" />
                  <p>{message.message}</p>
                </div>
              )}
            </div>
          )}

          {message && message?.statusCode === 200 && (
            <div
              className="p-4 my-4 text-sm text-secondary rounded bg-secondary font-medium bg-opacity-10 flex items-center gap-2 border-2 border-secondary"
              role="alert"
            >
              <BsCheckCircleFill className="text-xl" />
              {message.message}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mt-5">
              {/* <label htmlFor="email" className="block">
              New Password
            </label>
            <input type="text" {...register("password")} className="w-full" /> */}

              <Intext
                name="password"
                label="New Password"
                placeholder="Your New Password"
                type="password"
                errors={errors}
                register={register}
                registerOptions={registerOptions}
                className="w-full"
              />
            </div>
            {/* 
            <Button
              label="Reset Password"
              size="small"
              type="main"
              variant="primary"
              className="mt-5 w-full"
            /> */}
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

export async function getServerSideProps(context: any) {
  const { token } = context.params

  return {
    props: { token },
  }
}
