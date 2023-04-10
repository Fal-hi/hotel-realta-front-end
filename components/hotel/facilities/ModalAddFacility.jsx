import { doRequestGetAddress } from "@/redux/HOTELS/action/actionAddress"
import { doAddHotels } from "@/redux/HOTELS/action/actionHotels"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Calendar } from "../../icons"
import Datepicker from "react-tailwindcss-datepicker"

export default function ModalAdd(props) {
  const dispatch = useDispatch()
  let { address, message, statusResponse } = useSelector(
    state => state.addressReducers
  )

  const [newFacility, setnewFacility] = React.useState({
    faci_name: "",
    faci_description: "",
    faci_max_number: 0,
    faci_measure_unit: "",
    faci_room_number: "",
    faci_startdate: "",
    faci_enddate: "",
    faci_low_price: "",
    faci_high_price: "",
    faci_rate_price: "",
    faci_discount: "",
    faci_tax_rate: "",
    faci_cagro_id: "",
    faci_hotel_id: "",
  })

  const [startDate, setStartDate] = React.useState({
    faci_startdate: new Date(),
  })
  const [endDate, setEndDate] = React.useState({
    faci_enddate: new Date(),
  })

  const handleDate = e => {
    console.log(e)
    console.log("newValue:", e)
    if (e.name == "faci_startdate") {
      setStartDate(e.e)
    } else {
      setEndDate(e.e)
    }
  }

  console.log(startDate)
  console.log(endDate)

  const [dropdown, setDropdown] = React.useState(false)
  const [showAddress, setShowAddress] = React.useState(false)
  const searchInputRef = React.useRef(null)
  const textSearchRef = React.useRef(null)
  const FormRef = React.useRef(null)

  const [addressInput, setAddressInput] = React.useState("")

  const [selectCategory, setselectCategory] = React.useState({
    hotel_name: "",
    hotel_description: "",
    hotel_phonenumber: "",
    hotel_addr_id: "",
    cagro_name: "active",
    reason: "",
  })

  React.useEffect(() => {
    function handleClickOutsideModal(event) {
      if (FormRef.current && !FormRef.current.contains(event.target)) {
        props.setShowModalAdd(false)
      }
    }
    function handleClickOutside(event) {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        textSearchRef.current &&
        !textSearchRef.current.contains(event.target)
      ) {
        setShowAddress(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("mousedown", handleClickOutsideModal)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("mousedown", handleClickOutsideModal)
    }
  }, [searchInputRef, address])

  const search = e => {
    dispatch(doRequestGetAddress(e))
  }

  const handleChangenewFacility = e => {
    setnewFacility(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }
  const submitAddHotel = e => {
    e.preventDefault()
    dispatch(doAddHotels(newHotel))
    props.setShowModalAdd(false)
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none">
        <div className="relative  my-6 mx-auto w-4/6">
          <form onSubmit={submitAddHotel} ref={FormRef}>
            {/*content*/}
            <div
              className={`border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}
            >
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-xl font-bold">Add Facility</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModalAdd(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto ">
                <div className="row-1 faci-category flex justify-between gap-3">
                  <div className="mb-6  items-center w-full">
                    <label
                      for="faci_name"
                      className="w-1/3 block mb-2 text-sm font-semibold text-textPrimary dark:text-white"
                    >
                      Faci Name
                    </label>
                    <input
                      type="text"
                      id="faci_name"
                      className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                      placeholder="Nama faci..."
                      required
                      name="faci_name"
                      onChange={handleChangenewFacility}
                    />
                  </div>

                  <div className="mb-6  w-full relative">
                    <label className="block  mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                      Category
                    </label>
                    <button
                      // id="dropdownDefaultButton"
                      onClick={() => setDropdown(!dropdown)}
                      className="text-white gap-6 bg-bgPrimary/90 w-full hover:bg-bgPrimary focus:ring-4 focus:outline-none focus:ring-bgPrimary/30 font-medium rounded-lg text-sm px-4 py-2.5 text-center flex justify-between items-center dark:bg-bgPrimary relative dark:hover:bg-bgPrimary dark:focus:ring-bgPrimary"
                      type="button"
                    >
                      <p>{selectCategory.cagro_name}</p>
                      <svg
                        className="w-4 h-4 ml-2"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    {dropdown && (
                      <ul className=" w-full text-sm text-gray-700 mt-2 rounded-lg border dark:text-gray-200 absolute">
                        <li
                          className="bg-white px-4 py-2 hover:bg-bgPrimary hover:text-white  rounded-lg cursor-pointer"
                          onClick={e => {
                            const sts =
                              selectCategory.cagro_name == "active"
                                ? "disactive"
                                : "active"

                            setselectCategory(prev => {
                              return {
                                ...prev,
                                cagro_name: sts,
                              }
                            })
                            setDropdown(!dropdown)
                          }}
                        >
                          <a
                            href="#"
                            className="w-full  shadow-sm  dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {selectCategory.cagro_name == "active"
                              ? "disactive"
                              : "active"}
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>

                <div className="row-1 room-vacant-expose flex justify-between gap-3">
                  <div className="mb-6 flex gap-1 items-center w-full">
                    <div className="room-number  items-center w-1/2">
                      <label
                        for="hotel_addr_id"
                        className="w-1/2 mb-2 block text-sm font-semibold text-textPrimary dark:text-white"
                      >
                        Room Number
                      </label>
                      <input
                        type="text"
                        id="faci_name"
                        className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Nama faci..."
                        required
                        name="faci_name"
                        onChange={handleChangenewFacility}
                      />
                    </div>
                    <div className="room-number items-center w-1/2">
                      <label
                        for="hotel_addr_id"
                        className="w-1/2  mb-2  block text-sm font-semibold text-textPrimary dark:text-white"
                      >
                        Max Vacant
                      </label>

                      <input
                        type="text"
                        id="faci_name"
                        className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Nama faci..."
                        required
                        name="faci_name"
                        onChange={handleChangenewFacility}
                      />
                    </div>
                  </div>

                  <div className="mb-6  w-full relative">
                    <label className="block  mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                      Expose Price
                    </label>
                    <button
                      // id="dropdownDefaultButton"
                      onClick={() => setDropdown(!dropdown)}
                      className="text-white gap-6 bg-bgPrimary/90 w-full hover:bg-bgPrimary focus:ring-4 focus:outline-none focus:ring-bgPrimary/30 font-medium rounded-lg text-sm px-4 py-2.5 text-center flex justify-between items-center dark:bg-bgPrimary relative dark:hover:bg-bgPrimary dark:focus:ring-bgPrimary"
                      type="button"
                    >
                      <p>{selectCategory.cagro_name}</p>
                      <svg
                        className="w-4 h-4 ml-2"
                        aria-hidden="true"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </button>

                    {dropdown && (
                      <ul className=" w-full text-sm text-gray-700 mt-2 rounded-lg border dark:text-gray-200 absolute">
                        <li
                          className="bg-white px-4 py-2 hover:bg-bgPrimary hover:text-white  rounded-lg cursor-pointer"
                          onClick={e => {
                            const sts =
                              switchStatus.status == "active"
                                ? "disactive"
                                : "active"

                            setselectCategory(prev => {
                              return {
                                ...prev,
                                status: sts,
                              }
                            })
                            setDropdown(!dropdown)
                          }}
                        >
                          <a
                            href="#"
                            className="w-full  shadow-sm  dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            {setselectCategory.status == "active"
                              ? "disactive"
                              : "active"}
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>

                <div className="flex justify-between gap-3">
                  <div className="row-1 w-1/2 flex low-highprice justify-between gap-3">
                    <div className="mb-6  items-center w-full">
                      <label
                        for="faci_name"
                        className="w-1/3 block mb-2 text-sm font-semibold text-textPrimary dark:text-white"
                      >
                        Low Price
                      </label>
                      <input
                        type="text"
                        id="faci_name"
                        className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Nama faci..."
                        required
                        name="faci_name"
                        onChange={handleChangenewFacility}
                      />
                    </div>
                    <div className="mb-6  items-center w-full">
                      <label
                        for="faci_name"
                        className="w-1/3 block mb-2 text-sm font-semibold text-textPrimary dark:text-white"
                      >
                        Max Price
                      </label>
                      <input
                        type="text"
                        id="faci_name"
                        className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Nama faci..."
                        required
                        name="faci_name"
                        onChange={handleChangenewFacility}
                      />
                    </div>
                  </div>

                  <div className="row-1 w-1/2 disc-tax flex justify-between gap-3">
                    <div className="mb-6  items-center w-full">
                      <label
                        for="faci_name"
                        className="w-1/3 block mb-2 text-sm font-semibold text-textPrimary dark:text-white"
                      >
                        Disc %
                      </label>
                      <input
                        type="text"
                        id="faci_name"
                        className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Nama faci..."
                        required
                        name="faci_name"
                        onChange={handleChangenewFacility}
                      />
                    </div>
                    <div className="mb-6  items-center w-full">
                      <label
                        for="faci_name"
                        className="w-1/3 block mb-2 text-sm font-semibold text-textPrimary dark:text-white"
                      >
                        Tax
                      </label>
                      <input
                        type="text"
                        id="faci_name"
                        className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Nama faci..."
                        required
                        name="faci_name"
                        onChange={handleChangenewFacility}
                      />
                    </div>
                  </div>
                </div>
                <div className="row-1 start-enddate flex justify-between gap-3">
                  <div date-rangepicker class=" items-center w-1/2">
                    <label className="block  mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                      Start Date
                    </label>
                    <Datepicker
                      primaryColor={"violet"}
                      inputId="start-date"
                      inputName="start-date"
                      useRange={false}
                      asSingle={true}
                      value={startDate}
                      displayFormat={"DD/MM/YYYY"}
                      onChange={e => {
                        const payload = {
                          e,
                          name: "faci_startdate",
                        }
                        handleDate(payload)
                      }}
                      inputClassName="font-normal bg-green-100 dark:bg-green-900 dark:placeholder:text-green-100 bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                    />
                  </div>
                  <div date-rangepicker class=" items-center w-1/2">
                    <label className="block  mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                      End Date
                    </label>
                    <Datepicker
                      primaryColor={"violet"}
                      inputId="end-date"
                      inputName="end-date"
                      useRange={false}
                      asSingle={true}
                      value={endDate}
                      displayFormat={"DD/MM/YYYY"}
                      onChange={e => {
                        const payload = {
                          e,
                          name: "faci_enddate",
                        }
                        handleDate(payload)
                      }}
                      inputClassName="font-normal bg-green-100 dark:bg-green-900 dark:placeholder:text-green-100 bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                    />
                  </div>
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-normal uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => props.setShowModalAdd(false)}
                >
                  Close
                </button>
                <button
                  for="submit"
                  type="submit"
                  className=" bg-bgPrimary/80   hover:bg-bgPrimary text-white active:bg-emerald-600 font-normal rounded-xl uppercase text-sm px-5 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Add Hotel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
