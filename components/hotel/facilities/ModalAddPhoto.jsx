import React from "react"
import { useDispatch, useSelector } from "react-redux"

import Datepicker from "react-tailwindcss-datepicker"
import { useRouter } from "next/router"
import { PlusPhoto, StarIcon, Trash } from "@/components/icons"
import Ceklist from "@/components/icons/Ceklist"
import { doAddFaciPhotos } from "@/redux/HOTELS/action/actionFacility-photos"

export default function ModalAddPhoto(props) {
  const router = useRouter()
  const dispatch = useDispatch()

  const [photo, setPhoto] = React.useState([])
  const [active, setActive] = React.useState("")

  const FormRef = React.useRef(null)
  React.useEffect(() => {
    function handleClickOutsideModal(event) {
      if (FormRef.current && !FormRef.current.contains(event.target)) {
        props.setShowModalPhoto(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutsideModal)
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal)
    }
  }, [FormRef])

  const submitAddFaciPhotos = e => {
    e.preventDefault()
    photo.map(pt => dispatch(doAddFaciPhotos(pt)))

    props.setShowModalPhoto(false)
  }

  const handlePhoto = e => {
    const files = Array.from(e.target.files)
    const newImages = files.map(file => URL.createObjectURL(file))

    files.map((file, index) => {
      if (index < 8) {
        setPhoto(prevImages => {
          return [
            ...prevImages,
            {
              id: photo?.length > 0 ? photo.length + 1 : 1 + index,
              showImage: URL.createObjectURL(file),
              fapho_faci_id: props.facilityChoseEdit,
              fapho_thumbnail_filename: `photo ${
                photo?.length > 0 ? 1 + photo?.length : 1 + index
              }`,
              fapho_photo_filename: file,
              fapho_primary: photo?.length > 0 ? 0 : index == 0 ? 1 : 0,
            },
          ]
        })
      }
    })
  }

  const handleEditPhoto = e => {
    const id = e.target.id
    setPhoto(
      photo.map(pt => {
        if (pt.id == id) {
          return {
            ...pt,
            [e.target.name]: e.target.value,
          }
        } else {
          return pt
        }
      })
    )
  }

  const liRef = React.useRef(null)
  const [widthPhotoContain, setwidthPhotoContain] = React.useState(0)
  React.useEffect(() => {
    if (liRef.current) {
      const width = liRef.current.getBoundingClientRect().width
      setwidthPhotoContain(width)
    }
  }, [photo])

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  outline-none focus:outline-none">
        <div className="relative  my-6 mx-auto w-3/6">
          <form onSubmit={submitAddFaciPhotos} ref={FormRef}>
            {/*content*/}
            <div
              className={`border-0  rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none`}
            >
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-xl font-bold">Upload Photo</h3>

                {/* <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModalAdd(false)}
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button> */}
              </div>
              {/*body*/}
              <div className="relative p-6 flex-auto">
                <div className="photo-contain border-dashed border-2 border-bgPrimary rounded-xl p-3 flex justify-center ">
                  <div class="w-full relative ">
                    {photo?.length > 0 ? (
                      <div className="photo-contain">
                        <ul className="grid grid-cols-4 gap-3 ">
                          {photo.map((pt, index) => {
                            return (
                              <li
                                className="flex flex-col justify-center items-center"
                                ref={liRef}
                              >
                                <div className="relative aspect-ratio-1  cursor-pointer rounded-sm overflow-hidden flex justify-center content-center items-center">
                                  {pt.fapho_primary == 1 && (
                                    <div className="absolute top-2 right-1">
                                      <StarIcon fill="#fff" stroke="#fff" />
                                    </div>
                                  )}
                                  <img
                                    className={`w-full max-w-full object-cover ${
                                      pt.fapho_primary &&
                                      "border-4 border-bgPrimary border-double"
                                    }`}
                                    src={pt.showImage}
                                    style={{ height: widthPhotoContain }}
                                  />
                                  <div className="menu absolute z-10 flex opacity-0 hover:opacity-100 bg-black/50 h-full w-full items-center gap-2 justify-center">
                                    <div
                                      className="delete hover:opacity-70 hover:bg-red-500/80 p-3 rounded-full"
                                      name
                                      onClick={() => {
                                        setPhoto(
                                          photo.filter(ph => ph.id !== pt.id)
                                        )
                                      }}
                                    >
                                      <Trash stroke="#fff" />
                                    </div>
                                    <div
                                      className="star hover:opacity-70 hover:bg-bgPrimary/80 p-3 rounded-full"
                                      onClick={() => {
                                        setPhoto(
                                          photo.map(ph => {
                                            if (ph.id == pt.id) {
                                              return {
                                                ...ph,
                                                fapho_primary: 1,
                                              }
                                            } else {
                                              return {
                                                ...ph,
                                                fapho_primary: 0,
                                              }
                                            }
                                          })
                                        )
                                      }}
                                    >
                                      <StarIcon fill="#fff" />
                                    </div>
                                  </div>
                                </div>

                                <input
                                  type="text"
                                  name="fapho_thumbnail_filename"
                                  id={pt.id}
                                  className="mt-1 mb-3 text-center  border border-none text-textPrimary text-sm rounded-sm  block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder:italic placeholder:text-slate-400 dark:text-white dark:focus:ring-bgPrimary dark:focus:border-bgPrimary focus:outline-none focus:border-bgPrimary focus:ring-bgPrimary focus:ring-1"
                                  value={pt.fapho_thumbnail_filename}
                                  onChange={handleEditPhoto}
                                />
                              </li>
                            )
                          })}
                          {photo?.length < 8 && (
                            <li className="relative aspect-ratio-1 hover:opacity-70 cursor-pointer">
                              <input
                                type="file"
                                id="image"
                                name="file"
                                className="hidden"
                                onChange={handlePhoto}
                                multiple
                              />
                              <label htmlFor="image">
                                <PlusPhoto
                                  stroke="bgGray"
                                  height={widthPhotoContain}
                                />
                              </label>
                            </li>
                          )}
                        </ul>
                      </div>
                    ) : (
                      <div className="relative bg-BgPrimary">
                        <label
                          htmlFor="image"
                          class={`flex justify-center w-full ${
                            photo?.length > 0 ? "h-40" : "h-52"
                          } px-4 transition bg-white  rounded-md appearance-none cursor-pointer focus:outline-none`}
                        >
                          <span class="flex items-center space-x-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="w-6 h-6 text-gray-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              />
                            </svg>
                            <span class="font-medium text-gray-600">
                              Drop files to Attach, or{" "}
                              <span class="text-bgPrimary underline">
                                browse
                              </span>
                            </span>
                          </span>
                        </label>
                        <input
                          type="file"
                          id="image"
                          name="file"
                          className="absolute w-full h-full top-0  opacity-0 cursor-pointer"
                          onChange={handlePhoto}
                          multiple
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-between p-6 border-t border-solid border-slate-200 rounded-b">
                <div className="menu flex items-center content-center pl-4">
                  <p className="text-black/60 py-2 text-sm">*Max 8 photos</p>
                </div>
                <div className="button-close-add justify-end">
                  <button
                    className="text-red-500 background-transparent font-normal uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => props.setShowModalPhoto(false)}
                  >
                    Close
                  </button>
                  <button
                    for="submit"
                    type="submit"
                    className=" bg-bgPrimary/80   hover:bg-bgPrimary text-white active:bg-emerald-600 font-normal rounded-xl uppercase text-sm px-5 py-3  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )
}
