import React from 'react'
import Homepage from './pages/Homepage'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductDetailPage from './pages/ProductDetailPage'
import CategoryPage from './pages/CategoryPage'
import Cart from './pages/Cart'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Filter from './pages/Filter'

const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/products' element={<ProductDetailPage />}/>
        <Route path='/category' element={<CategoryPage />}/>
        <Route path='/filter' element={<Filter />}/>
        <Route path='/cart' element={<Cart />}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App