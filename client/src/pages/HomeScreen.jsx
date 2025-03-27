import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Carousel from '../components/Carousel'
import Animation from '../components/Animation'
import Product from '../components/Product'
import About from '../components/About'
import Abouts from '../components/Abouts'
import Shein from '../components/Shein'
import Sheina from '../components/Sheina'
import Visit from '../components/Visit'
import Health from '../components/Health'
import Footer from '../components/Footer'

const HomeScreen = () => {
  return (
    <div className=''>
      <Header />
     {/* <Sheina /> */}
      <Shein />
      {/* <Carousel /> */}
      <Abouts />
      <Product />
      <Visit />
      <Health />
      <Footer />
    </div>
  )
}

export default HomeScreen
