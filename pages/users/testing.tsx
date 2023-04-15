import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Tab } from "@headlessui/react"

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ")
}
import {
  doGetBonusPoint,
  doGetHistoryMember,
} from "@/redux/USERS/action/generalAction"
import { useRouter } from "next/router"
useRouter
export default function TabUser() {
  const routerId = useRouter()
  const { id } = routerId.query
  const dispatch = useDispatch()
  const bonusPoints = useSelector((state: any) => state.bonusPoints)
  const historyMembers = useSelector((state: any) => state.historyMembers)

  useEffect(() => {
    dispatch(doGetBonusPoint(id))
    dispatch(doGetHistoryMember(id))
  }, [dispatch])

  let [categories] = useState({
    "Bonus Points": {
      table: ["Created On", "Bonus Type", "Point"],
      name: "bonusPoint",
      data: bonusPoints,
    },
    "History Member": {
      table: ["Promote Date", "Member Type", "Point", "Status"],
      name: "historyMember",
      data: historyMembers,
    },
  })

  return (
    <div className="w-full px-2 py-6 sm:px-0 shadow-sm">
      <Tab.Group>
        <Tab.List className="flex rounded shadow-md">
          {Object.keys(categories).map(category => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "px-4 py-2 text-sm leading-5 text-gray-600",
                  "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2",
                  selected
                    ? "border-b-2 border-primary text-primary font-bold"
                    : "text-blue-100 hover:bg-primary hover:rounded hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        {Object.values(categories).map(category => (
          <Tab.Panel key={category.name} className="mt-4">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {category.table.map(header => (
                      <th
                        key={header}
                        scope="col"
                        className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {category?.data?.map((item: any, idx: number) => (
                    <tr key={idx}>
                      {Object.values(item).map((value: any, index: number) => (
                        <td
                          key={index}
                          className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Tab.Panel>
        ))}
      </Tab.Group>
    </div>
  )
}
