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
import classNames from "classnames"
import { Modal } from "@/components/modal"

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

const itemLists = [
  {
    id: 1,
    item: "Coca-Cola",
    price: 10000,
  },
]

const ModifyBooking = () => {
  const [type, setType] = useState<string>("")
  // const [item, setItem] = useState<any>(itemLists)
  const [showModal, setShowModal] = useState<boolean>(false)
  const [itemList, setItemList] = useState<any>([])

  const handleChangeType = (value: string) => {
    setType(value)
  }

  // const handleAddItem = (name: string, price: number) => {
  //   const newItem = {
  //     name,
  //     price,
  //   }
  //   setItem([...item, newItem])
  //   setShowModal(false)
  // }

  // const handleDeleteItem = (index: number) => {
  //   const newItem = [...item]
  //   newItem.splice(index, 1)
  //   setItem(newItem)
  // }

  const modalClasses = classNames(
    "fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-gray-900 flex justify-center items-center z-50",
    {
      hidden: !showModal,
    }
  )

  const addItem = (newItem: any) => {
    setItemList(itemList.concat(newItem))
  }

  const handleDeleteItem = (id: number) => {
    setItemList(itemList.filter((item: any) => item.id !== id))
  }

  const ModalAddItem = ({ showModal, setShowModal, addItem }: any) => {
    const [item, setItem] = useState<string>("")
    const [price, setPrice] = useState<string>("")

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const newItem = {
        id: new Date().getTime(),
        item: item,
        price: parseInt(price),
      }
      addItem(newItem)
      setItem("")
      setPrice("")
      setShowModal(false)
    }

    return (
      <>
        {showModal && (
          <section
            className={modalClasses}
            onClick={(e: any) => e.stopPropagation()}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white w-80 p-6 rounded-md"
            >
              <h1 className="text-center text-md font-bold">Add Item</h1>
              <div className="mt-4">
                <div className="mt-2 flex flex-col">
                  <label htmlFor="name" className="mb-1 font-semibold text-xs">
                    Item Name
                  </label>
                  <InputText
                    placeholder="Item Name"
                    value={item}
                    onChange={(e: any) => setItem(e.target.value)}
                  />
                </div>
                <div className="mt-2 flex flex-col">
                  <label className="mb-1 font-semibold text-xs" htmlFor="price">
                    Price
                  </label>
                  <InputText
                    placeholder="Price"
                    value={price}
                    onChange={(e: any) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2 items-center mt-4">
                <OutlineButton
                  title="Close"
                  textSize="10px"
                  padding="5px 10px"
                  onClick={() => setShowModal(false)}
                />
                <BgButton title="Add Item" textSize="10px" padding="5px 10px" />
              </div>
            </form>
          </section>
        )}
      </>
    )
  }

  return (
    <section className="w-[85vw] mx-auto font-poppins-regular">
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
            href="/booking/details"
            className="flex gap-4 items-center text-textPurple mt-6"
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
                <div className="flex flex-col">
                  <label
                    htmlFor="fullname"
                    className="text-[0.75rem] leading-6 ml-1 font-semibold"
                  >
                    Full Name
                  </label>
                  <InputText placeholder="Full Name" width="15rem" />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="fullname"
                    className="text-[0.75rem] leading-6 ml-1 font-semibold"
                  >
                    Email
                  </label>
                  <InputEmail placeholder="Email" width="15rem" />
                </div>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="fullname"
                    className="text-[0.75rem] leading-6 ml-1 font-semibold"
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
              <header className="flex justify-between items-center text-sm font-semibold">
                <span className="w-1/3">Item Name</span>
                <span className="w-1/3 text-left">Price</span>
                <OutlineButton
                  title="Add Item"
                  padding="0px 7px"
                  textSize="8px"
                  onClick={() => setShowModal(true)}
                />
              </header>
              <ModalAddItem
                showModal={showModal}
                setShowModal={setShowModal}
                addItem={addItem}
              />
              <hr className="mt-2" />
              {itemList.map((it: any) => (
                <div
                  key={it.id}
                  className="flex justify-between items-center text-xs my-3"
                >
                  <span className="w-1/3">{it.item}</span>
                  <span className="w-1/3 text-left">
                    {formatRupiah(it.price)}
                  </span>
                  <span
                    onClick={() => handleDeleteItem(it.id)}
                    className="flex gap-3 items-center cursor-pointer"
                  >
                    Delete <X width="8" stroke="#7743DB" />
                  </span>
                </div>
              ))}
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
                <label
                  htmlFor="type"
                  className="text-[0.75rem] leading-6 ml-1 font-semibold mb-1"
                >
                  Type
                </label>
                <Dropdown
                  options={selectType}
                  value={type}
                  onChange={handleChangeType}
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="fullname"
                  className="text-[0.75rem] leading-6 ml-1 font-semibold"
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
            <OutlineButton
              title="Sign In"
              textSize="10px"
              padding="0.3rem 0.5rem"
            />
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
          <Link href="/booking/invoice">
            <div className="mt-8 flex justify-end">
              <BgButton title="Create Booking Order" width="full" />
            </div>
          </Link>
        </section>
      </div>
    </section>
  )
}

export default ModifyBooking
