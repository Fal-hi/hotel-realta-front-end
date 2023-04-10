import { getWorkOrderDetail } from "@/redux/HR/action/workorder"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const WorkOrderDetail = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { id } = router.query
  const { workorderDetail } = useSelector(
    (state: any) => state.workorderReducers
  )
  const [workorderDetailData, setWorkorderDetailData] = useState({
    createdAt: "",
    status: "",
  })
  console.log("workorderDetail", workorderDetail)
  useEffect(() => {
    if (workorderDetail !== undefined) {
      let dateStr = workorderDetail?.workorderDate
      let dateObj = new Date(dateStr)

      let options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }

      let formattedDate = dateObj.toLocaleDateString("id-ID", options)
      setWorkorderDetailData({
        createdAt: formattedDate,
        status: workorderDetail?.status,
      })
    }
  }, [workorderDetail])

  useEffect(() => {
    dispatch(getWorkOrderDetail(id))
  }, [id])

  return (
    <div>
      <div>Workorder Created At :</div>
      <div>
        <input
          type="text"
          className="inline-flex items-center p-2.5 mx-2 p-r-5  text-sm border  border-gray-400 rounded-md  dark:text-gray-400"
          value={workorderDetailData.createdAt}
          disabled
        />
      </div>
      <div>Status :</div>
      <div>
        <input
          type="text"
          className="inline-flex items-center p-2.5 mx-2 p-r-5  text-sm border  border-gray-400 rounded-md  dark:text-gray-400"
          value={workorderDetailData.status}
          disabled
        />
      </div>
      <div>
        {/* <Table>

        </Table> */}
      </div>
    </div>
  )
}

export default WorkOrderDetail
