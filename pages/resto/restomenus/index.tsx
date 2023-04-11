import React, { Fragment, useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Breadcumb from "@/components/breadcumb"
import { useDispatch, useSelector } from 'react-redux'
// import { getGuestMenuPhoto } from '@/redux/RESTO/action/actionrestomenu'
import { GiShoppingCart } from 'react-icons/gi'
import { doAddOrderResto } from '@/redux/RESTO/action/actionOrder'
import { doGetRestoMenuAll } from '@/redux/RESTO/action/actionadmin';
import { SearchInput } from "@/components/searchInput"
import { Pagination } from "@/components/pagination"


const RestoMenusTampil = () => {
  const { restophotos } = useSelector((state: any) => state.restomenureducers);
  const dispatch = useDispatch();
  const { adminresto, refresh } = useSelector((state: any) => state.adminRestoReducers)
  const [cart, setCart] = useState<any[]>([]);
  const [discount, setDiscount] = useState<number>(0);

  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [entry, setEntry] = useState(4)
  const [isOpen, setIsOpen] = useState(false)


  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? restophotos.data.length - 1 : prevSlide - 1));
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) => (prevSlide === restophotos.data.length - 1 ? 0 : prevSlide + 1));
  };

  const handleSearchChange = (e: any): void => {
    setSearch(e.target.value)
  }

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const createOrder = async (cart: any) => {
    const data = cart.map((item: any) => {
      return {
        orme_price: item.price.toString(),
        orme_qty: item.quantity,
        orme_subtotal: ((item.price * item.quantity) - discount).toString(), // kurangi nilai diskon dari subtotal
        orme_discount: discount.toString(),
        omde_orme_id: 1,
        omde_reme_id: item.id,
      };
    });
    await dispatch(doAddOrderResto(data));
    setShowSuccessModal(true);
  };


  function addToCart(menu: any) {
    const cartItem = cart.find((item) => item.id === menu.reme_id);

    if (cartItem) {
      setCart(
        cart.map((item) =>
          item.id === menu.reme_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { id: menu.reme_id, name: menu.reme_name, price: menu.reme_price, quantity: 1 }]);
    }
  }

  // useEffect(() => {
  //   dispatch(getGuestMenuPhoto());
  // }, [dispatch, refresh]);
  useEffect(() => {
    dispatch(doGetRestoMenuAll(search, page, entry))
  }, [refresh, search, page, entry, dispatch,isOpen])

  


  return (
    <div>
      <div>
        <Breadcumb child={'Resto'} parent={'Dashboard'} detail={'Resto'} />
      </div>
      <div className="bg-white flex flex-col gap-4 items-start lg:flex-row">
        <div className="w-full lg:w-3/4">

        <div className='w-60'>
          <SearchInput onChange={handleSearchChange} />
        </div>

          {/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {(restophotos.data || []).map((menu: any) => (
              <div key={menu.reme_id} className="group relative">
                <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
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
                        fill: 'white',
                        margin: '1px',
                        height: '1rem',
                        objectFit: 'cover',
                        objectPosition: 'center',
                      },
                    }}
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
                  </div> */}
<div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-2 xl:gap-x-8">
  {(adminresto.data || []).map((menu: any, index: number) => (
    <div key={menu.reme_id} className={`group relative ${index === currentSlide ? 'current-slide' : ''}`}>
      <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
      <Carousel
  autoPlay={false}
  interval={2000}
  infiniteLoop={true}
  selectedItem={index}>


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
          </div>
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button onClick={handlePrevClick}>
             
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button onClick={handleNextClick}>
             
            </button>
          </div>
    
                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <h3 className="text-sm text-gray-700">{menu.reme_name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{menu.reme_description}</p>
                    <p className="mt-1 text-sm text-gray-500">{menu.reme_status}</p>
                    <p className="mt-1 text-sm text-gray-500">
                      <span>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(menu.reme_price)}</span>
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => addToCart(menu)}
                      className={`z-50 text-sm flex items-center rounded w-14 h-12 
                ${menu.reme_status === "empty" ? "bg-gray-500 cursor-not-allowed" : "bg-[#7743DB] hover:bg-[#5f35ac]"} 
                text-white`}
                      disabled={menu.reme_status === "empty"}
                    >
                      ADD CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='mt-8'>
          <Pagination pagination={{totalPage: adminresto?.totalPage, page: adminresto?.currentPage}} setPage={setPage}/>
          </div>
      

        </div>
        <div>
          <div>
            {/* <div className="w-full lg:w-100 bg-rose-400 mt-6 rounded-lg overflow-hidden shadow-lg"> */}


            <div className="w-full lg:w-[28rem] border-2 border-black bg-white mt-16 p-4">
              <div className="flex items-center">
                <GiShoppingCart className="text-6xl ml-3" />
                <h2 className="text-2xl font-bold mb-4">Keranjang Belanja</h2></div>
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
                      <td className="py-2 ">{index + 1}</td>
                      <td className="py-2 ">{item.name}</td>
                      <td className="py-2 ">{item.quantity}</td>
                      <td className="py-2 ">{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price)}</td>
                      <td className="py-2 ">{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price * item.quantity)}</td>
                      <td className="py-2 ">
                        <button className="ml-2 text-xs text-red-600" onClick={() => setCart(cart.filter(cartItem => cartItem.id !== item.id))}>
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
                    <label className="text-right font-bold ml-36 mb-2">Diskon:</label>
                    <input type="number" className="w-1/2 p-2 border border-gray-400 mb-4 ml-auto" placeholder="Masukkan jumlah diskon" value={discount} onChange={(e) => setDiscount(Number(e.target.value))} />
                  </div>
                  <div className="text-right font-bold mb-4">
                    Total Pembayaran setelah diskon: {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format((cart.reduce((acc, item) => acc + item.price * item.quantity, 0) - discount))}
                  </div>
                  <div className="text-right font-bold mb-4">
                    Tax (10%): {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format((cart.reduce((acc, item) => acc + item.price * item.quantity, 0) - discount) * 0.1)}
                  </div>
                  <div className="text-right font-bold mb-4">
                    Total Pembayaran (incl. tax): {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format((cart.reduce((acc, item) => acc + item.price * item.quantity, 0) - discount) * 1.1)}
                  </div>
                  <div className="flex items-center ml-36">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => createOrder(cart)}>
                      CREATE ORDER
                    </button>
                  </div>
                  {showSuccessModal && (
                    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                      <div className="bg-white p-6 rounded-lg shadow-lg flex items-center flex-col animate-bounceIn">
                        <svg className="h-6 w-6 text-green-500 mr-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                          <path d="M22 4L12 14.01l-3-3" />
                        </svg>
                        <div className="text-center">
                          <h2 className="text-lg font-bold mb-2">Pesanan Berhasil Dibuat!</h2>
                          <p className="text-sm text-gray-700">Terima kasih telah melakukan pesanan di restoran kami.</p>
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
                <p className="text-center font-bold text-gray-700">Keranjang belanja kosong</p>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>

  )
}

export default RestoMenusTampil