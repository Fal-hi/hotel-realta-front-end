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

const bedroomImages = [
  {
    id: 1,
    image: Bedroom2,
    alt: "Bedroom2",
  },
  {
    id: 2,
    image: Bedroom3,
    alt: "Bedroom3",
  },
  {
    id: 3,
    image: Bedroom4,
    alt: "Bedroom4",
  },
  {
    id: 4,
    image: Bedroom5,
    alt: "Bedroom5",
  },
]

const hotelFacilities = [
  {
    id: 1,
    icon: Car,
    desc: "Parking",
  },
  {
    id: 2,
    icon: Coffee,
    desc: "Coffee",
  },
  {
    id: 3,
    icon: Cart,
    desc: "Market",
  },
]

const roomFacilities = [
  {
    id: 1,
    icon: Ac,
    desc: "AC",
  },
  {
    id: 2,
    icon: Tv,
    desc: "TV",
  },
  {
    id: 3,
    icon: Wifi,
    desc: "Wifi",
  },
]

const chooseRooms = [
  {
    id: 1,
    roomName: "Indonesia Deluxe Double",
    roomMaxVacant: 6,
    roomRatePrice: 710000,
    roomLowPrice: 275000,
    roomImage: Bedroom1,
  },
  {
    id: 2,
    roomName: "Indonesia Standard Double",
    roomMaxVacant: 4,
    roomRatePrice: 400000,
    roomLowPrice: 250000,
    roomImage: Bedroom2,
  },
  {
    id: 3,
    roomName: "Indonesia Suite Family",
    roomMaxVacant: 6,
    roomRatePrice: 550000,
    roomLowPrice: 300000,
    roomImage: Bedroom3,
  },
]

const rangeStars = [
  {
    id: 1,
    star: 5,
    iPWidthIn: "22rem",
    iPPercent: 80,
  },
  {
    id: 2,
    star: 4,
    iPWidthIn: "15rem",
    iPPercent: 10,
  },
  {
    id: 3,
    star: 3,
    iPWidthIn: "10rem",
    iPPercent: 7,
  },
  {
    id: 4,
    star: 2,
    iPWidthIn: "2rem",
    iPPercent: 3,
  },
  {
    id: 5,
    star: 1,
    iPWidthIn: "0rem",
    iPPercent: 0,
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
    name: "SAFESTAY45",
    price: 100000,
    isChecked: false,
  },
  {
    id: 2,
    name: "SAFESTAY95",
    price: 96000,
    isChecked: false,
  },
  {
    id: 3,
    name: "Ramadhan",
    price: 150000,
    isChecked: false,
  },
  {
    id: 4,
    name: "Idul Fitri",
    price: 180000,
    isChecked: false,
  },
]

interface Coupon {
  id: number
  name: string
  price: number
  isChecked: boolean
}

type RoomGuestProps = {}

type RoomData = {
  id: number
  guestCount: number
}

const BookingDetails = ({ backToHome }: any) => {
  const [showModalDate, setShowModalDate] = useState(false)
  const [showModalCoupon, setShowModalCoupon] = useState(false)
  const [showAllComments, setShowAllComments] = useState(false)
  const [chooseCoupons, setChooseCoupons] =
    useState<Coupon[]>(chooseYourCoupons)
  const [selectedCoupon, setSelectedCoupon] = useState<any>(0)
  const [checkinDate, setCheckinDate] = useState<Date | null>(
    new Date("2023/03/31")
  )
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(
    new Date("2023/04/01")
  )
  const [roomCount, setRoomCount] = useState(1)
  const [totalGuestCount, setTotalGuestCount] = useState("1 Kamar, 1 Tamu")
  const [rooms, setRooms] = useState<RoomData[]>([{ id: 1, guestCount: 1 }])
  const RoomGuestRef = useRef<HTMLDivElement | null>(null)

  // const modalClasses = classNames(
  //   "fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-gray-900 flex justify-center items-center z-50",
  //   {
  //     hidden: !showModal,
  //   }
  // )

  // const handleModalOpen = () => {
  //   setShowModal(true)
  // }

  // const handleCloseOpen = () => {
  //   setShowModal(false)
  // }

  // const handleCheckboxChange = (id: any) => {
  //   const updatedCoupons = chooseCoupons.map((cc: any) => {
  //     if (cc.id === id) {
  //       cc.isChecked = true
  //       setSelectedCoupon(cc)
  //     } else if (
  //       cc.isChecked &&
  //       selectedCoupon &&
  //       cc.id === selectedCoupon.id
  //     )
  //       cc.isChecked = false
  //       setSelectedCoupon(null)
  //     }
  //     return cc
  //   })
  //   setChooseCoupons(updatedCoupons)
  //   setShowModal(false)
  // }

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

    // const selectedCoupon = updatedCoupons.find((cc: any) => cc.isChecked)
    // setSelectedCoupon(selectedCoupon)

    // const totalPriceAfterDiscount = selectedCoupon
    //   ? totalPrice - selectedCoupon.price
    //   : totalPrice

    // setTotalPrice(totalPriceAfterDiscount)
    // setChooseCoupons(updatedCoupons)
    setShowModalCoupon(false)
  }

  const numberOfCommentsToShow = 2

  const toggleComments = () => {
    setShowAllComments(!showAllComments)
  }

  const visibleComments = showAllComments
    ? userComments
    : userComments.slice(0, numberOfCommentsToShow)

  const handleModalOpenDate = () => {
    setShowModalDate(true)
  }

  const handleModalCloseDate = () => {
    setShowModalDate(false)
  }

  // const handleModalOpenCoupon = () => {
  //   setShowModalCoupon(true)
  // }

  // const handleModalCloseCoupon = () => {
  //   setShowModalCoupon(false)
  // }

  const handleGuestCountIncrement = (id: number) => {
    setRooms(prevState =>
      prevState.map(room =>
        room.id === id && room.guestCount < 3
          ? { ...room, guestCount: room.guestCount + 1 }
          : room
      )
    )
  }

  const handleGuestCountDecrement = (id: number) => {
    setRooms(prevState =>
      prevState.map(room =>
        room.id === id && room.guestCount > 1
          ? { ...room, guestCount: room.guestCount - 1 }
          : room
      )
    )
  }

  const handleClickOutside = (event: any) => {
    if (RoomGuestRef.current && !RoomGuestRef.current.contains(event.target)) {
      setShowModalDate(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const getTotalGuestCount = () => {
    let totalGuests = 0
    let totalRooms = 0

    rooms.forEach(room => {
      totalGuests += room.guestCount
      totalRooms++
    })

    return `${totalRooms} Kamar, ${totalGuests} Tamu`
  }

  useEffect(() => {
    const newTotalGuestCount = getTotalGuestCount()
    setTotalGuestCount(newTotalGuestCount)
  }, [rooms])

  const renderRooms = () => {
    return rooms.map(room => (
      <div key={room.id} className="flex justify-between items-center my-4">
        <div>
          <h3 className="text-sm font-semibold">Kamar {room.id}</h3>
        </div>
        <div className="flex gap-4">
          <div className="flex">
            <button
              onClick={() => handleGuestCountDecrement(room.id)}
              className="px-2 font-medium border rounded bg-bgPrimary text-white"
            >
              -
            </button>
            <span className="mx-4 font-semibold">{room.guestCount}</span>
            <button
              onClick={() => handleGuestCountIncrement(room.id)}
              className="px-2 font-medium border rounded bg-bgPrimary text-white"
            >
              +
            </button>
          </div>
          {rooms.length > 1 && (
            <button onClick={() => handleDeleteRoom(room.id)}>
              <Trash width="17" height="17" stroke="#F17674" />
            </button>
          )}
        </div>
      </div>
    ))
  }

  const handleAddRoom = () => {
    setRooms(prevState => [
      ...prevState,
      { id: prevState.length + 1, guestCount: 1 },
    ])
    setRoomCount(prevState => prevState + 1)
  }

  const handleDeleteRoom = (id: number) => {
    setRooms(prevState => prevState.filter(room => room.id !== id))
    setRoomCount(prevState => prevState - 1)
  }

  const modalClassesDate = classNames(
    "fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-gray-900 flex justify-center items-center",
    {
      hidden: !showModalDate,
    }
  )

  const modalClassesCoupon = classNames(
    "fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-gray-900 flex justify-center items-center",
    {
      hidden: !showModalCoupon,
    }
  )

  let discountedPrice: any
  chooseCoupons.forEach((cc: any) => {
    if (cc.isChecked) {
      discountedPrice -= cc.price
    }
  })
  return (
    <section className="w-[85vw] mx-auto font-poppins-regular">
      <>
        <div className="sticky top-0 bg-[#FBFBFB] h-6 z-50"></div>
        <div className="sticky top-6 z-50 flex justify-between items-center bg-white shadow rounded-md px-4 py-4 text-[#1C2434]">
          <figure>
            <Image
              width={220}
              height={100}
              src={Logo}
              alt="Logo Realta"
              className=""
            />
          </figure>
          <div className="flex gap-4 items-center -ml-40">
            <form>
              <input
                type="search"
                name="hotel"
                id="hotel"
                className="px-4 py-2 text-xs text-[#667085] bg-white border-[#8A92A6] border-2 rounded-md outline-none"
                placeholder="Search Hotel"
              />
            </form>
            <div className="flex justify-center items-center text-xs">
              <DatePicker
                selected={checkinDate}
                onChange={date => setCheckinDate(date)}
                selectsStart
                startDate={checkinDate}
                endDate={checkoutDate}
                dateFormat="d MMMM, yyyy"
                className="px-3 py-1 w-32 text-xs text-[#667085] bg-white border-[#8A92A6] border-2 rounded-md outline-none mr-2"
                popperPlacement="bottom-start"
              />
              <DatePicker
                selected={checkoutDate}
                onChange={date => setCheckoutDate(date)}
                selectsEnd
                startDate={checkinDate}
                endDate={checkoutDate}
                minDate={checkinDate}
                dateFormat="d MMMM, yyyy"
                className="px-3 py-1 w-32 text-xs text-[#667085] bg-white border-[#8A92A6] border-2 rounded-md outline-none"
                popperPlacement="bottom-start"
              />
            </div>
            {/* roomguest */}
            <div
              ref={RoomGuestRef}
              className="px-3 py-1 w-34 text-xs text-[#667085] bg-white border-[#8A92A6] border-2 rounded-md"
            >
              <button
                onClick={handleModalOpenDate}
                className="text-xs text-textPrimary"
              >
                {totalGuestCount}
              </button>
              <div
                className={modalClassesDate}
                onClick={(e: any) => e.stopPropagation()}
              >
                <div className="bg-white w-80 p-6 rounded-md">
                  <div className="flex justify-between items-center px-4">
                    <h1 className="text-md font-bold">Room</h1>
                    <h1 className="text-md font-bold">Guest</h1>
                  </div>
                  <hr className="my-2" />
                  {renderRooms()}
                  <hr className="mb-4" />
                  <div className="flex justify-between items-center">
                    <OutlineButton
                      title="Close"
                      textSize="10px"
                      padding="5px 10px"
                      onClick={handleModalCloseDate}
                    />
                    <BgButton
                      title="Add Room"
                      textSize="10px"
                      padding="5px 10px"
                      onClick={handleAddRoom}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* end roomguest */}
            <OutlineButton title="Search" padding="0.3rem" />
          </div>
          <Link href="/" className="flex gap-1 items-center">
            <User width="20" stroke="#7743DB" />
            <span className="text-xs font-semibold text-textPurple mr-2">
              Sign In
            </span>
          </Link>
        </div>
      </>
      <div className="rounded-md p-4 mt-2 mb-20 text-textPrimary">
        <section className="flex gap-4 items-start">
          <figure>
            <Image
              width={600}
              height={600}
              src={Bedroom1}
              alt="Bedroom1"
              className="rounded-lg w-auto h-auto"
            />
          </figure>
          <div className="columns-2">
            {bedroomImages.map((item: any) => (
              <figure key={item.id} className="mb-4">
                <Image
                  width={300}
                  src={item.image}
                  alt={item.alt}
                  className="rounded-lg w-[300px] h-auto"
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="flex justify-between items-start text-textPrimary mt-8">
          <article className="w-[51.667%]">
            <h1 className="font-bold mb-1 text-2xl">Hotel Sentul Bogor</h1>
            <div className="flex gap-2 items-end mt-2">
              <figure>
                <Image
                  className="w-auto h-auto"
                  width={100}
                  height={100}
                  src={Stars}
                  alt="Stars"
                />
              </figure>
              <span className="text-xs">Near Sentul Bogor</span>
            </div>
            <div className="flex gap-2 items-center mt-2 text-xs">
              <span>
                <b>4.2</b> / 5
              </span>
              <span>(300 Ratings)</span>
              <span className="text-uppercase text-textPurple font-bold">
                Good
              </span>
            </div>
            <div>
              <span className="text-xs font-light">Per Room Per Night</span>
            </div>
            <p className="text-sm my-8">
              Terletak sangat dekat dengan restoran terkenal, Bakmi Asoy, OYO
              1948 Apartement Sentul Tower, adalah akomodasi populer yang
              disajikan dengan indah di Bogor. Properti ini, juga memastikan
              Anda dekat dengan pusat perbelanjaan populer dan restoran-restoran
              terkenal di kota. Kota ini memungkinkan Anda untuk rehat sejenak
              dari kota Jakarta yang sibuk untuk menikmati pemandangan terbaik
              Indonesia.
            </p>
            <h3 className="font-semibold font-sm mb-2">Hotel Facilities</h3>
            <div className="flex gap-4 items-center">
              {hotelFacilities.map((hf: any) => (
                <div
                  key={hf.id}
                  className="flex gap-2 items-center font-light text-textPrimary"
                >
                  <span>{<hf.icon width="20" fill="#8A92A6" />}</span>
                  <span className="text-xs font-normal">{hf.desc}</span>
                </div>
              ))}
            </div>
            {/* Choose Your Room */}
            <div className="mt-16">
              <h1 className="font-bold text-lg mb-12">Choose Your Rooms</h1>
              {chooseRooms.map((rm: any) => {
                const discountPercent = Math.round(
                  ((rm.roomRatePrice - rm.roomLowPrice) / rm.roomRatePrice) *
                    100
                )
                return (
                  <div
                    key={rm.id}
                    className="flex justify-between items-center mb-8"
                  >
                    <div className="flex justify-between bg-white rounded-md shadow w-full">
                      <div className="p-4">
                        <h3 className="font-bold">{rm.roomName}</h3>
                        <p className="text-xs mt-1">
                          Max Vacant:{" "}
                          <b className="text-textPurple">{rm.roomMaxVacant}</b>
                        </p>
                        <div className="flex gap-4 items-center text-sm mt-6">
                          <h4 className="font-semibold">
                            {formatRupiah(rm.roomLowPrice)}
                          </h4>
                          <h5 className="text-xs text-rose-500 line-through">
                            {formatRupiah(rm.roomRatePrice)}
                          </h5>
                          <span className="block">{discountPercent}%</span>
                        </div>
                        <div className="flex gap-4 items-center mt-4">
                          {roomFacilities.map((rf: any) => (
                            <div
                              key={rf.id}
                              className="flex gap-2 items-center font-light text-textPrimary"
                            >
                              <span>
                                {<rf.icon width="20" fill="#8A92A6" />}
                              </span>
                              <span className="text-xs font-normal">
                                {rf.desc}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="relative">
                        <div className="absolute top-0 right-0 z-30">
                          <InputCheckbox />
                        </div>
                        <figure>
                          <Image
                            className="rounded-tr-md rounded-br-md w-[240px] h-auto"
                            width={240}
                            src={rm.roomImage}
                            alt="Bedrooms"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            {/* Rating and Reviews */}
            <h1 className="mt-12 font-bold text-lg mb-10">
              Ratings And Reviews
            </h1>
            <div className="flex justify-around items-center mb-12">
              <div className="text-center mr-8">
                <h1 className="font-medium text-5xl mb-2">4.2</h1>
                <p className="font-medium -mb-1">363 Reviews</p>
                <span className="font-extralight text-xs">Good</span>
              </div>
              <div>
                {rangeStars.map((rs: any) => (
                  <div key={rs.id} className="flex gap-2 items-center">
                    <h1 className="font-semibold text-center w-2">{rs.star}</h1>
                    <Star width="30" />
                    <InputRange widthOut="27rem" widthIn={rs.iPWidthIn} />
                    <span className="text-[10px] font-extralight ml-2">
                      {rs.iPPercent}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* User Comments */}
            {visibleComments.map((vc: any) => (
              <div key={vc.id} className="mb-4">
                <h4 className="font-semibold">
                  {vc.name},{" "}
                  <span className="font-normal text-sm">{vc.date}</span>
                </h4>
                <p className="font-extralight text-xs mt-1 mb-2">
                  {vc.comment}
                </p>
                <hr />
              </div>
            ))}
            {userComments.length > numberOfCommentsToShow && (
              <div
                className="flex gap-2 items-center mt-4 cursor-pointer"
                onClick={toggleComments}
              >
                <span className="text-textPurple text-xs font-medium">
                  {showAllComments ? "Hide All Reviews" : "See All Reviews"}
                </span>
                <ChevronRight width="9" height="9" fill="#7743DB" />
              </div>
            )}
            {/* Hotel Policy */}
            <h1 className="mt-12 font-bold text-lg mb-4">Hotel Policy</h1>
            <div className="flex gap-4 items-center">
              <h3>
                Check In : <b>01:30 PM</b>
              </h3>
              <h3>
                Check Out : <b>12:30 PM</b>
              </h3>
            </div>
            <ul className="text-xs mt-1 list-disc ml-4">
              <li>
                As a complimentary benefit your stay is now insured by Chubb
              </li>
              <li>Guests can check in using any Government issued ID proof</li>
              <li>
                As a complimentary benefit, your stay is now insured by Acko.
              </li>
            </ul>
          </article>
          <article className="bg-white p-6 shadow w-[34.33%] rounded-md sticky top-[6rem]">
            <div className="flex justify-between items-start mb-4">
              <h1 className="font-semibold text-textPurple">
                Sign In to see a lower price
              </h1>
              <OutlineButton title="Sign In" padding="0.3rem 0.5rem" />
            </div>
            <hr />
            <div className="mt-3 flex justify-between items-center">
              <div>
                <p className="text-xs mt-1">
                  {checkinDate && checkoutDate ? (
                    <>
                      {checkinDate.toLocaleDateString("id-ID", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                      })}{" "}
                      <b className="text-textPurple">to</b> <br />
                      {checkoutDate.toLocaleDateString("id-ID", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                      })}
                    </>
                  ) : (
                    "Pilih tanggal"
                  )}
                </p>
                <h5 className="text-xs mt-2 font-semibold text-textPurple">
                  {rooms.reduce(
                    (totalGuests, room) => totalGuests + room.guestCount,
                    0
                  )}{" "}
                  Tamu, {rooms.length} Kamar
                </h5>
              </div>
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
              </div>
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
                <div className="w-1/3 bg-white p-6 rounded-md">
                  <h1 className="text-xl font-semibold mb-2">
                    Available Coupons
                  </h1>
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
            <h4
              className="bg-rose-400 text-white rounded-md ml-auto text-sm px-2 py-1 mt-3 max-w-max cursor-pointer"
              onClick={() => setShowModalCoupon(true)}
            >
              More Offers
            </h4>
            <div className="flex justify-between items-center my-8 text-sm">
              <span className="font-semibold">Your Saving</span>
              <span className="bg-yellow-300 py-1 px-2 rounded">
                {formatRupiah(selectedCoupon?.price)}
              </span>
            </div>
            <hr />
            <div className="flex justify-between items-center font-semibold mt-2">
              <h1>Total Price</h1>
              <h1>{formatRupiah(900000)}</h1>
            </div>
            <Link href="/booking/modify">
              <div className="mt-8 flex justify-end">
                <BgButton title="Continue to Book" width="full" />
              </div>
            </Link>
          </article>
        </section>
      </div>
    </section>
  )
}

export default BookingDetails
