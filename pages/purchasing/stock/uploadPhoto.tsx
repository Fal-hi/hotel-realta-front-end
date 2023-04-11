import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import "react-datepicker/dist/react-datepicker.css"
import { useRouter } from "next/router"
import { doAddPhotos } from "@/redux/PURCHASING/action/actionPohe"

export default function UploadPhoto(props: any) {
  const router = useRouter()
  const stockId = router.query.stock_id
  type FormValues = {
    spho_thumbnail_filename: string
    spho_photo_filename: string
    spho_primary: string
    spho_url: FileList[]
    spho_stock_id: string
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()
  const dispatch = useDispatch()

  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null)
  const [previewUrls, setPreviewUrls] = useState<string[]>([])
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setSelectedFiles(files);
      const urls: string[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const url = URL.createObjectURL(file);
        urls.push(url);
      }
      setPreviewUrls(urls);
    }
  };

  const handleRegistration = async (data: FormValues) => {
    const formData = new FormData();
    formData.append("spho_thumbnail_filename", data.spho_thumbnail_filename);
    formData.append("spho_photo_filename", data.spho_photo_filename);
    formData.append("spho_primary", data.spho_primary);
    formData.append("spho_stock_id", data.spho_stock_id);
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("spho_url", selectedFiles[i]);
      }
    }
    dispatch(doAddPhotos(formData));
    console.log(formData);
    props.closeModal();
  };

  // const handleRegistration = async (data: FormValues) => {
  //   const dataForm = {
  //     spho_thumbnail_filename: data.spho_thumbnail_filename,
  //     spho_photo_filename: data.spho_photo_filename,
  //     spho_primary: data.spho_primary,
  //     spho_url: data.spho_url[0],
  //     spho_stock_id: stockId,
  //   }
  //   dispatch(doAddPhotos(dataForm))
  //   console.log(dataForm)
  //   props.closeModal()
  // }

  const handleError = (errors: any) => {}

  const registerOptions = {
    spho_thumbnail_filename: { required: "Thumbnail Filename is required" },
    spho_photo_filename: { required: "Photo Filename is required" },
    spho_primary: { required: "Primary  is required" },
    spho_url: { required: "URL Point is required" },
    spho_stock_id: { required: "Stock ID is required" },
  }

  return (
    <div>
      <div className="px-5">
        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto"
          style={{ marginTop: "1rem" }}>
            <label>Stock ID</label>
            <input
              className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
              type="text"
              value={stockId}
              {...register("spho_stock_id", registerOptions.spho_stock_id)}
            />
            <small className="text-danger">
              {errors?.spho_stock_id && errors.spho_stock_id.message}
            </small>
          </div>

          <div
            className="grid grid-cols-1 gap-4 max-w-xl m-auto"
          >
            <label>Thumbnail FIlename</label>
            <input
              className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
              type="text"
              {...register(
                "spho_thumbnail_filename",
                registerOptions.spho_thumbnail_filename
              )}
            />
            <small className="text-danger">
              {errors?.spho_thumbnail_filename &&
                errors.spho_thumbnail_filename.message}
            </small>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
            <label>Photo Filename</label>
            <input
              className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
              type="text"
              {...register(
                "spho_photo_filename",
                registerOptions.spho_photo_filename
              )}
            />
            <small className="text-danger">
              {errors?.spho_photo_filename &&
                errors.spho_photo_filename.message}
            </small>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
            <label>Primary</label>
            <input
              className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
                            text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
              type="text"
              {...register("spho_primary", registerOptions.spho_primary)}
            />
            <small className="text-danger">
              {errors?.spho_primary && errors.spho_primary.message}
            </small>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-xl m-auto">
            <label>Photo</label>
            <input
              className="inline-flex justify-center rounded-md border-transparent bg-violet-100 px-4 py-2 text-sm font-medium
              text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible::ring-blue-500 focus-visible:ring-offset-2"
              type="file"
              multiple
              {...register("spho_url", registerOptions.spho_url)}
              onChange={handleFileSelect}
            />
            <small className="text-danger">
              {errors?.spho_url && errors.spho_url.message}
            </small>
          </div>

          {previewUrls.map((url, index) => (
            <div key={index} className="inline-block mr-4 mb-4">
              <img src={url} width="100" height="100" alt="" />
            </div>
          ))}

          <div className="flex justify-end items-center mt-4 p-5">
            <button
              type="submit"
              className="flex items-center bg-[#7743DB] hover:bg-[#5f35ac] text-white py-2 px-4 rounded mr-4"
            >
              Submit
            </button>
            <button
              className="flex items-center bg-[#7743DB] hover:bg-[#5f35ac] text-white py-2 px-4 rounded mr-4"
              onClick={props.closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
