import { useRouter } from "next/router"
import React from "react"
import { CiSearch } from "react-icons/ci"
import { useDispatch, useSelector } from "react-redux"
import { doRequestGetHotels } from "../../redux/HOTELS/action/actionHotels"
import { Search, Trash, Pencil } from "@/components/icons/index"

export default function Hotel() {
  let { hotels, message } = useSelector(state => state.hotelsReducers)
  const dispatch = useDispatch()
  const router = useRouter()
  const cssProps = {
    enableBackground: "new 0 0 56.966 56.966",
  }

  React.useEffect(() => {
    dispatch(doRequestGetHotels())
  }, [])

  console.log(hotels)

  return (
    <div className="container px-4 pt-10 ">
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
          <div className="pt-2 relative mx-auto text-slate-500">
            <form className="relative flex">
              <button
                type="submit"
                className="absolute inset-y-0 left-0 flex items-center justify-center px-3"
              >
                <Search width="20" />
              </button>
              <input
                className="border-2 border-gray-300 bg-white h-10 px-3 pl-10 rounded-lg text-sm focus:outline-none flex-grow"
                type="search"
                name="search"
                placeholder="Search"
              />
            </form>
          </div>
        </div>
        <div className="add-container">
          <button className="bg-primary text-white px-6 py-2 rounded-lg">
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
            <tr className="border-t border-slate-200 text-textGray">
              <th className="font-normal">No</th>
              <th className="font-normal">Hotel Name</th>
              <th className="font-normal">Rating Star</th>
              <th className="font-normal">Modified Date</th>
              <th className="font-normal">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map(hotel => (
              <tr className="text-center text-textSecondary font-medium border-t border-slate-200">
                <td>1</td>
                <td>{hotel.hotel_name}</td>
                <td>{hotel.hotel_rating_star}</td>
                <td>{hotel.hotel_modified_date}</td>
                <td className="flex justify-center gap-2">
                  <Pencil width="15" /> |
                  <Trash width="15" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div class="flex items-center w-full justify-between border border-slate-200 bg-white px-4 py-3 sm:px-6">
          <div class="flex flex-1 justify-between sm:hidden">
            <a
              href="#"
              class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </a>
            <a
              href="#"
              class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </a>
          </div>
          <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
            <div>
              <nav
                class="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <a
                  href="#"
                  class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  aria-current="page"
                  class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  1
                </a>
                <a
                  href="#"
                  class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  2
                </a>
                <a
                  href="#"
                  class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  3
                </a>
                <span class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                  ...
                </span>
                <a
                  href="#"
                  class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  8
                </a>
                <a
                  href="#"
                  class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  9
                </a>
                <a
                  href="#"
                  class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  10
                </a>
                <a
                  href="#"
                  class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clip-rule="evenodd"
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
