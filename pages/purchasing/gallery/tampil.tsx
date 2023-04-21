/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useEffect, useState } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useDispatch, useSelector } from "react-redux"
import { Cart, Coupon } from "@/components/icons"
import BgButton from "@/components/buttons/BgButton"
import { doAddPohe, doReqGetPhotos } from "@/redux/PURCHASING/action/actionPohe"
import { SearchInput } from "@/components/searchInput"
import { Pagination } from "@/components/pagination"
import { doAddPode } from "@/redux/PURCHASING/action/actionPode"
import apiPurchasing from "@/api/purchasing/apiPurchasing"
import SuccessModal from "./sukses"

const HalamanGallery = () => {
  const { gallery, message, refresh } = useSelector(
    (state: any) => state.galleryReducers
  )
  const { listOrder, messagee, refreshh } = useSelector(
    (state: any) => state.listOrderReducers
  )

  console.log("gallery", gallery)

  const dispatch = useDispatch()

  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [entry, setEntry] = useState(8)

  const [cart, setCart] = useState<any[]>([])
  const [payType, setPayType] = useState("")

  const handlePayTypeChange = (event: any) => {
    setPayType(event.target.value)
  }

  const [currentSlide, setCurrentSlide] = useState(0)

  const handlePrevClick = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? gallery.data.data.length - 1 : prevSlide - 1
    )
  }

  const handleNextClick = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === gallery.data.data.length - 1 ? 0 : prevSlide + 1
    )
  }

  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const [poheId, setPoheId] = useState<any | null>(null)

  const createOrderPohe = async (
    cart: any,
    payType: string,
    poheId: number
  ) => {
    const groupedCart = cart.reduce((acc: any, item: any) => {
      const vendorId = item.vendorId
      const existingGroup = acc.find(
        (group: any) => group.vendorId === vendorId && group.poheId === poheId
      )
      if (existingGroup) {
        existingGroup.items.push(item)
      } else {
        acc.push({ vendorId, poheId, items: [item] })
      }
      return acc
    }, [])

    for (const group of groupedCart) {
      const data = {
        pohe_status: 1,
        pohe_pay_type: payType,
        pohe_vendor_id: group.vendorId,
      }
      const response = await apiPurchasing.createPohe([data])

      const poheData = response.data.data[0].pohe_id
      const dataPode = group.items.map((item: any) => {
        return {
          pode_pohe_id: poheData,
          pode_order_qty: item.quantity,
          pode_price: item.price,
          pode_line_total: item.price * item.quantity,
          pode_stock_id: item.id,
          pode_received_qty: 0,
          pode_rejected_qty: 0,
          pode_stocked_qty: 0,
        }
      }
      )
      dispatch(doAddPode(dataPode))
    }
    setShowSuccessModal(true)
  }

  function addToCart(menu: any) {
    const cartItem = cart.find(item => item.id === menu.stock_id)
    if (cartItem) {
      setCart(
        cart.map(item =>
          item.id === menu.stock_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      )
    } else {
      setCart([
        ...cart,
        {
          id: menu.stock_id,
          name: menu.stock_name,
          vendor: menu.vendor_product.vendor.vendor_name,
          price: menu.vendor_product.vepro_price,
          vendorId: menu.vendor_product.vendor.vendor_entity_id,
          quantity: 1,
        },
      ])
    }
  }

  const margin = {
    margin: "0 10px",
  }

  useEffect(() => {
    dispatch(doReqGetPhotos(search, page, entry))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, search, page, entry])

  useEffect(() => {
    if (listOrder !== undefined) {
      console.log("-->", listOrder)
    }
  }, [listOrder, messagee])

  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  }

  return (
    <div>
      <div className="flex items-center">
        <div className="flex flex-row w-full justify-between py-4 mb-4">
          <div>
            <SearchInput onChange={handleSearchChange} />
          </div>
        </div>
      </div>

      <div className="mx-auto font-poppins-regular">
        <div className="flex w-full gap-20 justify-between">
          <div className="w-8/12">
            <div className="grid grid-cols-3 gap-10">
              {(gallery?.data?.data || []).map((tampil: any, index: number) => (
                <div
                  key={tampil.stock_id}
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
                      {tampil.stock_photo.map((photo: any) => (
                        <Fragment key={photo.spho_id}>
                          <img
                            className="w-full object-fit object-center lg:h-[15rem] lg:w-full"
                            src={`http://localhost:5000${photo.spho_url}`}
                            alt={`http://localhost:5000${photo.spho_url}`}
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
                    <h3 className="text-sm text-gray-700">
                      {tampil?.stock_name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      {`Vendor ${tampil?.vendor_product?.vendor.vendor_name}`}
                    </p>
                    <p className="text-xs text-gray-500">
                      {`Stocked: ${tampil?.vendor_product?.vepro_qty_stocked}`}
                    </p>
                    <p className="text-xs text-gray-500">
                      {`Reorder: ${tampil?.stock_reorder_point}`}
                    </p>

                    <div className="flex justify-between items-center">
                      <p className="mt-1 text-sm text-gray-700 font-poppins-semibold">
                        <span>
                          {Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(tampil?.vendor_product?.vepro_price)}
                        </span>
                      </p>
                    </div>

                    <div style={{ marginTop: "1rem" }}></div>
                    <div>
                      <button
                        onClick={() => addToCart(tampil)}
                        className={`z-50 text-xs flex items-center  py-2 px-2 rounded-md 
                ${
                  tampil?.vendor_product?.vepro_qty_stocked === 0
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[#7743DB] hover:bg-[#5f35ac]"
                } 
                text-white`}
                        disabled={
                          tampil?.vendor_product?.vepro_qty_stocked === 0
                        }
                      >
                        ADD CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1rem" }}></div>
            <Pagination
              pagination={{
                totalPage: gallery?.data?.totalPage,
                page: gallery?.data?.currentPage,
              }}
              setPage={setPage}
            />
          </div>

          <div className="w-4/14">
            <section className="bg-white p-6 shadow  rounded-md sticky top-28">
              <div className="flex justify-between items-start">
                <h1 className="font-semibold text-textPurple">
                  <Cart />
                </h1>
                <h2 className="text-sm  mb-4">Items Ordered</h2>
              </div>
              <hr />

              {cart.map((item, index) => (
                <>
                  <div className="mt-4 flex justify-between items-center">
                    <div>
                      <p className="flex justify-between items-center font-semibold mt-2">
                        {item.name}
                      </p>
                      <h5 className="text-sm mt-1">{item.vendor}</h5>
                      <h1 className="font-semibold mt-1">
                        {Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(item.price)}{" "}
                        x {item.quantity}
                      </h1>
                    </div>
                    <h1 className="font-semibold mt-1" style={margin}>
                      =
                    </h1>
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
                  <hr />
                  <div className="flex justify-between items-center font-semibold mt-2">
                    <h1>Subtotal </h1>
                    <h1>
                      {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(
                        cart.reduce(
                          (acc, item) => acc + item.price * item.quantity,
                          0
                        )
                      )}
                    </h1>
                  </div>
                  <div className="flex justify-between items-center my-4 text-sm">
                    <span className="font-semibold"> Tax (10%): </span>
                    <span className="bg-yellow-300 py-1 px-2 rounded">
                      {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(
                        cart.reduce(
                          (acc, item) => acc + item.price * item.quantity,
                          0
                        ) * 0.1
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between items-center font-semibold mt-2">
                    <h1>Total Price </h1>
                    <h1>
                      {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(
                        cart.reduce(
                          (acc, item) => acc + item.price * item.quantity,
                          0
                        ) * 1.1
                      )}
                    </h1>
                  </div>
                  <div
                    className="flex justify-between items-center font-semibold mt-2"
                    style={{ marginTop: "1rem", marginBottom: "1rem" }}
                  >
                    <label>Pay Type</label>
                    <select
                      id="pohe_pay_type"
                      value={payType}
                      onChange={handlePayTypeChange}
                      className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option selected>Choose a pay type</option>
                      <option value="TR">TRANSFER</option>
                      <option value="CA">CASH</option>
                    </select>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <BgButton
                      title="Request Order"
                      onClick={() => {
                        createOrderPohe(cart, payType, poheId)
                        setCart([])
                        setShowSuccessModal(true)
                        alert('Order requested successfully!')
                      }}
                    />
                    {/* {showSuccessModal && (
                      <SuccessModal
                        onClose={handleCloseSuccessModal}
                        title="tessss"
                        info="sukses bgtttt"
                      />
                    )} */}
                  </div>
                </>
              )}
              {cart.length === 0 && (
                <p className="text-center font-bold text-gray-700">
                  Nothing selected
                </p>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HalamanGallery
