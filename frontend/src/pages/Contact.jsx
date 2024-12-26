import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='flex flex-col justify-center items-center gap-2'>
        <p className='text-sm text-gray-600'>Email ID - mayurbarve04@gmail.com</p>
        <p className='text-sm text-gray-600'>(M) +91-7057627532</p>
        <p className='text-sm text-gray-600'>Address - mytalorzone , B-8 , 2nd Floor , Chandan Nagar, Umred Road , Bais</p>
        <p className='text-sm text-gray-600'>Nagpur - Maharshtra - 440024</p>
        <p className='text-sm text-gray-600'>GST No. - 08ABYFA7653G1ZT</p>

      </div>

    </div>
  )
}

export default Contact