import { Menu, Transition } from "@headlessui/react"
import React, { useEffect, useState, Fragment } from "react"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import AddButton from "@/components/addButton"
import AddVendor from "./addVendor"
import BgButton from "@/components/buttons/BgButton"
import { Pagination } from "@/components/pagination"
import { doRequestGetProduct } from "@/redux/PURCHASING/action/actionVendor"
import { useRouter } from "next/router"
import Table from "@/components/Table"
import { tableConstants } from "./listHeaderProduct"

export default function Vendor() {
  const column = [
    { name: "No" },
    { name: "Stock" },
    { name: "QTY Stocked" },
    { name: "QTY Remaining" },
    { name: "Price" },
  ]

  const router = useRouter()
  const [page, setPage] = useState(1)
  const { vendor, message, refresh } = useSelector(
    (state: any) => state.vendorReducers
  )
  // console.log(vendor.data)

  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(doRequestGetProduct())
    toast.success("Wellcome")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh])
  

  return (
    <div>
      <div className="flex items-center text-center">VENDOR</div>
      <div className="flex items-center">
        <div className="flex py-3 ">
          <AddButton onClick={() => setIsOpen(true)} />
        </div>
      </div>

      <Table cols={tableConstants()} data={vendor?.data.data}/>

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
                  {dt.stock_name}
                </td>
                <td className="px-1 py-3 text-sm text-gray-900 text-center">
                  {dt.vendor_product?.vepro_qty_remaining}
                </td>
                <td className="px-1 py-3 text-sm text-gray-900 text-center">
                  {dt.vendor_product?.vepro_qty_stocked}
                </td>
                <td className="px-1 py-3 text-sm text-gray-900 text-center">
                  {dt.vendor_product?.vepro_price}
                </td>
                <td className="px-1 py-3 text-sm text-gray-900">
                  <div className="w-full text-right">
                    <Menu as="div" className="relative inline-block text-left">
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      ></Transition>
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
      </table> */}
        <BgButton
          title="Back"
          onClick={() => {
            router.push("/purchasing/vendor")
          }}
        />
      {isOpen ? (
        <AddVendor isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      ) : null}
    </div>
  )
}
