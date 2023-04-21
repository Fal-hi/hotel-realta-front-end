import React from "react"
import Cross from "../icons/Cross"
import Image from "next/image"
import Upload from "../icons/Upload"

const UploadImage = ({
  handleDrop,
  fileName,
  setFileName,
  handleFileSelect,
}: any) => {
  return (
    <>
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
              onChange={handleFileSelect}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default UploadImage
