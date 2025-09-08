import React from 'react'
import AddToCart from '../components/AddToCart'
import AllReviews from '../components/AllReviews'
import SuggestionProducts from '../components/SuggestionProducts'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ProductDetailPage = () => {
  return (
    <div className='max-w-screen flex flex-col gap-5'>
      <Header />
        <AddToCart />
        <AllReviews />
        <SuggestionProducts />
        <Footer />
    </div>
  )
}

export default ProductDetailPage