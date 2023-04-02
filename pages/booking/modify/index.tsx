import { ChevronLeft, Coupon, Plus, User, X } from "@/components/icons"
import Link from "next/link"
import Logo from "@/assets/image/logo.png"
import Image from "next/image"
import InputText from "@/components/input/InputText"
import InputEmail from "@/components/input/InputEmail"
import BgButton from "@/components/buttons/BgButton"
import formatRupiah from "@/functions/formatRupiah"
import { useState } from "react"
import Dropdown from "@/components/select/Dropdown"
import { OutlineButton } from "@/components/buttons/OutlineButton"

const selectType = [
  {
    id: 1,
    type: "Pay at hotel",
  },
  {
    id: 2,
    type: "GoTo",
  },
  {
    id: 3,
    type: "Dana",
  },
  {
    id: 4,
    type: "Kredivo",
  },
]

const ModifyBooking = () => {
  const [type, setType] = useState<string>("")

  const handleChangeType = (value: string) => {
    setType(value)
  }

  return (
    <section>
      <div className="sticky top-0 bg-[#FBFBFB] h-6 z-50"></div>
      <div className="sticky top-6 z-50 w-[84vw] flex justify-between items-center bg-white shadow rounded-md px-4 py-4 text-[#1C2434]">
        <figure>
          <Image
            width={220}
            height={100}
            src={Logo}
            alt="Logo Realta"
            className=""
          />
        </figure>
        <Link href="/" className="flex gap-1 items-center">
          <User width="20" stroke="#7743DB" />
          <span className="text-xs font-semibold text-textPurple mr-2">
            Sign In
          </span>
        </Link>
      </div>
      <div className="flex justify-around items-start">
        <section className="w-[51.667%]">
          <Link
            href="/"
            className="flex gap-4 items-center text-textPurple mt-10"
          >
            <ChevronLeft width="16" height="16" fill="#7743DB" />
            <h1 className="text-xl font-semibold">Modify Your Booking</h1>
          </Link>
          <article>
            <header className="bg-white shadow rounded-md py-4 px-6 mt-8">
              <h1 className="font-medium text-xl">1. Enter Your Details</h1>
            </header>
            <div className="px-6">
              <h4 className="my-6">
                We will use these details to share your booking information
              </h4>
              <div className="flex justify-between items-start">
                <div>
                  <label
                    htmlFor="fullname"
                    className="text-[0.75rem] leading-6 ml-1"
                  >
                    Full Name
                  </label>
                  <InputText placeholder="Full Name" width="15rem" />
                </div>
                <div>
                  <label
                    htmlFor="fullname"
                    className="text-[0.75rem] leading-6 ml-1"
                  >
                    Email
                  </label>
                  <InputEmail placeholder="Email" width="15rem" />
                </div>
              </div>
              <div className="flex justify-between items-end mt-8">
                <div>
                  <label
                    htmlFor="fullname"
                    className="text-[0.75rem] leading-6 ml-1"
                  >
                    Phone Number
                  </label>
                  <InputText placeholder="089608234617" width="15rem" />
                </div>

                <BgButton
                  title="Send Passcode"
                  padding="0.4rem 0"
                  width="15rem"
                />
              </div>
            </div>
          </article>
          <article className="my-8">
            <header className="bg-white shadow rounded-md py-4 px-6 mt-8">
              <h1 className="font-medium text-xl">2. Complete Your Booking</h1>
            </header>
            <div className="px-6 mt-4">
              <header className="flex justify-between items-center text-sm">
                <span className="w-1/3">Item Name</span>
                <span className="w-1/3 text-left">Price</span>
                <span className="flex gap-3 items-center">
                  Add <Plus width="10" stroke="#7743DB" />
                </span>
              </header>
              <hr className="mt-2" />
              <div className="flex justify-between items-center text-xs my-3">
                <span className="w-1/3">Coca-Cola</span>
                <span className="w-1/3 text-left">{formatRupiah(10000)}</span>
                <span className="flex gap-3 items-center">
                  Delete <X width="8" stroke="#7743DB" />
                </span>
              </div>
              <div className="flex justify-between items-center text-xs text-left my-3">
                <span className="w-1/3">Extra Bed</span>
                <span className="w-1/3 text-left">{formatRupiah(75000)}</span>
                <span className="flex gap-3 items-center">
                  Delete <X width="8" stroke="#7743DB" />
                </span>
              </div>
              <hr className="mb-2" />
              <footer className="flex justify-between items-center text-sm">
                <span className="mr-6 font-semibold">Total</span>
                <span className="font-semibold">{formatRupiah(85000)}</span>
                <BgButton
                  title="Simpan"
                  padding="0.1rem 0.5rem"
                  textSize="10px"
                />
              </footer>
            </div>
          </article>
          <article className="mb-40">
            <header className="bg-white shadow rounded-md py-4 px-6 mt-8">
              <h1 className="font-medium text-xl">3. Payment</h1>
            </header>
            <div className="flex justify-between items-start mt-4 px-6">
              <div>
                <label htmlFor="type" className="text-[0.75rem] leading-6 ml-1">
                  Type
                </label>
                <Dropdown
                  options={selectType}
                  value={type}
                  onChange={handleChangeType}
                />
              </div>
              <div>
                <label
                  htmlFor="fullname"
                  className="text-[0.75rem] leading-6 ml-1"
                >
                  Account Number
                </label>
                <InputText placeholder="Your Account Number" width="15rem" />
              </div>
            </div>
            <div className="px-6">
              <hr className="mt-6 mb-2" />
              <footer className="flex justify-between items-center text-sm">
                <span className="mr-6 font-semibold">
                  Your account valid, please continue to book
                </span>
                <BgButton
                  title="Validate"
                  padding="0.1rem 0.5rem"
                  textSize="10px"
                />
              </footer>
            </div>
          </article>
        </section>
        {/* Card */}
        <section className="bg-white p-6 shadow w-[34.33%] rounded-md sticky top-28">
          <div className="flex justify-between items-start mb-4">
            <h1 className="font-semibold text-textPurple">
              Sign In to see a lower price
            </h1>
            <OutlineButton title="Sign In" />
          </div>
          <hr />
          <div className="mt-3 flex justify-between items-center">
            <p className="text-xs mt-1">
              Min, 26 Mar 2023 <b className="text-textPurple">to</b> <br /> Sen,
              27 Mar 2023
            </p>
            <div>
              <span className="text-rose-500 text-xs line-through mr-2">
                {formatRupiah(2000000)}
              </span>
              <span className="text-xs bg-yellow-300 py-[2px] px-1 rounded">
                -{50}%
              </span>
              <h1 className="text-right font-semibold mt-1">
                {formatRupiah(1000000)}
              </h1>
              <p className="text-xs font-light text-right">Include Tax</p>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="font-semibold text-textPurple">
              Indonesia Standard Double
            </h5>
          </div>
          <div className="flex justify-between items-center bg-[#E7F2FF] rounded-md p-6 mt-8">
            <div className="flex gap-4 items-center">
              <Coupon />
              <span>SAFESTAY45</span>
            </div>
            <h3>{formatRupiah(100000)}</h3>
          </div>
          <div className="flex justify-between items-center my-8 text-sm">
            <span className="font-semibold">Your Saving</span>
            <span className="bg-yellow-300 py-1 px-2 rounded">
              {formatRupiah(100000)}
            </span>
          </div>
          <hr />
          <div className="flex justify-between items-center font-semibold mt-2">
            <h1>
              Total Price{" "}
              <span className="text-xs font-light">(include tax)</span>
            </h1>
            <h1>{formatRupiah(900000)}</h1>
          </div>
          <div className="mt-8 flex justify-end">
            <BgButton title="Create Booking Order" width="full" />
          </div>
        </section>
      </div>
    </section>
  )
}

export default ModifyBooking
