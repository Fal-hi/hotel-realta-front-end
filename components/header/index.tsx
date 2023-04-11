import React from "react"
import Logo from "@/assets/image/logo.png"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <>
      <nav className="flex justify-between px-10 py-4 bg-[#FFFFFF] items-center">
        <div>
          <Image
            width={190}
            height={50}
            src={Logo}
            alt="Logo Realta"
            className=""
          />
    
        </div>
        <div>
          <ul className="flex font-poppins-medium">
            <li className="list-none px-5 hover:border-2 rounded-md py-1 hover:border-bgPrimary">
              <Link href="/">Home</Link>  
            </li>
            <li className="list-none px-5 hover:border-2 rounded-md py-1 hover:border-bgPrimary">
            <Link href="/booking">Booking</Link>  
            </li>
            <li className="list-none px-5 hover:border-2 rounded-md py-1 hover:border-bgPrimary">
            <Link href="/resto/restomenus">Resto</Link>  
            </li>
          </ul>
        </div>
        <div
          className="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4"
          id="nav-content"
        >
          <div className="auth flex items-center w-full md:w-full">
            <button className="text-gray-800  px-5 py-2 rounded-xl bg-[#E7F2FF]  hover:bg-gray-100 hover:text-gray-700">
              <Link href="/dashboard"> Sign in</Link>  
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
