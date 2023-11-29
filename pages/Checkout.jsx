import React, { useState } from "react";

import { useStateContext } from "../context/StateContext";
import Image from "next/image";

import CheckoutUserDetails from "../components/checkout components/UserDetails";
import PaymentMethod from "../components/checkout components/PaymentMethod";
import OrderDetails from "../components/checkout components/OrderDetails";


const Checkout = () => { 
  const [paymentMethodModal, setPaymentMethodModal] = useState(false)

  return (
  <div className="mt-28 p-4 h-fit min-h-[70vh]">
    {/* order details section */}
      <OrderDetails />

    {/* User Details */}
      <CheckoutUserDetails setPaymentMethodModal={setPaymentMethodModal} />
        
    {/* payment method section */}
      <PaymentMethod paymentMethodModal={paymentMethodModal}/>

  </div>
  )
};

export default Checkout;
