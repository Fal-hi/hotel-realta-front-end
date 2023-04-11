import React from "react"
// import { doRequestGetHotelsById } from "@/redux/HOTELS/action/actionfaphlites"

import { useDispatch, useSelector } from "react-redux"

import { doRequestGetAddressById } from "@/redux/HOTELS/action/actionAddress"
import { Search, BgPrimary, ThreeDots, Sort } from "@/components/icons/index"
import RatingStars from "@/functions/ratingStarsFunction"
import moment from "moment"

import ModalAddFacility from "@/components/hotel/facilities/ModalAddFacility"
import ModalEditFacility from "@/components/hotel/facilities/ModalEditFacility"
import ModalAddPhoto from "@/components/hotel/facilities/ModalAddPhoto"
import Link from "next/link"
import {
  doRequestGetFaciByOrder,
  doRequestGetFaciHistory,
} from "@/redux/HOTELS/action/actionFacilityPriceHistory"
import { useRouter } from "next/router"

function Index() {
  const dispatch = useDispatch()

  let { facyHistory, status, totalPagination, page_size, total, refresh } =
    useSelector(state => state.facilitiesHistoryReducers)

  const [showModalAdd, setShowModalAdd] = React.useState(false)
  const [showModalEdit, setShowModalEdit] = React.useState(false)
  const [showModalPhoto, setShowModalPhoto] = React.useState(false)
  const [facilityChoseEdit, setfacilityChoseEdit] = React.useState("")
  const [search, setSearch] = React.useState("")

  const [paginationLocation, setPagination] = React.useState(1)
  console.log(facyHistory)

  const handleSearching = e => {
    const payload = {
      hotel_id: hotel.hotel_id,
      paginationLocation: paginationLocation,
      faciname: e.target.value,
    }

    setSearch(e.target.value)

    dispatch(doRequestGetFaciHistory(payload))
    if (search.length == 0) {
      setPagination(1)
    }
  }

  const [facility, setfacility] = React.useState()

  const [options, setOptions] = React.useState(null)
  const menuOptions = React.useRef(null)

  const router = useRouter()
  console.log(facility)

  React.useEffect(() => {
    setfacilityChoseEdit("")

    if (search.length > 0) {
      const payload = {
        faci_id: facility.faci_id,
        paginationLocation: paginationLocation,
        orderby: "ASC",
      }

      dispatch(doRequestGetFaciByOrder(payload))
    } else {
      const routerId = window.location.pathname
      const id = routerId.split("/").pop()
      console.log(id)
      setfacility(id)
      const payload = {
        faci_id: +id,
        paginationLocation,
        orderby: "ASC",
      }

      id && dispatch(doRequestGetFaciByOrder(payload))
    }
  }, [paginationLocation, refresh])

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
            <Link href={`/hotel/facility/${facility}`}>Facility /</Link>
          </span>
          <span className="text-primary font-poppins-semibold">
            {" "}
            Facility Price History
          </span>
        </h5>
      </div>

      <div className="contain-search-add flex justify-between items-center mb-5">
        <div className="search max-w-fit">
          {/* <div className="pt-2 relative mx-auto text-textSecondary">
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
          </div> */}
        </div>
        <div className="add-container">
          {/* <button className="flex gap-3 bg-bgPrimary text-white py-2 px-3 rounded-md">
            <p>Filter</p>
            <Sort fill="#fff" width="20" height="20" />
          </button> */}
        </div>
      </div>

      <div className="tabel-container w-full ">
        <table class="table-auto  w-full border-collapse border-x border-slate-200">
          <thead className="bg-bgGray">
            <tr className="border-t border-slate-200 text-textGray text-sm text-start">
              <th className="font-normal px-3 py-5 text-center">No</th>

              <th className="font-normal text-start">Start - End Date</th>

              <th className="font-normal text-start">Range Price</th>
              <th className="font-normal text-start">Discount</th>
              <th className="font-normal text-start">Rate Price</th>
              <th className="font-normal text-start">Tax</th>
              <th className="font-normal text-start">Created</th>
            </tr>
          </thead>
          <tbody>
            {status != 400 &&
              facyHistory?.length > 0 &&
              facyHistory.map(faph => (
                <tr
                  className={`text-justify text-textSecondary text-sm font-regular border-t border-slate-200 relative ${
                    faph.row_number % 2 == 0 ? "bg-bgPrimary/5" : "bg-inherit"
                  } `}
                  key={faph.faph_id}
                >
                  <td className=" px-3 py-5 text-center">{faph.row_number}</td>

                  <td className="text-justify break-words leading-6">
                    <p>{moment(faph.faph_startdate).format("LL")}</p>
                    <p>{moment(faph.faph_enddate).format("LL")}</p>
                  </td>

                  <td className="text-justify break-words tracking-wider leading-6">
                    <p>{faph.faph_low_price}</p>

                    <p>{faph.faph_high_price}</p>
                  </td>
                  <td>{faph.faph_discount}</td>
                  <td className="tracking-wider">{faph.faph_rate_price}</td>
                  <td>{faph.faph_tax_rate}</td>
                  <td>{moment(faph.faph_modified_date).format("LL")}</td>

                  {options == faph.faph_id && (
                    <ul
                      ref={menuOptions}
                      className="menu-options absolute z-10 shadow-lg border w-44 rounded-lg  right-6 top-4 bg-white"
                    >
                      <li
                        className="hover:bg-neutral-100 p-2 px-3 cursor-pointer"
                        onClick={() => {
                          setShowModalEdit(true)
                          setfacilityChoseEdit(faph.faph_id)
                        }}
                      >
                        edit
                      </li>

                      <li
                        className="hover:bg-neutral-100 p-2 px-3 cursor-pointer"
                        onClick={() => {
                          setShowModalPhoto(true)
                          setfacilityChoseEdit(faph.faph_id)
                        }}
                      >
                        upload photo
                      </li>
                      <Link href={`pricehistory/${faph.faph_id}`}>
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

    // <div className="div">tes</div>
  )
}
// }

export default Index
