import { Tab } from "@headlessui/react"
const userPoints = [
  {
    created_on: "2022-12-31T17:10:55.000Z",
    bonus_Type: "Rating",
    Total_Points: 100,
  },
]

const memberHistory = [
  {
    promote_date: "2022-01-01",
    Type: "Wizard",
    point: "100",
    status: "default",
  },
]

export default function TabUser() {
  return (
    <Tab.Group defaultIndex={0}>
      <Tab.List className="flex rounded shadow-md bg-purple-600 text-white">
        <Tab className="px-4 py-2">History Member</Tab>
        <Tab className="px-4 py-2">Bonus Point</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <table className="w-full table-auto mt-4">
            <thead className="text-left bg-purple-300 text-white">
              <tr>
                <th className="px-4 py-2">Created On</th>
                <th className="px-4 py-2">Bonus Type</th>
                <th className="px-4 py-2">Point</th>
              </tr>
            </thead>
            <tbody>
              {userPoints.map((item: any, index: any) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-purple-100" : "bg-purple-200"
                  } hover:bg-purple-50`}
                >
                  <td className="border px-4 py-2">{item.created_on}</td>
                  <td className="border px-4 py-2">{item.bonus_Type}</td>
                  <td className="border px-4 py-2">{item.Total_Points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Tab.Panel>
        <Tab.Panel>
          <table className="w-full table-auto mt-4">
            <thead className="text-left bg-purple-300 text-white">
              <tr>
                <th className="px-4 py-2">Promote Date</th>
                <th className="px-4 py-2">Member Type</th>
                <th className="px-4 py-2">Point</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {memberHistory.map((item: any, index: any) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? "bg-purple-100" : "bg-purple-200"
                  } hover:bg-purple-50`}
                >
                  <td className="border px-4 py-2">{item.promote_date}</td>
                  <td className="border px-4 py-2">{item.Type}</td>
                  <td className="border px-4 py-2">{item.point}</td>
                  <td className="border px-4 py-2">{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}
