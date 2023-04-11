import React from "react"
import { doRequestGetHotelsById } from "@/redux/HOTELS/action/actionHotels"

import { useDispatch, useSelector } from "react-redux"

import { doRequestGetAddressById } from "@/redux/HOTELS/action/actionAddress"
import { Search, BgPrimary, ThreeDots } from "@/components/icons/index"
import RatingStars from "@/functions/ratingStarsFunction"
import moment from "moment"

import ModalAddFacility from "@/components/hotel/facilities/ModalAddFacility"
import ModalEditFacility from "@/components/hotel/facilities/ModalEditFacility"
import ModalAddPhoto from "@/components/hotel/facilities/ModalAddPhoto"
import Link from "next/link"
import {
  doRequestGetFaci,
  doRequestGetFaciByName,
} from "@/redux/HOTELS/action/actionFacilites"
import { useRouter } from "next/router"

function Facility() {
  const dispatch = useDispatch()

  let { hotels } = useSelector(state => state.hotelsReducers)
  let { address } = useSelector(state => state.addressReducers)
  let { facilities, status, totalPagination, page_size, total, refresh } =
    useSelector(state => state.facilitiesReducers)

  const [showModalAdd, setShowModalAdd] = React.useState(false)
  const [showModalEdit, setShowModalEdit] = React.useState(false)
  const [showModalPhoto, setShowModalPhoto] = React.useState(false)
  const [facilityChoseEdit, setfacilityChoseEdit] = React.useState("")
  const [search, setSearch] = React.useState("")

  const [paginationLocation, setPagination] = React.useState(1)

  const handleSearching = e => {
    const payload = {
      hotel_id: hotel.hotel_id,
      paginationLocation: paginationLocation,
      faciname: e.target.value,
    }

    setSearch(e.target.value)

    dispatch(doRequestGetFaciByName(payload))
    if (search.length == 0) {
      setPagination(1)
    }
  }

  const [hotel, setHotel] = React.useState({})
  const [adrs, setadrs] = React.useState()
  const [options, setOptions] = React.useState(null)
  const menuOptions = React.useRef(null)

  const router = useRouter()

  React.useEffect(() => {
    if (search.length > 0) {
      const payload = {
        hotel_id: hotel.hotel_id,
        paginationLocation: paginationLocation,
        faciname: search,
      }

      dispatch(doRequestGetFaciByName(payload))
    } else {
      const routerId = window.location.pathname
      const id = routerId.split("/").pop()
      id && dispatch(doRequestGetHotelsById(+id))

      const payload = {
        hotel_id: +id,
        paginationLocation,
      }

      id && dispatch(doRequestGetFaci(payload))
    }
  }, [paginationLocation, refresh])

  React.useEffect(() => {
    hotels && setHotel(hotels[0])
  }, [hotels])

  React.useEffect(() => {
    hotel && dispatch(doRequestGetAddressById(hotel.hotel_addr_id))
  }, [hotel])

  React.useEffect(() => {
    address && setadrs(address[0])
  }, [address])

  React.useEffect(() => {
    function handleClickOutsideOptionsMenu(event) {
      if (menuOptions.current && !menuOptions.current.contains(event.target)) {
        setOptions(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutsideOptionsMenu)

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideOptionsMenu)
    }
  }, [menuOptions])

  if (!hotel || !adrs || !hotels) {
    return (
      <div class="h-screen  bg-white">
        <div class="flex justify-center items-center h-full">
          <img
            class="h-16 w-16"
            src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
            alt=""
          />
        </div>
      </div>
    )
  } else {
    return (
      <div className="container px-4 pt-10 ">
        {showModalAdd && <ModalAddFacility setShowModalAdd={setShowModalAdd} />}
        {showModalEdit && (
          <ModalEditFacility
            facilityChoseEdit={facilityChoseEdit}
            setShowModalEdit={setShowModalEdit}
          />
        )}
        {showModalPhoto && (
          <ModalAddPhoto
            facilityChoseEdit={facilityChoseEdit}
            setShowModalPhoto={setShowModalPhoto}
          />
        )}
        <div className="header flex justify-between mb-5">
          <h2>Hotel</h2>
          <h5 className="text-textSecondary">
            Dashboard /{" "}
            <span className="text-primary font-poppins-semibold">
              <Link href={"/hotel"}> Hotel /</Link>
            </span>{" "}
            <span className="text-primary font-poppins-semibold">
              {" "}
              Facility
            </span>
          </h5>
        </div>

        <div className="contain-search-add flex justify-between items-center">
          <div className="search max-w-fit">
            <div className="pt-2 relative mx-auto text-textSecondary">
              <form className="relative flex">
                <button
                  type="button"
                  className="absolute inset-y-0 left-0 flex items-center justify-center px-3"
                  onClick={handleSearching}
                >
                  <Search width="20" color={"text-textSecondary"} />
                </button>
                <input
                  className="border-2 border-gray-300 bg-white h-10 px-3 pl-10 rounded-lg text-sm focus:outline-none flex-grow"
                  type="search"
                  name="search"
                  placeholder="Search"
                  onChange={e => {
                    handleSearching(e)
                  }}
                />
              </form>
            </div>
          </div>
          <div className="add-container">
            <button
              className="bg-bgPrimary text-white px-6 py-2 rounded-lg"
              onClick={() => {
                setShowModalAdd(true)
              }}
            >
              + Add
            </button>
          </div>
        </div>

        <div className="hotel-info-container mt-5 relative flex items-center content-center">
          <BgPrimary width={"100%"} height={"100%"} />
          <div className="hotel-info flex justify-between px-5 absolute top-50 w-full">
            <div className="info-1 w-1/2 flex flex-col justify-center">
              <h1 className="font-semibold text-white text-xl">
                {hotel && hotel.hotel_name}
              </h1>
              <p className="text-white font-thin text-sm">
                {adrs && adrs.full_address}
              </p>
            </div>
            <div className="info-2 flex flex-col justify-center ">
              <p className="text-white font-thin">
                {hotel && hotel.hotel_phonenumber}
              </p>
              <RatingStars
                count={hotel?.length > 0 ? hotel.hotel_rating_star : "0"}
              />
            </div>
          </div>
        </div>
        <div className="info-data mt-5 mb-3">
          <p className="text-textGray">
            Showing 1 to {page_size} of {total ? total : "0"} Result
          </p>
        </div>

        <div className="tabel-container w-full ">
          <table class="table-auto  w-full border-collapse border-x border-slate-200">
            <thead className="bg-bgGray">
              <tr className="border-t border-slate-200 text-textGray text-sm text-start">
                <th className="font-normal px-3 py-5 text-center">No</th>
                <th className="font-normal text-start">Facility Name</th>
                <th className="font-normal text-start">Room</th>
                <th className="font-normal text-start">Max. Vacant</th>
                <th className="font-normal text-start">Start - End Date</th>

                <th className="font-normal text-start">Range Price</th>
                <th className="font-normal text-start">Discount</th>
                <th className="font-normal text-start">Rate Price</th>
                <th className="font-normal text-start">Tax</th>
                <th className="font-normal text-start">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {status != 400 &&
                facilities?.length > 0 &&
                facilities.map(faci => (
                  <tr
                    className={`text-justify text-textSecondary text-sm font-regular border-t border-slate-200 relative ${
                      faci.row_number % 2 == 0 ? "bg-bgPrimary/5" : "bg-inherit"
                    } `}
                    key={faci.faci_id}
                  >
                    <td className=" px-3 py-5 text-center">
                      {faci.row_number}
                    </td>
                    <td>{faci.faci_name}</td>

                    <td>{faci.faci_room_number}</td>
                    <td>{faci.faci_max_number}</td>

                    <td className="text-justify break-words leading-6">
                      <p>{moment(faci.faci_startdate).format("ll")}</p>
                      <p>{moment(faci.faci_enddate).format("ll")}</p>
                    </td>

                    <td className="text-justify break-words tracking-wider leading-6">
                      <p>{faci.faci_low_price}</p>

                      <p>{faci.faci_high_price}</p>
                    </td>
                    <td>{faci.faci_discount}</td>
                    <td className="tracking-wider">{faci.faci_rate_price}</td>
                    <td>{faci.faci_tax_rate}</td>

                    <td className="flex px-3 py-5 justify-start  items-center content-center w-full h-full">
                      <div onClick={() => setOptions(faci.faci_id)}>
                        <ThreeDots />
                      </div>
                    </td>

                    {options == faci.faci_id && (
                      <ul
                        ref={menuOptions}
                        className="menu-options absolute z-10 shadow-lg border w-44 rounded-lg  right-6 top-4 bg-white"
                      >
                        <li
                          className="hover:bg-neutral-100 p-2 px-3 cursor-pointer"
                          onClick={() => {
                            setShowModalEdit(true)
                            setfacilityChoseEdit(faci.faci_id)
                            setOptions(null)
                          }}
                        >
                          edit
                        </li>

                        <li
                          className="hover:bg-neutral-100 p-2 px-3 cursor-pointer"
                          onClick={() => {
                            setShowModalPhoto(true)
                            setfacilityChoseEdit(faci.faci_id)
                            setOptions(null)
                          }}
                        >
                          upload photo
                        </li>
                        <Link href={`pricehistory/${faci.faci_id}`}>
                          <li className="hover:bg-neutral-100 p-2 px-3 cursor-pointer">
                            Price History
                          </li>
                        </Link>
                      </ul>
                    )}
                  </tr>
                ))}
            </tbody>
          </table>
          <div className="flex items-center w-full justify-between border border-slate-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
              <div>
                <nav
                  className="isolate inline-flex -space-x-px rounded-md gap-1 shadow-sm"
                  aria-label="Pagination"
                >
                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={e => {
                      e.preventDefault()
                      paginationLocation > 1
                        ? setPagination(paginationLocation - 1)
                        : ""
                    }}
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>

                  {Array.from({ length: totalPagination }, (_, index) => {
                    const isActive = index + 1 == paginationLocation

                    const className = isActive
                      ? "relative rounded-sm z-10 inline-flex items-center border border-indigo-600 px-4 py-2 text-sm font-semibold text-textPurple focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      : "relative rounded-sm z-10 inline-flex items-center border  px-4 py-2 text-sm font-semibold text-textSecondary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "

                    return (
                      <a
                        key={index}
                        href="#"
                        aria-current="page"
                        className={className}
                        onClick={e => {
                          e.preventDefault()
                          setPagination(index + 1)
                        }}
                      >
                        {index + 1}
                      </a>
                    )
                  })}

                  <a
                    href="#"
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={e => {
                      e.preventDefault()
                      paginationLocation < totalPagination
                        ? setPagination(paginationLocation + 1)
                        : ""
                    }}
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Facility
