import { Menu, Transition } from "@headlessui/react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { Chevron, Magnifier, Trash } from "@/components/icons"
import React, { Fragment } from "react"
import { useRouter } from "next/router"
import formatRupiah from "@/functions/formatRupiah"

// This is the table constant/settings which needed to render table elements
export const tableConstants = (setIsOpen?: any, setIsDelete?: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  return [
    {
      title: "PO Number",
      render: (data: any) => {
        console.log(data)
        return <span>{data.pohe_number}</span>
      },
    },
    {
      title: "PO Date",
      render: (data: any) => {
        return (
        <span>
            {new Date(data.pohe_order_date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }
            ) 
            }
          </span>
        )
      },
    },

    {
      title: "Vendor Target",
      render: (data: any) => {
        return <span>{data.vendor.vendor_name}</span>
      },
    },

    {
      title: "Line Items",
      render: (data: any) => {
        return <span>{data.pohe_line_items}</span>
      },
    },

    {
      title: "Total Amount",
      render: (data: any) => {
        // console.log(data)
        return <span>{formatRupiah(data.pohe_total_amount)}</span>
      },
    },

    {
      title: "Status",
      render: (data: any) => {
        let status = "";
        switch (parseInt(data.pohe_status)) {
          case 1:
            status = "Pending";
            break;
          case 2:
            status = "Approved";
            break;
          case 3:
            status = "Rejected";
            break;
          case 4:
            status = "Received";
            break;
          case 5:
            status = "Completed";
            break;
          default:
            status = "Unknow";
            break;
        }
        return <span>{status}</span>
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
                  <BsThreeDotsVertical/>
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
                          onClick={() => {
                            router.push({
                              pathname: "/purchasing/listOrder/detailListOrder",
                              query: {
                                pohe_id: data.pohe_id,
                                pohe_number: data.pohe_number,
                                pohe_order_date: data.pohe_order_date,
                                vendor_name: data.vendor.vendor_name,
                                pohe_status: data.pohe_status,
                                pohe_subtotal: data.pohe_subtotal,
                                pohe_total_amount: data.pohe_total_amount,
                                pohe_tax: data.pohe_tax
                              },
                            });
                          }}
                        >
                          {active ? (
                            <div className="pr-3"><Magnifier width="24"/></div>
                          ) : (
                            <div className="pr-3"><Magnifier/></div>
                          )}
                          Detail
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
                          onClick={() => setIsOpen(data.pohe_id)}
                        >
                          {active ? (
                            <div className="pr-3"><Chevron width="24"/></div>
                          ) : (
                            <div className="pr-3"><Chevron stroke="#667085" width="18"/></div>
                          )}
                          Switch Status
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
                          onClick={() => setIsDelete(data.pohe_id)}
                        >
                          {active ? ( 
                            <div className="pr-3"><Trash stroke="#FFF"/></div>
                          ) : (
                            <div className="pr-3"><Trash/></div>
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
