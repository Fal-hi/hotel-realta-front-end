import React, { useRef, useState } from "react"
import Typography from "../Typography"
import variants from "../Typography/textcss"
import Upload from "../icons/Upload"
import Image from "next/image"
import Cross from "../icons/Cross"

const FormEmployee = () => {
  const [fileName, setFileName] = useState(null)
  const fileInputRef: any = useRef()

  const handleDrop = (event: any) => {
    event.preventDefault()
    event.stopPropagation()

    const file = event.dataTransfer.files[0]

    console.log(file)
    const fileInput: any = fileInputRef.current
    fileInput.files = event.dataTransfer.files

    setFileName(file)
  }

  const handleFileSelect = (event: any) => {
    const file = event.target.files[0]

    setFileName(file)
  }

  return (
    <div className="px-4 py-5">
      <div className="flex pb-2">
        <Typography variant={variants.lgbold}>General</Typography>
      </div>
      <div className="flex">
        <div className=" flex w-10/12">
          <div className="w-6/12 px-2">
            <label>National ID</label>
            <input
              type="text"
              className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
            />
          </div>
          <div className="w-6/12 px-2">
            <label>Full Name</label>
            <input
              type="text"
              className="border rounded-md p-1.5 block w-full mb-3 bg-[#F9FAFB] focus:border-[#DADADA] focus:outline-none"
            />
          </div>
        </div>
        <div className="w-2/12">
          <div
            className="relative flex p-6 mt-6 justify-center items-center text-center border-dashed border-bgPrimary border-2"
            onDrop={handleDrop}
            onDragOver={event => {
              event.preventDefault()
              event.stopPropagation()

              const file = event.dataTransfer.files[0]
            }}
          >
            <div className="justify-center items-center text-center ">
              {fileName ? (
                <>
                  <div
                    onClick={() => {
                      setFileName(null)
                    }}
                    className="absolute p-1 right-2 top-2 bg-[#F5F5FF] hover:bg-[#f8aeae] rounded cursor-pointer"
                  >
                    <Cross />
                  </div>
                  <Image
                    src={URL.createObjectURL(fileName)}
                    alt="image"
                    width={1000}
                    height={1000}
                  />
                </>
              ) : (
                <>
                  <div className="mb-3">
                    <Upload className="flex justify-center text-center pb-2" />
                    {"Drag and drop files"}
                  </div>
                </>
              )}
              <div className={`${fileName ? "hidden" : ""}`}>
                <label
                  htmlFor="fileInput"
                  className="rounded-md bg-bgPrimary mt-2 p-1 text-bgGray cursor-pointer"
                >
                  Browse
                </label>
                <input
                  type="file"
                  id="fileInput"
                  name="image"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormEmployee
