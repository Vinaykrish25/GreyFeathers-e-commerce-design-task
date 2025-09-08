import React from 'react'
import Filters from "../components/Filters";
import Casual from '../components/Casual';
import { GrFormNext } from "react-icons/gr";
import Footer from '../components/Footer';
import Header from '../components/Header';


const CategoryPage = () => {
  return (
    
    <div className='max-w-screen'>
<Header />
      <div className="font-satoshi text-[14px] sm:text-[16px] font-[400] flex items-center gap-1 w-full px-4 sm:px-10 mt-6">
          <h1 className="text-[#00000099]">Home</h1>
          <h1 className="text-[#00000099]">
            <GrFormNext />
          </h1>
          <h1>Casual</h1>
        </div>
    <div className='flex sm:flex-row flex-col-reverse'>
        <div className='hidden sm:block'><Filters /></div>
        <Casual />
    </div>
    <Footer />
    </div>
  )
}

export default CategoryPage