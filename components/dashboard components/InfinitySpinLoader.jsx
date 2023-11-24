import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

function InfinitySpinLoader() {
  return (
    <div className="absolute top-[-4.5rem] left-0 h-screen w-screen bg-[#272935] flex items-center justify-center z-[999]">
        <InfinitySpin width='200'color="red" />
    </div>  
  )
}

export default InfinitySpinLoader