import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { doLoginEmployee, doLoginGuest } from "@/redux/USERS/action/loginAction"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/router"
import Logo from "@/assets/image/logo.png"
import Link from "next/link"
// import Image from "next/image";
// import mbappe from "./mbappe.jpg";
import { FaEyeSlash, FaEye } from "react-icons/fa"
import UserButton from "@/components/buttons/userButton"
import Image from "next/image"
import Intext from "@/components/input/InText"
import id from "date-fns/locale/id"
import BgButton from "@/components/buttons/BgButton"

export default function LoginEmployee() {
  const dispatch = useDispatch()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isLogin, setIsLogin] = useState<boolean>(false)

  const { payload, message, refresh } = useSelector(
    (state: any) => state.loginReducers
  )
  // console.log(payload.token);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>()
  type FormValue = {
    username: string
    password: string
  }

  const onSubmit = (data: any) => {
    console.log("tes=>", data)

    dispatch(doLoginEmployee(data))
  }

  const registerOptions = {
    username: { required: "Username is required" },
    password: { required: "Password is required" },
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      const usId = localStorage.getItem("id")
      setIsLogin(true)
      setTimeout(() => {
        router.push(`/users/profile/${usId}`)
      }, 10)
    }
  }, [router, payload, refresh])

  // useEffect(() => {
  //   const token = localStorage.getItem("token")
  //   if (token) {
  //     setIsLogin(true)
  //     setTimeout(() => {
  //       router.push("/users/profile/")
  //     }, 10)
  //   }
  // }, [router, payload, isLoading])

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
            Welcome Back Employee!
            <br />
            Login To Your Account
          </div>
          <div className="mt-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col mb-6"></div>
              <Intext
                name="username"
                label="Email Address"
                placeholder="Your Full Name"
                type="text"
                errors={errors}
                register={register}
                registerOptions={registerOptions}
                className="w-full"
                required={true}
              />
              <Intext
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

              <p className="font-poppins-semibold text-start mt-5 ">
                <input
                  type="checkbox"
                  name=" rememberMe "
                  className="form-check-input"
                />
                <label htmlFor="rememberMe" className="form-check-label ml-2">
                  Remember Me
                </label>
                <Link
                  href="/users/signupGuest"
                  className="text-blue-600 hover:text-blue-700 ml-20"
                >
                  Forgot Password?{" "}
                </Link>
              </p>
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
