import React from 'react'
import Banner from '../components/Banner'
import NewArrivals from "../components/NewArrivals";
import TopSelling from "../components/TopSelling";
import BrowseCard from '../components/BrowseCard';
import Reviews from '../components/Reviews';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Homepage = () => {
  return (
    <div className='max-w-screen flex flex-col gap-5'>
      <Header />
       <Banner />
       <NewArrivals />
       <TopSelling />
       <BrowseCard />
       <Reviews />
       <Footer />
    </div>
  )
}

export default Homepage