import formatRupiah from '@/functions/formatRupiah';
import moment from 'moment';
import React from 'react';

// This is the table constant/settings which needed to render table elements
export const tableConstants = (handleEdit?:any) => {
  return [
    {
      title: 'Transaction Number',
      render: (data:any) => {
        return <span>{data.part_trx_number}</span>;
      },
    },
    {
      title: 'Trx Date',
      render: (data:any) => {
        return <span>{moment(data.part_modified_date).format("llll")}</span>;
      },
    },
    {
      title: 'Debet',
      render: (data:any) => {
        return <span>{data.part_debet == 0  ? '' :formatRupiah(data.part_debet)}</span>;
      },
    },
    {
      title: 'Credit',
      render: (data:any) => {
        return <span>{ data.part_credit == 0 ? '' : formatRupiah(data.part_credit)}</span>;
      },
    },
    {
      title: 'Note',
      render: (data:any) => {
        return <span>{data.part_note}</span>;
      },
    },
    {
      title: 'OrderNumber',
      render: (data:any) => {
        return <span>{data.part_order_number}</span>;
      },
    },
    {
        title: 'Source',
        render: (data:any) => {
          return <span>{data.part_source_id}</span>;
        },
    },
    {
        title: 'Target',
        render: (data:any) => {
          return <span>{data.part_target_id}</span>;
        },
      },
    {
        title: 'Transaction Ref',
        render: (data:any) => {
          return <span>{data.part_trx_number_ref}</span>;
        },
      },
      {
        title: 'Type',
        render: (data:any) => {
          return <span>{data.part_type}</span>;
        },
      },
      {
        title: 'User',
        render: (data:any) => {
          return <span>{data.user.user_full_name}</span>;
        },
      },
  ];
};