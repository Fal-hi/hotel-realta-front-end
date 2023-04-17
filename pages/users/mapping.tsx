// import { useEffect, useState } from "react"
// import { useRouter } from "next/router"
// import { Tab } from "@headlessui/react"
// import {
//   doGetBonusPoint,
//   doGetHistoryMember,
// } from "@/redux/USERS/action/generalAction"
// import { useDispatch, useSelector } from "react-redux"

// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(" ")
// }

// export default function TabUser({ bonusPoints, historyMembers }: any) {
//   const { users, usersBonusPoints, usersHistoryMember, refresh } = useSelector(
//     (state: any) => state.generalReducers
//   )

//   const dispatch = useDispatch()
//   const router = useRouter()
//   const [categories, setCategories] = useState({})
//   const aid = router.query
//   useEffect(() => {
//     dispatch(doGetBonusPoint(aid))
//     dispatch(doGetHistoryMember(aid))
//   }, [dispatch, aid])

//   useEffect(() => {
//     if (usersBonusPoints && usersHistoryMember) {
//       setCategories({
//         "Bonus Points": {
//           table: ["Created On", "Bonus Type", "Point"],
//           name: "bonusPoint",
//           data: usersBonusPoints,
//         },
//         "History Member": {
//           table: ["Promote Date", "Member Type", "Point", "Status"],
//           name: "historyMember",
//           data: usersHistoryMember,
//         },
//       })
//     }
//   }, [usersBonusPoints, usersHistoryMember])

//   if (!categories || Object.keys(categories).length === 0) {
//     return <div>Loading...</div>
//   }
//   console.log(categories)
//   return (
//     <div className="w-full px-2 py-6 sm:px-0 shadow-sm">
//       <Tab.Group>
//         <Tab.List className="flex rounded shadow-md">
//           {Object.keys(categories).map(category => (
//             <Tab
//               key={category}
//               className={({ selected }) =>
//                 classNames(
//                   "px-4 py-2 text-sm leading-5 text-gray-600",
//                   "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2",
//                   selected
//                     ? "border-b-2 border-primary text-primary font-bold"
//                     : "text-blue-100 hover:bg-primary hover:rounded hover:text-white"
//                 )
//               }
//             >
//               {category}
//             </Tab>
//           ))}
//         </Tab.List>
//         <Tab.Panels className="mt-2">
//           {Object.values(categories).map((posts: any, idx: any) => (
//             <Tab.Panel
//               key={idx}
//               className={classNames(
//                 "rounded-xl bg-white pt-4",
//                 "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2"
//               )}
//             >
//               <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                   {Array.isArray(posts.data) &&
//                     posts.data.map((post: any) => (
//                       <tr
//                         key={post.usme_user_id}
//                         className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//                       >
//                         <td className="px-6 py-4">{post?.usme_promote_date}</td>
//                         <td className="px-6 py-4">asd</td>

//                         <td className="px-6 py-4">{post?.usme_memb_name}</td>
//                         <td className="px-6 py-4">{post?.usme_points}</td>
//                         <td className="px-6 py-4">{post?.usme_type}</td>
//                       </tr>
//                     ))}
//                 </thead>

//                 <tbody>
//                   {Array.isArray(posts.data) &&
//                     posts.data.map((post: any) => (
//                       <tr
//                         key={post.id}
//                         className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//                       >
//                         <td className="px-6 py-4">{post.ubpo_created_on}</td>

//                         <td className="px-6 py-4">{post.ubpo_bonus_type}</td>
//                         <td className="px-6 py-4">{post.ubpo_total_points}</td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </Tab.Panel>
//           ))}
//         </Tab.Panels>
//       </Tab.Group>
//     </div>
//   )
// // }
// import { useEffect, useState } from "react"
// import { useRouter } from "next/router"
// import { Tab } from "@headlessui/react"
// import {
//   doGetBonusPoint,
//   doGetHistoryMember,
// } from "@/redux/USERS/action/generalAction"
// import { useDispatch, useSelector } from "react-redux"

// function classNames(...classes: any) {
//   return classes.filter(Boolean).join(" ")
// }

// export default function TabUser({ bonusPoints, historyMembers }: any) {
//   const { users, usersBonusPoints, usersHistoryMember, refresh } = useSelector(
//     (state: any) => state.generalReducers
//   )

//   const staticBonusPoints = [
//     {
//       "Created On": "ASDGGGHHH",
//       "Bonus Type": "T",
//       "Point": 1,
//     },
//     {
//       "Created On": "ASDGGGHHH",
//       "Bonus Type": "T",
//       "Point": 1,
//     },
//     {
//       "Created On": "ASDGGGHHH",
//       "Bonus Type": "T",
//       "Point": 1,
//     },
//     {
//       "Created On": "ASDGGGHHH",
//       "Bonus Type": "T",
//       "Point": 1,
//     },
//     {
//       "Created On": "ASDGGGHHH",
//       "Bonus Type": "T",
//       "Point": 1,
//     },
//   ]

//   const dispatch = useDispatch()
//   const router = useRouter()
//   const [categories, setCategories] = useState({})
//   const aid = router.query
//   useEffect(() => {
//     dispatch(doGetBonusPoint(aid))
//     dispatch(doGetHistoryMember(aid))
//   }, [dispatch, aid])

//   useEffect(() => {
//     if (usersBonusPoints && usersHistoryMember) {
//       setCategories({
//         "Bonus Points": {
//           table: ["Created On", "Bonus Type", "Point"],
//           name: "bonusPoint",
//           data: usersBonusPoints,
//         },
//         "History Member": {
//           table: ["Promote Date", "Member Type", "Point", "Status"],
//           name: "historyMember",
//           data: usersHistoryMember,
//         },
//       })
//     }
//   }, [usersBonusPoints, usersHistoryMember])

//   if (!categories || Object.keys(categories).length === 0) {
//     return <div>Loading...</div>
//   }
//   console.log(categories)
//   return (
//     <div className="w-full px-2 py-6 sm:px-0 shadow-sm">
//       <Tab.Group>
//         <Tab.List className="flex rounded shadow-md">
//           {Object.keys(categories).map(category => (
//             <Tab
//               key={category}
//               className={({ selected }) =>
//                 classNames(
//                   "px-4 py-2 text-sm leading-5 text-gray-600",
//                   "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2",
//                   selected
//                     ? "border-b-2 border-primary text-primary font-bold"
//                     : "text-blue-100 hover:bg-primary hover:rounded hover:text-white"
//                 )
//               }
//             >
//               {category}
//             </Tab>
//           ))}
//         </Tab.List>
//         <Tab.Panels className="mt-2">
//           {Object.values(categories).map((posts: any, idx: any) => (
//             <Tab.Panel
//               key={idx}
//               className={classNames(
//                 "rounded-xl bg-white pt-4",
//                 "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2"
//               )}
//             >
//               <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"></thead>

//                 <tbody>
//                   {staticBonusPoints.map((point: any, i: number) => (
//                     <tr
//                       key={i}
//                       className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//                     >
//                       <td>{point["Created On"]}</td>
//                       <td>{point["Bonus Type"]}</td>
//                       <td>{point["Point"]}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </Tab.Panel>
//           ))}
//         </Tab.Panels>
//       </Tab.Group>
//     </div>
//   )
// }
// import { Tab } from '@headlessui/react';

// export default function MyTabs() {
//   const userPoints = {
//     Total_Points: 100,
//     bonus_type: "R",
//     created_on: "2022-12-31T17:10:55.000Z"
//   };

//   const memberHistory = {
//     user_id: 1,
//     memb_name: "Wizard",
//     promote_date: "2023-01-01T05:10:55.000Z",
//     points: 100,
//     type: "default"
//   };

//   return (
//     <Tab.Group defaultIndex={0}>
//       <Tab.List className="flex mb-6 border-b-2">
//         <Tab className="w-1/2 py-2 font-bold text-center border-r-2">User Bonus Points</Tab>
//         <Tab className="w-1/2 py-2 font-bold text-center">Member History</Tab>
//       </Tab.List>
//       <Tab.Panels>
//         <Tab.Panel>
//           <table className="w-full text-sm text-left">
//             <tbody>
//               <tr>
//                 <td className="p-2 font-bold">Total Points</td>
//                 <td className="p-2">{userPoints.Total_Points}</td>
//               </tr>
//               <tr>
//                 <td className="p-2 font-bold">Bonus Type</td>
//                 <td className="p-2">{userPoints.bonus_type}</td>
//               </tr>
//               <tr>
//                 <td className="p-2 font-bold">Created On</td>
//                 <td className="p-2">{userPoints.created_on}</td>
//               </tr>
//             </tbody>
//           </table>
//         </Tab.Panel>
//         <Tab.Panel>
//           <table className="w-full text-sm text-left">
//             <tbody>
//               <tr>
//                 <td className="p-2 font-bold">User ID</td>
//                 <td className="p-2">{memberHistory.user_id}</td>
//               </tr>
//               <tr>
//                 <td className="p-2 font-bold">Member Name</td>
//                 <td className="p-2">{memberHistory.memb_name}</td>
//               </tr>
//               <tr>
//                 <td className="p-2 font-bold">Promote Date</td>
//                 <td className="p-2">{memberHistory.promote_date}</td>
//               </tr>
//               <tr>
//                 <td className="p-2 font-bold">Points</td>
//                 <td className="p-2">{memberHistory.points}</td>
//               </tr>
//               <tr>
//                 <td className="p-2 font-bold">Type</td>
//                 <td className="p-2">{memberHistory.type}</td>
//               </tr>
//             </tbody>
//           </table>
//         </Tab.Panel>
//       </Tab.Panels>
//     </Tab.Group>
//   );
// }

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

export default function MemberTab() {
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
              <tr key={index} className={`${index % 2 === 0 ? 'bg-purple-100' : 'bg-purple-200'} hover:bg-purple-50`}>
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
              <tr key={index} className={`${index % 2 === 0 ? 'bg-purple-100' : 'bg-purple-200'} hover:bg-purple-50`}>
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
