import React, { useEffect, useState, Fragment } from "react"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import AddButton from "@/components/addButton"
import { SearchInput } from "@/components/searchInput"
import AddVendor from "./addVendor"
import EditVendor from "./editVendor"
import {
  doDelete,
  doRequestGetVendor,
  doSearch,
} from "@/redux/PURCHASING/action/actionVendor"
import Table from "@/components/Table"
import { tableConstants } from "./listHeader"
import Breadcumb from "@/components/breadcumb"
import { Pagination } from "@/components/pagination"

export default function Vendor() {
  const [isEdit, setIsEdit] = useState({
    status: false,
    id: 0,
  })
  const editOpen = (id: number) => {
    setIsEdit(prev => {
      return { ...prev, status: true, id: id }
    })
  }

  const deleteOpen = async (id: number) => {
    const corfirmed = window.confirm(
      `Apakah Anda yakin ingin menghapus user dengan id-${id}?`
    )
    if (corfirmed) {
      dispatch(doDelete(id))
    }
  }

  const { vendor, message, refresh } = useSelector(
    (state: any) => state.vendorReducers
    )
    console.log(vendor)

  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [entry, setEntry] = useState(2)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(doRequestGetVendor(search, page, entry))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[refresh, search, page, entry])

  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }

  // useEffect(() => {
  //   dispatch(doSearch(search))
  // }, [dispatch, search])

  return (
    <div>
      <Breadcumb child="Vendor" parent="Dasboard" detail="Vendor"></Breadcumb>
      <div className="flex items-center">
        <div
          style={{
            width: "300px",
            height: "40px",
            marginRight: "10px",
          }}
        >
          <SearchInput onChange={handleSearchChange} />
        </div>
        <div className="flex py-3 ">
          <AddButton onClick={() => setIsOpen(true)} />
        </div>
      </div>

      <Table cols={tableConstants(editOpen,deleteOpen)} data={vendor?.data?.data}>
        <Pagination pagination={{totalPage: vendor?.data?.totalPage, page: vendor?.data?.currentPage}} setPage={setPage}/>
      </Table>

      {/* <table className="min-w-full table-fixed">
        <thead>
          <tr className="border-t border-gray-200">
            {((column && column) || []).map(col => (
              <th
                key={col.name}
                className="pr-6 py-2 border-b border-gray-200 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wide"
              >
                <span className="lg:pl-2">{col.name}</span>
              </th>
            ))}
            <th className="pr-6 py-2 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wide"></th>
          </tr>
        </thead>
        <tbody className="bg-whiter divide-y divide-gray-100">
          {vendor &&
            Array.isArray(vendor.data?.data) &&
            vendor.data?.data.map((dt: any, index: number) => (
              <tr key={dt.id}>
                <td className="px-1 py-3 text-sm text-gray-900 text-center">
                  {index + 1}
                </td>
                <td className="px-1 py-3 text-sm text-gray-900 text-center">
                  {dt.vendor_name}
                </td>
                <td className="px-1 py-3 text-sm text-gray-900 text-center">
                  {dt.vendor_active === "1" ? "Active" : "InActive"}
                </td>
                <td className="px-1 py-3 text-sm text-gray-900 text-center">
                  {dt.vendor_priority == "1" ? "Priority" : "No Priority"}
                </td>
                <td className="px-1 py-3 text-sm text-gray-900 text-center">
                  {new Date(dt.vendor_register_date).toLocaleDateString(
                    "en-GB",
                    { day: "numeric", month: "short", year: "numeric" }
                  )}
                </td>
                <td className="px-1 py-3 text-sm text-gray-900 text-center">
                  {dt.vendor_weburl}
                </td>
                <td className="px-1 py-3 text-sm text-gray-900">
                  <div className="w-full text-right">
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button
                          className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium 
                        text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                        >
                          <BsThreeDots
                            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-2 w-56 z-10 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1 ">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  onClick={() => editOpen(dt.vendor_entity_id)}
                                >
                                  {active ? (
                                    <MdEdit
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <MdEdit
                                      className="mr-2 h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Edit
                                </button>
                              )}
                            </Menu.Item>
                          </div>

                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  onClick={() => {
                                    router.push("/purchasing/vendor/product")
                                  }}
                                >
                                  {active ? (
                                    <MdPlusOne
                                      className="mr-2 h-5 w-5 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <MdPlusOne
                                      className="mr-2 h-5 w-5 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Add Item Product
                                </button>
                              )}
                            </Menu.Item>
                          </div>

                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-violet-500 text-white"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  onClick={() =>
                                    deleteOpen(dt.vendor_entity_id)
                                  }
                                >
                                  {active ? (
                                    <MdDelete
                                      className="mr-2 h-5 w-5 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <MdDelete
                                      className="mr-2 h-5 w-5 text-violet-400"
                                      aria-hidden="true"
                                    />
                                  )}
                                  Delete
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </td>
              </tr>
            ))}
          <tr className="border-t">
            <td colSpan={3} className="px-4 py-4">
              <Pagination
                pagination={{
                  totalPage: vendor.totalPages,
                  page: vendor.page,
                }}
                setPage={setPage}
              />
            </td>
          </tr> 
        </tbody>
      </table>  */}

      {
      isOpen ? (
        <AddVendor isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      ) : null}

      {isEdit.status ? (
        <EditVendor
          isEdit={isEdit}
          closeModal={() =>
            setIsEdit(prev => {
              return { ...prev, status: false }
            })
          }
        />
      ) : null}
    </div>
  )
}
