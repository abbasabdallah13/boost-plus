import React, { useContext, useEffect, useState } from 'react'
import Select from 'react-select'
import { useStateContext } from '../../context/StateContext'

function CheckoutUserDetails({ setPaymentMethodModal }) {
    const { setUserDetails } = useStateContext()

    const [checkoutUserDetails, setCheckoutUserDetails] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        country: '',
        town: '',
    })
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch(
            "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
          )
            .then((response) => response.json())
            .then((data) => {
              setCountries(data.countries);
            });
    }, [])

    const validateUserInfo = (e) => {
        e.preventDefault();
        setPaymentMethodModal(true)
        setUserDetails(checkoutUserDetails)
    }
    
  return (
    <div>
        <h1 className="font-heebo text-gray-500 mt-4 text-xl">1- User Details</h1>
        <form onSubmit={validateUserInfo}>
        <div className="flex flex-col">
            <label className="font-zen-kaku font-semibold text-base text-gray-600 mt-2 mb-[2px]" for="first name">First Name</label>
            <input type='text' className="font-heebo border-2 border-solid border-black rounded-sm p-2" onChange={(e) => setCheckoutUserDetails({...checkoutUserDetails, firstName: e.target.value})} required/>
        </div>
        <div className="flex flex-col">
            <label className="font-zen-kaku font-semibold text-base text-gray-600 mt-2 mb-[2px]" for="last name">Last Name</label>
            <input type='text' className="font-heebo border-2 border-solid border-black rounded-sm p-2" onChange={(e) => setCheckoutUserDetails({...checkoutUserDetails, lastName: e.target.value})} required/>
        </div>
        <div className="flex flex-col">
            <label className="font-zen-kaku font-semibold text-base text-gray-600 mt-2 mb-[2px]" for="email">Email</label>
            <input type='email' className="font-heebo border-2 border-solid border-black rounded-sm p-2" onChange={(e) => setCheckoutUserDetails({...checkoutUserDetails, email: e.target.value})} required/>
        </div>
        <div className="flex flex-col">
            <label className="font-zen-kaku font-semibold text-base text-gray-600 mt-2 mb-[2px]" for="mobile">Mobile Number</label>
            <input type='text' className="font-heebo border-2 border-solid border-black rounded-sm p-2" onChange={(e) => setCheckoutUserDetails({...checkoutUserDetails, mobile: e.target.value})} required/>
        </div>
        <div className="flex flex-col">
            <label className="font-zen-kaku font-semibold text-base text-gray-600 mt-2 mb-[2px]" for="country">Country</label>
            <Select 
                className="border-black border-2 rounded-sm"
                options={countries}
                value={checkoutUserDetails.country}
                onChange={(e) => setCheckoutUserDetails({...checkoutUserDetails, country: e})}
                required
                />
        </div>
        <div className="flex flex-col">
            <label className="font-zen-kaku font-semibold text-base text-gray-600 mt-2 mb-[2px]" for="town">Town or City</label>
            <input type='text' className="font-heebo border-2 border-solid border-black rounded-sm p-2" onChange={(e) => setCheckoutUserDetails({...checkoutUserDetails, town: e.target.value})} required />
        </div>
        <div className="w-full flex justify-center mt-2">
            <input type="submit" value="Next" className="bg-red-600 text-white hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 duration-300 py-2 px-4 rounded-lg cursor-pointer" />
        </div>
        </form>
    </div>
  )
}

export default CheckoutUserDetails