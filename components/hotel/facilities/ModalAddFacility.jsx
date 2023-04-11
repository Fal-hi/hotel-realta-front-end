import { doAddFaci } from "@/redux/HOTELS/action/actionFacilites"
import React from "react"
import { useDispatch, useSelector } from "react-redux"

import Datepicker from "react-tailwindcss-datepicker"
import { useRouter } from "next/router"

export default function ModalAdd(props) {
  const router = useRouter()
  const dispatch = useDispatch()

  const [startDate, setStartDate] = React.useState()
  const [endDate, setEndDate] = React.useState()

  let categoryList = [
    { cagro_name: "Room Type", faci_cagro_id: 6 },
    { cagro_name: "Facility", faci_cagro_id: 7 },
    { cagro_name: "Food and Beverage", faci_cagro_id: 8 },
    { cagro_name: "Activities", faci_cagro_id: 9 },
    { cagro_name: "Transportation", faci_cagro_id: 10 },
    { cagro_name: "Business Center", faci_cagro_id: 11 },
    { cagro_name: "Spa and Wellness", faci_cagro_id: 12 },
    { cagro_name: "Meeting Room", faci_cagro_id: 13 },
    { cagro_name: "Wedding Venue", faci_cagro_id: 14 },
    { cagro_name: "Banquet and Catering", faci_cagro_id: 15 },
  ]

  let expoPriceList = ["Low Price", "Rate Price", "High Price"]
  let measureUnitList = ["Beds", "People", "Units"]

  const [dropdown, setDropdown] = React.useState(false)
  const [dropdownExpose, setDropdownExpose] = React.useState(false)
  const [dropdownMeasure, setDropdownMeasure] = React.useState(false)

  const FormRef = React.useRef(null)

  const [selectCategory, setselectCategory] = React.useState(
    categoryList[0].cagro_name
  )
  const [selectExpo, setselectExpo] = React.useState(expoPriceList[1])
  const [selectMeasureUnit, setselectMeasureUnit] = React.useState(
    measureUnitList[1]
  )

  React.useEffect(() => {
    function handleClickOutsideModal(event) {
      if (FormRef.current && !FormRef.current.contains(event.target)) {
        props.setShowModalAdd(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutsideModal)
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal)
    }
  }, [FormRef])

  const [newFacility, setnewFacility] = React.useState({
    faci_name: "",
    faci_description: "",
    faci_max_number: 0,
    faci_measure_unit: "",
    faci_room_number: "",
    faci_startdate: startDate,
    faci_enddate: endDate,
    faci_high_price: "",
    faci_discount: "",
    faci_low_price: "",
    faci_tax_rate: "",
    faci_cagro_id: 6,
    faci_hotel_id: router.query.id,
    faci_expose_price: selectExpo,
  })

  const handleDate = e => {
    if (e.name == "faci_startdate") {
      setStartDate(e.e)
    } else {
      setEndDate(e.e)
    }

    setnewFacility(prev => {
      return {
        ...prev,
        [e.name]: e.e.startDate,
      }
    })
  }

  const handleChangeCategory = e => {
    const categoriId = e.target.getAttribute("faci_cagro_id")
    const categoriname = e.target.getAttribute("cagro_name")

    setselectCategory(categoriname)
    setnewFacility(prev => {
      return {
        ...prev,
        faci_cagro_id: categoriId,
      }
    })
    setDropdown(!dropdown)
  }

  const handleChangeExpo = e => {
    const expo = e.target.getAttribute("faci_expose_price")

    setselectExpo(expo)
    setDropdownExpose(!dropdownExpose)
    setnewFacility(prev => {
      return {
        ...prev,
        faci_expose_price: expo,
      }
    })
  }
  const handleChangeMeasureUnit = e => {
    const measureUnit = e.target.getAttribute("faci_measure_unit")

    setselectMeasureUnit(measureUnit)
    setDropdownMeasure(!dropdownMeasure)
    setnewFacility(prev => {
      return {
        ...prev,
        faci_measure_unit: measureUnit,
      }
    })
  }

  const handleChangenewFacility = e => {
    setnewFacility(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }
  const submitAddFacility = e => {
    e.preventDefault()
    dispatch(doAddFaci(newFacility))
    props.setShowModalAdd(false)
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none">
        <div className="relative mt-28 my-6 mx-auto w-4/6">
          <form onSubmit={submitAddFacility} ref={FormRef}>
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
                <div className="faciname-category flex justify-between gap-3">
                  <div className="faci mb-6 items-center w-full">
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
                      placeholder="Facility Name ..."
                      required
                      name="faci_name"
                      onChange={handleChangenewFacility}
                    />
                  </div>
                  <div className="category mb-6 w-full relative">
                    <label className="block  mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                      Category
                    </label>
                    <button
                      // id="dropdownDefaultButton"
                      onClick={() => setDropdown(!dropdown)}
                      className="text-white gap-6 bg-bgPrimary/90 w-full hover:bg-bgPrimary focus:ring-4 focus:outline-none focus:ring-bgPrimary/30 font-normal rounded-lg text-sm px-4 py-2.5 text-center flex justify-between items-center dark:bg-bgPrimary relative dark:hover:bg-bgPrimary dark:focus:ring-bgPrimary"
                      type="button"
                    >
                      <p>{selectCategory}</p>
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
                      <ul className="shadow-xl w-full text-sm text-gray-700 mt-2 rounded-lg dark:text-gray-200 absolute z-10  ">
                        {categoryList.map(ct => (
                          <li
                            className="bg-purple-100 px-4 py-3 hover:bg-bgPrimary hover:rounded-md hover:text-white   cursor-pointer"
                            faci_cagro_id={ct.faci_cagro_id}
                            cagro_name={ct.cagro_name}
                            onClick={handleChangeCategory}
                          >
                            {ct.cagro_name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="room-vacant-measure-expose flex justify-between gap-3">
                  <div className="room-vacant-measure mb-6 flex gap-3 items-center w-full">
                    <div className="room-number  items-center w-1/2">
                      <label
                        for="faci_room_number"
                        className="w-full mb-2 block text-sm font-semibold text-textPrimary dark:text-white"
                      >
                        Room Number
                      </label>
                      <input
                        type="text"
                        id="faci_room_number"
                        className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Room Number ..."
                        required
                        name="faci_room_number"
                        onChange={handleChangenewFacility}
                      />
                    </div>
                    <div className="Max-Vacant items-center w-1/2">
                      <label
                        for="faci_max_number"
                        className="w-full mb-2 block text-sm font-semibold text-textPrimary dark:text-white"
                      >
                        Max Vacant
                      </label>

                      <input
                        type="text"
                        id="faci_max_number"
                        className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Max Vacant ..."
                        required
                        name="faci_max_number"
                        onChange={handleChangenewFacility}
                      />
                    </div>
                  </div>

                  <div className="measure mb-6 w-full relative">
                    <label className="block  mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                      Measure Unit
                    </label>
                    <button
                      onClick={() => setDropdownMeasure(!dropdownMeasure)}
                      className="text-white gap-6 bg-bgPrimary/90 w-full hover:bg-bgPrimary focus:ring-4 focus:outline-none focus:ring-bgPrimary/30 font-normal rounded-lg text-sm px-4 py-2.5 text-center flex justify-between items-center dark:bg-bgPrimary relative dark:hover:bg-bgPrimary dark:focus:ring-bgPrimary"
                      type="button"
                    >
                      <p>{selectMeasureUnit}</p>
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

                    {dropdownMeasure && (
                      <ul className="shadow-xl w-full text-sm text-gray-700 mt-2 rounded-lg dark:text-gray-200 absolute z-10  ">
                        {measureUnitList.map(measure => (
                          <li
                            className="bg-purple-100 px-4 py-3 hover:bg-bgPrimary hover:rounded-md hover:text-white   cursor-pointer"
                            faci_measure_unit={measure}
                            onClick={handleChangeMeasureUnit}
                          >
                            {measure}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                <div className="low-highprice discount-tax flex justify-between gap-3">
                  <div className="low-high-expose w-1/2 flex  justify-between gap-3">
                    <div className="mb-6 low items-center w-full">
                      <label
                        for="faci_low_price"
                        className="w-full block mb-2 text-sm font-semibold text-textPrimary dark:text-white"
                      >
                        Low Price
                      </label>
                      <input
                        type="text"
                        id="faci_low_price"
                        className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Low Price ..."
                        required
                        name="faci_low_price"
                        onChange={handleChangeCategory}
                      />
                    </div>
                    <div className="mb-6 high items-center w-full">
                      <label
                        for="faci_high_price"
                        className="w-full block mb-2 text-sm font-semibold text-textPrimary dark:text-white"
                      >
                        Max Price
                      </label>
                      <input
                        type="text"
                        id="faci_high_price"
                        className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Hight Price ..."
                        required
                        name="faci_high_price"
                        onChange={handleChangenewFacility}
                      />
                    </div>
                    <div className="expose mb-6 w-full relative">
                      <label className="block w-full  mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                        Expose Price
                      </label>
                      <button
                        onClick={() => setDropdownExpose(!dropdownExpose)}
                        className="text-white gap-6 bg-bgPrimary/90 w-full hover:bg-bgPrimary focus:ring-4 focus:outline-none focus:ring-bgPrimary/30 font-normal rounded-lg text-sm px-4 py-2.5 text-center flex justify-between items-center dark:bg-bgPrimary relative dark:hover:bg-bgPrimary dark:focus:ring-bgPrimary"
                        type="button"
                      >
                        <p>{selectExpo}</p>
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

                      {dropdownExpose && (
                        <ul className="shadow-xl w-full text-sm text-gray-700 mt-2 rounded-lg dark:text-gray-200 absolute z-10  ">
                          {expoPriceList.map(expo => (
                            <li
                              className="bg-purple-100 px-4 py-3 hover:bg-bgPrimary hover:rounded-md hover:text-white   cursor-pointer"
                              faci_expose_price={expo}
                              onClick={handleChangeExpo}
                            >
                              {expo}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="discount-tax w-1/2 disc-tax flex justify-between gap-3">
                    <div className="discount mb-6 items-center w-full">
                      <label
                        for="faci_discount"
                        className="w-1/3 block mb-2 text-sm font-semibold text-textPrimary dark:text-white"
                      >
                        Discount
                      </label>
                      <input
                        type="number"
                        id="faci_discount"
                        className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Discount ..."
                        required
                        name="faci_discount"
                        onChange={handleChangenewFacility}
                      />
                    </div>
                    <div className="tax mb-6 items-center w-full">
                      <label
                        for="faci_tax_rate"
                        className="w-1/3 block mb-2 text-sm font-semibold text-textPrimary dark:text-white"
                      >
                        Tax
                      </label>
                      <input
                        type="number"
                        id="faci_tax_rate"
                        className="bg-gray-50 border border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                        placeholder="Tax ..."
                        required
                        name="faci_tax_rate"
                        onChange={handleChangenewFacility}
                      />
                    </div>
                  </div>
                </div>

                <div className="start-enddate flex justify-between gap-3">
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
                <div className="description w-full mt-5">
                  <div className="mb-6">
                    <label
                      for="faci_description"
                      className="block mb-2 text-sm font-semibold text-textPrimary dark:text-white"
                    >
                      Description
                    </label>
                    <textarea
                      type="text"
                      id="faci_description"
                      className="border w-full placeholder:italic placeholder:text-slate-400 block bg-white h-20 border-slate-300 rounded-lg py-4 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm resize-none "
                      placeholder="description ..."
                      required
                      name="faci_description"
                      onChange={handleChangenewFacility}
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
                  Add Facility
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
