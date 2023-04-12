import Table from "@/components/Table"
import { BgPrimary } from "@/components/icons"
import { getWorkOrderDetail } from "@/redux/HR/action/workorder"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

const WorkOrderDetail = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { id } = router.query
  const { workorderDetail, refresh } = useSelector(
    (state: any) => state.workorderReducers
  )
  const [workorderDetailData, setWorkorderDetailData] = useState({
    createdAt: "",
    status: "",
  })
  // console.log("workorderDetail", workorderDetail)
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
  }, [workorderDetail, refresh])

  useEffect(() => {
    dispatch(getWorkOrderDetail(id))
  }, [])

  return (
    <div className="font-poppins-regular">
      <div className="hotel-info-container mt-5 relative flex items-center content-center">
        <BgPrimary width={"100%"} height={"100%"} />
        <div className="hotel-info flex justify-between px-5 absolute top-50 w-full">
          <div className="info-1 w-1/2 flex flex-col justify-center">
            <p className="text-white font-thin text-sm">
              Workorder Created At:
            </p>
            <h1 className="font-semibold text-white text-xl">
              {workorderDetailData.createdAt}
            </h1>
          </div>
          <div className="info-2 flex flex-col justify-center ">
            <p className="text-white font-thin">{workorderDetailData.status}</p>
            {/* <RatingStars
                count={hotel?.length > 0 ? hotel.hotel_rating_star : "0"}
              /> */}
          </div>
        </div>
      </div>
      <div>
        <Table
          cols={[
            {
              title: "Workorder ID",
              render: (data: any) => {
                return <span>{data.id}</span>
              },
            },
            {
              title: "TaskName",
              render: (data: any) => {
                return <span>{data.taskname}</span>
              },
            },
            {
              title: "Notes",
              render: (data: any) => {
                return <span>{data.notes}</span>
              },
            },
            {
              title: "Status",
              render: (data: any) => {
                return <span>{data.status}</span>
              },
            },
            {
              title: "Asign to",
              render: (data: any) => {
                return <span>{data.assignTo}</span>
              },
            },
          ]}
          data={[
            {
              id: 63,
              taskname: "Service Task 1",
              notes: "Cleaning Room 209",
              status: "INPROGRESS",
              assignTo: "guest4",
            },
          ]}
        ></Table>
      </div>
    </div>
  )
}

export default WorkOrderDetail
