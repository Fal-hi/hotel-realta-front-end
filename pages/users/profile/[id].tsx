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

export default function Profile({ userData }: any) {
  const dispatch = useDispatch()
  const routerId = useRouter()
  // const bonusPoints = useSelector((state: any) => state.bonusPoints)
  // const historyMembers = useSelector((state: any) => state.historyMembers)

  const { users, usersBonusPoints, usersHistoryMember } = useSelector(
    (state: any) => state.generalReducers
  )

  const [isEdit, setIsEdit] = useState({
    status: false,
    id: 0,
  })

  console.log("usersHistoryMember", usersHistoryMember)
  const [isPassword, setIsPassword] = useState({
    status: false,
    id: 0,
  })
  const { id } = routerId.query
  console.log(id)
  useEffect(() => {
    dispatch(doGetUsers(id))
    dispatch(doGetBonusPoint(id))
    dispatch(doGetHistoryMember(id))
  }, [])

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
  console.log("usersBonusPoints", usersBonusPoints.data)
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
        <section className="relative general shadow-md overflow-auto">
          <div className="p-8">
            <div className="hotel-info-container mt-5 relative flex items-center content-center">
              <BgPrimary width={"100%"} height={"100%"} />
              <div className="hotel-info flex justify-between px-5 absolute top-50 w-full">
                <div className="info-1 w-1/2 flex flex-col justify-center">
                  <h1 className="font-poppins-bold text-white text-sm">
                    Muhammad Ikrar Ilham
                  </h1>
                </div>
                <div className="info-2 flex flex-col mr-10 justify-center text-sm font-poppins-bold">
                  <p className="text-white font-thin">Gold Member</p>
                  <p className="text-white font-thin">Travel Agency</p>
                </div>
                <div className="info-2 flex flex-col justify-center text-sm font-poppins-bold ">
                  <p className="text-white font-thin">kontak123@gmail.com</p>
                  <p className="text-white font-thin">phone number</p>
                </div>
              </div>
            </div>
            <div>
              {/* <TableUser
                bonusPoints={usersBonusPoints}
                historyMembers={usersHistoryMember}
              /> */}
            </div>
            {/* 
            <div className="grid grid-cols-2 md:grid-cols-4 col-span-3 justify-between gap-2 mt-32 md:mt-0">
              <div className="absolute bottom-0 right-0 flex gap-4 items-end justify-end">
                <Button
                  label="Edit Profile"
                  size="small"
                  type="main"
                  variant="danger-secondary"
                  // onClick={() =>
                  //   setIsEdit(prev => {
                  //     return { ...prev, status: true, id: user_id }
                  //   })
                  // }
                />

                <Button
                  label="Edit Password"
                  size="small"
                  type="main"
                  variant="variant"
                  // onClick={() =>
                  //   setIsPassword(prev => {
                  //     return { ...prev, status: true, id: user_id }
                  //   })
                  // }
                />
              </div>
            </div> */}
          </div>
        </section>
        <div className="grid grid-cols-2 md:grid-cols-4 col-span-3 justify-between gap-2 mt-32 md:mt-6 py-4 ml-6">
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={() => editOpen(id)}
          >
            Edit
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={() => editOpenC(id)}
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
          <TableUser
            bonusPoints={usersBonusPoints?.data}
            historyMembers={usersHistoryMember}
          />
        </div>
      </section>

      <ModalEdit
        isEdit={isEdit}
        closeModal={() =>
          setIsEdit(prev => {
            return { ...prev, status: false }
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
