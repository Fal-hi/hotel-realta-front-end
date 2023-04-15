import { Cart, ChevronLeft, Coupon } from "@/components/icons"
import Link from "next/link"
import InputText from "@/components/input/InputText"
import InputEmail from "@/components/input/InputEmail"
import BgButton from "@/components/buttons/BgButton"
import { useEffect, useState } from "react"
import Dropdown from "@/components/select/Dropdown"
import { doGetOrderResto } from "@/redux/RESTO/action/actionOrder"
import { useDispatch, useSelector } from "react-redux"
import { useRouter } from "next/router"
import orderApi from "@/api/resto/orderRestoApi"
import SuccessModal from "./modalresto"
import { title } from "process"




const InvoiceResto = (props:any) => {
  const { orderresto, refresh } = useSelector((state: any) => state.orderrestoreducers)
 
  
  const dispatch = useDispatch()

 
 
  const subtotal = orderresto?.order_menu_details?.reduce(
    (acc:any, cur:any) => acc + cur.orme_price * cur.orme_qty,
    0
  );
  const totalDiscount = subtotal * 0.05;
  const totalsetelahdiskon = subtotal - totalDiscount;
  const tax = totalsetelahdiskon * 0.1;
  const totalsetelahtax = tax + totalsetelahdiskon;


  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSuccessModal1, setShowSuccessModal1] = useState(false);
  

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };
  const handleCloseSuccessModal1 = () => {
    setShowSuccessModal1(false);
  };


  const router = useRouter()
  const orderId  = router.query
  
  const handleEdit = async (data: any) => {
    try {
      const dataAll = {
        orme_pay_type: data.orme_pay_type,
        orme_cardnumber: data.orme_cardnumber
      };
      await orderApi.updateOrder( orderId, dataAll);
      setTimeout(() => dispatch(doGetOrderResto(orderId)), 3000);
      setShowSuccessModal(true);
      // console.log('coba edittttttt',orderId, dataAll)

    } catch (error) {
      console.log("Error updating order", error);
    }
  };
 


  const [type, setType] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const selectType = [
    { label: 'CR', value: 'CR', type: 'CR' },
    { label: 'B', value: 'B', type: 'B' },
  ];



  const handleChangeType = (selectedOption: any) => {
    setType(selectedOption);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = { orme_pay_type: type, orme_cardnumber: cardNumber };
    handleEdit(data);
  };




  

  const handleClickSendPasscode = () => {
    // if (fullName !== '' && email !== '' && phoneNumber !== '') {
    //   setShowSuccessModal(true);
    // }
     setShowSuccessModal1(true);
  };






  useEffect(() => {
      dispatch(doGetOrderResto(orderId))
    
    }, [dispatch, orderId, refresh])
  
  return (
    <section className="w-[85vw] mx-auto font-poppins-regular">
     
      <div className="flex justify-around items-start">
        <section className="w-[51.667%]">
          <Link
            href="/resto/restomenus"
            className="flex gap-4 items-center text-textPurple mt-6"
          >
            <ChevronLeft width="16" height="16" fill="#7743DB" />
            <h1 className="text-xl font-semibold">Complete Your Order</h1>
          </Link>
          <article>
            <header className="bg-white shadow rounded-md py-4 px-6 mt-8">
              <h1 className="font-medium text-xl">1. Enter Your Details</h1>
            </header>

            <div className="px-6">
              <h4 className="my-6">
                We will use these details to share your booking information
              </h4>
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <label
                    htmlFor="fullname"
                    className="text-[0.75rem] leading-6 ml-1 font-semibold"
                  >
                    Full Name
                  </label>
                  <InputText placeholder="Full Name" width="15rem" />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="fullname"
                    className="text-[0.75rem] leading-6 ml-1 font-semibold"
                  >
                    Email
                  </label>
                  <InputEmail placeholder="Email" width="15rem" />
                </div>
              </div>
              <div className="flex justify-between items-end mt-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="fullname"
                    className="text-[0.75rem] leading-6 ml-1 font-semibold"
                  >
                    Phone Number
                  </label>
                  <InputText placeholder="089608234617" width="15rem" />
                </div>

                <BgButton
                  title="Send Passcode"
                  padding="0.4rem 0"
                  width="15rem"
                  onClick={handleClickSendPasscode}
                  />
              </div>
            </div>

                  {showSuccessModal1 && (
     <SuccessModal onClose={handleCloseSuccessModal1 } title="SUCCESS" info='passcode sent successfully' />
    )}
          </article>
          <article className="mb-40">
            <header className="bg-white shadow rounded-md py-4 px-6 mt-8">
              <h1 className="font-medium text-xl">2. Payment</h1>
            </header>
            <form onSubmit={handleSubmit}>
       
      <div className="flex justify-between items-start mt-4 px-6">
        <div>
          <label
            htmlFor="type"
            className="text-[0.75rem] leading-6 ml-1 font-semibold mb-1"
          >
            Type
          </label>
          <Dropdown
            options={selectType}
            value={type}
            onChange={handleChangeType}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="fullname"
            className="text-[0.75rem] leading-6 ml-1 font-semibold"
          >
            Account Payment
          </label>
          <InputText
            placeholder="Your Account Number"
            width="15rem"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="px-6">
        <hr className="mt-6 mb-2" />
        <footer className="flex justify-between items-center text-sm">
          <span className="mr-6 font-semibold">
            Your account valid, please continue to complete
          </span>
          <BgButton
            title="Validate"
            padding="0.1rem 0.5rem"
            textSize="10px"
            
          />
        </footer>
      </div>
    </form>
    {showSuccessModal && (
        <SuccessModal onClose={handleCloseSuccessModal } title="SUCCESS" info='Your payment is valid, please proceed to the next process' />
      )}

          </article>
        </section>
        {/* Card */}
        <div className='flex justify-center'>
              <section className="bg-white p-6 shadow  rounded-md sticky top-28">
                <div className="flex justify-between items-start">
                  <h1 className="font-semibold text-textPurple">
                    <Cart />
                  </h1>
                  <h2 className="text-sm  mb-4">Items Orders</h2>
                </div>
                <hr />
                {orderresto?.order_menu_details?.map((item:any) => (
                  <div key={item.omde_id} className="mt-4 flex justify-between items-end">
                    <div>
                      <p className="text-sm mt-1">{item.resto_menu.reme_name}</p>
                      <h1 className="font-semibold mt-1">
                        {Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        }).format(item.orme_price)}
                      </h1>
                    </div>
                    <div className="mr-30">
                      {item.orme_qty}
                    </div>
                    <p className="text-sm mt-1">Total</p>
                    <div className="">
                      {Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(item.orme_price * item.orme_qty)}
                    </div>
                  </div>
                ))}
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
                      currency: "IDR"
                    }).format(totalsetelahdiskon)}
                  </span>
                </div>
                <hr />
                <div className="flex justify-between items-center my-4 text-sm">
                  <span className="font-semibold"> Tax (10%): </span>
                  <span className="bg-yellow-300 py-1 px-2 rounded">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(tax)}
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
                    }).format(totalsetelahtax)}
                  </h1>
                  </div>
          <div className="mt-8 flex justify-center">
            <BgButton title="Get Coupons" width="full" />
          </div>
          <div className="mt-8 flex justify-center">
    
            <BgButton title="Complete Your Request" width="full"  onClick={() => router.push(`/resto/orders/bill?orderId=${orderId}`)}/>
           
          </div>
        </section>
      </div>
      </div>
    </section>
  )
}

export default InvoiceResto
