import React from "react";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";
import Visa from "../assets/payment-footer/visa.png";
import Mastercard from "../assets/payment-footer/mastercard.png";
import Paypal from "../assets/payment-footer/paypal.png";
import ApplePay from "../assets/payment-footer/apple-pay.png";
import GooglePay from "../assets/payment-footer/google-pay.png";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="relative z-10 bg-black max-w-md sm:max-w-6xl rounded-[20px] flex flex-col sm:flex-row items-center justify-between p-12 -mb-25 mx-auto">
        <div className="text-white text-[32px] sm:text-[40px] font-[700] ">
          <h1 className="leading-10 font-integralgf mb-6">
            STAY UPTO DATE <br className="block sm:hidden"/>ABOUT <br className="hidden sm:block"/>
            OUR LATEST OFFERS
          </h1>
        </div>
        <div>
          <div className="w-[390px] h-[45px] sm:max-w-md bg-white relative rounded-full">
            <TfiEmail className="absolute w-5 h-5 text-[#00000066] top-3.5 left-4 font-[900]" />
            <input
              type="text"
              placeholder="Enter your email address"
              className="outline-0 text-[#000000d3] font-satoshi w-full py-3 px-17 text-[14px] sm:text-[16px]"
            />
          </div>
          <div className="max-w-md mt-3">
            <button className="bg-white font-satoshi w-full py-3 px-12 rounded-full font-[600] text-[14px] sm:text-[16px]">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-screen px-10 bg-[#F0F0F0] flex flex-col gap-6 pt-30 sm:pt-40 sm:pb-10 pb-20">
        <div className="flex sm:flex-row flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-[28px] sm:text-[32px] font-integralgf font-extrabold">
              SHOP.CO
            </h1>
            <h1 className="font-extralight text-[14px] text-[#00000099] font-satoshi">
              We have clothes that suits your style and <br className="hidden sm:block"/>
              which you’re <br className="block sm:hidden"/> proud to wear. From <br className="hidden sm:block"/>
              women to men.
            </h1>
            <div className="flex gap-3">
              <h1 className="border border-gray-400 rounded-full p-1.5 shadow-lg">
                <TiSocialTwitter className="w-4 h-4" />
              </h1>
              <h1 className="border border-gray-400 rounded-full p-2 shadow-lg bg-black ">
                <FaFacebookF className="text-white w-3 h-3" />
              </h1>
              <h1 className="border border-gray-400 rounded-full p-1.5 shadow-lg">
                <FaInstagram />
              </h1>
              <h1 className="border border-gray-400 rounded-full p-1.5 shadow-lg">
                <RiGithubFill />
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 sm:flex sm:gap-29">
            <div className="flex flex-col gap-4 font-satoshi">
            <h1 className="text-[14px] sm:text-[16px] tracking-[5px] font-bold">COMPANY</h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">About</h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">
              Features
            </h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">Works</h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">Career</h1>
          </div>
          <div className="flex flex-col gap-4 font-satoshi">
            <h1 className="text-[14px] sm:text-[16px] tracking-[5px] font-bold">HELP</h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">
              Customer Support
            </h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">
              Delivery Details
            </h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">
              Terms & Conditions
            </h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">
              Privacy Policy
            </h1>
          </div>
          <div className="flex flex-col gap-4 font-satoshi">
            <h1 className="text-[14px] sm:text-[16px] tracking-[5px] font-bold">FAQ</h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">Account</h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">
              Manage Deliveries
            </h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">Orders</h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">
              Payments
            </h1>
          </div>
          <div className="flex flex-col gap-4 font-satoshi">
            <h1 className="text-[14px] sm:text-[16px] tracking-[5px] font-bold">RESOURCES</h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">
              Free eBooks
            </h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">
              Development Tutorial
            </h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">
              How to - Blog
            </h1>
            <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[500]">
              Youtube Playlist
            </h1>
          </div>
        </div>
          </div>

        <div>
          <hr className="text-[#0000001A] border-[1px]" />
        </div>

        <div className="flex sm:flex-row flex-col items-center justify-between">
          <h1 className="text-[14px] font-[400] text-[#00000099] font-satoshi mb-3">
            Shop.co © 2000-2023, All Rights Reserved
          </h1>
          <div className="flex items-center sm:gap-3 gap-1">
            <div className="bg-white px-2 py-0.1 rounded-sm shadow-2xl">
              <img src={Visa} alt="VISA" className="w-8 h-8" />
            </div>
            <div className="bg-white px-2 py-0.1 rounded-sm">
              <img src={Mastercard} alt="Mastercard" className="w-8 h-8" />
            </div>
            <div className="bg-white px-1 py-1 rounded-sm">
              <img src={Paypal} alt="Paypal" className="w-12 h-5" />
            </div>
            <div className="bg-white px-2.5 py-0.2 rounded-sm">
              <img src={ApplePay} alt="Applepay" className="w-7 h-7" />
            </div>
            <div className="bg-white px-2 py-0.2 rounded-sm">
              <img src={GooglePay} alt="Googlepay" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
