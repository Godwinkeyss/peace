import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Carousel from '../components/Carousel'
import Animation from '../components/Animation'
import Product from '../components/Product'
import About from '../components/About'
import Abouts from '../components/Abouts'
import Shein from '../components/Shein'

const HomeScreen = () => {
  return (
    <div className=''>
      <Header />
   
      <Shein />
      {/* <Carousel /> */}
      <Abouts />
      <Product />
    </div>
  )
}

export default HomeScreen
