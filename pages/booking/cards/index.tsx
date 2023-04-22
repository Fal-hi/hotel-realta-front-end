import { Fragment, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import BgButton from "@/components/buttons/BgButton"
import Carousel from "nuka-carousel/lib/carousel"
import { ChevronRight, Plus } from "@/components/icons"
import formatRupiah from "@/functions/formatRupiah"
import { useDispatch, useSelector } from "react-redux"
import { doRequestGetListBooking } from "@/redux/BOOKING/action/booking"
import EmptyData from "@/components/booking/emptyData"

const CardBooking = ({ onViewDetails, filterHead }: any) => {
  const dispatch = useDispatch()

  const { bookings, status } = useSelector(
    (state: any) => state.bookingReducers
  )

  useEffect(() => {
    console.log("filterHead", filterHead)
    const payload = {
      facilities_support_filter: "[]",
      cityName: filterHead.search,
      startDate: filterHead.checkinDate,
      endDate: filterHead.checkoutDate,
    }
    dispatch(doRequestGetListBooking(payload))
  }, [dispatch, filterHead])
  console.log("bookings.dataResponse.data", bookings)
  return (
    <div className="w-auto px-2">
      {bookings.dataResponse?.data === 0 ? <EmptyData /> : null}
      {status == true &&
        bookings.dataResponse?.data.map((item: any, index: number) => (
          <section
            key={index}
            className="flex text-textPrimary bg-white mb-4 shadow rounded-md"
          >
            <div className="w-1/4">
              <Carousel
                autoplay={true}
                animation="zoom"
                autoplayInterval={2000}
                zoomScale={0.98}
                wrapAround={true}
                renderCenterLeftControls={null}
                renderCenterRightControls={null}
                defaultControlsConfig={{
                  pagingDotsStyle: {
                    fill: "white",
                    margin: "1px",
                  },
                }}
              >
                {item.facility_photos.map((hi: any) => (
                  <Fragment key={hi.fapho_id}>
                    <Image
                      className="rounded-tl-md rounded-bl-md w-[350px] h-[250px]"
                      width={350}
                      height={250}
                      src={`http://localhost:5000/hotel/${hi.fapho_photo_filename}`}
                      alt="Bedroom"
                      priority
                    />
                  </Fragment>
                ))}
              </Carousel>
            </div>
            <article className="pl-8 pr-4 py-4 flex justify-between items-start w-[62vw]">
              <section>
                <div>
                  <h1 className="text-left text-lg font-semibold">
                    {item.hotel.hotel_name}
                  </h1>
                  <h5 className="text-xs">{item.hotel.hotel_description}</h5>
                </div>
                <div className="flex gap-2 items-end mt-4">
                  <p className="text-2xl text-textPurple font-semibold border-2 border-textPurple rounded-md py-0 px-3">
                    {item.hotel.hotel_user_reviews[0].hore_rating}{" "}
                  </p>
                  <span className="text-sm text-textPurple font-bold">
                    Stars
                  </span>
                </div>
                <h3 className="text-uppercase text-textPurple text-sm pt-3 font-bold">
                  {item.hotel.hotel_rating_status}
                </h3>
                <div>
                  <span className="text-[10px] font-light">
                    {item.faci_keterangan}
                  </span>
                </div>
                <div className="flex gap-4 items-center mt-12">
                  {item.hotel.facilities_support.slice(0, 2).map((fs: any) => (
                    <div
                      key={fs.fs_id}
                      className="flex gap-2 items-center font-light text-textPrimary"
                    >
                      <Image
                        src={`http://localhost:5000/hotel/${fs.fs_icon}`}
                        width={15}
                        height={15}
                        alt={fs.fs_description}
                      />
                      <span className="text-xs font-normal">
                        {fs.fs_description}
                      </span>
                    </div>
                  ))}
                  {item.hotel.facilities_support.length > 2 && (
                    <Link
                      href={`booking/details/?hotel=${item.hotel.hotel_id}&room=${item.faci_id}`}
                      target="_blank"
                    >
                      <div className="flex gap-2 items-center text-xs font-semibold text-textPurple">
                        <Plus width="10" height="10" stroke="#5B33A8" />
                        <span>All Facilities</span>
                      </div>
                    </Link>
                  )}
                </div>
              </section>
              <section className="mr-1">
                {/* Pergi ke detail booking */}
                <Link
                  href={`booking/details/?hotel=${item.hotel.hotel_id}&room=${item.faci_id}`}
                  target="_blank"
                >
                  <div
                    className="flex gap-2 justify-end items-center mb-8 text-xs text-textPurple cursor-pointer"
                    onClick={onViewDetails}
                  >
                    <span>See details</span>
                    <ChevronRight width="7" fill="#7743DB" />
                  </div>
                </Link>
                <div className="text-right">
                  <span className="text-rose-500 text-xs line-through mr-2">
                    {formatRupiah(item.faci_rate_price)}
                  </span>
                  <span className="text-xs bg-yellow-300 py-[2px] px-1 rounded">
                    {item.faci_discount}%
                  </span>
                  <h1 className="text-right font-semibold text-lg my-1">
                    {formatRupiah(item.faci_subtotal)}
                  </h1>
                  <span className="text-[10px] border-2 border-bgPrimary text-textPurple font-semibold py-1 px-2 rounded-sm">
                    {item.faci_memb_name} MEMBER
                  </span>
                </div>
                {/* Pergi ke modify booking */}
                <div className="mt-8">
                  <Link
                    href={`booking/modify/?hotel=${item.hotel.hotel_id}&room=${item.faci_id}`}
                    target="_blank"
                    className="font-semibold text-white border-bgPrimary bg-bgPrimary border-solid border-2 outline-none focus:outline-none hover:text-white rounded-md hover:bg-bgPrimary text-xs py-2 px-3"
                  >
                    Booking Now
                  </Link>
                </div>
              </section>
            </article>
          </section>
        ))}
    </div>
  )
}

export default CardBooking
