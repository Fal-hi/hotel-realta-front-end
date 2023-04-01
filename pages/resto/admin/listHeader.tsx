import formatRupiah from '@/functions/formatRupiah';
import React from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs';
import { Menu } from '@headlessui/react';


// This is the table constant/settings which needed to render table elements
export const tableConstants = (setIsOpen?: any, setIsDelete?: any) => {
  return [
    
    {
      title: 'ID',
      render: (data:any) => {
        return <span>{data.reme_id}</span>;
      },
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
        return <span>{formatRupiah(data.reme_price)}</span>;
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
            <div className="flex">
              <Menu/>
              <div
                className="mx-2 cursor-pointer"
                onClick={() => {
                  setIsOpen({
                    resto: data.reme_name,
                    id: data.reme_id,
                    isShow: true,
                  })
                }}
              >
                <BsThreeDotsVertical />
              </div>
            </div>
          )
        },
      },
  ];
};