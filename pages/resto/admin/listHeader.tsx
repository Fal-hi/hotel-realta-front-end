import formatRupiah from '@/functions/formatRupiah';
import { Menu, Transition } from "@headlessui/react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { Pencil, Plus, Trash } from "@/components/icons"
import React, { Fragment } from "react"

export const tableConstants = (setIsEdit?: any, setIsDelete?: any, setIsAdd?:any, setObResto?: any ) => {
  

  return [
    {
      title: 'ID',
      render: (data:any) => {
          return <span>{data.reme_id}</span>;
      } 
    },
    {
      title: 'Menu Name',
      render: (data:any) => {
        return <span>{data.reme_name}</span>;
      },
    },
    {
      title: 'Price',
      render: (data:any) => {
        return <span>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(data.reme_price)}</span>;
        
      },
    },
    {
      title: 'Status',
      render: (data:any) => {
        return <span>{data.reme_status}</span>;
      },
    },
 {
      title: "Action",
      render: (data: any) => {
        return (
          <div className="w-full text-left ">
            <Menu as="div" className=" inline-block text-left">
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
                <Menu.Items className="absolute right-40 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1  ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          onClick={() => { setIsEdit(data.reme_id, data); }}
                        >
                          {active ? (
                            <div className="pr-3"><Pencil stroke="#FFF" width="24"/></div>
                          ) : (
                            <div className="pr-3"><Pencil/></div>
                          )}
                          Edit Resto Menu
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
                          onClick={() => { setIsAdd({id:data.reme_id, isShow: true}); }}
                          
                        >
                          {active ? (
                            <div className="pr-3"><Plus width="24"/></div>
                          ) : (
                            <div className="pr-3"><Plus stroke="#667085" width="18"/></div>
                          )}
                          Upload Photo
                        </button>
                      )}
                    </Menu.Item>
                    
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? "bg-violet-500 text-white"
                              : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          
                          onClick={() => { setIsDelete({id:data.reme_id, isShow: true}); }}
                        >
                          {active ? (
                            <div className="pr-3"><Trash stroke="#FFF" width="24"/></div>
                          ) : (
                            <div className="pr-3"><Trash/></div>
                          )}
                          Delete Resto Menu
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
  ];
};