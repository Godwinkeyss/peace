import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Carousel from '../components/Carousel'
import Animation from '../components/Animation'
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <div className=''>
      <Header />
      {/* <Slider /> */}
      
      <Carousel />
      <Product />
    </div>
  )
}

export default HomeScreen
