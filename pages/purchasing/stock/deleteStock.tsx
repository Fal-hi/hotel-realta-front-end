import { useDispatch } from "react-redux"
import { doDeleteStock } from "@/redux/PURCHASING/action/actionStock"

export default function DeleteStock(props: any) {
  const dispatch = useDispatch()
  const handleDelete = async (id: any) => {
    dispatch(doDeleteStock(props.isDelete.id))
    props.closeModal()
  }

  return (
    <div>
      <div className="px-5">
        <div>
          <div
            className="grid grid-cols-1 gap-4 max-w-xl m-auto"
            style={{ marginTop: "1rem" }}
          >
            <label>Are you sure to delete this Stock?</label>
          </div>

          <div className="flex justify-end items-center mt-4 p-5">
            <button
              className="flex items-center bg-[#ff0b0b] hover:bg-[#5f35ac] text-white py-2 px-4 rounded mr-4"
              onClick={handleDelete}
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
        </div>
      </div>
    </div>
  )
}
