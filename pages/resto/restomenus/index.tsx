


// import React, {Fragment, useEffect, useState } from 'react'
// import Carousel from "nuka-carousel"
// import Breadcumb from "@/components/breadcumb"
// import { useDispatch, useSelector } from 'react-redux'
// import { getGuestMenuPhoto } from '@/redux/RESTO/action/actionrestomenu'


// const RestoMenusTampil =()=> {
//  let {restophotos,refresh} = useSelector((state:any)=> state.restomenureducers)
//  const dispatch =useDispatch()

//  useEffect(()=>{
//     dispatch(getGuestMenuPhoto())
//  },[dispatch,refresh])
 

//   return (
//         <div>
//       <div className="bg-white">
//         <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//           <div>
//             <Breadcumb child={'Resto'} parent={'Dashboard'} detail={'Resto'} />
//           </div>
//           <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//             {(restophotos.data || [] ).map((menu:any) => (
//               <div key={menu.reme_id} className="group relative">
//                 <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                   <Carousel
//                     autoplay={true}
//                     animation="zoom"
//                     autoplayInterval={2000}
//                     zoomScale={0.98}
//                     wrapAround={true}
//                     renderCenterLeftControls={null}
//                     renderCenterRightControls={null}
//                     defaultControlsConfig={{
//                       pagingDotsStyle: {
//                         fill: 'white',
//                         margin: '1px',
//                         height: '1rem',
//                         objectFit: 'cover',
//                         objectPosition: 'center',
//                       },
//                     }}
//                   >
//                     {menu.resto_menu_photos.map((photo:any) => (
//                       <Fragment key={photo.remp_id}>
//                         <img
//                             className="w-full object-fit object-center lg:h-[20rem] lg:w-full"
                          
//                           src={photo.remp_url}
//                           alt=""
//                         />
//                       </Fragment>
//                     ))}
//                   </Carousel>
//               </div>
//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-gray-700">
                  

//                       {menu.reme_name}
                   
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">{menu.reme_description}</p>
//                   <p className="mt-1 text-sm text-gray-500">{menu.reme_status}</p>
//                   <p className="mt-1 text-sm text-gray-500"><span>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(menu.reme_price)}</span></p>
//                 </div>
//                 <button className="mt-10 text-sm flex items-center bg-[#7743DB] hover:bg-[#5f35ac] text-white w-14 h-12 rounded">ADD CART</button>
//                  {/* <p className=" mt-20 text-sm font-medium text-gray-900">{menu.reme_price}</p>  */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
 
//     </div>

//   )
// }

// export default RestoMenusTampil


import React, {Fragment, useEffect, useState } from 'react'
import Carousel from "nuka-carousel"
import Breadcumb from "@/components/breadcumb"
import { useDispatch, useSelector } from 'react-redux'
import { getGuestMenuPhoto } from '@/redux/RESTO/action/actionrestomenu'
import {GiShoppingCart} from 'react-icons/gi'



const RestoMenusTampil =()=> {
 let {restophotos,refresh} = useSelector((state:any)=> state.restomenureducers)
 const dispatch =useDispatch()


 const [cart, setCart] = useState<any[]>([]);

 function addToCart(menu: any) {
   const cartItem = cart.find((item) => item.id === menu.reme_id);

   console.log("Clicked ADD CART button for menu:", menu);
 
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
 

 function getTotalQuantity() {
   return cart.reduce((total, item) => total + item.quantity, 0);
 }
 useEffect(()=>{
    dispatch(getGuestMenuPhoto())
 },[dispatch,refresh])
 

  return (
        <div>
        <div>
            <Breadcumb child={'Resto'} parent={'Dashboard'} detail={'Resto'} />
          </div>
      <div className="bg-white flex flex-col gap-4 items-start lg:flex-row">
        <div className="w-full lg:w-3/4">

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {(restophotos.data || [] ).map((menu:any) => (
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
                    {menu.resto_menu_photos.map((photo:any) => (
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
              <div className="mt-4 flex justify-between items-start">
                <div>
                  <h3 className="text-sm text-gray-700">
                  
                     
                      {menu.reme_name}
                   
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{menu.reme_description}</p>
                  <p className="mt-1 text-sm text-gray-500">{menu.reme_status}</p>
                  <p className="mt-1 text-sm text-gray-500"><span>{Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(menu.reme_price)}</span></p>
                </div>
              <div>
              <button  onClick={() => addToCart(menu)} className="z-50 text-sm flex items-center bg-[#7743DB] hover:bg-[#5f35ac] text-white w-14 h-12 rounded " >ADD CART</button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
      <div>
  <div className='w-full lg:w-[23rem] border-2 border-lime-200 bg-rose-400 mt-6'>
    <div>
      <div className="flex items-center">
        <GiShoppingCart className="text-4xl" />
        <span className="text-2xl pr-4">ITEM ORDERED</span>
      </div>
      <div className="mt-4">
        {cart.length > 0 ? (
          <ul className="list-disc list-inside">
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} ({item.quantity}) - {Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price * item.quantity)}
                <button className="ml-2 text-xs text-red-600" onClick={() => setCart(cart.filter(cartItem => cartItem.id !== item.id))}>Hapus</button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-700">Belum ada pesanan</p>
        )}
      </div>
    </div>
  </div>
</div>
    </div>     
    </div>     
</div>
  )
}

export default RestoMenusTampil


    





