import React from "react";
import { GrFormNext } from "react-icons/gr";
import { LuSlidersVertical } from "react-icons/lu";
import { FaChevronUp } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";


const Filters = () => {
  return (
    <div className="max-w-screen -mt-2 sm:px-10 sm:mt-10">

      <div className="flex justify-around">

        <div className="bg-[#ffffff] z-50 sm:z-0 w-full min-h-screen sm:w-[295px] sm:h-[1240px] border-[1px] border-[#0000001A] rounded-t-[20px] sm:rounded-[20px] p-6">
          <div className="flex items-center justify-between border-b-[1px] border-b-[#0000001A] pb-7">
            <h1 className="text-[20px] font-satoshi font-[700]">Filters</h1>
            <LuSlidersVertical className="w-6 h-6 text-[#00000066] hidden sm:block" />
            <IoClose className="w-8 h-8 text-[#00000066] block sm:hidden"/>
          </div>
          <div className="font-satoshi text-[16px] text-[#00000099] flex flex-col gap-3 mt-5 border-b-[1px] border-b-[#0000001A] pb-7">
            <h1 className="inline-flex items-center justify-between">
              T-shirts
              <span>
                <GrFormNext />
              </span>
            </h1>
            <h1 className="inline-flex items-center justify-between">
              Shorts
              <span>
                <GrFormNext />
              </span>
            </h1>
            <h1 className="inline-flex items-center justify-between">
              Shirts
              <span>
                <GrFormNext />
              </span>
            </h1>
            <h1 className="inline-flex items-center justify-between">
              Hoodie
              <span>
                <GrFormNext />
              </span>
            </h1>
            <h1 className="inline-flex items-center justify-between">
              Jeans
              <span>
                <GrFormNext />
              </span>
            </h1>
          </div>

          <div className="border-b-[1px] border-b-[#0000001A] pb-7 mt-5">
            <div className="flex items-center justify-between mb-5">
              <h1 className="text-[20px] font-satoshi font-[700]">Price</h1>
              <FaChevronUp className="text-[#00000066]" />
            </div>
            <div className="mx-auto">
              <svg
              className="hidden sm:block"
                width="247"
                height="43"
                viewBox="0 0 247 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.598 40.3581V39.1541C38.75 39.0421 37.532 37.9921 37.448 36.3541H38.848C38.876 37.2501 39.534 37.8381 40.598 37.9501V34.4641L40.094 34.3521C38.442 33.9741 37.588 33.0501 37.588 31.6081C37.588 30.0121 38.778 28.8781 40.598 28.7241V27.5061H41.494V28.7101C43.188 28.8641 44.266 29.9001 44.364 31.5241H43.006C42.95 30.6281 42.404 30.0541 41.494 29.9281V33.4001L42.04 33.5261C43.72 33.9041 44.532 34.7861 44.532 36.1861C44.532 37.8521 43.342 38.9721 41.494 39.1401V40.3581H40.598ZM40.374 33.1341L40.598 33.1901V29.9281C39.562 30.0681 38.932 30.6701 38.932 31.5661C38.932 32.3781 39.394 32.8961 40.374 33.1341ZM41.76 34.7441L41.494 34.6881V37.9221C42.544 37.7821 43.188 37.1801 43.188 36.2981C43.188 35.4861 42.726 34.9681 41.76 34.7441ZM49.1681 39.1681C47.0961 39.1681 45.7521 37.8521 45.7521 35.8361H47.1101C47.1101 37.1381 47.9081 37.9361 49.1961 37.9361C50.5681 37.9361 51.4501 37.0261 51.4501 35.6541C51.4501 34.3521 50.6241 33.3861 49.2101 33.3861C48.3561 33.3861 47.5721 33.7921 47.1101 34.3661L45.9481 34.0721L47.1801 28.8781H52.2481V30.1381H48.1741L47.5021 32.8261C48.0341 32.4201 48.7061 32.2101 49.4621 32.2101C51.5201 32.2101 52.8501 33.6521 52.8501 35.5981C52.8501 37.6981 51.3521 39.1681 49.1681 39.1681ZM54.0376 33.9461C54.0376 30.8101 55.6616 28.6821 58.2096 28.6821C60.7436 28.6821 62.3676 30.8101 62.3676 33.9461C62.3676 37.0961 60.8136 39.1821 58.2096 39.1821C55.5916 39.1821 54.0376 37.0961 54.0376 33.9461ZM55.3956 33.9461C55.3956 36.4381 56.4316 37.9501 58.2096 37.9501C59.9876 37.9501 61.0096 36.4381 61.0096 33.9461C61.0096 31.4261 59.9876 29.9141 58.2096 29.9141C56.4316 29.9141 55.3956 31.4261 55.3956 33.9461Z"
                  fill="black"
                />
                <path
                  d="M182.825 40.3581V39.1541C180.977 39.0421 179.759 37.9921 179.675 36.3541H181.075C181.103 37.2501 181.761 37.8381 182.825 37.9501V34.4641L182.321 34.3521C180.669 33.9741 179.815 33.0501 179.815 31.6081C179.815 30.0121 181.005 28.8781 182.825 28.7241V27.5061H183.721V28.7101C185.415 28.8641 186.493 29.9001 186.591 31.5241H185.233C185.177 30.6281 184.631 30.0541 183.721 29.9281V33.4001L184.267 33.5261C185.947 33.9041 186.759 34.7861 186.759 36.1861C186.759 37.8521 185.569 38.9721 183.721 39.1401V40.3581H182.825ZM182.601 33.1341L182.825 33.1901V29.9281C181.789 30.0681 181.159 30.6701 181.159 31.5661C181.159 32.3781 181.621 32.8961 182.601 33.1341ZM183.987 34.7441L183.721 34.6881V37.9221C184.771 37.7821 185.415 37.1801 185.415 36.2981C185.415 35.4861 184.953 34.9681 183.987 34.7441ZM194.783 38.9861L187.951 39.0001V37.9501L191.213 35.1361C192.851 33.7221 193.313 33.0361 193.313 31.9581C193.313 30.6841 192.585 29.9281 191.367 29.9281C190.121 29.9281 189.309 30.8381 189.281 32.2801H187.909C187.951 30.1101 189.323 28.6961 191.381 28.6961C193.411 28.6961 194.713 29.9281 194.713 31.8741C194.713 33.3161 193.999 34.3381 192.207 35.8921L190.107 37.7121H194.783V38.9861ZM196.045 33.9461C196.045 30.8101 197.669 28.6821 200.217 28.6821C202.751 28.6821 204.375 30.8101 204.375 33.9461C204.375 37.0961 202.821 39.1821 200.217 39.1821C197.599 39.1821 196.045 37.0961 196.045 33.9461ZM197.403 33.9461C197.403 36.4381 198.439 37.9501 200.217 37.9501C201.995 37.9501 203.017 36.4381 203.017 33.9461C203.017 31.4261 201.995 29.9141 200.217 29.9141C198.439 29.9141 197.403 31.4261 197.403 33.9461ZM205.752 33.9461C205.752 30.8101 207.376 28.6821 209.924 28.6821C212.458 28.6821 214.082 30.8101 214.082 33.9461C214.082 37.0961 212.528 39.1821 209.924 39.1821C207.306 39.1821 205.752 37.0961 205.752 33.9461ZM207.11 33.9461C207.11 36.4381 208.146 37.9501 209.924 37.9501C211.702 37.9501 212.724 36.4381 212.724 33.9461C212.724 31.4261 211.702 29.9141 209.924 29.9141C208.146 29.9141 207.11 31.4261 207.11 33.9461Z"
                  fill="black"
                />
                <rect
                  y="8.00006"
                  width="247"
                  height="6"
                  rx="3"
                  fill="#F0F0F0"
                />
                <rect
                  x="43.127"
                  y="8"
                  width="150.291"
                  height="6"
                  rx="3"
                  fill="black"
                />
                <circle cx="51" cy="10.0001" r="10" fill="black" />
                <circle cx="197" cy="10.0001" r="10" fill="black" />
              </svg>

              <svg className="block sm:hidden" width="353" height="43" viewBox="0 0 353 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M40.598 40.3581V39.1541C38.75 39.0421 37.532 37.9921 37.448 36.3541H38.848C38.876 37.2501 39.534 37.8381 40.598 37.9501V34.4641L40.094 34.3521C38.442 33.9741 37.588 33.0501 37.588 31.6081C37.588 30.0121 38.778 28.8781 40.598 28.7241V27.5061H41.494V28.7101C43.188 28.8641 44.266 29.9001 44.364 31.5241H43.006C42.95 30.6281 42.404 30.0541 41.494 29.9281V33.4001L42.04 33.5261C43.72 33.9041 44.532 34.7861 44.532 36.1861C44.532 37.8521 43.342 38.9721 41.494 39.1401V40.3581H40.598ZM40.374 33.1341L40.598 33.1901V29.9281C39.562 30.0681 38.932 30.6701 38.932 31.5661C38.932 32.3781 39.394 32.8961 40.374 33.1341ZM41.76 34.7441L41.494 34.6881V37.9221C42.544 37.7821 43.188 37.1801 43.188 36.2981C43.188 35.4861 42.726 34.9681 41.76 34.7441ZM49.1681 39.1681C47.0961 39.1681 45.7521 37.8521 45.7521 35.8361H47.1101C47.1101 37.1381 47.9081 37.9361 49.1961 37.9361C50.5681 37.9361 51.4501 37.0261 51.4501 35.6541C51.4501 34.3521 50.6241 33.3861 49.2101 33.3861C48.3561 33.3861 47.5721 33.7921 47.1101 34.3661L45.9481 34.0721L47.1801 28.8781H52.2481V30.1381H48.1741L47.5021 32.8261C48.0341 32.4201 48.7061 32.2101 49.4621 32.2101C51.5201 32.2101 52.8501 33.6521 52.8501 35.5981C52.8501 37.6981 51.3521 39.1681 49.1681 39.1681ZM54.0376 33.9461C54.0376 30.8101 55.6616 28.6821 58.2096 28.6821C60.7436 28.6821 62.3676 30.8101 62.3676 33.9461C62.3676 37.0961 60.8136 39.1821 58.2096 39.1821C55.5916 39.1821 54.0376 37.0961 54.0376 33.9461ZM55.3956 33.9461C55.3956 36.4381 56.4316 37.9501 58.2096 37.9501C59.9876 37.9501 61.0096 36.4381 61.0096 33.9461C61.0096 31.4261 59.9876 29.9141 58.2096 29.9141C56.4316 29.9141 55.3956 31.4261 55.3956 33.9461Z" fill="black"/>
<rect y="8" width="353" height="6" rx="3" fill="#F0F0F0"/>
<rect x="43" y="8" width="263" height="6" rx="3" fill="black"/>
<circle cx="51" cy="10" r="10" fill="black"/>
<circle cx="304" cy="10" r="10" fill="black"/>
</svg>

            </div>
          </div>

          <div className="flex flex-col border-b-[1px] border-b-[#0000001A] pb-6 mt-5">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-[20px] font-satoshi font-[700]">Colors</h1>
              <FaChevronUp className="text-[#00000066]" />
            </div>
            <div className="grid sm:grid-cols-5 grid-cols-7 gap-2">
              <h1 className="w-[37px] h-[37px] border-2 rounded-full bg-[#00C12B] border-[#00C12B]"></h1>
              <h1 className="w-[37px] h-[37px] border-2 rounded-full bg-[#F50606] border-[#F50606]"></h1>
              <h1 className="w-[37px] h-[37px] border-2 rounded-full bg-[#F5DD06] border-[#F5DD06]"></h1>
              <h1 className="w-[37px] h-[37px] border-2 rounded-full bg-[#F57906] border-[#F57906]"></h1>
              <h1 className="w-[37px] h-[37px] border-2 rounded-full bg-[#06CAF5] border-[#06CAF5]"></h1>
              <h1 className="w-[37px] h-[37px] border-2 rounded-full bg-blue-700 border-blue-700 inline-flex items-center justify-center">
                <FaCheck className="text-white" />
              </h1>
              <h1 className="w-[37px] h-[37px] border-2 rounded-full bg-[#7D06F5] border-[#7D06F5]"></h1>
              <h1 className="w-[37px] h-[37px] border-2 rounded-full bg-[#F506A4] border-[#F506A4]"></h1>
              <h1 className="w-[37px] h-[37px] border-2 rounded-full bg-white border-[#00000033]"></h1>
              <h1 className="w-[37px] h-[37px] border-2 rounded-full bg-black"></h1>
            </div>
          </div>

          <div className="border-b-[1px] border-b-[#0000001A] pb-7">
            <div className="flex items-center justify-between mt-5">
              <h1 className="text-[20px] font-satoshi font-[700]">Size</h1>
              <FaChevronUp className="text-[#00000066]" />
            </div>
            <div className="font-satoshi grid grid-cols-3 sm:grid-cols-2 mt-5 gap-3">
              <h1 className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] flex items-center justify-center text-[#00000099]">
                XX-Small
              </h1>
              <h1 className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] flex items-center justify-center text-[#00000099]">
                X-Small
              </h1>
              <h1 className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] flex items-center justify-center text-[#00000099]">
                Small
              </h1>
              <h1 className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] flex items-center justify-center text-[#00000099]">
                Medium
              </h1>
              <h1 className="w-[96px] h-[39px] rounded-full bg-black text-white flex items-center justify-center">
                Large
              </h1>
              <h1 className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] flex items-center justify-center text-[#00000099]">
                X-Large
              </h1>
              <h1 className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] flex items-center justify-center text-[#00000099]">
                XX-Large
              </h1>
              <h1 className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] flex items-center justify-center text-[#00000099]">
                3X-Large
              </h1>
              <h1 className="w-[96px] h-[39px] rounded-full bg-[#F0F0F0] flex items-center justify-center text-[#00000099]">
                4X-Large
              </h1>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mt-2">
              <h1 className="text-[20px] font-satoshi font-[700]">
                Dress Style
              </h1>
              <FaChevronUp className="text-[#00000066]" />
            </div>
            <div className="font-satoshi text-[16px] text-[#00000099] flex flex-col gap-3 mt-5">
              <h1 className="inline-flex items-center justify-between">
                Casual
                <span>
                  <GrFormNext />
                </span>
              </h1>
              <h1 className="inline-flex items-center justify-between">
                Formal
                <span>
                  <GrFormNext />
                </span>
              </h1>
              <h1 className="inline-flex items-center justify-between">
                Party
                <span>
                  <GrFormNext />
                </span>
              </h1>
              <h1 className="inline-flex items-center justify-between">
                Gym
                <span>
                  <GrFormNext />
                </span>
              </h1>
            </div>
          </div>

          <div className="flex justify-center items-center mt-5">
            <button className="text-[#FFFFFF] text-[14px] bg-black w-sm p-4 rounded-full">
              Apply Filter
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Filters;
