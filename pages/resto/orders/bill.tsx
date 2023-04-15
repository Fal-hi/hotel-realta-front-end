import React from 'react'
import { ChevronLeft, Coupon } from "@/components/icons"
import { useDispatch, useSelector } from 'react-redux';
import Logo from '@/assets/image/logo.png'
import Image from 'next/image';
import Link from 'next/link';


function Bill() {
  const { orderresto } = useSelector((state: any) => state.orderrestoreducers)
   


// const subtotal = orderresto.reduce((acc:any, item:any) => acc + parseInt(item.orme_price)*item.orme_qty, 0);
const subtotal = orderresto?.order_menu_details?.reduce(
  (acc:any, cur:any) => acc + cur.orme_price * cur.orme_qty,
  0
);
const totalDiscount = subtotal * 0.05;
const totalsetelahdiskon = subtotal - totalDiscount;
const tax = totalsetelahdiskon * 0.1;
const totalsetelahtax = tax + totalsetelahdiskon;

const hari = new Date()

console.log("ini adalah billll",orderresto.orme_pay_type)

    return (
      <section className='w-[25rem] mx-auto mt-20'>
        <div className='flex justify-start items-center mb-6'>
            <Link className='flex gap-2 items-center' href="/resto/restomenus">
              <ChevronLeft/>
              <h3>Back</h3>
            </Link>
        </div>
        <div className='flex justify-center'>
          <section className="bg-white p-6 shadow w-[25rem] rounded-md sticky">
                  <div className="flex justify-between items-start">
                      <Image
                        src={Logo}
                        width={500}
                        height={500}
                        alt="Logo"
                        className='w-48 h-auto'
                      />
                    <h2 className="text-sm  mb-4">Bills</h2>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center max-w-[22rem] mt-2">
                      <p className="font-semibold">Tanggal</p>
                      <p className='text-sm'>{hari.toLocaleDateString('ID')}</p>
                  </div>
                  
                  <div className="flex justify-between items-center max-w-[22rem] mt-2">
                    <p className="font-semibold">Order Number</p>
                    <p className='text-sm'>{orderresto.orme_order_number}</p>
                </div>

                <div className="flex justify-between items-center max-w-[22rem] mt-2">
                    <p className="font-semibold">Invoice Number</p>
                    <p className='text-sm'>{orderresto.orme_cardnumber}</p>
                </div>
              
                <div className="flex justify-between items-center max-w-[22rem] mt-2">
                    <p className="font-semibold">Payment Type</p>
                    <p className='text-sm'>{orderresto.orme_pay_type}</p>
                </div>
                <hr className='mt-2' />
                  {orderresto?.order_menu_details?.map((item:any) => (
                    <div key={item.orme_id} className="mt-2 justify-between items-end">
                      <div className="mt-2 flex justify-between items-end">
                      <div >
                        <p className="text-sm mt-1">{item.resto_menu.reme_name}</p>
                        <h1 className="font-semibold mt-1">
                          {Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(item.orme_price)}
                        </h1>
                      </div>
                      <div className="mr-30">
                        {item.orme_qty}
                      </div>
                      <p className="text-sm mt-1">Total</p>
                      <div className="">
                        {Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(item.orme_price * item.orme_qty)}
                      </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between items-center bg-[#E7F2FF] rounded-md p-2 mt-8">
                      <div className='flex gap-1 items-center'>
                      <Coupon />
                      <span className="font-semibold text-sm ml-2"> Discount 5% : </span>
                      </div>
                      <h3>
                        {Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(totalDiscount)}
                      </h3>
                  </div>
                  <div className="flex justify-between items-center my-4 text-sm">
                    <span className="font-semibold"> Total : </span>
                    <span className=" py-1 px-2 rounded">
                      {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR"
                      }).format(totalsetelahdiskon)}
                    </span>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center my-4 text-sm">
                    <span className="font-semibold"> Tax (10%): </span>
                    <span className="bg-yellow-300 py-1 px-2 rounded">
                      {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(tax)}
                    </span>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center font-semibold mt-2">
                    <h1>
                      Total Price{" "}
                      <span className="text-xs font-light">(include tax)</span>
                    </h1>
                    <h1>
                      {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(totalsetelahtax)}
                    </h1>
                    </div>
            <div className="mt-8 flex justify-center">
             Thank you & Enjoy your foods
            </div>
          </section>      
        </div>
      </section>
    );
  }

  export default Bill;