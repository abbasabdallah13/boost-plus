import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker';
import { useRouter } from 'next/router';
import 'react-datepicker/dist/react-datepicker.css';
import { useStateContext } from '../../context/StateContext';


function Pickup() {
    const router = useRouter();     
    const [startDate, setStartDate] = useState(new Date());
    const [dateSet, setDateSet] = useState(false)

    const { setPickupDateAndTime } = useStateContext()

    useEffect(() => {
      setPickupDateAndTime(startDate)
    }, [startDate])
    

  return (
    <div className="m-4">
        <p className="font-zen-kaku font-semibold mb-2">Kindly choose a time between 13:00 and 15:00 for voucher pickup</p>
        <DatePicker
          selected={startDate}
          onChange={(date) => {setStartDate(date); if(date.getHours()>= 13 && date.getHours()<=15) {setDateSet(true)} else{setDateSet(false)}}}
          showTimeSelect
          timeFormat="HH:mm"
          minTime={new Date(0, 0, 0, 13, 0)}  // Set your minimum time (e.g., 8:00 AM)
          maxTime={new Date(0, 0, 0, 15, 0)}
          timeIntervals={15}
          minDate={new Date()} 
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
          className='border-2 border-gray-400 rounded-md shadow-md px-2 text-sm cursor-pointer'
        />
        <div className="flex justify-center mt-2">
            <button 
                className={`${!dateSet ? 'bg-gray-500' : 'bg-red-600 hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 duration-300'} text-white  py-2 px-4 rounded-lg`}
                onClick={()=> {router.push('/success')}}
                disabled={!dateSet}
                >
                Confirm Pickup
            </button>
        </div>
  </div>
  )
}

export default Pickup