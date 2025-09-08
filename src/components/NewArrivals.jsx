import React from "react";
import arrival_1 from "../assets/arrival_1.png";
import arrival_2 from "../assets/arrival_2.png";
import arrival_3 from "../assets/arrival_3.png";
import arrival_4 from "../assets/arrival_4.png";

const NewArrivals = () => {
  return (
    <div className="max-w-screen border-b-[1px] border-b-[#0000001A] pb-10">
      <h1 className="font-integralgf font-bold text-[700] text-[32px] sm:text-[48px] text-center">
        NEW ARRIVALS
      </h1>

      <div className="flex items-center justify-between p-4 sm:p-10">
        <div className="flex flex-col">
          <div className="bg-[#F0EEED] rounded-[20px] w-[198px] h-[200px] sm:w-[280px] sm:h-[298px] overflow-hidden flex items-center justify-center mb-3">
            <img src={arrival_1} alt="" className="object-contain w-full" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-satoshi text-[16px] sm:text-[20px] font-[900]">
              T-Shirt with Tape Details
            </h1>
            <div className="flex items-center gap-3">
              <svg
                className="w-[127px] h-[16px] sm:w-[150px] sm:h-[19px]"
                viewBox="0 0 127 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.73375 0.279785L9.92481 4.99779L15.089 5.62367L11.279 9.16544L12.2795 14.2703L7.73375 11.7412L3.18796 14.2703L4.18853 9.16544L0.378517 5.62367L5.54268 4.99779L7.73375 0.279785Z"
                  fill="#FFC633"
                />
                <path
                  d="M27.6449 0.279785L29.8359 4.99779L35.0001 5.62367L31.1901 9.16544L32.1907 14.2703L27.6449 11.7412L23.0991 14.2703L24.0997 9.16544L20.2896 5.62367L25.4538 4.99779L27.6449 0.279785Z"
                  fill="#FFC633"
                />
                <path
                  d="M47.5561 0.279785L49.7472 4.99779L54.9114 5.62367L51.1014 9.16544L52.1019 14.2703L47.5561 11.7412L43.0104 14.2703L44.0109 9.16544L40.2009 5.62367L45.3651 4.99779L47.5561 0.279785Z"
                  fill="#FFC633"
                />
                <path
                  d="M67.4673 0.279785L69.6583 4.99779L74.8225 5.62367L71.0125 9.16544L72.013 14.2703L67.4673 11.7412L62.9215 14.2703L63.922 9.16544L60.112 5.62367L65.2762 4.99779L67.4673 0.279785Z"
                  fill="#FFC633"
                />
                <path
                  d="M82.4542 14.2703L87 11.7412V0.279785L84.8089 4.99779L79.6448 5.62367L83.4548 9.16544L82.4542 14.2703Z"
                  fill="#FFC633"
                />
                <path
                  d="M104.84 11.1895H103.832V13.0135H102.992V11.1895H98.48V10.4215L102.68 4.42155H103.832V10.4215H104.84V11.1895ZM99.416 10.4215H102.992V5.30955L99.416 10.4215ZM106.779 13.1455C106.371 13.1455 106.023 12.8095 106.023 12.4135C106.023 12.0055 106.371 11.6575 106.779 11.6575C107.187 11.6575 107.535 12.0055 107.535 12.4135C107.535 12.8095 107.187 13.1455 106.779 13.1455ZM111.511 13.1575C109.783 13.1575 108.679 12.0775 108.679 10.3855H109.543C109.543 11.6215 110.299 12.3655 111.523 12.3655C112.819 12.3655 113.659 11.5015 113.659 10.2295C113.659 9.02955 112.879 8.08155 111.523 8.08155C110.731 8.08155 110.011 8.44155 109.543 8.95755L108.859 8.74155L109.891 4.42155H114.043V5.21355H110.515L109.867 7.91355C110.347 7.52955 110.971 7.31355 111.643 7.31355C113.431 7.31355 114.535 8.59755 114.535 10.2055C114.535 11.9335 113.311 13.1575 111.511 13.1575ZM115.843 13.0135H115.027L118.375 4.42155H119.215L115.843 13.0135Z"
                  fill="black"
                />
                <path
                  d="M122.691 13.1575C120.963 13.1575 119.859 12.0775 119.859 10.3855H120.723C120.723 11.6215 121.479 12.3655 122.703 12.3655C123.999 12.3655 124.839 11.5015 124.839 10.2295C124.839 9.02955 124.059 8.08155 122.703 8.08155C121.911 8.08155 121.191 8.44155 120.723 8.95755L120.039 8.74155L121.071 4.42155H125.223V5.21355H121.695L121.047 7.91355C121.527 7.52955 122.151 7.31355 122.823 7.31355C124.611 7.31355 125.715 8.59755 125.715 10.2055C125.715 11.9335 124.491 13.1575 122.691 13.1575Z"
                  fill="black"
                  fill-opacity="0.6"
                />
              </svg>
            </div>
            <h1 className="font-satoshi font-[700] text-[20px] sm:text-[24px]">
              $120
            </h1>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="bg-[#F0EEED] rounded-[20px] w-[198px] h-[200px] sm:w-[280px] sm:h-[298px] overflow-hidden flex items-center justify-center mb-3">
            <img src={arrival_2} alt="" className="object-contain w-full" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-satoshi text-[16px] sm:text-[20px] font-[900]">
              Skinny Fit Jeans
            </h1>
            <div>
              <svg
                className="w-[100px] h-[16px] sm:w-[150px] sm:h-[19px]"
                viewBox="0 0 107 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.73375 0.279785L9.92481 4.99779L15.089 5.62367L11.279 9.16544L12.2795 14.2703L7.73375 11.7412L3.18796 14.2703L4.18853 9.16544L0.378517 5.62367L5.54268 4.99779L7.73375 0.279785Z"
                  fill="#FFC633"
                />
                <path
                  d="M27.6449 0.279785L29.8359 4.99779L35.0001 5.62367L31.1901 9.16544L32.1907 14.2703L27.6449 11.7412L23.0991 14.2703L24.0997 9.16544L20.2896 5.62367L25.4538 4.99779L27.6449 0.279785Z"
                  fill="#FFC633"
                />
                <path
                  d="M47.5561 0.279785L49.7472 4.99779L54.9114 5.62367L51.1014 9.16544L52.1019 14.2703L47.5561 11.7412L43.0104 14.2703L44.0109 9.16544L40.2009 5.62367L45.3651 4.99779L47.5561 0.279785Z"
                  fill="#FFC633"
                />
                <path
                  d="M62.543 14.2703L67.0888 11.7412V0.279785L64.8977 4.99779L59.7335 5.62367L63.5435 9.16544L62.543 14.2703Z"
                  fill="#FFC633"
                />
                <path
                  d="M81.1249 8.40555H80.4409V7.80555L83.0929 5.18955H78.9769V4.42155H84.1849V5.11755L81.6169 7.67355C83.2249 7.75755 84.3769 8.77755 84.3769 10.3375C84.3769 12.0415 83.1289 13.1575 81.3889 13.1575C79.6969 13.1575 78.5569 12.1135 78.5569 10.3975H79.4089C79.4089 11.6335 80.1769 12.3775 81.3889 12.3775C82.6729 12.3775 83.5009 11.5615 83.5009 10.3135C83.5009 9.13755 82.6609 8.40555 81.1249 8.40555ZM86.4812 13.1455C86.0732 13.1455 85.7252 12.8095 85.7252 12.4135C85.7252 12.0055 86.0732 11.6575 86.4812 11.6575C86.8892 11.6575 87.2372 12.0055 87.2372 12.4135C87.2372 12.8095 86.8892 13.1455 86.4812 13.1455ZM91.2134 13.1575C89.4854 13.1575 88.3814 12.0775 88.3814 10.3855H89.2454C89.2454 11.6215 90.0014 12.3655 91.2254 12.3655C92.5214 12.3655 93.3614 11.5015 93.3614 10.2295C93.3614 9.02955 92.5814 8.08155 91.2254 8.08155C90.4334 8.08155 89.7134 8.44155 89.2454 8.95755L88.5614 8.74155L89.5934 4.42155H93.7454V5.21355H90.2174L89.5694 7.91355C90.0494 7.52955 90.6734 7.31355 91.3454 7.31355C93.1334 7.31355 94.2374 8.59755 94.2374 10.2055C94.2374 11.9335 93.0134 13.1575 91.2134 13.1575ZM95.5455 13.0135H94.7295L98.0775 4.42155H98.9175L95.5455 13.0135Z"
                  fill="black"
                />
                <path
                  d="M102.393 13.1575C100.665 13.1575 99.5611 12.0775 99.5611 10.3855H100.425C100.425 11.6215 101.181 12.3655 102.405 12.3655C103.701 12.3655 104.541 11.5015 104.541 10.2295C104.541 9.02955 103.761 8.08155 102.405 8.08155C101.613 8.08155 100.893 8.44155 100.425 8.95755L99.7411 8.74155L100.773 4.42155H104.925V5.21355H101.397L100.749 7.91355C101.229 7.52955 101.853 7.31355 102.525 7.31355C104.313 7.31355 105.417 8.59755 105.417 10.2055C105.417 11.9335 104.193 13.1575 102.393 13.1575Z"
                  fill="black"
                  fill-opacity="0.6"
                />
              </svg>
            </div>
            <div className="flex items-center gap-[10px]">
              <h1 className="font-satoshi font-[700] text-[20px] sm:text-[24px]">
                $120
              </h1>
              <h1 className="font-satoshi font-[700] text-[20px] sm:text-[24px] text-[#00000066] line-through">
                $260
              </h1>
              <h4 className="font-satoshi font-[700] text-[10px] sm:text-[12px] text-[#FF3333] bg-[#FF33331A] text-center px-4 py-1 rounded-full">
                -20%
              </h4>
            </div>
          </div>
        </div>

        <div className="hidden sm:flex flex-col">
          <div className="bg-[#F0EEED] rounded-[20px] w-[280px] h-[298px] overflow-hidden flex items-center justify-center mb-3">
            <img src={arrival_3} alt="" className="object-contain w-full" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-satoshi text-[20px] font-[900]">
              Checkered Shirt
            </h1>
            <div className="flex items-center gap-3">
              <svg
                width="104"
                height="19"
                viewBox="0 0 104 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
                <path
                  d="M33.0468 0.255005L35.666 5.89491L41.8393 6.6431L37.2848 10.8769L38.4809 16.9793L33.0468 13.956L27.6128 16.9793L28.8089 10.8769L24.2544 6.6431L30.4276 5.89491L33.0468 0.255005Z"
                  fill="#FFC633"
                />
                <path
                  d="M56.8487 0.255005L59.4679 5.89491L65.6412 6.6431L61.0867 10.8769L62.2827 16.9793L56.8487 13.956L51.4147 16.9793L52.6107 10.8769L48.0562 6.6431L54.2295 5.89491L56.8487 0.255005Z"
                  fill="#FFC633"
                />
                <path
                  d="M80.6506 0.255005L83.2698 5.89491L89.4431 6.6431L84.8886 10.8769L86.0846 16.9793L80.6506 13.956L75.2166 16.9793L76.4126 10.8769L71.8581 6.6431L78.0314 5.89491L80.6506 0.255005Z"
                  fill="#FFC633"
                />
                <path
                  d="M98.566 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.566 16.9793Z"
                  fill="#FFC633"
                />
              </svg>
              <h2 className="font-[400] text-[14px] font-satoshi">4.5/5</h2>
            </div>
            <h1 className="font-satoshi font-[700] text-[24px]">$180</h1>
          </div>
        </div>

        <div className="hidden sm:flex flex-col">
          <div className="bg-[#F0EEED] rounded-[20px] w-[280px] h-[298px] overflow-hidden flex items-center justify-center mb-3">
            <img src={arrival_4} alt="" className="object-contain w-full" />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-satoshi text-[20px] font-[900]">
              Sleeve Striped T-shirt
            </h1>
            <div className="flex items-center gap-3">
              <svg
                width="104"
                height="19"
                viewBox="0 0 104 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
                  fill="#FFC633"
                />
                <path
                  d="M33.0468 0.255005L35.666 5.89491L41.8393 6.6431L37.2848 10.8769L38.4809 16.9793L33.0468 13.956L27.6128 16.9793L28.8089 10.8769L24.2544 6.6431L30.4276 5.89491L33.0468 0.255005Z"
                  fill="#FFC633"
                />
                <path
                  d="M56.8487 0.255005L59.4679 5.89491L65.6412 6.6431L61.0867 10.8769L62.2827 16.9793L56.8487 13.956L51.4147 16.9793L52.6107 10.8769L48.0562 6.6431L54.2295 5.89491L56.8487 0.255005Z"
                  fill="#FFC633"
                />
                <path
                  d="M80.6506 0.255005L83.2698 5.89491L89.4431 6.6431L84.8886 10.8769L86.0846 16.9793L80.6506 13.956L75.2166 16.9793L76.4126 10.8769L71.8581 6.6431L78.0314 5.89491L80.6506 0.255005Z"
                  fill="#FFC633"
                />
                <path
                  d="M98.566 16.9793L104 13.956V0.255005L101.381 5.89491L95.2075 6.6431L99.762 10.8769L98.566 16.9793Z"
                  fill="#FFC633"
                />
              </svg>
              <h2 className="font-[400] text-[14px] font-satoshi">4.5/5</h2>
            </div>
            <div className="flex items-center gap-[10px]">
              <h1 className="font-satoshi font-[700] text-[24px]">$130</h1>
              <h1 className="font-satoshi font-[700] text-[24px] text-[#00000066] line-through">
                $160
              </h1>
              <h4 className="font-satoshi font-[700] text-[12px] text-[#FF3333] bg-[#FF33331A] text-center px-4 py-1 rounded-full">
                -30%
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="w-[358px] h-[46px] sm:w-[218px] sm:h-[52px] border-[1px] rounded-full border-[#0000001A] font-[500] text-[14px] sm:text-[16px]">
          View All
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
