import React from "react";
import banner from "../assets/banner_image.jpg";
import zara from "../assets/Zara.png";
import prada from "../assets/Prada.png";
import gucci from "../assets/Gucci.png";
import calvinklein from "../assets/Calvin_Klein.png";
import versace from "../assets/Versace.png";

const Banner = () => {
  return (
    <div className="relative">
      <div className="max-w-screen bg-[#F2F0F1] flex flex-col sm:flex-row sm:items-center sm:gap-20 px-4 sm:px-10">
        <div className="max-w-xl flex flex-col gap-6">
          <h1 className="font-integralgf text-[36px] sm:text-[64px] leading-9 sm:leading-16 font-[700] mt-8 sm:mt-0">
            FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE
          </h1>
          <h1 className="font-satoshi text-[14px] sm:text-[16px] text-[#00000099]">
            Browse through our diverse range of meticulously crafted <br className="block sm:hidden"/> garments,
            designed <br className="hidden sm:block"/> to bring out your individuality and <br className="block sm:hidden"/> cater to your
            sense of style.
          </h1>
          <button className="font-satoshi text-[16px] bg-black rounded-full max-w-md sm:w-[200px] py-3 font-[500] text-white">
            Shop Now
          </button>
          <div className="sm:flex items-center sm:gap-15">
            <div className="flex gap-15 justify-center mb-4">
              <div className="pr-15 border-r-[1px] border-[#0000001A] flex flex-col justify-center">
              <h1 className="text-[24px] sm:text-[40px] font-bold font-satoshi">200+ </h1>
              <span className="font-satoshi text-[#00000099] text-[16px] font-light">
                International Brands
              </span>
            </div>
            <div className="sm:border-r-[1px] border-[#0000001A] flex flex-col justify-center">
              <h1 className="text-[24px] sm:text-[40px] font-bold font-satoshi">2,000+ </h1>
              <span className="font-satoshi text-[#00000099] text-[16px] font-light">
                High-Quality Products
              </span>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-[24px] sm:text-[40px] font-bold font-satoshi">30,000+ </h1>
              <span className="font-satoshi text-[#00000099] text-[16px] font-light">
                Happy Customers
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-end flex-1 relative">
          <img
            src={banner}
            alt="Banner image"
            className="object-contain w-full"
          />
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="z-10 absolute right-100 sm:right-110 top-60"
          >
            <path
              d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
              fill="black"
            />
          </svg>
          <svg
            width="80"
            height="80"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="z-10 absolute sm:right-1 top-20"
          >
            <path
              d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-screen bg-black h-30 relative z-10 -mt-30 flex flex-col gap-3 sm:flex-row justify-center items-center sm:gap-15 px-4 sm:px-10">
        <div className="flex gap-">
          <img src={versace} alt="Versace" className="w-50 h-10" />
        <img src={zara} alt="Zara" className="w-50 h-10" />
        <img src={gucci} alt="Gucci" className="w-50 h-10" />
        </div>
<div className="flex">
          <img src={prada} alt="Prada" className="w-50 h-10" />
        <img src={calvinklein} alt="Calvin Klein" className="w-50 h-10" />
</div>
      </div>
    </div>
  );
};

export default Banner;
