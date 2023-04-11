import {
  doRequestGetAddress,
  doRequestGetAddressById,
} from "@/redux/HOTELS/action/actionAddress"
import { doUpdateHotels } from "@/redux/HOTELS/action/actionHotels"
import React from "react"
import { useDispatch, useSelector } from "react-redux"

export default function ModalSwitchStatus(props) {
  const dispatch = useDispatch()

  let { hotels } = useSelector(state => state.hotelsReducers)

  const [dropdown, setDropdown] = React.useState(false)

  const FormRef = React.useRef(null)

  const [switchStatus, setswitchStatus] = React.useState({
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
        props.setShowModalSwitchStatus(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutsideModal)

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal)
    }
  }, [FormRef, props])

  React.useEffect(() => {
    const hotel = hotels.filter(htl => htl.hotel_id == props.hotelChoseEdit)[0]
    dispatch(doRequestGetAddressById(hotel.hotel_addr_id))

    setswitchStatus(hotel)
  }, [])

  const handleChangeswitchStatus = e => {
    setswitchStatus(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }
  console.log(switchStatus)
  const submitStatusEdit = e => {
    e.preventDefault()
    const payload = {
      id: switchStatus.hotel_id,
      data: switchStatus,
    }
    dispatch(doUpdateHotels(payload))
    props.setShowModalSwitchStatus(false)
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none">
        <div className="relative  my-6 mx-auto w-2/5">
          <form onSubmit={submitStatusEdit} ref={FormRef}>
            {/*content*/}
            <div
              className={`border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none `}
            >
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-lg font-semibold">
                  Switch Status {switchStatus.hotel_name}
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModalSwitchStatus(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <div className="mb-6 overflow-hidden w-full">
                  <label className="block  mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                    Status
                  </label>
                  <button
                    // id="dropdownDefaultButton"
                    onClick={() => setDropdown(!dropdown)}
                    className="text-white gap-6 bg-bgPrimary/90 w-full hover:bg-bgPrimary focus:ring-4 focus:outline-none focus:ring-bgPrimary/30 font-medium rounded-lg text-sm px-4 py-2.5 text-center flex justify-between items-center dark:bg-bgPrimary relative dark:hover:bg-bgPrimary dark:focus:ring-bgPrimary"
                    type="button"
                  >
                    <p>{switchStatus.status}</p>
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
                    <ul className=" w-full text-sm text-gray-700 mt-2 rounded-lg border dark:text-gray-200 ">
                      <li
                        className="bg-white px-4 py-2 hover:bg-bgPrimary/50 hover:text-white  rounded-lg cursor-pointer"
                        onClick={e => {
                          const sts =
                            switchStatus.status == "active"
                              ? "disactive"
                              : "active"

                          setswitchStatus(prev => {
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
                          {switchStatus.status == "active"
                            ? "disactive"
                            : "active"}
                        </a>
                      </li>
                    </ul>
                  )}

                  {switchStatus.status == "disactive" && (
                    <div className="tes w-full mt-3">
                      <label
                        for="reason"
                        className="block  mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                      >
                        Reason
                      </label>{" "}
                      <textarea
                        type="text"
                        value={switchStatus.reason}
                        onChange={e =>
                          setswitchStatus(prev => {
                            return {
                              ...prev,
                              reason: e.target.value,
                            }
                          })
                        }
                        id="reason"
                        className="border w-full placeholder:italic placeholder:text-slate-400 block bg-gray-50 focus:bg-white h-40 border-slate-300 rounded-lg py-4 px-3 shadow-sm focus:outline-none focus:border-bgPrimary  focus:ring-bgPrimary   sm:text-sm resize-none "
                        placeholder="write Reason ..."
                        required
                        name="reason"
                      />
                    </div>
                  )}
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-normal uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => props.setShowModalSwitchStatus(false)}
                >
                  Close
                </button>
                <button
                  for="submit"
                  type="submit"
                  className=" bg-bgPrimary/90  hover:bg-bgPrimary text-white active:bg-emerald-600 font-normal uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
