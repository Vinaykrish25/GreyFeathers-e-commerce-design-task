import React from "react";
import { GrFormNext } from "react-icons/gr";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { GoTag } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import cart_1 from "../assets/cart_3.png";
import cart_2 from "../assets/cart_2.png";
import cart_3 from "../assets/cart_1.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cart = () => {
  return (
    <div className="max-w-screen">
      <Header />
    <div className="px-4 sm:px-10 mt-5 sm:mt-10 sm:mb-15">
      <div className="font-satoshi text-[14px] sm:text-[16px] font-[400] flex items-center gap-1 w-full mb-6">
        <h1 className="text-[#00000099]">Home</h1>
        <h1 className="text-[#00000099]">
          <GrFormNext />
        </h1>
        <h1>Casual</h1>
      </div>
      <h1 className="font-integralgf font-bold text-[32px] sm:text-[40px] mb-6">YOUR CART</h1>

      <div className="flex sm:flex-row flex-col gap-5">
        <div className="sm:w-[715px] h-[508px] border-[1px] border-[#0000001A] rounded-[20px] p-5">
          <div className="font-satoshi flex gap-4 border-b-[1px] border-b-[#0000001A] pb-5">
            <div className="w-[99px] h-[99px] sm:w-[124px] sm:h-[124px] bg-[#F0EEED] rounded-[8.66px]">
              <img src={cart_1} className="object-contain w-full h-full" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-[16px] sm:text-[20px] font-bold inline-flex items-center gap-30 sm:justify-between">
                Gradient Graphic T-shirt
                <span>
                  <RiDeleteBin6Fill className="text-[#FF3333]" />
                </span>
              </h1>
              <h1 className="text-[12px] sm:text-[14px]">
                Size: <span className="text-[#00000099]">Large</span>
              </h1>
              <h1 className="text-[12px] sm:text-[14px]">
                Color: <span className="text-[#00000099]">White</span>
              </h1>
              <div className="flex items-center sm:gap-85 gap-40">
                <h1 className="text-[20px] sm:text-[24px] font-bold">$145</h1>
                <div className="flex w-[126px] h-[44px] font-satoshi items-center gap-7 p-3 bg-[#F0F0F0] rounded-full">
                  <h1 className="font-[500]">
                    <FiMinus className="w-[20px] h-[20px]" />
                  </h1>
                  <h1 className="text-[16px] font-[500]">1</h1>
                  <h1 className="font-[500]">
                    <FaPlus className="w-[20px] h-[20px]" />
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="font-satoshi flex gap-4 border-b-[1px] border-b-[#0000001A] pb-5 mt-5">
            <div className="w-[99px] h-[99px] sm:w-[124px] sm:h-[124px] bg-[#F0EEED] rounded-[8.66px]">
              <img src={cart_2} className="object-contain w-full h-full" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-[16px] sm:text-[20px] font-bold inline-flex items-center gap-43 sm:justify-between">
                Checkered Shirt
                <span>
                  <RiDeleteBin6Fill className="text-[#FF3333]" />
                </span>
              </h1>
              <h1 className="text-[12px] sm:text-[14px]">
                Size: <span className="text-[#00000099]">Medium</span>
              </h1>
              <h1 className="text-[12px] sm:text-[14px]">
                Color: <span className="text-[#00000099]">Red</span>
              </h1>
              <div className="flex items-center sm:gap-85 gap-38">
                <h1 className="text-[20px] sm:text-[24px] font-bold">$180</h1>
                <div className="flex w-[126px] h-[44px] font-satoshi items-center gap-7 p-3 bg-[#F0F0F0] rounded-full">
                  <h1 className="font-[500]">
                    <FiMinus className="w-[20px] h-[20px]" />
                  </h1>
                  <h1 className="text-[16px] font-[500]">1</h1>
                  <h1 className="font-[500]">
                    <FaPlus className="w-[20px] h-[20px]" />
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="font-satoshi flex gap-4 mt-5">
            <div className="w-[99px] h-[99px] sm:w-[124px] sm:h-[124px] bg-[#F0EEED] rounded-[8.66px]">
              <img src={cart_3} className="object-contain w-full h-full" />
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-[16px] sm:text-[20px] font-bold inline-flex items-center gap-43 sm:justify-between">
                Skinny Fit Jeans
                <span>
                  <RiDeleteBin6Fill className="text-[#FF3333]" />
                </span>
              </h1>
              <h1 className="text-[12px] sm:text-[14px]">
                Size: <span className="text-[#00000099]">Large</span>
              </h1>
              <h1 className="text-[12px] sm:text-[14px]">
                Color: <span className="text-[#00000099]">Blue</span>
              </h1>
              <div className="flex items-center sm:gap-85 gap-38">
                <h1 className="text-[20px] sm:text-[24px] font-bold">$240</h1>
                <div className="flex w-[126px] h-[44px] font-satoshi items-center gap-7 p-3 bg-[#F0F0F0] rounded-full">
                  <h1 className="font-[500]">
                    <FiMinus className="w-[20px] h-[20px]" />
                  </h1>
                  <h1 className="text-[16px] font-[500]">1</h1>
                  <h1 className="font-[500]">
                    <FaPlus className="w-[20px] h-[20px]" />
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:w-[505px] h-[458px] rounded-[20px] border-[1px] border-[#0000001A] p-5">
          <h1 className="text-[20px] sm:text-[24px] font-bold font-satoshi mb-5">
            Order Summary
          </h1>
          <div className="font-satoshi border-b-[1px] border-b-[#0000001A] pb-5 flex flex-col gap-4 mb-5">
            <div className="flex items-center justify-between">
              <h1 className="text-[#00000099] text-[16px] sm:text-[20px]">SubTotal</h1>
              <h1 className="text-[16px] sm:text-[20px] font-bold">$565</h1>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-[#00000099] text-[16px] sm:text-[20px]">Discount (-20%)</h1>
              <h1 className="text-[16px] sm:text-[20px] font-bold text-[#FF3333]">-$113</h1>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-[#00000099] text-[16px] sm:text-[20px]">Delivery Fee</h1>
              <h1 className="text-[16px] sm:text-[20px] font-bold">$15</h1>
            </div>
          </div>
          <div className="flex items-center justify-between font-satoshi mb-8">
            <h1 className="text-[16px] sm:text-[20px]">Total</h1>
            <h1 className="text-[16px] sm:text-[20px] font-bold">$467</h1>
          </div>
          <div className="flex gap-5 mb-7">
            <div className="relative w-[315px] h-[48px]">
              <GoTag className="absolute w-7 h-7 text-[#00000066] top-2.5 left-3" />
              <input
                placeholder="Add promo code"
                className="text-[16px] font-medium outline-0 font-satoshi text-[#00000066] bg-[#F0F0F0] px-12 py-3 rounded-[62px] w-full"
              />
            </div>
            <button className="bg-black font-satoshi text-white text-[16px] px-8 py-2 rounded-full">
              Apply
            </button>
          </div>
          <div className="max-w-xl">
            <button className="w-full font-medium text-[16px] text-white bg-black font-satoshi flex items-center justify-center py-4 rounded-full gap-5">
              Go to Checkout <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Cart;
