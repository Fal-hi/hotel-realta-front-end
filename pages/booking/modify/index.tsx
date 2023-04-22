import { ChevronLeft, Coupon, Plus, Trash, User, X } from "@/components/icons"
import Link from "next/link"
import Logo from "@/assets/image/logo.png"
import Image from "next/image"
import InputText from "@/components/input/InputText"
import InputEmail from "@/components/input/InputEmail"
import BgButton from "@/components/buttons/BgButton"
import formatRupiah from "@/functions/formatRupiah"
import { useState, useEffect } from "react"
import Dropdown from "@/components/select/Dropdown"
import { OutlineButton } from "@/components/buttons/OutlineButton"
import classNames from "classnames"
import { Modal } from "@/components/modal"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import { doRequestGetBookingByQuery } from "@/redux/BOOKING/action/booking"
import { BarLoader } from "react-spinners"
import { format } from "date-fns"
import InputCheckbox from "@/components/input/InputCheckbox"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

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

interface Item {
  id: number
  item: string
  price: number
}

const itemLists: Item[] = [
  {
    id: 1,
    item: "Coca-Cola",
    price: 6500,
  },
  {
    id: 2,
    item: "Coklat Silver Queen",
    price: 17000,
  },
  {
    id: 3,
    item: "Chitato",
    price: 13000,
  },
  {
    id: 4,
    item: "Lays",
    price: 14000,
  },
  {
    id: 5,
    item: "Pepsi",
    price: 7000,
  },
]

const chooseYourCoupons = [
  {
    id: 1,
    name: "Summer Sale",
    price: 20000,
    isChecked: false,
  },
  {
    id: 2,
    name: "Ramadhan",
    price: 40000,
    isChecked: false,
  },
  {
    id: 3,
    name: "New Comer",
    price: 50000,
    isChecked: false,
  },
]

const ModifyBooking = () => {
  const { bookingDetail, status } = useSelector(
    (state: any) => state.bookingReducers
  )
  const router = useRouter()
  const id1 = router.query.hotel
  const id2 = router.query.room

  const dispatch = useDispatch()

  useEffect(() => {
    const payload = {
      idHotel: id1,
      idRooms: id2,
    }
    dispatch(doRequestGetBookingByQuery(payload))
  }, [dispatch, id1, id2])

  useEffect(() => {
    if (status) {
      setLoading(false)
    }
  }, [status])
  const findSubTotal = bookingDetail?.data?.data_rooms.find((bd: any) => {
    return bd
  })
  const subTotal = findSubTotal?.faci_subtotal

  console.log("subTotal", subTotal)
  const finalSubTotal = parseInt(subTotal?.replace(/[^\d\,]+/g, ""))
  console.log("finalSubTotal", finalSubTotal)

  const [type, setType] = useState<string>("")
  const [showModal, setShowModal] = useState<boolean>(false)
  let [loading, setLoading] = useState(false)
  const [showModalCoupon, setShowModalCoupon] = useState(false)
  const [chooseCoupons, setChooseCoupons] = useState(chooseYourCoupons)
  const [selectedCoupon, setSelectedCoupon] = useState<any>(0)
  const [totalPrice, setTotalPrice] = useState(finalSubTotal)
  const [totalPriceItem, setTotalPriceItem] = useState(0)
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [itemList, setItemList] = useState<any>([])
  const [selectedItemPrice, setSelectedItemPrice] = useState<number>(0)
  const [item, setItem] = useState<string>("")
  const [price, setPrice] = useState<string>("")

  const notify = () => toast("Your data has been successfully validated")

  const handleChangeType = (value: string) => {
    setType(value)
  }

  const modalClasses = classNames(
    "fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-gray-900 flex justify-center items-center z-50",
    {
      hidden: !showModal,
    }
  )
  const modalClassesCoupon = classNames(
    "fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-gray-900 flex justify-center items-center z-50",
    {
      hidden: !showModalCoupon,
    }
  )

  const calculateTotalPrice = (items: any[]) => {
    const total = items.reduce((acc, item) => {
      return acc + item.price
    }, 0)
    setTotalPriceItem(total)
    // setTotalPrice(totalPrice + total)
  }

  useEffect(() => {
    calculateTotalPrice(itemList)
  }, [itemList])

  const addItem = (newItem: any) => {
    setItemList(itemList.concat(newItem))
    setTotalPriceItem(itemList.concat(newItem))
  }

  const handleDeleteItem = (id: number) => {
    const deletedItem = itemList.filter((item: any) => item.id !== id)
    setItemList(deletedItem)
    calculateTotalPrice(deletedItem)
    // const deletedItemPrice =
    //   itemList.find((item: any) => item.id === id)?.price || 0
    // setTotalPrice(totalPrice - deletedItemPrice)
  }

  const handleSelectItem = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const itemId = parseInt(event.target.value)
    const selectedItem = itemLists.find(item => item.id === itemId)
    if (selectedItem) {
      setSelectedItem(selectedItem)
    }
    setItem(selectedItem ? selectedItem.item : "")
    setPrice(selectedItem ? selectedItem.price.toString() : "")
  }

  useEffect(() => {
    if (selectedItem) {
      setSelectedItemPrice(selectedItem.price)
    } else {
      setSelectedItemPrice(0)
    }
  }, [selectedItem])

  const ModalAddItem = ({ showModal, setShowModal, addItem }: any) => {
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

    {
      /* <InputText
      placeholder="Item Name"
      value={item}
      onChange={(e: any) => setItem(e.target.value)}
    /> */
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
                  <select
                    onChange={handleSelectItem}
                    value={selectedItem ? selectedItem.id : ""}
                    className="bg-white border-[#D0D5DD] text-[#667085] text-xs px-3 py-2 rounded-md font-normal border-2 focus:outline-none"
                  >
                    <option value="" selected>
                      Choose your item
                    </option>
                    {itemLists.map(item => (
                      <option key={item.id} value={item.id}>
                        {item.item}
                      </option>
                    ))}
                  </select>
                  {item && (
                    <div className="mt-2 text-xs">
                      <span>Selected item: {item}</span>
                    </div>
                  )}
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
                <BgButton
                  title="Add Item"
                  textSize="10px"
                  padding="5px 10px"
                  disabled={!item || !price}
                />
              </div>
            </form>
          </section>
        )}
      </>
    )
  }

  function formatDate(date: string | undefined): string | undefined {
    if (date !== undefined && date !== "") {
      return format(new Date(date), "dd MMMM, yyyy")
    }
    return undefined
  }

  const handleCheckboxChange = (id: number) => {
    const updatedCoupons = chooseYourCoupons.map((cc: any) => {
      if (cc.id === id) {
        cc.isChecked = true
        setSelectedCoupon(cc)
      } else {
        cc.isChecked = false
      }
      return cc
    })
    setChooseCoupons(updatedCoupons)
    const selectedCoupon =
      updatedCoupons.find((cc: any) => cc.isChecked) || null
    setSelectedCoupon(selectedCoupon)
    const selectedCouponPrice = selectedCoupon ? selectedCoupon.price : 0
    const totalPrice = +finalSubTotal - selectedCouponPrice
    setTotalPrice(totalPrice)
    setShowModalCoupon(false)
  }

  return (
    <section className="w-[85vw] mx-auto font-poppins-regular">
      <div className="flex justify-around items-start">
        <section className="w-[51.667%] mt-7">
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
                  <InputText
                    placeholder="Syaifal Illahi"
                    width="15rem"
                    disabled
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="fullname"
                    className="text-[0.75rem] leading-6 ml-1 font-semibold"
                  >
                    Email
                  </label>
                  <InputEmail
                    placeholder="syaifal.illahi@gmail.com"
                    width="15rem"
                    disabled
                  />
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
                  <InputText
                    placeholder="089608234617"
                    width="15rem"
                    disabled
                  />
                </div>
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
                <BgButton
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
                  <span className="w-1/3 text-left -ml-4">
                    {formatRupiah(it.price)}
                  </span>
                  <span
                    onClick={() => handleDeleteItem(it.id)}
                    className="flex gap-3 items-center cursor-pointer mr-5"
                  >
                    <Trash width="15px" stroke="#5B33A8" />
                  </span>
                </div>
              ))}
              <hr className="mb-2" />
              <footer className="flex gap-[14.3rem] items-center text-sm">
                <span className="mr-6 font-semibold">Total</span>
                <span className="font-semibold">
                  {formatRupiah(totalPriceItem)}
                </span>
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
              <footer>
                {/* <span className="mr-6 font-semibold">
                  Your account valid, please continue to book
                </span> */}
                <div className="float-right mt-1">
                  <BgButton
                    title="Validate"
                    padding="0.3rem 0.5rem"
                    textSize="10px"
                    type="submit"
                    onClick={notify}
                  />
                  <ToastContainer />
                </div>
              </footer>
            </div>
          </article>
        </section>
        {/* Card */}
        {loading ? (
          <BarLoader height={5} width={"100vw"} color="#7743DB" />
        ) : (
          <section className="bg-white p-6 shadow w-[34.33%] rounded-md sticky top-28">
            {bookingDetail?.data.data_rooms &&
              bookingDetail?.data.data_rooms?.map(
                (item: any, index: number) => (
                  <>
                    <h1 className="font-semibold text-textPurple mb-4">
                      Syaifal Illahi Order
                    </h1>
                    <hr />
                    <div className="mt-3 flex justify-between items-start">
                      <div>
                        <p className="text-xs mt-1">
                          {formatDate(item.faci_startdate)}{" "}
                          <b className="text-textPurple">to</b> <br />{" "}
                          {formatDate(item.faci_enddate)}
                        </p>
                        <h5 className="text-xs mt-2 font-semibold text-textPurple">
                          1 Room 1 Guest
                        </h5>
                      </div>
                      <div>
                        <span className="text-rose-500 text-xs line-through mr-2">
                          {item.faci_rate_price}
                        </span>
                        <span className="text-xs bg-yellow-300 py-[2px] px-1 rounded">
                          {item.faci_discount}%
                        </span>
                        <h1 className="text-right font-semibold mt-1">
                          {item.faci_subtotal}
                        </h1>
                        <p className="text-xs font-light text-right">
                          Include Tax
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-center items-baseline">
                      <h5 className="font-semibold text-textPurple">
                        {item.faci_name}
                      </h5>
                      <h4
                        className="bg-rose-400 text-white rounded-md ml-auto text-sm px-2 py-1 mt-3 max-w-max cursor-pointer"
                        onClick={() => setShowModalCoupon(true)}
                      >
                        More Offers
                      </h4>
                    </div>
                    {chooseCoupons.map((cc: any) =>
                      cc.isChecked ? (
                        <div
                          key={cc.id}
                          className="relative flex justify-between items-center bg-[#E7F2FF] rounded-md p-6 mt-8"
                        >
                          <div className="absolute top-0 right-0 z-10">
                            <InputCheckbox
                              width="17px"
                              height="17px"
                              checked={cc.isChecked}
                            />
                          </div>
                          <div className="flex gap-4 items-center">
                            <Coupon />
                            <span>{cc.name}</span>
                          </div>
                          <h3>{formatRupiah(cc.price)}</h3>
                        </div>
                      ) : null
                    )}
                    {/* Modal */}
                    {showModalCoupon && (
                      <div
                        className={modalClassesCoupon}
                        onClick={(e: any) => e.stopPropagation()}
                      >
                        <div className="w-[30%] bg-white p-6 rounded-md mt-10">
                          <div className="flex justify-between items-center mb-6">
                            <h1 className="text-xl font-semibold">
                              Available Coupons
                            </h1>
                            <X stroke="#7743DB" width="13" height="13" />
                          </div>
                          {chooseCoupons.map((cc: any) => (
                            <div
                              key={cc.id}
                              className="relative flex justify-between items-center bg-[#E7F2FF] rounded-md p-6 mt-4"
                            >
                              <div className="absolute top-0 right-0 z-10">
                                <InputCheckbox
                                  width="17px"
                                  height="17px"
                                  checked={cc.isChecked}
                                  onChange={() => handleCheckboxChange(cc.id)}
                                  disabled={cc === selectedCoupon}
                                />
                              </div>
                              <div className="flex gap-4 items-center">
                                <Coupon />
                                <span>{cc.name}</span>
                              </div>
                              <h3>{formatRupiah(cc.price)}</h3>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {/* End Modal */}
                    <div className="flex justify-between items-center my-6 text-sm">
                      <span className="font-semibold">Your Saving</span>
                      <span className="bg-yellow-300 py-1 px-2 rounded">
                        -{formatRupiah(selectedCoupon?.price)}
                      </span>
                    </div>
                    {/* <div className="flex justify-between items-center my-4 text-sm">
                      <span className="font-semibold">Total Items</span>
                      <span>{`+${formatRupiah(totalPriceItem)}`}</span>
                    </div> */}
                    <hr />
                    <div className="flex justify-between items-center font-semibold mt-2">
                      <h1>
                        Total Price <span className="text-xs font-light"></span>
                      </h1>
                      <h1>
                        {totalPrice
                          ? formatRupiah(totalPrice)
                          : item.faci_subtotal}
                      </h1>
                    </div>
                    <Link
                      className="font-medium text-white border-bgPrimary bg-bgPrimary border-solid border-2 outline-none focus:outline-none hover:text-white rounded-md hover:bg-bgPrimary py-2 px-4 float-right mt-8 text-xs"
                      href="/booking/invoice"
                    >
                      Create Booking Order
                    </Link>
                  </>
                )
              )}
          </section>
        )}
      </div>
    </section>
  )
}

export default ModifyBooking
