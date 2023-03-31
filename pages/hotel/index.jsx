import { useRouter } from "next/router"
import React from "react"
import { CiSearch } from "react-icons/ci"
import { useDispatch, useSelector } from "react-redux"
import {
  doRequestGetHotels,
  doRequestGetHotelsByName,
} from "../../redux/HOTELS/action/actionHotels"
import { Search, Trash, Pencil } from "@/components/icons/index"
import RatingStars from "@/functions/ratingStarsFunction"
import moment from "moment"
import ModalEditAdd from "../../components/hotel/ModalAdd"
import ModalEditEdit from "../../components/hotel/ModalEdit"

export default function Hotel() {
  const [showModalAdd, setShowModalAdd] = React.useState(false)
  const [showModalEdit, setShowModalEdit] = React.useState(false)
  const [hotelChoseEdit, setHotelChoseEdit] = React.useState("")

  let { hotels, status, totalPagination, refresh } = useSelector(
    state => state.hotelsReducers
  )
  const dispatch = useDispatch()

  const [paginationLocation, setPagination] = React.useState(1)
  // const pagination = Array.from({ length: totalPagination }, (_, index) => {
  //   const isActive = index + 1 == paginationLocation

  //   const className = isActive
  //     ? "relative rounded-sm z-10 inline-flex items-center border border-indigo-600 px-4 py-2 text-sm font-semibold text-textPurple focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  //     : "relative rounded-sm z-10 inline-flex items-center border  px-4 py-2 text-sm font-semibold text-textSecondary focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "

  //   return (
  //     <a
  //       key={index}
  //       href="#"
  //       aria-current="page"
  //       className={className}
  //       onClick={() => setPagination(index + 1)}
  //     >
  //       {index + 1}
  //     </a>
  //   )
  // })

  const handleSearching = e => {
    const payload = {
      paginationLocation: paginationLocation,
      search: e.target.value,
    }

    dispatch(doRequestGetHotelsByName(payload))
  }
  React.useEffect(() => {
    dispatch(doRequestGetHotels(paginationLocation))
  }, [paginationLocation, refresh])

  React.useEffect(() => {}, [refresh])
  console.log(totalPagination)
  return (
    <div className="container px-4 pt-10 ">
      {showModalAdd && <ModalEditAdd setShowModalAdd={setShowModalAdd} />}
      {showModalEdit && (
        <ModalEditEdit
          hotelChoseEdit={hotelChoseEdit}
          setShowModalEdit={setShowModalEdit}
        />
      )}
      <div className="header flex justify-between">
        <h2>Hotel</h2>
        <h5 className="text-textSecondary">
          Dashboard /{" "}
          <span className="text-primary font-poppins-semibold">
            {" "}
            {/* {router.pathname.replace(/^\/+/g, "")} */}
            Hotel
          </span>{" "}
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
      <div className="info-data mt-5 mb-3">
        <p className="text-textGray">Showing 1 to 10 of 10 Result</p>
      </div>

      <div className="tabel-container w-full">
        <table class="table-auto  w-full border-collapse border-x border-slate-200">
          <thead className="bg-bgGray">
            <tr className="border-t border-slate-200 text-textGray ">
              <th className="font-normal p-3">No</th>
              <th className="font-normal">Hotel Name</th>
              <th className="font-normal">Rating Star</th>
              <th className="font-normal">Modified Date</th>
              <th className="font-normal">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {status !== 400 &&
              hotels?.length > 0 &&
              hotels.map(hotel => (
                <tr
                  className="text-center text-textSecondary font-medium border-t border-slate-200"
                  key={hotel.hotel_id}
                >
                  <td className="p-3">{hotel.row_number}</td>
                  <td>{hotel.hotel_name}</td>

                  <td className="flex justify-center">
                    {<RatingStars count={hotel.hotel_rating_star} />}
                  </td>
                  <td>{moment(hotel.hotel_modified_date).format("ll")}</td>

                  <td className="flex p-3 justify-center gap-2 items-center content-center w-full h-full">
                    <div
                      className="pencil cursor-pointer"
                      onClick={() => {
                        setShowModalEdit(true)
                        setHotelChoseEdit(hotel.hotel_id)
                      }}
                    >
                      <Pencil width="15" />{" "}
                    </div>
                    |
                    <Trash width="15" />
                  </td>
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
                      onClick={() => setPagination(index + 1)}
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
