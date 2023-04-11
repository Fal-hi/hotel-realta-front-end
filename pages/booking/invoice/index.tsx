import { ChevronLeft, User } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"
import Logo from "@/assets/image/logo.png"
import { invoiceData } from "./invoiceData"
import formatRupiah from "@/functions/formatRupiah"
import BgButton from "@/components/buttons/BgButton"
import { OutlineButton } from "@/components/buttons/OutlineButton"
import { useRef, useState } from "react"
import ReactToPrint, { useReactToPrint } from "react-to-print"

const InvoiceBooking = () => {
  const [printData, setPrintData] = useState(invoiceData)
  const componentRef = useRef<HTMLDivElement>(null)

  let data: any

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      setPrintData(data)
    },
  })

  const PrintButton = () => {
    return (
      <ReactToPrint
        trigger={() => (
          <OutlineButton title="Print" padding="0.3rem 1rem" textSize="12px" />
        )}
        content={() => componentRef.current}
      />
    )
  }

  const PrintContent = () => {
    return (
      <div ref={componentRef} className="px-12">
        {printData.map((item: any) => (
          <>
            <div
              key={item.bookingData[0].id}
              className="mt-8 flex justify-between items-start"
            >
              {item.bookingData.map((booking: any) => (
                <div key={booking.id}>
                  <h3 className="font-semibold mb-2">{booking.title}</h3>
                  <p className="text-xs font-light">{booking.data}</p>
                </div>
              ))}
            </div>
            <h1 className="mt-10 text-2xl font-semibold">Customer</h1>
            <hr className="mt-2" />
            <div
              key={item.customerData[1].id}
              className="mt-6 flex justify-between items-start"
            >
              {item.customerData.map((customer: any) => (
                <div key={customer.id}>
                  <h3 className="font-semibold mb-2">{customer.title}</h3>
                  <p className="text-xs font-light">{customer.data}</p>
                </div>
              ))}
            </div>
            <h1 className="mt-10 text-2xl font-semibold">Biling</h1>
            <hr className="mt-2" />
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h3 className="font-semibold mb-2">Facilities</h3>
                {item.bilingData.map((biling: any) => (
                  <p
                    className="text-xs font-light mb-2 text-left"
                    key={biling.id}
                  >
                    {biling.facilities}
                  </p>
                ))}
              </div>
              <div>
                <h3 className="font-semibold mb-2">Qty</h3>
                {item.bilingData.map((biling: any) => (
                  <p
                    className="text-xs font-light mb-2 text-center"
                    key={biling.id}
                  >
                    {biling.qty}
                  </p>
                ))}
              </div>
              <div>
                <h3 className="font-semibold mb-2">Price</h3>
                {item.bilingData.map((biling: any) => (
                  <p
                    className="text-xs font-light mb-2 text-left"
                    key={biling.id}
                  >
                    {formatRupiah(biling.price)}
                  </p>
                ))}
              </div>
              <div>
                <h3 className="font-semibold mb-2">Discount</h3>
                {item.bilingData.map((biling: any) => (
                  <p
                    className="text-xs font-light mb-2 text-left"
                    key={biling.id}
                  >
                    {`-${formatRupiah(biling.discount)}`}
                  </p>
                ))}
              </div>
              <div>
                <h3 className="font-semibold mb-2">Member Points</h3>
                {item.bilingData.map((biling: any) => (
                  <p
                    className="text-xs font-light mb-2 text-left"
                    key={biling.id}
                  >
                    {`${formatRupiah(biling.pointMember)} (100Pts)`}
                  </p>
                ))}
              </div>
              <div>
                <h3 className="font-semibold mb-2">Sub Total</h3>
                {item.bilingData.map((biling: any) => (
                  <p
                    className="text-xs font-light mb-2 text-left"
                    key={biling.id}
                  >
                    {formatRupiah(biling.subTotal)}
                  </p>
                ))}
              </div>
            </div>
          </>
        ))}
        <hr className="mt-4" />
        <div className="text-right flex gap-8 justify-end items-center mt-2">
          <h3 className="font-semibold mb-2">Total Amount</h3>
          <p className="text-sm font-semibold mb-2">{formatRupiah(335000)}</p>
        </div>
        <div className="text-right flex gap-[5.5rem] justify-end items-center mt-2">
          <h3 className="font-semibold mb-2">Tax</h3>
          <p className="text-sm font-semibold mb-2">10%</p>
        </div>
        <div className="text-right flex gap-8 justify-end items-center mt-2">
          {/* <BgButton title="Send To Email" padding="0.3rem 1rem" />
          <OutlineButton title="Print" padding="0.3rem 1rem" textSize="12px" /> */}
          <h3 className="font-semibold mb-2">Payment Amount</h3>
          <p className="text-sm font-semibold mb-2">{formatRupiah(368500)}</p>
        </div>
      </div>
    )
  }

  return (
    <section className="text-textPrimary w-[85vw] mx-auto font-poppins-regular">
      <div className="sticky top-0 bg-[#FBFBFB] h-6 z-50"></div>
      <div className="sticky top-6 z-50 flex justify-between items-center bg-white shadow rounded-md px-4 py-4">
        <figure>
          <Image
            width={220}
            height={100}
            src={Logo}
            alt="Logo Realta"
            className=""
          />
        </figure>
        <Link href="/" className="flex gap-1 items-center">
          <User width="20" stroke="#7743DB" />
          <span className="text-xs font-semibold text-textPurple mr-2">
            Sign In
          </span>
        </Link>
      </div>
      <section className="pr-6 ml-4">
        <Link
          href="/booking/modify"
          className="flex gap-4 items-center text-textPurple mt-10"
        >
          <ChevronLeft width="16" height="16" fill="#7743DB" />
          <h1 className="text-xl font-semibold">Invoice</h1>
        </Link>
        {/* Booking */}
        <PrintContent />
        <div className="flex justify-end gap-4 items-center mr-11 mt-2">
          <PrintButton />
          <BgButton title="Send To Email" padding="0.3rem 1rem" />
          {/* <OutlineButton title="Print" padding="0.3rem 1rem" textSize="12px" /> */}
        </div>
      </section>
    </section>
  )
}

export default InvoiceBooking
