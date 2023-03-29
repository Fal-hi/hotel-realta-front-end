import Typography from '@/components/Typography';
import variants from '@/components/Typography/textcss';
import AddButton from '@/components/addButton';
import Breadcumb from '@/components/breadcumb';
import { SearchInput } from '@/components/searchInput';
import { getDataUserAccounts } from '@/redux/PAYMENT/action/userAccounts';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { tableConstants } from './listHeader';
import Table from '@/components/Table';


const Account = () => {
  
  const { accounts, refresh } = useSelector((state: any) => state.accountReducers)
  
  const listHead = [
    {
      nama: "Account Number",
    },
    {
      nama: "Type",
    },
    {
      nama: "Balace",
    },
    {
      nama: "Payment Type",
    },
  ]


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataUserAccounts())
  }, [dispatch])


  return (
    <div className="">
      <div>
        <Breadcumb child={"Bank"} parent={"Dashboard"} detail={"Bank"} />
      </div>
      <div className="flex flex-col items-start mt-10 w-full">
        <div className="flex flex-row w-full justify-between">
          <div>
            <SearchInput />
          </div>
          <div className="flex ">
            <AddButton />
          </div>
        </div>

        <div className="py-3">
          
        </div>
        <Table cols={tableConstants()} data={accounts} />
        {/* <table className="w-full shadow-md rounded-[8px]">
          <thead className="">
            <tr className="bg-[#F9FAFB] py-10">
              {listHead.map((data, i) => (
                <th key={i} className=" py-5 px-4  text-center ">
                  <Typography
                    variant={variants.xsregular}
                    color={"text-textGray"}
                  >
                    {data.nama}
                  </Typography>
                </th>
              ))}
             
            </tr>
          </thead>
          <tbody>
            {(accounts || []).map((data: any, i: number) => (
              <tr className="border-2 py-5 text-center">
                <td className=" py-4 px-4 ">{data.accountNumber}</td>
                <td className=" py-4 px-4 ">{data.paymentType}</td>
                <td className=" py-4 px-4 ">{data.balance}</td>
                <td className=" py-4 px-4 ">{data.paymentName}</td>
              </tr>
            ))}
            <tr className="">
              <td className="px-4 py-5"></td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  )
}

export default Account