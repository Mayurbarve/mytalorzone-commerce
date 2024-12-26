import React from 'react'
import Hreo from '../components/Hreo'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hreo />
      <LatestCollection/>
      <BestSeller />
      <OurPolicy/>
      <NewsletterBox />
    </div>
  )
}

export default Home