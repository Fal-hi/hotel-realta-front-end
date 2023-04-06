import { Fragment, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import BgButton from "@/components/buttons/BgButton"
import Carousel from "nuka-carousel/lib/carousel"
import { ChevronRight, Plus } from "@/components/icons"
import formatRupiah from "@/functions/formatRupiah"
import { cardHotel } from "./data"

const CardBooking = ({ onViewDetails }: any) => {
  return (
    <div className="w-auto ml-80">
      {cardHotel.map((item: any) => (
        <section
          key={item.id}
          className="flex text-textPrimary bg-white mb-4 shadow rounded-md"
        >
          <div className="w-2/6">
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
              {item.hotelImages.map((hi: any) => (
                <Fragment key={hi.id}>
                  <Image
                    className="rounded-tl-md rounded-bl-md w-auto h-auto"
                    width={300}
                    src={hi.image}
                    alt="Bedroom"
                    priority
                  />
                </Fragment>
              ))}
            </Carousel>
          </div>
          <article className="px-4 py-4 flex justify-between items-start w-[45vw]">
            <section>
              <div className="flex justify-between items-start">
                <h1 className="text-left text-lg font-semibold">
                  {item.hotelName}
                </h1>
              </div>
              <div className="flex gap-2 items-end mt-2">
                <figure>
                  <Image
                    className="w-auto h-auto"
                    width={100}
                    height={100}
                    src={item.hotelStars}
                    alt="Stars"
                  />
                </figure>
                <span className="text-[8px]">{item.hotelDesc}</span>
              </div>
              <div className="flex gap-2 items-center mt-2 text-xs">
                <span>
                  <b>{item.hotelRatingStars}</b> / {item.hotelRatingStarsTotal}
                </span>
                <span>({item.hotelReviewsCount} Ratings)</span>
                <span className="text-uppercase text-textPurple font-bold">
                  {item.hotelRating}
                </span>
              </div>
              <div>
                <span className="text-[10px] font-light">
                  Per Room Per Night
                </span>
              </div>
              <div className="flex gap-4 items-center mt-6">
                {item.hotelFacilities.map((hf: any) => (
                  <div
                    key={hf.id}
                    className="flex gap-2 items-center font-light text-textPrimary"
                  >
                    <span>{<hf.icon width="20" fill="#8A92A6" />}</span>
                    <span className="text-xs font-normal">{hf.desc}</span>
                  </div>
                ))}
                {/* Mengarah ke file booking details */}
                <Link href="/">
                  <div className="flex gap-2 items-center text-xs font-semibold text-textPurple">
                    <Plus width="10" height="10" stroke="#5B33A8" />
                    <span>All Facilities</span>
                  </div>
                </Link>
              </div>
            </section>
            <section className="mr-1">
              {/* Pergi ke detail booking */}
              <Link href="booking/details" target="_blank">
                <div
                  className="flex gap-2 justify-end items-center mb-8 text-xs text-textPurple cursor-pointer"
                  onClick={onViewDetails}
                >
                  <span>Lihat Detail</span>
                  <ChevronRight width="7" fill="#7743DB" />
                </div>
              </Link>
              <div>
                <span className="text-rose-500 text-xs line-through mr-2">
                  {formatRupiah(item.hotelFaciRatePrice)}
                </span>
                <span className="text-xs bg-yellow-300 py-[2px] px-1 rounded">
                  -{item.hotelFaciDiscount}%
                </span>
                <h1 className="text-right font-semibold mt-1">
                  {formatRupiah(item.hotelFaciLowPrice)}
                </h1>
              </div>
              {/* Pergi ke modify booking */}
              <Link href="booking/modify" target="_blank">
                <div className="mt-7 text-right cursor-pointer">
                  <BgButton padding="0.5rem 1rem" title="Booking Now" />
                </div>
              </Link>
            </section>
          </article>
        </section>
      ))}
    </div>
  )
}

export default CardBooking
