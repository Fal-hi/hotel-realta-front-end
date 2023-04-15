import React, { Fragment, useEffect, useState } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useDispatch, useSelector } from "react-redux"
import { doAddOrderResto } from "@/redux/RESTO/action/actionOrder"
import { Cart, Coupon } from "@/components/icons"
import BgButton from "@/components/buttons/BgButton"
import { doGetRestoMenuAll } from "@/redux/RESTO/action/actionadmin"
import { SearchInput } from "@/components/searchInput"
import { Pagination } from "@/components/pagination"
import router from "next/router"


const RestoMenusTampil = () => {
  const { restophotos, refresh } = useSelector(
    (state: any) => state.restomenureducers
  )
  const dispatch = useDispatch()

  const { adminresto } = useSelector((state: any) => state.adminRestoReducers)

  const { orderresto, message } = useSelector((state: any) => state.orderrestoreducers)

  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [entry, setEntry] = useState(6)
  const [sortType, setSortType] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const [cart, setCart] = useState<any[]>([])
  

  const handleSortTypeChange = (event:any) => {
    setSortType(event.target.value);
  };

  const [currentSlide, setCurrentSlide] = useState(0)

  const [test, setTest] = useState(false);

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

  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }

  // const [showSuccessModal, setShowSuccessModal] = useState(false)
  
  const createOrder = async (cart: any) => {
    const data = cart.map((item: any) => {
      const discount = ((item.price * item.quantity )* 0.05);
      return {
        orme_price: item.price.toString(),
        orme_qty: item.quantity,
        orme_subtotal: (item.price * item.quantity - discount).toString(), // kurangi nilai diskon dari subtotal
        orme_discount: discount.toString(),
        // omde_orme_id: 2,
        omde_reme_id: item.id,
      }
    })
    
     await dispatch(doAddOrderResto(data));

    setTest(true);
   
    // const message = result.payload[0].omde_orme_id;
    // const orme = message;
    // setShowSuccessModal(true)
   }

   

   useEffect(() => {
    if(message && message[0].omde_orme_id && test) {
      router.push({
        pathname: "/resto/orders",
        query: {
         orme_id: message[0].omde_orme_id,
        },
      });
    }
   }, [message, test])
   
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
 
  const totalDiscount = cart.reduce((acc, item) => acc + item.price * item.quantity * 0.05, 0) // hitung total diskon

  useEffect(() => {
    dispatch(doGetRestoMenuAll(search, page, entry, sortType))
  }, [refresh, search, page, entry, dispatch, isOpen, sortType])

  return (
    <div className="mx-auto font-poppins-regular">
      <div className="mb-8 mx-auto flex gap-12 justify-center items-center">
          <SearchInput onChange={handleSearchChange}/>
            {/* <label htmlFor="sort">Sort by:</label> */}
          <select className="bg-violet-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[11rem] p-2.5
            dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="sort" value={sortType} onChange={handleSortTypeChange}>
            <option value="ASC">Price Low To High</option>
            <option value="DESC">Price High To Low</option>
          </select>
      </div>

      <div className="flex w-full gap-20 justify-between">
        <div className="w-8/12">
          <div className="grid grid-cols-3 gap-10">
            {(adminresto.data || []).map((menu: any, index: number) => (
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
                          className="w-full object-fit object-center lg:h-[15rem] lg:w-full"
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
                  <h3 className="text-base text-gray-700 mt-2">{menu.reme_name}</h3>
                  <p className="text-xs text-gray-500">
                    {menu.reme_description}
                  </p>
                  <p className={menu.reme_status=== 'empty' ? 'text-red-600': 'text-green-400'}>
                    {menu.reme_status}
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
                <div className="mt-4 flex justify-between items-end">
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
                    <span className="font-semibold"> Discount(5%) : </span>
                    <span className="py-1 px-2 rounded">
                      {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(totalDiscount)}
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
                      ) - totalDiscount
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
                        totalDiscount) *
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
                        totalDiscount) *
                        1.1
                    )}
                  </h1>
                </div>

                  <div className="mt-8 flex justify-end">
                    <BgButton title="Create Order" width="w-full"  onClick={() => createOrder(cart)} /> 
                  </div>
              
              </>
            )}
            {cart.length === 0 && (
              <p className="text-center font-bold text-gray-700">
                Keranjang belanja kosong
              </p>
            )}
          </section>

                 
        </div>
      </div>
      <div className="my-8">
        <Pagination pagination={{totalPage: adminresto?.totalPage, page: adminresto?.currentPage}} setPage={setPage}/>
      </div>
    </div>
  )
}

export default RestoMenusTampil
