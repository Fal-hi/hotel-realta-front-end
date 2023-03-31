// import React, { useEffect, useState, Fragment } from "react"
// import { toast } from "react-toastify"
// import { useDispatch, useSelector } from "react-redux"
// import AddButton from "@/components/addButton"
// import { SearchInput } from "@/components/searchInput"
// import { useRouter } from "next/router"
// import {
//   doDelete,
//   doRequestGetVendor,
//   doSearch,
// } from "@/redux/PURCHASING/action/actionVendor"
// import Table from "@/components/Table"
// import { tableConstants } from "./listHeader"
// import Breadcumb from "@/components/breadcumb"

// export default function Vendor() {
//   const [isEdit, setIsEdit] = useState({
//     status: false,
//     id: 0,
//   })
//   const editOpen = (id: number) => {
//     setIsEdit(prev => {
//       return { ...prev, status: true, id: id }
//     })
//   }

//   const deleteOpen = async (id: number) => {
//     const corfirmed = window.confirm(
//       `Apakah Anda yakin ingin menghapus user dengan id-${id}?`
//     )
//     if (corfirmed) {
//       dispatch(doDelete(id))
//     }
//   }

//   const { vendor, message, refresh } = useSelector(
//     (state: any) => state.vendorReducers
//     )
//     console.log(vendor)

//   const [isOpen, setIsOpen] = useState(false)
//   const [search, setSearch] = useState("")
//   const dispatch = useDispatch()

//   useEffect(() => {
//     dispatch(doRequestGetVendor())
//     toast.success("Wellcome")
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   },[refresh])

//   const handleSearchChange = (e: any): void => {
//     setSearch(e.target.value)
//   }

//   useEffect(() => {
//     dispatch(doSearch(search))
//   }, [dispatch, search])

//   return (
//     <div>
//       <Breadcumb child="Vendor" parent="Dasboard" detail="Vendor"></Breadcumb>
//       <div className="flex items-center">
//         <div
//           style={{
//             width: "300px",
//             height: "40px",
//             marginRight: "10px",
//           }}
//         >
//           <SearchInput onChange={handleSearchChange} />
//         </div>
//         <div className="flex py-3 ">
//           <AddButton onClick={() => setIsOpen(true)} />
//         </div>
//       </div>

//       <Table cols={tableConstants(editOpen,deleteOpen)} data={vendor?.data?.data}/>

//       {
//       isOpen ? (
//         <AddVendor isOpen={isOpen} closeModal={() => setIsOpen(false)} />
//       ) : null}

//       {isEdit.status ? (
//         <EditVendor
//           isEdit={isEdit}
//           closeModal={() =>
//             setIsEdit(prev => {
//               return { ...prev, status: false }
//             })
//           }
//         />
//       ) : null}
//     </div>
//   )
// }