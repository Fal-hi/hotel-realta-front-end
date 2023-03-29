import React from 'react'
import Typography from '../Typography'
import variants from '../Typography/textcss'

const Breadcumb = ({child, parent, detail}:any) => {
  return (
    <div className='w-full flex justify-between items-center'>
        <Typography variant={variants.xl2semibold} color={'text-blackText'}>
            {child}
        </Typography>
        <div className='flex'>
        <Typography variant={variants.basemedium} color={'text-grayText'}>
            {parent}
        </Typography>
        <p className='text-bold px-2'> / </p>
        <Typography variant={variants.basemedium} color={'text-bgPrimary'}>
            {detail}
        </Typography>
        </div>
    </div>
  )
}

export default Breadcumb