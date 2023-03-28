import { Fragment } from "react"
import Image from "next/image"
import Link from "next/link"
import Stars from "@/assets/image/Stars.png"
import Bedroom1 from "@/assets/image/bedrooms/bedroom1.jpg"
import Bedroom2 from "@/assets/image/bedrooms/bedroom2.jpg"
import Bedroom3 from "@/assets/image/bedrooms/bedroom3.jpg"
import Bedroom4 from "@/assets/image/bedrooms/bedroom4.jpg"
import Bedroom5 from "@/assets/image/bedrooms/bedroom5.jpg"
import Bedroom6 from "@/assets/image/bedrooms/bedroom6.jpg"
import BgButton from "@/components/buttons/BgButton"
import Carousel from "nuka-carousel/lib/carousel"
import { Car, Coffee, Cart, ChevronRight, Plus } from "@/components/icons"
import { formatRupiah } from "@/functions/formatRupiah"

// const hotelImages = [
//   {
//     id: 1,
//     image: Bedroom1,
//   },
//   {
//     id: 2,
//     image: Bedroom2,
//   },
//   {
//     id: 3,
//     image: Bedroom3,
//   },
//   {
//     id: 4,
//     image: Bedroom4,
//   },
//   {
//     id: 5,
//     image: Bedroom5,
//   },
//   {
//     id: 6,
//     image: Bedroom6,
//   },
// ]

// const hotelFaci = [
//   {
//     id: 1,
//     icon: <Car width="20" fill="#8A92A6" />,
//     desc: "Parking",
//   },
//   {
//     id: 2,
//     icon: <Coffee width="20" fill="#8A92A6" />,
//     desc: "Coffee",
//   },
//   {
//     id: 3,
//     icon: <Cart width="20" stroke="#8A92A6" />,
//     desc: "Market",
//   },
// ]

const cardHotel = [
  {
    id: 1,
    hotelImages: [
      {
        id: 1,
        image: Bedroom1,
      },
      {
        id: 2,
        image: Bedroom2,
      },
      {
        id: 3,
        image: Bedroom3,
      },
      {
        id: 4,
        image: Bedroom4,
      },
      {
        id: 5,
        image: Bedroom5,
      },
      {
        id: 6,
        image: Bedroom6,
      },
    ],
    hotelName: "Hotel Sentul Bogor",
    hotelDesc: "Near Sentul Hotel",
    hotelStars: Stars,
    hotelRatingStars: 3.9,
    hotelRatingStarsTotal: 5,
    hotelReviewsCount: 336,
    hotelRating: "Good",
    hotelFacilities: [
      {
        id: 1,
        icon: <Car width="20" fill="#8A92A6" />,
        desc: "Parking",
      },
      {
        id: 2,
        icon: <Coffee width="20" fill="#8A92A6" />,
        desc: "Coffee",
      },
      {
        id: 3,
        icon: <Cart width="20" stroke="#8A92A6" />,
        desc: "Market",
      },
    ],
    hotelFaciRatePrice: 550000,
    hotelFaciLowPrice: 350000,
    hotelFaciDiscount: 10,
  },
  {
    id: 2,
    hotelImages: [
      {
        id: 1,
        image: Bedroom1,
      },
      {
        id: 2,
        image: Bedroom2,
      },
      {
        id: 3,
        image: Bedroom3,
      },
      {
        id: 4,
        image: Bedroom4,
      },
      {
        id: 5,
        image: Bedroom5,
      },
      {
        id: 6,
        image: Bedroom6,
      },
    ],
    hotelName: "Sentul Halaya Hotel",
    hotelDesc: "Near Sentul Golf",
    hotelStars: Stars,
    hotelRatingStars: 4.2,
    hotelRatingStarsTotal: 5,
    hotelReviewsCount: 236,
    hotelRating: "Good",
    hotelFacilities: [
      {
        id: 1,
        icon: <Car width="20" fill="#8A92A6" />,
        desc: "Parking",
      },
      {
        id: 2,
        icon: <Coffee width="20" fill="#8A92A6" />,
        desc: "Coffee",
      },
      {
        id: 3,
        icon: <Cart width="20" stroke="#8A92A6" />,
        desc: "Market",
      },
    ],
    hotelFaciRatePrice: 650000,
    hotelFaciLowPrice: 450000,
    hotelFaciDiscount: 10,
  },
  {
    id: 3,
    hotelImages: [
      {
        id: 1,
        image: Bedroom1,
      },
      {
        id: 2,
        image: Bedroom2,
      },
      {
        id: 3,
        image: Bedroom3,
      },
      {
        id: 4,
        image: Bedroom4,
      },
      {
        id: 5,
        image: Bedroom5,
      },
      {
        id: 6,
        image: Bedroom6,
      },
    ],
    hotelName: "Mediterania Hotel",
    hotelDesc: "Near Bukit Golf Hijau",
    hotelStars: Stars,
    hotelRatingStars: 4.7,
    hotelRatingStarsTotal: 5,
    hotelReviewsCount: 536,
    hotelRating: "Exelent",
    hotelFacilities: [
      {
        id: 1,
        icon: <Car width="20" fill="#8A92A6" />,
        desc: "Parking",
      },
      {
        id: 2,
        icon: <Coffee width="20" fill="#8A92A6" />,
        desc: "Coffee",
      },
      {
        id: 3,
        icon: <Cart width="20" stroke="#8A92A6" />,
        desc: "Market",
      },
    ],
    hotelFaciRatePrice: 850000,
    hotelFaciLowPrice: 650000,
    hotelFaciDiscount: 10,
  },
]

const CardBooking = (props: any) => {
  return (
    <div>
      {cardHotel.map((item: any) => (
        <section
          key={item.id}
          className="flex text-textPrimary bg-white mt-4 mb-4 shadow rounded-lg"
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
                    className="rounded-tl-lg rounded-bl-lg"
                    width={300}
                    height={300}
                    src={hi.image}
                    alt="Bedroom"
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
                    className=""
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
                    {hf.icon}
                    <span className="text-xs font-normal">{hf.desc}</span>
                  </div>
                ))}
                <div className="flex gap-2 items-center font-light text-textPrimary">
                  <Plus width="15" />
                </div>
              </div>
            </section>
            <section className="mr-1">
              <div className="flex gap-2 justify-end items-center mb-8 text-xs text-textPurple">
                <Link href="/">Lihat Detail</Link>
                <ChevronRight width="7" fill="#7743DB" />
              </div>
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
              <div className="mt-4 text-right">
                <BgButton px="4" py="2" title="Booking Now" />
              </div>
            </section>
          </article>
        </section>
      ))}
    </div>
  )
}
// const CardBooking = (props: any) => {
//   return (
//     <section className="flex text-textPrimary bg-white mt-4 mb-4 shadow rounded-lg">
//       <div className="w-2/6">
//         <Carousel
//           autoplay={true}
//           animation="zoom"
//           autoplayInterval={2000}
//           zoomScale={0.98}
//           wrapAround={true}
//           renderCenterLeftControls={null}
//           renderCenterRightControls={null}
//           defaultControlsConfig={{
//             pagingDotsStyle: {
//               fill: "white",
//               margin: "1px",
//             },
//           }}
//         >
//           {hotelImages.map(item => (
//             <Fragment key={item.id}>
//               <Image
//                 className="rounded-tl-lg rounded-bl-lg"
//                 width={300}
//                 height={300}
//                 src={item.image}
//                 alt="Bedroom"
//               />
//             </Fragment>
//           ))}
//         </Carousel>
//       </div>
//       <article className="px-4 py-4 flex justify-between items-start w-[45vw]">
//         <section>
//           <div className="flex justify-between items-start">
//             <h1 className="text-left text-lg font-semibold">
//               Hotel Sentul Bogor
//             </h1>
//           </div>
//           <div className="flex gap-2 items-end mt-2">
//             <figure>
//               <Image
//                 className=""
//                 width={100}
//                 height={100}
//                 src={Stars}
//                 alt="Stars"
//               />
//             </figure>
//             <span className="text-[8px]">Near Sentul Golf</span>
//           </div>
//           <div className="flex gap-2 items-center mt-2 text-xs">
//             <span>
//               <b>4.2</b> / 5
//             </span>
//             <span>(336 Ratings)</span>
//             <span className="text-uppercase text-textPurple font-bold">
//               Good
//             </span>
//           </div>
//           <div>
//             <span className="text-[10px] font-light">Per Room Per Night</span>
//           </div>
//           <div className="flex gap-4 items-center mt-6">
//             {hotelFaci.map(item => (
//               <div
//                 key={item.id}
//                 className="flex gap-2 items-center font-light text-textPrimary"
//               >
//                 {item.icon}
//                 <span className="text-xs font-normal">{item.desc}</span>
//               </div>
//             ))}
//             <div className="flex gap-2 items-center font-light text-textPrimary">
//               <Plus width="15" />
//             </div>
//           </div>
//         </section>
//         <section className="mr-1">
//           <div className="flex gap-2 justify-end items-center mb-8 text-xs text-textPurple">
//             <Link href="/">Lihat Detail</Link>
//             <ChevronRight width="7" fill="#7743DB" />
//           </div>
//           <div>
//             <span className="text-rose-500 text-xs line-through mr-2">
//               {formatRupiah(2000000)}
//             </span>
//             <span className="text-xs bg-yellow-300 py-[2px] px-1 rounded">
//               -50%
//             </span>
//             <h1 className="text-right font-semibold mt-1">
//               {formatRupiah(1000000)}
//             </h1>
//           </div>
//           <div className="mt-4 text-right">
//             <BgButton px="4" py="2" title="Booking Now" />
//           </div>
//         </section>
//       </article>
//     </section>
//   )
// }

export default CardBooking
