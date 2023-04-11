import React, { Fragment } from "react"
import { useRouter } from "next/router"
import formatRupiah from "@/functions/formatRupiah"
import { Menu, Transition } from "@headlessui/react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { Pencil, Trash } from "@/components/icons"

// This is the table constant/settings which needed to render table elements
export const tableConstants = (setIsOpen?: any, setIsDelete?: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  return [
    {
      title: "Stock",
      render: (data: any) => {
        // console.log(data)
        return <span>{data.stock?.stock_name}</span>
      },
    },
    {
      title: "QTY Stocked",
      render: (data: any) => {
        return <span>{data.vepro_qty_stocked}</span>
      },
    },

    {
      title: "QTY Remaining",
      render: (data: any) => {
        return (
          <span>{data.vepro_qty_remaining}</span>
        )
      },
    },

    {
      title: "Price",
      render: (data: any) => {
        return (
          <span>{formatRupiah(data.vepro_price)}</span>
        )
      },
    },

    {
      title: "Action",
      render: (data: any) => {
        return (
          <div className="w-full text-left">
            <Menu as="div" className="inline-block text-left">
              <div>
                <Menu.Button>
                  <BsThreeDotsVertical />
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
                <Menu.Items className="absolute right-40 mt-2 w-56 z-10 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          onClick={() => setIsOpen(data.vepro_id)}
                        >
                          {active ? (
                            <div className="pr-3">
                              <Pencil stroke="#FFF" width="24" />
                            </div>
                          ) : (
                            <div className="pr-3">
                              <Pencil />
                            </div>
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
                          onClick={() => setIsDelete(data.vepro_id)}
                        >
                          {active ? (
                            <div className="pr-3">
                              <Trash stroke="#FFF" />
                            </div>
                          ) : (
                            <div className="pr-3">
                              <Trash />
                            </div>
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
        )
      },
    },
  ]
}
