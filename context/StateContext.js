"use client"

import { React, createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();


export const StateContext = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
     const storedState = typeof localStorage !== 'undefined' ? localStorage.getItem("cartItems") : null
     return storedState ? JSON.parse(storedState) : []   
    });
    const [totalPrice, setTotalPrice] = useState(() => {
        const storedState = typeof localStorage !== 'undefined' ? localStorage.getItem("totalPrice") : null
        return storedState ? JSON.parse(storedState) : 0   
       });
    const [paymentMethod, setPaymentMethod] = useState(() => {
        const storedState = typeof localStorage !== 'undefined' ? localStorage.getItem("paymentMethod") : null
        return storedState ? JSON.parse(storedState) : ''   
       });
    const [userDetails, setUserDetails] = useState(() => {
        const storedState = typeof localStorage !== 'undefined' ? localStorage.getItem("userDetails") : null
        return storedState ? JSON.parse(storedState) : {}   
       });
    const [pickupDateAndTime, setPickupDateAndTime] = useState(() => {
        const storedState = typeof localStorage !== 'undefined' ? localStorage.getItem("pickupDateAndTime") : null
        return storedState ? JSON.parse(storedState) : 'n/a'   
       });

    const addToCart = async(url,fromSelect,voucherCode,voucherName) => {
        if(!url || !fromSelect.length){
            toast.error("You should select an offer and enter a valid url");
        }else if(cartItems.find(el => el.voucherCode === voucherCode && el.url === url)){ //a voucher already exists in cart 
            toast.error(`Voucher already exists in your cart!`);
        }else if(cartItems.find(el => el.voucherCode === voucherCode && el.url !== url)){
            setCartItems((prev)=>[...prev,{
                url: url,
                fromSelect: fromSelect,
                voucherCode: voucherCode,
                voucherName:voucherName,
            }
            ]);
            setTotalPrice((prev) => (prev)+Number(fromSelect.split(',')[1]));       
            toast.success(`${fromSelect.split(',')[0]} ${voucherName} added to cart!`)
        }else{
            setCartItems((prev)=>[...prev,{
                url: url,
                fromSelect: fromSelect,
                voucherCode: voucherCode,
                voucherName:voucherName,
            }
            ]);
            setTotalPrice((prev) => Number(prev)+Number(fromSelect.split(',')[1]));            
            // const response = fetch('api/cookies/cart-cookie',{
            //     method: 'POST',
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({cartItems, totalPrice})
            // })

            // // const data = await response.json()
            // console.log(response)
            toast.success(`${fromSelect.split(',')[0]} ${voucherName} added to cart!`)
        }

    }
    
     const deleteItem = (voucherName,url,fromSelect) => { //only one at once can be bought so is being filtered by voucher value
        let item = cartItems.find(el => el.voucherName === voucherName && el.url === url);
        setCartItems((cartItems) => cartItems.filter(el => el !== item));
        setTotalPrice((prev) => Number(prev) - Number(fromSelect.split(',')[1]))
        }

    useEffect(() => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
        localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod))
        localStorage.setItem('userDetails', JSON.stringify(userDetails))
        localStorage.setItem('pickupDateAndTime', JSON.stringify(pickupDateAndTime))
    }
    }, [cartItems, totalPrice, paymentMethod, userDetails, pickupDateAndTime]);    
        

    return (
        <Context.Provider 
        value={{
            setCartItems,
            cartItems,
            totalPrice,
            setTotalPrice,
            addToCart,
            deleteItem,
            paymentMethod,
            setPaymentMethod,
            setUserDetails,
            userDetails,
            pickupDateAndTime,
            setPickupDateAndTime
        }}>
            {children}
        </Context.Provider>
    )
    
}

export const useStateContext = () => useContext(Context);