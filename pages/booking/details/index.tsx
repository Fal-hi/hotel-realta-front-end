import Image from "next/image"
import Link from "next/link"
import Bedroom1 from "@/assets/image/bedrooms/bedroom1.jpg"
import Bedroom2 from "@/assets/image/bedrooms/bedroom2.jpg"
import Bedroom3 from "@/assets/image/bedrooms/bedroom3.jpg"
import Bedroom4 from "@/assets/image/bedrooms/bedroom4.jpg"
import Bedroom5 from "@/assets/image/bedrooms/bedroom5.jpg"
import Logo from "@/assets/image/logo.png"
import Stars from "@/assets/image/Stars.png"
import { OutlineButton } from "@/components/buttons/OutlineButton"
import BgButton from "@/components/buttons/BgButton"
import InputRange from "@/components/input/InputRange"
import formatRupiah from "@/functions/formatRupiah"
import { ChevronRight, Coupon, Trash, User } from "@/components/icons"
import { Ac, Car, Cart, Coffee, Tv, Wifi } from "@/components/icons"
import { useState, useEffect, useRef } from "react"
import InputCheckbox from "@/components/input/InputCheckbox"
import Star from "@/components/icons/Star"
import classNames from "classnames"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useDispatch, useSelector } from "react-redux"
import { doRequestGetBookingByQuery } from "@/redux/BOOKING/action/booking"
import bookingReducers from "../../../redux/BOOKING/reducer/bookingReducer"
import { BarLoader } from "react-spinners"
import { useRouter } from "next/router"
import { format } from "date-fns"

const chooseRooms = [
  {
    id: 1,
    roomName: "Indonesia Deluxe Double",
    roomMaxVacant: 6,
    roomRatePrice: 710000,
    roomLowPrice: 275000,
    roomImage: Bedroom1,
    isChecked: false,
  },
  {
    id: 2,
    roomName: "Indonesia Standard Double",
    roomMaxVacant: 4,
    roomRatePrice: 400000,
    roomLowPrice: 250000,
    roomImage: Bedroom2,
    isChecked: false,
  },
  {
    id: 3,
    roomName: "Indonesia Suite Family",
    roomMaxVacant: 6,
    roomRatePrice: 550000,
    roomLowPrice: 300000,
    roomImage: Bedroom3,
    isChecked: false,
  },
]

const userComments = [
  {
    id: 1,
    name: "Muhammad Ikrar",
    date: "03 Mar 2023",
    comment:
      "Mantab Djiwa Aak, Jangan putus asa, tetap semangat menjalankan hidup",
  },
  {
    id: 2,
    name: "Muhammad Kevin",
    date: "04 Mar 2023",
    comment: "Mantab Mank, Jangan patah hati, masih banyak cewek yang lain",
  },
  {
    id: 3,
    name: "Muhammad Rajasa",
    date: "05 Mar 2023",
    comment: "Mantab Kang, Hatur nuhun",
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

interface Coupon {
  id: number
  name: string
  price: number
  isChecked: boolean
}

const BookingDetails = () => {
  const router = useRouter()
  let [loading, setLoading] = useState(false)
  const [showAllComments, setShowAllComments] = useState(false)
  const [showModalCoupon, setShowModalCoupon] = useState(false)
  const { bookingDetail, status } = useSelector(
    (state: any) => state.bookingReducers
  )
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

  const numberOfCommentsToShow = 2

  const toggleComments = () => {
    setShowAllComments(!showAllComments)
  }

  const visibleComments = showAllComments
    ? userComments
    : userComments.slice(0, numberOfCommentsToShow)

  const [chooseCoupons, setChooseCoupons] =
    useState<Coupon[]>(chooseYourCoupons)
  const [selectedCoupon, setSelectedCoupon] = useState<any>(0)

  const modalClassesCoupon = classNames(
    "fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-gray-900 flex justify-center items-center",
    {
      hidden: !showModalCoupon,
    }
  )

  const [totalPrice, setTotalPrice] = useState<number>(0)
  const findSubTotal = bookingDetail?.data?.data_rooms.find((bd: any) => {
    return bd
  })

  const subTotal = findSubTotal?.faci_subtotal
  const finalSubTotal = parseInt(subTotal?.replace(/[^\d\,]+/g, ""))
  console.log("finalSubTotal", finalSubTotal)
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
    console.log("totalPrice", totalPrice)
    setTotalPrice(totalPrice)
    setShowModalCoupon(false)
  }

  function formatDate(date: string | undefined): string | undefined {
    if (date !== undefined && date !== "") {
      return format(new Date(date), "dd MMMM, yyyy")
    }
    return undefined
  }

  useEffect(() => {
    // Simpan data ke localStorage
    localStorage.setItem("dataKey", JSON.stringify(findSubTotal))
  }, [findSubTotal])

  const handleSubmit = (event: any) => {
    event.preventDefault()
    router.push("/booking/modify")
  }
  return (
    <>
      {loading ? (
        <BarLoader height={5} width={"100vw"} color="#7743DB" />
      ) : (
        <section className="w-[85vw] mx-auto font-poppins-regular">
          <div className="rounded-md p-4 mt-2 mb-20 text-textPrimary">
            {bookingDetail?.data.data_rooms &&
              bookingDetail?.data.data_rooms?.map(
                (item: any, index: number) => (
                  <>
                    <section key={index} className="flex gap-4 items-start">
                      <figure>
                        <Image
                          width={1000}
                          height={600}
                          src={`http://localhost:5000/hotel/${
                            item.facility_photos.find(
                              (fp: any) => fp.fapho_primary === "1"
                            ).fapho_photo_filename
                          }`}
                          alt={
                            item.facility_photos.find(
                              (fp: any) => fp.fapho_primary === "1"
                            ).fapho_thumbnail_filename
                          }
                          className="rounded-lg w-[700px] h-auto"
                        />
                      </figure>
                      <div className="columns-2">
                        {item.facility_photos.map((fp: any) => {
                          if (fp.fapho_primary !== "1") {
                            return (
                              <figure key={fp.fapho_id} className="mb-4">
                                <Image
                                  width={300}
                                  height={300}
                                  src={`http://localhost:5000/hotel/${fp.fapho_photo_filename}`}
                                  alt={fp.fapho_thumbnail_filename}
                                  className="rounded-lg w-[300px] h-auto"
                                />
                              </figure>
                            )
                          }
                        })}
                      </div>
                    </section>

                    <section className="flex justify-between items-start text-textPrimary mt-8">
                      <article className="w-[51.667%]">
                        <h1 className="font-bold mb-1 text-2xl">
                          {item.hotel.hotel_name}
                        </h1>
                        <h5 className="text-xs">
                          {item.hotel.hotel_description}
                        </h5>
                        <div className="flex gap-2 items-end mt-2 text-textPurple">
                          <p className="text-lg font-semibold border-2 border-textPurple rounded-md py-0 px-3">
                            {item.hotel.hotel_user_reviews[0].hore_rating}
                          </p>
                          <span>Stars</span>
                        </div>
                        <div className="flex gap-2 items-center mt-2 text-xs">
                          <span>
                            {item.hotel.hotel_user_reviews[0].hore_rating}{" "}
                            Ratings
                          </span>
                        </div>
                        <div>
                          <span className="text-xs font-light">
                            Per Room Per Night
                          </span>
                        </div>
                        <p className="text-sm my-8">
                          {item.category_group.cagro_description}
                        </p>
                        <h3 className="font-semibold font-sm mb-2">
                          Hotel Facilities
                        </h3>
                        <div className="flex gap-4 items-center">
                          {item.hotel.facilities_support.map((fs: any) => (
                            <div
                              key={fs.fs_id}
                              className="flex gap-2 items-center font-light text-textPrimary"
                            >
                              <figure>
                                <Image
                                  width={15}
                                  height={15}
                                  src={`http://localhost:5000/hotel/${fs.fs_icon}`}
                                  alt={fs.fs_description}
                                />
                              </figure>
                              <span className="text-xs font-normal">
                                {fs.fs_name}
                              </span>
                            </div>
                          ))}
                        </div>
                        {/* Choose Your Room */}
                        <div className="mt-16">
                          <h1 className="font-bold text-lg mb-12">
                            Choose Your Rooms
                          </h1>
                          <div
                            key={index}
                            className="flex justify-between items-center mb-8"
                          >
                            <div className="flex justify-between bg-white rounded-md shadow w-full">
                              <div className="p-4">
                                <h3 className="font-bold">{item.faci_name}</h3>
                                <p className="text-xs mt-1">
                                  Max Vacant:{" "}
                                  <b className="text-textPurple">
                                    {item.faci_max_number}
                                  </b>
                                </p>
                                <div className="flex gap-4 items-center text-sm mt-6">
                                  <h4 className="font-semibold">
                                    {item.faci_subtotal}
                                  </h4>
                                  <h5 className="text-xs text-rose-500 line-through">
                                    {item.faci_rate_price}
                                  </h5>
                                  <span className="block">
                                    {item.faci_discount}%
                                  </span>
                                </div>
                                <div className="flex gap-4 items-center mt-4">
                                  {item.hotel.facilities_support.map(
                                    (fs: any) => (
                                      <div
                                        key={fs.fs_id}
                                        className="flex gap-2 items-center font-light text-textPrimary"
                                      >
                                        <figure>
                                          <Image
                                            width={15}
                                            height={15}
                                            src={`http://localhost:5000/hotel/${fs.fs_icon}`}
                                            alt={fs.fs_description}
                                          />
                                        </figure>
                                        <span className="text-xs font-normal">
                                          {fs.fs_description}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              </div>
                              <div className="relative">
                                <div className="absolute top-0 right-0 z-30">
                                  <InputCheckbox checked={true} />
                                </div>
                                <figure>
                                  <Image
                                    className="rounded-tr-md rounded-br-md w-[240px] h-auto"
                                    width={240}
                                    height={240}
                                    src={`http://localhost:5000/hotel/${item.facility_photos[4].fapho_photo_filename}`}
                                    alt="Bedrooms"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                          {/* })} */}
                        </div>
                        {/* Rating and Reviews */}
                        <h1 className="mt-12 font-bold text-lg mb-10">
                          Ratings And Reviews
                        </h1>
                        <div className="flex justify-around items-center mb-12">
                          <div className="text-center mr-8">
                            <h1 className="font-medium text-6xl mb-2 text-textPurple">
                              {item.hotel.hotel_rating_final_star}
                            </h1>
                            <p className="font-medium -mb-1">
                              {item.hotel.hotel_review_count} Reviews
                            </p>
                            <span className="font-semibold text-xs text-textPurple">
                              {item.hotel.hotel_rating_status}
                            </span>
                          </div>
                          <div>
                            {Object.keys(
                              item?.hotel?.hotel_review_percentages
                            ).map((key, index) => {
                              const detail =
                                item?.hotel?.hotel_review_percentages[key]
                              return (
                                <div
                                  key={index}
                                  className="flex gap-2 items-center"
                                >
                                  <h1 className="font-semibold text-center w-2">
                                    {key}
                                  </h1>
                                  <Star width="30" />
                                  <div className="flex justify-evenly items-center">
                                    <span className="w-[20rem] h-1 bg-bgPrimary"></span>
                                  </div>
                                  <span className="text-[10px] font-extralight text-sm ml-2">
                                    {detail}
                                  </span>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                        {/* User Comments */}
                        {item.hotel.hotel_user_reviews.map((ur: any) => (
                          <div key={ur.hore_id} className="mb-4">
                            <h4 className="font-semibold">
                              {ur.users.user_full_name},{" "}
                              <span className="font-normal text-sm">
                                {ur.hore_created_on.slice(0, 10)}
                              </span>
                            </h4>
                            <p className="font-extralight text-xs mt-1 mb-2">
                              {ur.hore_user_review}
                            </p>
                            <hr />
                          </div>
                        ))}
                        {item.hotel.hotel_user_reviews.length >
                          numberOfCommentsToShow && (
                          <div
                            className="flex gap-2 items-center mt-4 cursor-pointer"
                            onClick={toggleComments}
                          >
                            <span className="text-textPurple text-xs font-medium">
                              {showAllComments
                                ? "Hide All Reviews"
                                : "See All Reviews"}
                            </span>
                            <ChevronRight width="9" height="9" fill="#7743DB" />
                          </div>
                        )}
                        {/* Hotel Policy */}
                        <h1 className="mt-12 font-bold text-lg mb-4">
                          Hotel Policy
                        </h1>
                        <ul className="text-xs mt-1 list-disc ml-4">
                          <li>
                            {item.category_group.policies[0].poli_description}
                          </li>
                        </ul>
                      </article>
                      <form
                        onSubmit={handleSubmit}
                        className="bg-white p-6 shadow w-[28.33%] rounded-md sticky top-[6rem]"
                      >
                        <div className="flex justify-between items-start">
                          <h1 className="font-semibold text-textPurple mb-2">
                            Room Order Details
                          </h1>
                          <span className="text-[8px] border-2 border-bgPrimary text-textPurple font-semibold py-1 px-3 rounded-sm float-right">
                            {item.faci_memb_name} MEMBER
                          </span>
                        </div>
                        <hr />
                        <div className="mt-2 flex justify-between items-start">
                          <div>
                            <p className="text-xs mt-1">
                              {formatDate(item.faci_startdate)}
                              <b className="text-textPurple"> to</b> <br />
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
                            <h1 className="text-right font-semibold my-1">
                              {item.faci_subtotal}
                            </h1>
                          </div>
                        </div>
                        <hr className="mt-12" />
                        <div className="flex justify-between items-center font-semibold mt-2">
                          <h1>Total Price</h1>
                          <h1>{item.faci_subtotal}</h1>
                        </div>
                        <div className="mt-8 flex justify-end">
                          <Link
                            href={`/booking/modify/?hotel=${item.hotel.hotel_id}&room=${item.faci_id}`}
                            className="font-semibold text-white border-bgPrimary bg-bgPrimary border-solid border-2 outline-none focus:outline-none hover:text-white rounded-md hover:bg-bgPrimary text-xs py-2 px-2 text-right"
                          >
                            Continue to book
                          </Link>
                        </div>
                      </form>
                    </section>
                  </>
                )
              )}
          </div>
        </section>
      )}
    </>
  )
}

export default BookingDetails
