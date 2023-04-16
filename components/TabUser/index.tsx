import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Tab } from "@headlessui/react"
import {
  doGetBonusPoint,
  doGetHistoryMember,
} from "@/redux/USERS/action/generalAction"
import { useDispatch, useSelector } from "react-redux"

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

export default function TabUser({ bonusPoints, historyMembers }: any) {
  const { users, usersBonusPoints, usersHistoryMember, refresh } = useSelector(
    (state: any) => state.generalReducers
  )

  const staticBonusPoints = [
    {
      "Created On": "ASDGGGHHH",
      "Bonus Type": "T",
      "Point": 1,
    },
    {
      "Created On": "ASDGGGHHH",
      "Bonus Type": "T",
      "Point": 1,
    },
    {
      "Created On": "ASDGGGHHH",
      "Bonus Type": "T",
      "Point": 1,
    },
    {
      "Created On": "ASDGGGHHH",
      "Bonus Type": "T",
      "Point": 1,
    },
    {
      "Created On": "ASDGGGHHH",
      "Bonus Type": "T",
      "Point": 1,
    },
  ]

  const dispatch = useDispatch()
  const router = useRouter()
  const [categories, setCategories] = useState({})
  const aid = router.query
  useEffect(() => {
    dispatch(doGetBonusPoint(aid))
    dispatch(doGetHistoryMember(aid))
  }, [dispatch, aid])

  useEffect(() => {
    if (usersBonusPoints && usersHistoryMember) {
      setCategories({
        "Bonus Points": {
          table: ["Created On", "Bonus Type", "Point"],
          name: "bonusPoint",
          data: usersBonusPoints,
        },
        "History Member": {
          table: ["Promote Date", "Member Type", "Point", "Status"],
          name: "historyMember",
          data: usersHistoryMember,
        },
      })
    }
  }, [usersBonusPoints, usersHistoryMember])

  if (!categories || Object.keys(categories).length === 0) {
    return <div>Loading...</div>
  }
  console.log(categories)
  return (
 <div>
      <Tab.Group
      onChange={(index) => {
        console.log('Changed selected tab to:', index)
      }}
    >
      <Tab.List className="flex rounded shadow-md">
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
 </div>
  )
}
