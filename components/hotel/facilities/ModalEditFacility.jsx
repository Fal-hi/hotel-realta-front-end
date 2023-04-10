import {
  doRequestGetAddress,
  doRequestGetAddressById,
} from "@/redux/HOTELS/action/actionAddress"
import { doUpdateHotels } from "@/redux/HOTELS/action/actionHotels"
import React from "react"
import { useDispatch, useSelector } from "react-redux"

export default function ModalAdd(props) {
  const dispatch = useDispatch()
  let { address, refresh } = useSelector(state => state.addressReducers)

  let { hotels } = useSelector(state => state.hotelsReducers)

  const [dropdown, setDropdown] = React.useState(false)
  const [showAddress, setShowAddress] = React.useState(false)
  const searchInputRef = React.useRef(null)
  const textSearchRef = React.useRef(null)
  const FormRef = React.useRef(null)

  const [addressInput, setAddressInput] = React.useState("")

  const [newHotel, setNewHotel] = React.useState({
    hotel_name: "",
    hotel_description: "",
    hotel_phonenumber: "",
    hotel_addr_id: "",
    status: "active",
    reason: "",
  })

  React.useEffect(() => {
    function handleClickOutsideModal(event) {
      if (FormRef.current && !FormRef.current.contains(event.target)) {
        props.setShowModalEdit(false)
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
  }, [searchInputRef, FormRef, props])

  React.useEffect(() => {
    const hotel = hotels.filter(htl => htl.hotel_id == props.hotelChoseEdit)[0]
    dispatch(doRequestGetAddressById(hotel.hotel_addr_id))
    setNewHotel(hotel.hotel_addr_id)
    setNewHotel(hotel)

    setAddressInput(address[0]?.full_address)
  }, [refresh])

  React.useState(() => {}, [address])

  const search = e => {
    dispatch(doRequestGetAddress(e.target.value))
  }

  const handleChangeNewHotel = e => {
    setNewHotel(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const sumitEditHotel = e => {
    e.preventDefault()
    const payload = {
      id: newHotel.hotel_id,
      data: newHotel,
    }
    dispatch(doUpdateHotels(payload))
    props.setShowModalEdit(false)
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none">
        <div className="relative  my-6 mx-auto w-4/6">
          <form onSubmit={sumitEditHotel} ref={FormRef}>
            {/*content*/}
            <div
              className={`border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}
            >
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-xl font-bold">Edit Hotel</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModalEdit(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <div className="mb-6 flex items-center">
                  <label
                    for="hotel_name"
                    className="block text-sm font-semibold w-1/6 text-textPrimary dark:text-white"
                  >
                    Hotel Name
                  </label>
                  <input
                    type="text"
                    id="hotel_name"
                    className="bg-gray-50 border focus:bg-white border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-bgPrimary dark:focus:border-bgPrimary  focus:outline-none focus:border-bgPrimary  focus:ring-bgPrimary  focus:ring-1"
                    placeholder="Nama Hotel..."
                    required
                    name="hotel_name"
                    value={newHotel.hotel_name}
                    onChange={handleChangeNewHotel}
                  />
                </div>

                <div className="mb-6 flex items-center">
                  <label
                    for="hotel_phonenumber"
                    className="block font-semibold  text-sm  w-1/6 text-textPrimary dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="hotel_phonenumber"
                    className="bg-gray-50 border focus:bg-white placeholder:italic placeholder:text-slate-400 border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-bgPrimary  dark:focus:border-bgPrimary  focus:outline-none focus:border-bgPrimary  focus:ring-bgPrimary  focus:ring-1"
                    required
                    placeholder="+62..."
                    name="hotel_phonenumber"
                    value={newHotel.hotel_phonenumber}
                    onChange={handleChangeNewHotel}
                  />
                </div>

                <div className="mb-6">
                  <div className="primary flex items-center">
                    <label
                      for="hotel_addr_id"
                      className="block text-sm font-semibold w-1/6 text-textPrimary dark:text-white"
                    >
                      Address
                    </label>

                    <textarea
                      className="h-12  px-3 shadow-sm focus:bg-white sm:text-sm resize-none bg-gray-50 border placeholder:italic placeholder:text-slate-400 border-gray-300 text-textPrimary text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-bgPrimary  dark:focus:border-bgPrimary  focus:outline-none focus:border-bgPrimary  focus:ring-bgPrimary  focus:ring-1"
                      value={addressInput}
                      ref={searchInputRef}
                      name="hotel_addr_id"
                      onChange={e => {
                        search(e)
                        setShowAddress(true)
                        setAddressInput(e.target.value)
                      }}
                      placeholder="address ..."
                      id="hotel_addr_id"
                      cols="30"
                      rows="3"
                    ></textarea>
                  </div>

                  {showAddress && address?.length > 0 && (
                    <>
                      <div className="flex items-center">
                        <div className="space w-1/6"></div>
                        <ul
                          ref={textSearchRef}
                          className="list mt-3 bg-white text-textPrimary rounded-md border w-full"
                        >
                          {address.map(add => (
                            <li
                              className="py-2 px-5 hover:bg-bgPrimary/10 cursor-pointer"
                              onClick={e => {
                                setNewHotel(prev => {
                                  return {
                                    ...prev,
                                    hotel_addr_id: add.addr_id,
                                  }
                                })
                                setAddressInput(add.full_address)
                                setShowAddress(false)
                              }}
                            >
                              {add.full_address}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    for="hotel_description"
                    className="block mb-2 text-sm font-semibold text-textPrimary dark:text-white"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    value={newHotel.hotel_description}
                    id="hotel_description"
                    className="border focus:bg-white w-full placeholder:italic placeholder:text-slate-400 block bg-gray-50 h-28 border-slate-300 rounded-lg py-4 px-3 shadow-sm focus:outline-none focus:border-bgPrimary  focus:ring-bgPrimary  focus:ring-1 sm:text-sm resize-none "
                    placeholder="description..."
                    required
                    name="hotel_description"
                    onChange={handleChangeNewHotel}
                  />
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-normal uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => props.setShowModalEdit(false)}
                >
                  Close
                </button>
                <button
                  for="submit"
                  type="submit"
                  className="  bg-bgPrimary/80  px-5 py-3  hover:bg-bgPrimary text-white active:bg-emerald-600 font-normal rounded-xl  uppercase text-sm shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                >
                  Save Changes
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
