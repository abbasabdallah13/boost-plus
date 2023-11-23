import React from 'react'
import NowAcceptingSwish from "../../assets/now-accepting-swish.png"
import Image from 'next/image'

function SwishBanner() {
  return (
    <div className="flex justify-center">
        <Image className="w-16 lg:w-20" src={NowAcceptingSwish} alt="Swish banner" />
    </div>
  )
}

export default SwishBanner