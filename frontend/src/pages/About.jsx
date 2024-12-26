import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Welcome to Mytalorzone, your ultimate destination for quality products at unbeatable prices!
            Founded with a passion for delivering excellence, we are committed to offering a seamless online shopping experience tailored to your needs. Whether you're looking for the latest fashion, cutting-edge technology, or everyday essentials, we have something for everyone.
            Our mission is to connect people with products they love while maintaining the highest standards of customer satisfaction. From carefully curated collections to fast and reliable delivery, we prioritize your convenience every step of the way.
          </p>
          <p>At Mytalorzone, we believe in building a community of happy shoppers. Join us today and discover why thousands of customers trust us for their online shopping needs.
            Your satisfaction is our success.</p>
        </div>

      </div>

    </div>
  )
}

export default About