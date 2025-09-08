import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { GoChevronDown } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { LuCircleUserRound } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  return (
    <header className="max-w-screen border-b-[1px] border-b-[#0000001A]">
      <div className="flex w-full justify-between items-center bg-black px-4 sm:px-10">
        <div className="flex-1 text-center ">
          <h1 className="text-[12px] sm:text-[14px] py-2 text-white font-satoshi">
            Sign up and get 20% off to your first order.{" "}
            <span className="underline">Sign Up Now</span>
          </h1>
        </div>
        <h1 className="pr-2 sm:pr-10">
          <IoCloseOutline className="text-white w-0 h-0 sm:w-7 sm:h-7" />
        </h1>
      </div>

      <div className="w-full py-4 sm:py-6 flex items-center justify-between px-4 sm:px-10">
        <div className="flex items-center gap-6">
          <GiHamburgerMenu className="w-7 h-7 sm:hidden"/>
        <h1 className="text-[25.2px] sm:text-[32px] font-integralgf font-extrabold">SHOP.CO</h1>
        </div>
        <div className="hidden sm:flex items-center gap-8 font-satoshi">
          <h1 className="text-[16px] flex items-center">
            Shop
            <GoChevronDown className="w-5 h-5" />
          </h1>
          <h1>On Sale</h1>
          <h1>New Arrivals</h1>
          <h1>Brands</h1>
        </div>
        <div className="hidden sm:block sm:max-w-xl py-3 px-14 bg-[#F2F0F1] relative w-full rounded-full">
          <IoSearch className="absolute w-7 h-7 text-[#00000066] top-[1/2] left-3" />
          <input
            type="text"
            placeholder="Search for products..."
            className="text-[#000000d3] text-[16px] font-medium w-full outline-0 font-satoshi"
          />
        </div>
        <div className="flex items-center gap-5">
          <IoSearch className="visible sm:hidden w-6 h-6"/>
          <LuShoppingCart className="w-6 h-6" />
          <LuCircleUserRound className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};

export default Header;
