import Image from "next/image"
import Bedroom1 from "@/assets/image/bedrooms/bedroom1.jpg"
import Bedroom2 from "@/assets/image/bedrooms/bedroom2.jpg"
import Bedroom3 from "@/assets/image/bedrooms/bedroom3.jpg"
import Bedroom4 from "@/assets/image/bedrooms/bedroom4.jpg"
import Bedroom5 from "@/assets/image/bedrooms/bedroom5.jpg"
import Stars from "@/assets/image/Stars.png"
import { OutlineButton } from "@/components/buttons/OutlineButton"
import formatRupiah from "@/functions/formatRupiah"
import { Coupon } from "@/components/icons"
import BgButton from "@/components/buttons/BgButton"
import { Ac, Car, Cart, Coffee, Tv, Wifi } from "@/components/icons"
import InputCheckbox from "@/components/input/InputCheckbox"

const bedroomImages = [
  {
    id: 1,
    image: Bedroom2,
    alt: "Bedroom2",
  },
  {
    id: 2,
    image: Bedroom3,
    alt: "Bedroom3",
  },
  {
    id: 3,
    image: Bedroom4,
    alt: "Bedroom4",
  },
  {
    id: 4,
    image: Bedroom5,
    alt: "Bedroom5",
  },
]

const hotelFacilities = [
  {
    id: 1,
    icon: Car,
    desc: "Parking",
  },
  {
    id: 2,
    icon: Coffee,
    desc: "Coffee",
  },
  {
    id: 3,
    icon: Cart,
    desc: "Market",
  },
]

const roomFacilities = [
  {
    id: 1,
    icon: Ac,
    desc: "AC",
  },
  {
    id: 2,
    icon: Tv,
    desc: "TV",
  },
  {
    id: 3,
    icon: Wifi,
    desc: "Wifi",
  },
]

const chooseRooms = [
  {
    id: 1,
    roomName: "Indonesia Deluxe Double",
    roomMaxVacant: 6,
    roomRatePrice: 450000,
    roomLowPrice: 275000,
    roomImage: Bedroom1,
  },
  {
    id: 2,
    roomName: "Indonesia Standard Double",
    roomMaxVacant: 4,
    roomRatePrice: 400000,
    roomLowPrice: 250000,
    roomImage: Bedroom2,
  },
  {
    id: 3,
    roomName: "Indonesia Suite Family",
    roomMaxVacant: 6,
    roomRatePrice: 550000,
    roomLowPrice: 300000,
    roomImage: Bedroom3,
  },
]

const BookingDetails = () => {
  return (
    <div className="rounded-md p-4 mt-2 text-textPrimary">
      <section className="flex gap-4 items-start">
        <figure>
          <Image
            width={600}
            height={600}
            src={Bedroom1}
            alt="Bedroom1"
            className="rounded-lg w-auto h-auto"
          />
        </figure>
        <div className="columns-2">
          {bedroomImages.map((item: any) => (
            <figure key={item.id} className="mb-4">
              <Image
                width={290}
                src={item.image}
                alt={item.alt}
                className="rounded-lg w-[290px] h-auto"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="flex justify-between items-start mt-8 text-textPrimary">
        <article className="w-[51.667%]">
          <h1 className="font-bold mb-1 text-2xl">Hotel Sentul Bogor</h1>
          <div className="flex gap-2 items-end mt-2">
            <figure>
              <Image
                className="w-auto h-auto"
                width={100}
                height={100}
                src={Stars}
                alt="Stars"
              />
            </figure>
            <span className="text-xs">Near Sentul Bogor</span>
          </div>
          <div className="flex gap-2 items-center mt-2 text-xs">
            <span>
              <b>4.2</b> / 5
            </span>
            <span>(300 Ratings)</span>
            <span className="text-uppercase text-textPurple font-bold">
              Good
            </span>
          </div>
          <div>
            <span className="text-xs font-light">Per Room Per Night</span>
          </div>
          <p className="text-sm my-8">
            Terletak sangat dekat dengan restoran terkenal, Bakmi Asoy, OYO 1948
            Apartement Sentul Tower, adalah akomodasi populer yang disajikan
            dengan indah di Bogor. Properti ini, juga memastikan Anda dekat
            dengan pusat perbelanjaan populer dan restoran-restoran terkenal di
            kota. Kota ini memungkinkan Anda untuk rehat sejenak dari kota
            Jakarta yang sibuk untuk menikmati pemandangan terbaik Indonesia.
          </p>
          <h3 className="font-semibold font-sm mb-2">Hotel Facilities</h3>
          <div className="flex gap-4 items-center">
            {hotelFacilities.map((hf: any) => (
              <div
                key={hf.id}
                className="flex gap-2 items-center font-light text-textPrimary"
              >
                <span>{<hf.icon width="20" fill="#8A92A6" />}</span>
                <span className="text-xs font-normal">{hf.desc}</span>
              </div>
            ))}
          </div>
          {/* Choose Your Room */}
          <div className="mt-16">
            <h1 className="font-bold text-lg mb-12">Choose Your Rooms</h1>
            {chooseRooms.map((rm: any) => (
              <div
                key={rm.id}
                className="flex justify-between items-center mb-8"
              >
                <div className="flex justify-between bg-white rounded-md shadow w-full">
                  <div className="p-4">
                    <h3 className="font-bold">{rm.roomName}</h3>
                    <p className="text-xs mt-1">
                      Max Vacant:{" "}
                      <b className="text-textPurple">{rm.roomMaxVacant}</b>
                    </p>
                    <div className="flex gap-4 items-center text-sm mt-6">
                      <h4 className="font-semibold">
                        {formatRupiah(rm.roomLowPrice)}
                      </h4>
                      <h5 className="text-xs text-rose-500 line-through">
                        {formatRupiah(rm.roomRatePrice)}
                      </h5>
                    </div>
                    <div className="flex gap-4 items-center mt-4">
                      {roomFacilities.map((rf: any) => (
                        <div
                          key={rf.id}
                          className="flex gap-2 items-center font-light text-textPrimary"
                        >
                          <span>{<rf.icon width="20" fill="#8A92A6" />}</span>
                          <span className="text-xs font-normal">{rf.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute top-0 right-0 z-50">
                      <InputCheckbox />
                    </div>
                    <figure>
                      <Image
                        className="rounded-tr-md rounded-br-md w-[240px] h-auto"
                        width={240}
                        src={rm.roomImage}
                        alt="Bedrooms"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Hotel Policies */}
          {/* <div className="mt-12 flex gap-4 items-center">
            <h1 className="font-bold text-lg mb-10">Ratings And Reviews</h1>
            <div>
              <h1 className="text-semibold">4.2</h1>
              <span>363 Reviews</span>
              <span>Good</span>
            </div>
          </div> */}
        </article>
        {/* ldkjsdjkbsdk */}
        <article className="bg-white p-6 shadow w-[34.33%] rounded-md">
          <div className="flex justify-between items-start mb-4">
            <h1 className="font-semibold text-textPurple">
              Sign In to see a lower price
            </h1>
            <OutlineButton title="Sign In" />
          </div>
          <hr />
          <div className="mt-3 flex justify-between items-center">
            <p className="text-xs mt-1">
              Min, 26 Mar 2023 <b className="text-textPurple">to</b> <br /> Sen,
              27 Mar 2023
            </p>
            <div>
              <span className="text-rose-500 text-xs line-through mr-2">
                {formatRupiah(2000000)}
              </span>
              <span className="text-xs bg-yellow-300 py-[2px] px-1 rounded">
                -{50}%
              </span>
              <h1 className="text-right font-semibold mt-1">
                {formatRupiah(1000000)}
              </h1>
            </div>
          </div>
          <div className="flex justify-between items-center bg-[#E7F2FF] rounded-md p-6 mt-8">
            <div className="flex gap-4 items-center">
              <Coupon />
              <span>SAFESTAY45</span>
            </div>
            <h3>{formatRupiah(100000)}</h3>
          </div>
          <div className="flex justify-between items-center my-8 text-sm">
            <span className="font-semibold">Your Saving</span>
            <span className="bg-yellow-300 py-1 px-2 rounded">
              {formatRupiah(100000)}
            </span>
          </div>
          <hr />
          <div className="flex justify-between items-center font-semibold mt-2">
            <h1>Total Price</h1>
            <h1>{formatRupiah(900000)}</h1>
          </div>
          <div className="mt-8 flex justify-end">
            <BgButton title="Continue to Book" width="full" />
          </div>
        </article>
      </section>
    </div>
  )
}

export default BookingDetails
