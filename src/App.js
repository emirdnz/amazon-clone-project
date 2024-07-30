import React from 'react'
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import ProductSlider from './Components/ProductSlider'
import ProductSlider2 from './Components/ProductSlider2'
import ProductSlider3 from './Components/ProductSlider3'
import ProductSlider4 from './Components/ProductSlider4'




function App() {
  return (
    
    <div className='App'>
     
    
    <Navbar/>
    <Slider/>
    <ProductSlider/>
    <ProductSlider2/>
    <ProductSlider3/>
    <ProductSlider4/>
    <Footer/>
   

    
   </div>
  )
}

export default App