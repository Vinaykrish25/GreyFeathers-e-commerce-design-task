import React from "react";
import { GrFormNext } from "react-icons/gr";
import front from "../assets/front_t-shirt.png";
import back from "../assets/back_t-shirt.png";
import man from "../assets/man_t-shirt.png";
import full from "../assets/full_t-shirt.png";
import { FaCheck } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const AddToCart = () => {
  return (
    <div className="max-w-screen px-10 mt-5 mb-15">
      <div className="font-satoshi text-[14px] sm:text-[16px] font-[400] flex items-center gap-1 w-full mb-5 sm:mb-8">
        <h1 className="text-[#00000099]">Home</h1>
        <h1 className="text-[#00000099]">
          <GrFormNext />
        </h1>
        <h1 className="text-[#00000099]">Shop</h1>
        <h1 className="text-[#00000099]">
          <GrFormNext />
        </h1>
        <h1 className="text-[#00000099]">Men</h1>
        <h1 className="text-[#00000099]">
          <GrFormNext />
        </h1>
        <h1>T-shirts</h1>
      </div>

      <div className="flex sm:flex-row flex-col sm:items-center gap-2">
        <div className="flex sm:flex-row flex-col-reverse items-center gap-3">
        <div className="flex flex-row items-center sm:flex-col gap-5">
          <div className="w-[111px] h-[106px] sm:w-[152px] sm:h-[167px] bg-[#F0EEED] rounded-[20px] border-[1px]">
            <img
              src={front}
              className="object-cover w-full h-full rounded-[20px]"
            />
          </div>
          <div className="w-[111px] h-[106px] sm:w-[152px] sm:h-[167px] bg-[#F0EEED] rounded-[20px]">
            <img
              src={back}
              className="object-cover w-full h-full rounded-[20px]"
            />
          </div>
          <div className="w-[111px] h-[106px] sm:w-[152px] sm:h-[167px] bg-[#F0EEED] rounded-[20px]">
            <img
              src={man}
              className="object-cover w-full h-full rounded-[20px]"
            />
          </div>
        </div>
        <div className="w-[358px] h-[290px] sm:w-[444px] sm:h-[530px] bg-[#F0EEED] rounded-[20px]">
          <img
            src={full}
            className="object-cover w-full h-full rounded-[20px]"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center gap-2">
        <h1 className="font-integralgf font-bold text-[24px] sm:text-[40px] mb-3 leading-8">
          ONE LIFE GRAPHIC <br className="block sm:hidden"/> T-SHIRT
        </h1>
       <svg className="w-[154px] h-[19px] sm:w-[193px] sm:h-[24px]" viewBox="0 0 154 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.33383 0.166138L11.9782 5.86028L18.2108 6.61566L13.6125 10.8902L14.8201 17.0512L9.33383 13.9989L3.84754 17.0512L5.05512 10.8902L0.45683 6.61566L6.68944 5.86028L9.33383 0.166138Z" fill="#FFC633"/>
<path d="M33.3646 0.166138L36.009 5.86028L42.2416 6.61566L37.6433 10.8902L38.8509 17.0512L33.3646 13.9989L27.8783 17.0512L29.0859 10.8902L24.4876 6.61566L30.7202 5.86028L33.3646 0.166138Z" fill="#FFC633"/>
<path d="M57.3954 0.166138L60.0397 5.86028L66.2724 6.61566L61.6741 10.8902L62.8816 17.0512L57.3954 13.9989L51.9091 17.0512L53.1166 10.8902L48.5184 6.61566L54.751 5.86028L57.3954 0.166138Z" fill="#FFC633"/>
<path d="M81.4259 0.166138L84.0703 5.86028L90.3029 6.61566L85.7046 10.8902L86.9122 17.0512L81.4259 13.9989L75.9396 17.0512L77.1472 10.8902L72.5489 6.61566L78.7815 5.86028L81.4259 0.166138Z" fill="#FFC633"/>
<path d="M99.5138 17.0512L105 13.9989V0.166138L102.356 5.86028L96.123 6.61566L100.721 10.8902L99.5138 17.0512Z" fill="#FFC633"/>
<path d="M128.98 12.872H127.804V15H126.824V12.872H121.56V11.976L126.46 4.976H127.804V11.976H128.98V12.872ZM122.652 11.976H126.824V6.012L122.652 11.976ZM131.242 15.154C130.766 15.154 130.36 14.762 130.36 14.3C130.36 13.824 130.766 13.418 131.242 13.418C131.718 13.418 132.124 13.824 132.124 14.3C132.124 14.762 131.718 15.154 131.242 15.154ZM136.763 15.168C134.747 15.168 133.459 13.908 133.459 11.934H134.467C134.467 13.376 135.349 14.244 136.777 14.244C138.289 14.244 139.269 13.236 139.269 11.752C139.269 10.352 138.359 9.246 136.777 9.246C135.853 9.246 135.013 9.666 134.467 10.268L133.669 10.016L134.873 4.976H139.717V5.9H135.601L134.845 9.05C135.405 8.602 136.133 8.35 136.917 8.35C139.003 8.35 140.291 9.848 140.291 11.724C140.291 13.74 138.863 15.168 136.763 15.168ZM141.817 15H140.865L144.771 4.976H145.751L141.817 15Z" fill="black"/>
<path d="M149.806 15.168C147.79 15.168 146.502 13.908 146.502 11.934H147.51C147.51 13.376 148.392 14.244 149.82 14.244C151.332 14.244 152.312 13.236 152.312 11.752C152.312 10.352 151.402 9.246 149.82 9.246C148.896 9.246 148.056 9.666 147.51 10.268L146.712 10.016L147.916 4.976H152.76V5.9H148.644L147.888 9.05C148.448 8.602 149.176 8.35 149.96 8.35C152.046 8.35 153.334 9.848 153.334 11.724C153.334 13.74 151.906 15.168 149.806 15.168Z" fill="black" fill-opacity="0.6"/>
</svg>

        <div className="flex items-center gap-[12px]">
              <h1 className="font-satoshi font-[700] text-[24px] sm:text-[32px]">$260</h1>
              <h1 className="font-satoshi font-[700] text-[24px] sm:text-[32px] text-[#0000004D] line-through">
                $300
              </h1>
              <h4 className="font-satoshi font-[600] text-[14px] sm:text-[16px] text-[#FF3333] bg-[#FF33331A] text-center px-4 py-1 rounded-full">
                -40%
              </h4>
            </div>
            <h1 className="font-satoshi text-[#00000099] font-[400] text-[14px] sm:text-[16px] border-b-[1px] border-b-[#0000001A] pb-5">This graphic t-shirt which is perfect for any occasion. <br className="block sm:hidden"/> Crafted from a soft and <br className="hidden sm:block"/> breathable fabric, it offers superior<br className="block sm:hidden"/> comfort and style.</h1>
            <h1 className="font-satoshi text-[#00000099] font-[400] text-[14px] sm:text-[16px]">Select Colors</h1>
            <div className="flex gap-4 border-b-[1px] border-b-[#0000001A] pb-5">
                <div className="w-[39px] h-[39px] sm:w-[37px] sm:h-[37px] text-[#FFFFFF] bg-[#4F4631] flex items-center justify-center rounded-full"><FaCheck /></div>
                <div className="w-[39px] h-[39px] sm:w-[37px] sm:h-[37px] rounded-full bg-[#314F4A]"></div>
                <div className="w-[39px] h-[39px] sm:w-[37px] sm:h-[37px] rounded-full bg-[#31344F]"></div>
            </div>
            <h1 className="font-satoshi text-[#00000099] font-[400] text-[14px] sm:text-[16px] pb-4">Choose Size</h1>
            <div className="flex gap-4 border-b-[1px] border-b-[#0000001A] pb-5">
                <div className="w-[105px] h-[46px] font-satoshi font-[400] text-[14px] sm:text-[16px] text-[#00000099] text-center bg-[#F0F0F0] flex items-center justify-center rounded-full">Small</div>
                <div className="w-[105px] h-[46px] font-satoshi font-[400] text-[14px] sm:text-[16px] text-[#00000099] text-center bg-[#F0F0F0] flex items-center justify-center rounded-full">Medium</div>
                <div className="w-[105px] h-[46px] font-satoshi font-[500] text-[14px] sm:text-[16px] text-white text-center bg-black flex items-center justify-center rounded-full">Large</div>
                <div className="w-[105px] h-[46px] font-satoshi font-[400] text-[14px] sm:text-[16px] text-[#00000099] text-center bg-[#F0F0F0] flex items-center justify-center rounded-full">X-Large</div>
            </div>
            <div className="flex items-center gap-4 pt-1">
                <div className="flex w-[170px] h-[52px] font-satoshi items-center gap-12 p-3 bg-[#F0F0F0] rounded-full">
                    <h1 className="font-[500]"><FaMinus className="w-[20px] h-[20px]"/></h1>
                    <h1 className="text-[14px] sm:text-[16px] font-[500]">1</h1>
                    <h1 className="font-[500]"><FaPlus className="w-[20px] h-[20px]"/></h1>
                </div>
                <button className="font-satoshi font-[500] text-white bg-black w-xs rounded-full p-3 text-[14px] sm:text-[16px]">Add to Cart</button>
            </div>
      </div>
      </div>
    </div>
  );
};

export default AddToCart;
