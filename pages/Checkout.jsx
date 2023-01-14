import React from "react";
import { client } from "../lib/client";

const Checkout = () => {
    const handleCheckoutBtn = () => {
        let newArr = JSON.parse(localStorage.getItem('cart')).map(el => {
          return {
            _type: 'links',
            link: el.url,
            voucher: el.voucherName
          }
        });
        newArr.map(el => client.create(el))
      }
  return (
  <div className="mt-40">
    <button onClick={handleCheckoutBtn}>Confirm</button>
  </div>
  )
};

export default Checkout;
