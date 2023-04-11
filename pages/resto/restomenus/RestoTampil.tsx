import React, { Fragment, useEffect, useState } from "react"
//import Carousel from "nuka-carousel"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Breadcumb from "@/components/breadcumb"
import { useDispatch, useSelector } from "react-redux"
import { getGuestMenuPhoto } from "@/redux/RESTO/action/actionrestomenu"
import { GiShoppingCart } from "react-icons/gi"
import { doAddOrderResto } from "@/redux/RESTO/action/actionOrder"
import formatRupiah from "@/functions/formatRupiah"
import { OutlineButton } from "@/components/buttons/OutlineButton"
import { Cart, Coupon } from "@/components/icons"
import BgButton from "@/components/buttons/BgButton"
import Link from "next/link"

const RestoMenusTampil = () => {
  const { restophotos, refresh } = useSelector(
    (state: any) => state.restomenureducers
  )
  const dispatch = useDispatch()

  const [cart, setCart] = useState<any[]>([])
  const [discount, setDiscount] = useState<number>(0)

  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrevClick = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? restophotos.data.length - 1 : prevSlide - 1
    )
  }

  const handleNextClick = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === restophotos.data.length - 1 ? 0 : prevSlide + 1
    )
  }

  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const createOrder = async (cart: any) => {
    const data = cart.map((item: any) => {
      return {
        orme_price: item.price.toString(),
        orme_qty: item.quantity,
        orme_subtotal: (item.price * item.quantity - discount).toString(), // kurangi nilai diskon dari subtotal
        orme_discount: discount.toString(),
        omde_orme_id: 1,
        omde_reme_id: item.id,
      }
    })
    await dispatch(doAddOrderResto(data))
    setShowSuccessModal(true)
  }

  function addToCart(menu: any) {
    const cartItem = cart.find(item => item.id === menu.reme_id)

    if (cartItem) {
      setCart(
        cart.map(item =>
          item.id === menu.reme_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCart([
        ...cart,
        {
          id: menu.reme_id,
          name: menu.reme_name,
          price: menu.reme_price,
          quantity: 1,
        },
      ])
    }
  }

  useEffect(() => {
    dispatch(getGuestMenuPhoto())
  }, [dispatch, refresh])

  return (
    <div className="mx-auto font-poppins-regular">
      <div className="flex w-full gap-20 justify-between">
        <div className="w-8/12">
          <div className="grid grid-cols-3 gap-10">
            {(restophotos.data || []).map((menu: any, index: number) => (
              <div
                key={menu.reme_id}
                className={`group relative bg-white rounded-lg border ${
                  index === currentSlide ? "current-slide" : ""
                }`}
              >
                <div className="min-h-60  aspect-h-1 aspect-w-1  overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-60">
                  <Carousel
                    autoPlay={false}
                    interval={2000}
                    infiniteLoop={true}
                    selectedItem={index}
                  >
                    {menu.resto_menu_photos.map((photo: any) => (
                      <Fragment key={photo.remp_id}>
                        <img
                          className="w-full object-fit object-center lg:h-[20rem] lg:w-full"
                          src={photo.remp_url}
                          alt={photo.remp_url}
                        />
                      </Fragment>
                    ))}
                  </Carousel>
                  <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                    <button onClick={handlePrevClick}></button>
                  </div>
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                    <button onClick={handleNextClick}></button>
                  </div>
                </div>
                <div className="px-2 py-2">
                  <h3 className="text-sm text-gray-700">{menu.reme_name}</h3>
                  <p className="text-xs text-gray-500">
                    {menu.reme_description}
                  </p>

                  <div className="flex justify-between items-center">
                    <p className="mt-1 text-sm text-gray-700 font-poppins-semibold">
                      <span>
                        {Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(menu.reme_price)}
                      </span>
                    </p>
                    <div>
                      <button
                        onClick={() => addToCart(menu)}
                        className={`z-50 text-xs flex items-center  py-2 px-2 rounded-md 
                ${
                  menu.reme_status === "empty"
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[#7743DB] hover:bg-[#5f35ac]"
                } 
                text-white`}
                        disabled={menu.reme_status === "empty"}
                      >
                        ADD CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-4/14">
          <section className="bg-white p-6 shadow  rounded-md sticky top-28">
            <div className="flex justify-between items-start">
              <h1 className="font-semibold text-textPurple">
              <Cart />
              </h1>
              <h2 className="text-sm  mb-4">Items Orders</h2>
            </div>
            <hr />
            {cart.map((item, index) => (
              <>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm mt-1">{item.name}</p>
                    <h1 className="font-semibold mt-1">
                      {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(item.price)}
                    </h1>
                  </div>

                  {item.quantity}

                  <div>
                    <span className="text-rose-500 text-xs line-through mr-2">
                      <button
                        className="ml-2 text-xs text-red-600"
                        onClick={() =>
                          setCart(
                            cart.filter(cartItem => cartItem.id !== item.id)
                          )
                        }
                      >
                        Hapus
                      </button>
                    </span>
                    <h1 className="text-right font-semibold mt-1">
                      {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(item.price * item.quantity)}
                    </h1>
                  </div>
                </div>
              </>
            ))}
            <div className="mt-4"></div>
            {cart.length > 0 && (
              <>
                <div className="flex justify-between items-center bg-[#E7F2FF] rounded-md p-2 mt-8">
                  <div className="flex gap-4 items-center">
                    <Coupon />
                    <span>
                      <input
                        type="number"
                        className="w-full rounded-md p-2 ml-auto"
                        placeholder="Masukkan jumlah diskon"
                        value={discount}
                        onChange={e => setDiscount(Number(e.target.value))}
                      />
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center my-4 text-sm">
                  <span className="font-semibold"> Total : </span>
                  <span className=" py-1 px-2 rounded">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(
                      cart.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      ) - discount
                    )}
                  </span>
                </div>

                <div className="flex justify-between items-center my-4 text-sm">
                  <span className="font-semibold"> Tax (10%): </span>
                  <span className="bg-yellow-300 py-1 px-2 rounded">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(
                      (cart.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      ) -
                        discount) *
                        0.1
                    )}
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
                    }).format(
                      (cart.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      ) -
                        discount) *
                        1.1
                    )}
                  </h1>
                </div>
                <Link href="/resto/invoice">
                  <div className="mt-8 flex justify-end">
                    <BgButton title="Create Order" width="w-full" />
                  </div>
                </Link>
              </>
            )}
            {cart.length === 0 && (
              <p className="text-center font-bold text-gray-700">
                Keranjang belanja kosong
              </p>
            )}
          </section>

          {/* <div className="bg-slate-200 w-full rounded-sm">
            <div className="w-full  border-2 border-black bg-white ">
              <div className="flex items-center">
                <GiShoppingCart className="text-6xl ml-3" />
                <h2 className="text-2xl font-bold mb-4">Keranjang Belanja</h2>
              </div>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="py-2 border">No.</th>
                    <th className="py-2 border">Nama Menu</th>
                    <th className="py-2 border">Jumlah</th>
                    <th className="py-2 border">Harga Satuan</th>
                    <th className="py-2 border">Subtotal</th>
                    <th className="py-2 border">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 ">{item.name}</td>
                      <td className="py-2 ">{item.quantity}</td>
                      <td className="py-2 ">
                        {Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(item.price)}
                      </td>
                      <td className="py-2 ">
                        {Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(item.price * item.quantity)}
                      </td>
                      <td className="py-2 ">
                        <button
                          className="ml-2 text-xs text-red-600"
                          onClick={() =>
                            setCart(
                              cart.filter(cartItem => cartItem.id !== item.id)
                            )
                          }
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {cart.length > 0 && (
                <>
                  <div className="flex items-center mt-4">
                    <label className="text-right font-bold ml-36 mb-2">
                      Diskon:
                    </label>
                    <input
                      type="number"
                      className="w-1/2 p-2 border border-gray-400 mb-4 ml-auto"
                      placeholder="Masukkan jumlah diskon"
                      value={discount}
                      onChange={e => setDiscount(Number(e.target.value))}
                    />
                  </div>
                  <div className="text-right font-bold mb-4">
                    Total Pembayaran setelah diskon:{" "}
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(
                      cart.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      ) - discount
                    )}
                  </div>
                  <div className="text-right font-bold mb-4">
                    Tax (10%):{" "}
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(
                      (cart.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      ) -
                        discount) *
                        0.1
                    )}
                  </div>
                  <div className="text-right font-bold mb-4">
                    Total Pembayaran (incl. tax):{" "}
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(
                      (cart.reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      ) -
                        discount) *
                        1.1
                    )}
                  </div>
                  <div className="flex items-center ml-36">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => createOrder(cart)}
                    >
                      CREATE ORDER
                    </button>
                  </div>
                  {showSuccessModal && (
                    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center flex-col animate-bounceIn">
                        <svg
                          className="h-6 w-6 text-green-500 mr-4"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                          <path d="M22 4L12 14.01l-3-3" />
                        </svg>
                        <div className="text-center">
                          <h2 className="text-lg font-bold mb-2">
                            Pesanan Berhasil Dibuat!
                          </h2>
                          <p className="text-sm text-gray-700">
                            Terima kasih telah melakukan pesanan di restoran
                            kami.
                          </p>
                        </div>
                        <div className="mt-4">
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                            onClick={() => setShowSuccessModal(false)}
                          >
                            OK
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
              {cart.length === 0 && (
                <p className="text-center font-bold text-gray-700">
                  Keranjang belanja kosong
                </p>
              )}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default RestoMenusTampil
