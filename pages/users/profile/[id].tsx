import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Button from "@/components/buttons/Button"
import { useDispatch, useSelector } from "react-redux"
import {
  doGetUsers,
  doGetBonusPoint,
  doGetHistoryMember,
} from "@/redux/USERS/action/generalAction"
import Breadcumb from "@/components/breadcumb"
import PassModalEdit from "@/components/users/PassModalEdit"
import BgPrimary from "@/components/BgPrim"
import TableUser from "@/components/TableUser"
import ModalEdit from "@/components/users/ModalEdit"
import Avatar from "@/assets/image/Frame 1000004115.svg"
import Image from "next/image"
import TabUser from "@/components/TabUser"
export default function Profile({ userData }: any) {
  const dispatch = useDispatch()
  const routerId = useRouter()
  // const bonusPoints = useSelector((state: any) => state.bonusPoints)
  // const historyMembers = useSelector((state: any) => state.historyMembers)

  const { users, usersBonusPoints, usersHistoryMember, refresh } = useSelector(
    (state: any) => state.generalReducers
  )

  const [isEdit, setIsEdit] = useState({
    status: false,
    id: 0,
  })

  console.log("data", users)

  console.log("usersHistoryMember", usersHistoryMember)
  const [isPassword, setIsPassword] = useState({
    status: false,
    id: 0,
  })
  const { id } = routerId.query
  useEffect(() => {
    const url = window.location.href
    const urlArray = url.split("/")

    const id = urlArray[urlArray.length - 1]

    console.log(id)
    dispatch(doGetUsers(id))
    dispatch(doGetBonusPoint(id))
    dispatch(doGetHistoryMember(id))
  }, [refresh])

  const editOpen = (id: any) => {
    setIsEdit(prev => {
      return { ...prev, status: true, id: id }
    })
  }
  const editOpenC = (id: any) => {
    setIsPassword(prev => {
      return { ...prev, status: true, id: id }
    })
  }
  // console.log("usersBonusPoints", usersBonusPoints.data)
  return (
    <div className="w-full shadow-md p-4">
      <p>{userData}</p>
      <div>
        <Breadcumb child={"Home"} parent={"Dashboard"} detail={"Profile"} />
      </div>
      <section className="general">
        <div className="card-header">
          <h1 className="text-2xl text-primary font-poppins-bold">General</h1>
          <hr className="mt-1" />
        </div>

        <p className="font-poppins-regular mt-4">
          The information will be display, so be careful what you share
        </p>
        <section className="general shadow-md overflow-auto">
          <div className="flex justify-between gap-5">
            <div className="bg-slate-50 w-1/4 rounded-xl md:pr-0 mx-auto flex content-center">
              <Image
                src={Avatar}
                alt="Hotel Realta Logo"
                width={300}
                height={100}
                className="rounded-sm w-36 mx-auto object-contain"
              />
            </div>
            <div className="hotel-info-container relative flex items-center content-center h-full mx-auto">
              <BgPrimary width={"888px"} height={"200px"} />
              <div className="hotel-info flex justify-between px-5 absolute top-50 w-full h-full">
                <div className="info-1 w-1/2 flex flex-col justify-center">
                  <h1 className="font-poppins-bold text-white text-sm">
                    {" "}
                    {users.data && users.data.user_full_name}
                  </h1>
                </div>
                <div className="info-2 flex flex-col mr-10 justify-center text-sm font-poppins-bold">
                  <p className="text-white font-thin">
                    {usersHistoryMember?.usme_memb_name}
                  </p>
        
                  <p className="text-white font-thin font-semibold mt-1 text-primary">
                    {users.data && users.data.user_type === "T"
                      ? "Travel Agent"
                      : users.data && users.data.user_type === "C"
                      ? "Corporate"
                      : "Individual"}
                  </p>
                </div>
                {/* <div className="info-2 flex flex-col mr-10 justify-center text-sm font-poppins-bold">
              
                  <p className="text-sm text-gray-400">User Gender</p>
                  <p className="text-base md:text-2xl font-semibold mt-1 text-primary">
                    {userData.uspro_gender === "M" ? "Male" : "Female"}
                  </p>
        
                  <p className="text-white font-thin font-semibold mt-1 text-primary">
                    {users.data && users.data.user_type === "T"
                      ? "Travel Agent"
                      : users.data && users.data.user_type === "C"
                      ? "Corporate"
                      : "Individual"}
                  </p>
                </div> */}
                <div className="info-2 flex flex-col justify-center text-sm font-poppins-bold ">
                  <p className="text-white font-thin">
                    {" "}
                    {users.data && users.data.user_email}
                  </p>
                  <p className="text-white font-thin">
                    {" "}
                    {users.data && users.data.user_phone_number}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-2 md:grid-cols-4 col-span-3 justify-between gap-2 mt-32 md:mt-6 py-4 ml-6">
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={() => editOpen(users?.data?.user_id)}
          >
            Edit
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={() => editOpenC(users?.data?.user_id)}
          >
            Change Password
          </button>
        </div>
      </section>
      <section id="points-member" className="mt-10">
        <div id="security-header">
          <h1 className="text-2xl text-primary font-bold">Points & Member</h1>
          <hr className="mt-1" />
        </div>
        <div className="security-card flex justify-between">
          <TabUser
            bonusPoints={usersBonusPoints}
            historyMembers={usersHistoryMember}
          />
        </div>
      </section>

      <ModalEdit
        isEdit={isEdit}
        closeModal={() =>
          setIsEdit(prev => {
            return { ...prev, status: false, id: 0 }
          })
        }
      />
      <PassModalEdit
        isPassword={isPassword}
        closeModal={() =>
          setIsPassword(prev => {
            return { ...prev, status: false }
          })
        }
      />
    </div>
  )
}
