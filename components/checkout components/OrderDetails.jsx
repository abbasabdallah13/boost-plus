import React from 'react'
import { useStateContext } from '../../context/StateContext'
import { getVoucherImg } from '../../lib/getVoucherImg'
import Image from 'next/image'

function OrderDetails() {
    const { cartItems, totalPrice } = useStateContext()
  return (
    <div className="border-b-2 border-black">
    <h1 className="text-4xl font-zen-kaku font-semibold">Checkout</h1>
    <h3 className="font-heebo text-xl text-gray-500 m-2">Cart Summary</h3>
    <div className="overflow-y-scroll max-h-96">
      {
        cartItems?.map((el, i) => (
          <div key={el.voucherCode+'-'+i} className="flex items-center border-2 rounded-lg p-2 mt-4">
            <Image className="h-16 w-16" src={getVoucherImg(el.voucherCode)} alt='voucher' />
            <div className="p-2 flex flex-col">
              <p className="font-zen-kaku font-semibold text-lg">{el.fromSelect.split(',')[0]} {el.voucherName}</p>
              <p className="mt-2 text-xs font-heebo">{el.url}</p>
              <p className="font-bold mt-2 text-xs text-slate-600 font-zen-kaku font-bold">{el.fromSelect.split(',')[1]} SEK</p>
            </div>
          </div>
        ))
      }
    </div>
    <div className="flex justify-between mt-4">
      <p className="text-xl">Total</p>
      <p className="text-xl">{totalPrice} SEK</p>
    </div>
  </div>
  )
}

export default OrderDetails