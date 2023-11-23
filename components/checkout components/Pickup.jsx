import React, { useState } from 'react'
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useEffect } from 'react';
import success from '../../pages/success';
import { useRouter } from 'next/router';
import { useStateContext } from '../../context/StateContext';

function Pickup() {
    const router = useRouter();
    const [dateValue, setDateValue] = useState(dayjs(getCurrentDateTime()))

    const { setPickupDateAndTime } = useStateContext()

    useEffect(() => {
      setPickupDateAndTime(dateValue.$d)
    }, [dateValue])

    function getCurrentDateTime() {
        const now = new Date();
      
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = '13'
        const minutes = '00'
      
        const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
      
        return formattedDateTime;
      }

      const thirteen = dayjs().set('hour', 13).startOf('hour');
      const fifteen = dayjs().set('hour', 15).startOf('hour');
      
     
    
  return (
    <div className="m-4">
        <p className="font-zen-kaku font-semibold mb-2">Kindly choose a time between 13:00 and 15:00 for voucher pickup</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>
                <DateTimePicker
                label="Date and Time Picker"
                value={dateValue}
                onChange={(newValue) => setDateValue(newValue)}
                disablePast 
                minTime={thirteen}
                maxTime={fifteen}
                />
            </DemoContainer>
        </LocalizationProvider>
        <div className="flex justify-center mt-2">
            <button 
                className="bg-red-600 text-white hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-600 duration-300 py-2 px-4 rounded-lg cursor-pointer"
                onClick={()=> {router.push('/success')}}
                >
                Confirm Pickup
            </button>
        </div>
  </div>
  )
}

export default Pickup