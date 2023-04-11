import formatRupiah from '@/functions/formatRupiah';
import moment from 'moment';
import React from 'react';

// This is the table constant/settings which needed to render table elements
export const tableConstants = (handleEdit?:any) => {
  return [
    {
      title: 'Trx Date',
      render: (data:any) => {
        return <span>{moment(data.part_modified_date).format("llll")}</span>;
      },
    },
    {
      title: 'Source',
      render: (data:any) => {
        return <span>{data.part_source_id}</span>;
      },
  },
    {
      title: 'Debet',
      render: (data:any) => {
        return <span className='text-orange-600'>{data.part_debet == 0  ? '' : `- ${formatRupiah(data.part_debet)}`}</span>;
      },
    },

    {
      title: 'Target',
      render: (data:any) => {
        return <span>{data.part_target_id}</span>;
      },
    },
    
    {
      title: 'Credit',
      render: (data:any) => {
        return <span>{ data.part_credit == 0 ? '' : `+ ${formatRupiah(data.part_credit)}`}</span>;
      },
    },
    {
      title: 'Note',
      render: (data:any) => {
        return <span>{data.part_note}</span>;
      },
    },

   
  
 
  ];
};