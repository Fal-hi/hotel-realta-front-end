import formatRupiah from '@/functions/formatRupiah';
import React from 'react';
import {Pencil, Trash} from '@/components/icons'

// This is the table constant/settings which needed to render table elements
export const tableConstants = (setIsOpen?: any, setIsDelete?: any) => {
  return [
    {
      title: 'ID',
      render: (data:any) => {
        return <span>{data. reme_id}</span>;
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
              <div
                className="mx-2 cursor-pointer"
                onClick={() => {
                  setIsDelete({
                    bank: data.paga_name,
                    id: data.paga_entity_id,
                    isShow: true,
                  })
                }}
              >
                <Trash />
              </div>
              <div
                className="mx-2 cursor-pointer"
                onClick={() => {
                  setIsOpen({
                    bank: data.paga_name,
                    id: data.paga_entity_id,
                    isShow: true,
                  })
                }}
              >
                <Pencil />
              </div>
            </div>
          )
        },
      },
  ];
};