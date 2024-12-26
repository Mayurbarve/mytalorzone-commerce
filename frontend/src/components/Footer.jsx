import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div className=''>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-96 md:w-2/3 text-gray-600'>
                Explore our collections and discover the perfect blend of tradition and modern flair. Invest in quality pieces that will become treasured staples in your wardrobe, infused with a modern touch that empowers you to embrace your heritage and own your style.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>HOME</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>CONTACT WITH US</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-212-356-373</li>
                    <li>mayurbarve04@gmail.com</li>
                </ul>
            </div>
        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Mytailorzone.com - All Right Reserved.</p>
        </div>
    </div>
  )
}
 
export default Footer