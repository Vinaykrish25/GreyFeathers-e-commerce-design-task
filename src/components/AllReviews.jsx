import React from "react";
import { LuSlidersVertical } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";

const AllReviews = () => {
  return (
    <div className="max-w-screen mx-auto mb-5">
      <div className="border-b-[1px] border-b-[#0000001A] flex items-center justify-around">
        <h1 className="font-satoshi text-[#00000099] font-[400] text-[16px] sm:text-[20px] pb-5">
          Product Details
        </h1>
        <h1 className="font-satoshi text-black font-[600] text-[16px] sm:text-[20px] border-b-[2px] border-b-[#000000] pb-5 sm:px-20">
          Rating & Reviews
        </h1>
        <h1 className="font-satoshi text-[#00000099] font-[400] text-[16px] sm:text-[20px] pb-5">
          FAQs
        </h1>
      </div>

      <div className="flex items-center gap-22 sm:justify-between py-6 px-10">
        <h1 className="font-satoshi font-[800] text-[20px] sm:text-[24px]">
          All Reviews{" "}
          <span className="font-satoshi font-[400] text-[14px] sm:text-[16px] text-[#00000099]">
            (451)
          </span>
        </h1>
        <div className="flex items-center gap-3">
          <div className="bg-[#F0F0F0] p-3 rounded-full">
            <LuSlidersVertical className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="bg-[#F0F0F0] sm:inline-flex items-center text-[16px] font-[500] font-satoshi w-[128px] h-[48px] justify-center rounded-full gap-6 hidden">
            Latest <FaAngleDown />
          </div>
          <div className="text-[12px] sm:text-[16px] font-[500] font-satoshi text-white w-[128px] h-[48px] bg-black flex items-center justify-center rounded-full">
            Write a Review
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:grid grid-cols-2 place-items-center gap-3">
        <div className="w-[358px] min-h-[224px] sm:w-[610px] sm:h-[241.58px] border-[1px] border-[#0000001A] rounded-[20px] flex flex-col justify-center gap-3 sm:p-10 p-5">
          <div className="flex justify-between items-center">
           <svg className="w-[84px] h-[20px] sm:w-[127px] sm:h-[22px]" viewBox="0 0 108 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.59479 0L12.3131 5.85334L18.72 6.62984L13.9931 11.0239L15.2345 17.3571L9.59479 14.2195L3.95511 17.3571L5.19645 11.0239L0.469603 6.62984L6.87647 5.85334L9.59479 0Z" fill="#FFC633"/>
<path d="M34.2974 -0.00012207L37.0157 5.85322L43.4226 6.62971L38.6958 11.0238L39.9371 17.357L34.2974 14.2194L28.6578 17.357L29.8991 11.0238L25.1722 6.62971L31.5791 5.85322L34.2974 -0.00012207Z" fill="#FFC633"/>
<path d="M59.0001 -0.00012207L61.7184 5.85322L68.1252 6.62971L63.3984 11.0238L64.6397 17.357L59.0001 14.2194L53.3604 17.357L54.6017 11.0238L49.8749 6.62971L56.2817 5.85322L59.0001 -0.00012207Z" fill="#FFC633"/>
<path d="M83.7027 -0.00012207L86.421 5.85322L92.8279 6.62971L88.101 11.0238L89.3424 17.357L83.7027 14.2194L78.063 17.357L79.3044 11.0238L74.5775 6.62971L80.9844 5.85322L83.7027 -0.00012207Z" fill="#FFC633"/>
<path d="M102.296 17.3571L107.936 14.2195V0L105.217 5.85334L98.8105 6.62984L103.537 11.0239L102.296 17.3571Z" fill="#FFC633"/>
</svg>

            <BsThreeDots className="w-7 h-7 text-[#00000066] hidden sm:block" />
          </div>
          <div className="flex items-center gap-1">
            <h1 className="text-[16px] sm:text-[20px] font-satoshi font-[700]">
              Samantha D.{" "}
            </h1>
            <svg className="
            w-[19px] h-[19px]
              sm:w-[24px]
              sm:h-[25px]"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.8291C10.0716 2.8291 8.18657 3.40093 6.58319 4.47227C4.97982 5.54362 3.73013 7.06636 2.99218 8.84794C2.25422 10.6295 2.06114 12.5899 2.43735 14.4812C2.81355 16.3725 3.74215 18.1098 5.10571 19.4734C6.46928 20.837 8.20656 21.7656 10.0979 22.1418C11.9892 22.518 13.9496 22.3249 15.7312 21.5869C17.5127 20.849 19.0355 19.5993 20.1068 17.9959C21.1782 16.3925 21.75 14.5075 21.75 12.5791C21.7473 9.99408 20.7192 7.51571 18.8913 5.68783C17.0634 3.85994 14.585 2.83183 12 2.8291ZM16.2806 10.8597L11.0306 16.1097C10.961 16.1795 10.8783 16.2348 10.7872 16.2725C10.6962 16.3103 10.5986 16.3297 10.5 16.3297C10.4014 16.3297 10.3038 16.3103 10.2128 16.2725C10.1218 16.2348 10.039 16.1795 9.96938 16.1097L7.71938 13.8597C7.57865 13.719 7.49959 13.5281 7.49959 13.3291C7.49959 13.1301 7.57865 12.9392 7.71938 12.7985C7.86011 12.6577 8.05098 12.5787 8.25 12.5787C8.44903 12.5787 8.6399 12.6577 8.78063 12.7985L10.5 14.5188L15.2194 9.79848C15.2891 9.72879 15.3718 9.67352 15.4628 9.63581C15.5539 9.59809 15.6515 9.57868 15.75 9.57868C15.8486 9.57868 15.9461 9.59809 16.0372 9.63581C16.1282 9.67352 16.2109 9.72879 16.2806 9.79848C16.3503 9.86816 16.4056 9.95088 16.4433 10.0419C16.481 10.133 16.5004 10.2306 16.5004 10.3291C16.5004 10.4276 16.481 10.5252 16.4433 10.6163C16.4056 10.7073 16.3503 10.79 16.2806 10.8597Z"
                fill="#01AB31"
              />
            </svg>
          </div>
          <h1 className="font-satoshi text-[#00000099] text-[14px] sm:text-[16px]">
            "I absolutely love this t-shirt! The design is unique <br className="block sm:hidden"/> and the fabric
            feels so <br className="hidden sm:block"/> comfortable. As a fellow <br className="block sm:hidden"/> designer, I appreciate the
            attention to detail. It's <br className="block sm:hidden"/> become my favorite go-to shirt."
          </h1>
          <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[600] font-satoshi">
            Posted on August 14, 2023
          </h1>
        </div>
        <div className="w-[358px] min-h-[224px] sm:w-[610px] sm:h-[241.58px] border-[1px] border-[#0000001A] rounded-[20px] flex flex-col justify-center gap-3 sm:p-10 p-5">
          <div className="flex justify-between items-center">
            <svg className="w-[84px] h-[20px] sm:w-[127px] sm:h-[22px]" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.59479 0.189575L12.3131 6.04291L18.72 6.81941L13.9931 11.2135L15.2345 17.5467L9.59479 14.4091L3.95511 17.5467L5.19645 11.2135L0.469603 6.81941L6.87647 6.04291L9.59479 0.189575Z" fill="#FFC633"/>
<path d="M34.2974 0.189453L37.0157 6.04279L43.4226 6.81929L38.6958 11.2134L39.9371 17.5466L34.2974 14.4089L28.6578 17.5466L29.8991 11.2134L25.1722 6.81929L31.5791 6.04279L34.2974 0.189453Z" fill="#FFC633"/>
<path d="M59.0001 0.189453L61.7184 6.04279L68.1252 6.81929L63.3984 11.2134L64.6397 17.5466L59.0001 14.4089L53.3604 17.5466L54.6017 11.2134L49.8749 6.81929L56.2817 6.04279L59.0001 0.189453Z" fill="#FFC633"/>
<path d="M83.7027 0.189453L86.421 6.04279L92.8279 6.81929L88.101 11.2134L89.3424 17.5466L83.7027 14.4089L78.063 17.5466L79.3044 11.2134L74.5775 6.81929L80.9844 6.04279L83.7027 0.189453Z" fill="#FFC633"/>
</svg>


            <BsThreeDots className="w-7 h-7 text-[#00000066] hidden sm:block" />
          </div>
          <div className="flex items-center gap-1">
            <h1 className="text-[16px] sm:text-[20px] font-satoshi font-[700]">
             Alex M.{" "}
            </h1>
            <svg
              className="
            w-[19px] h-[19px]
              sm:w-[24px]
              sm:h-[25px]"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.8291C10.0716 2.8291 8.18657 3.40093 6.58319 4.47227C4.97982 5.54362 3.73013 7.06636 2.99218 8.84794C2.25422 10.6295 2.06114 12.5899 2.43735 14.4812C2.81355 16.3725 3.74215 18.1098 5.10571 19.4734C6.46928 20.837 8.20656 21.7656 10.0979 22.1418C11.9892 22.518 13.9496 22.3249 15.7312 21.5869C17.5127 20.849 19.0355 19.5993 20.1068 17.9959C21.1782 16.3925 21.75 14.5075 21.75 12.5791C21.7473 9.99408 20.7192 7.51571 18.8913 5.68783C17.0634 3.85994 14.585 2.83183 12 2.8291ZM16.2806 10.8597L11.0306 16.1097C10.961 16.1795 10.8783 16.2348 10.7872 16.2725C10.6962 16.3103 10.5986 16.3297 10.5 16.3297C10.4014 16.3297 10.3038 16.3103 10.2128 16.2725C10.1218 16.2348 10.039 16.1795 9.96938 16.1097L7.71938 13.8597C7.57865 13.719 7.49959 13.5281 7.49959 13.3291C7.49959 13.1301 7.57865 12.9392 7.71938 12.7985C7.86011 12.6577 8.05098 12.5787 8.25 12.5787C8.44903 12.5787 8.6399 12.6577 8.78063 12.7985L10.5 14.5188L15.2194 9.79848C15.2891 9.72879 15.3718 9.67352 15.4628 9.63581C15.5539 9.59809 15.6515 9.57868 15.75 9.57868C15.8486 9.57868 15.9461 9.59809 16.0372 9.63581C16.1282 9.67352 16.2109 9.72879 16.2806 9.79848C16.3503 9.86816 16.4056 9.95088 16.4433 10.0419C16.481 10.133 16.5004 10.2306 16.5004 10.3291C16.5004 10.4276 16.481 10.5252 16.4433 10.6163C16.4056 10.7073 16.3503 10.79 16.2806 10.8597Z"
                fill="#01AB31"
              />
            </svg>
          </div>
          <h1 className="font-satoshi text-[#00000099] text-[14px] sm:text-[16px]">
            "The t-shirt exceeded my expectations! The colors <br className="block sm:hidden"/> are vibrant and the print <br className="hidden sm:block"/> quality is top-notch. <br className="block sm:hidden"/> Being a UI/UX designer myself, I'm quite picky <br className="block sm:hidden"/> about <br className="hidden sm:block"/> aesthetics, and this t-shirt definitely gets a <br className="block sm:hidden"/> thumbs up from me."
          </h1>
          <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[600] font-satoshi">
            Posted on August 15, 2023
          </h1>
        </div>
        <div className="w-[358px] min-h-[224px] sm:w-[610px] sm:h-[241.58px] border-[1px] border-[#0000001A] rounded-[20px] flex flex-col justify-center gap-3 sm:p-10 p-5">
          <div className="flex justify-between items-center">
           <svg className="w-[83.22px] h-[19.19px] sm:w-[97.93px] sm:h-[22.58px]" viewBox="0 0 84 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.59479 0L12.3131 5.85334L18.72 6.62984L13.9931 11.0239L15.2345 17.3571L9.59479 14.2195L3.95511 17.3571L5.19645 11.0239L0.469603 6.62984L6.87647 5.85334L9.59479 0Z" fill="#FFC633"/>
<path d="M34.2974 -0.00012207L37.0157 5.85322L43.4226 6.62971L38.6958 11.0238L39.9371 17.357L34.2974 14.2194L28.6578 17.357L29.8991 11.0238L25.1722 6.62971L31.5791 5.85322L34.2974 -0.00012207Z" fill="#FFC633"/>
<path d="M59.0001 -0.00012207L61.7184 5.85322L68.1252 6.62971L63.3984 11.0238L64.6397 17.357L59.0001 14.2194L53.3604 17.357L54.6017 11.0238L49.8749 6.62971L56.2817 5.85322L59.0001 -0.00012207Z" fill="#FFC633"/>
<path d="M77.5934 17.3571L83.2331 14.2195V0L80.5148 5.85334L74.1079 6.62984L78.8348 11.0239L77.5934 17.3571Z" fill="#FFC633"/>
</svg>


            <BsThreeDots className="w-7 h-7 text-[#00000066] hidden sm:block" />
          </div>
          <div className="flex items-center gap-1">
            <h1 className="text-[16px] sm:text-[20px] font-satoshi font-[700]">
              Ethan R.{" "}
            </h1>
            <svg
             className="
            w-[19px] h-[19px]
              sm:w-[24px]
              sm:h-[25px]"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.8291C10.0716 2.8291 8.18657 3.40093 6.58319 4.47227C4.97982 5.54362 3.73013 7.06636 2.99218 8.84794C2.25422 10.6295 2.06114 12.5899 2.43735 14.4812C2.81355 16.3725 3.74215 18.1098 5.10571 19.4734C6.46928 20.837 8.20656 21.7656 10.0979 22.1418C11.9892 22.518 13.9496 22.3249 15.7312 21.5869C17.5127 20.849 19.0355 19.5993 20.1068 17.9959C21.1782 16.3925 21.75 14.5075 21.75 12.5791C21.7473 9.99408 20.7192 7.51571 18.8913 5.68783C17.0634 3.85994 14.585 2.83183 12 2.8291ZM16.2806 10.8597L11.0306 16.1097C10.961 16.1795 10.8783 16.2348 10.7872 16.2725C10.6962 16.3103 10.5986 16.3297 10.5 16.3297C10.4014 16.3297 10.3038 16.3103 10.2128 16.2725C10.1218 16.2348 10.039 16.1795 9.96938 16.1097L7.71938 13.8597C7.57865 13.719 7.49959 13.5281 7.49959 13.3291C7.49959 13.1301 7.57865 12.9392 7.71938 12.7985C7.86011 12.6577 8.05098 12.5787 8.25 12.5787C8.44903 12.5787 8.6399 12.6577 8.78063 12.7985L10.5 14.5188L15.2194 9.79848C15.2891 9.72879 15.3718 9.67352 15.4628 9.63581C15.5539 9.59809 15.6515 9.57868 15.75 9.57868C15.8486 9.57868 15.9461 9.59809 16.0372 9.63581C16.1282 9.67352 16.2109 9.72879 16.2806 9.79848C16.3503 9.86816 16.4056 9.95088 16.4433 10.0419C16.481 10.133 16.5004 10.2306 16.5004 10.3291C16.5004 10.4276 16.481 10.5252 16.4433 10.6163C16.4056 10.7073 16.3503 10.79 16.2806 10.8597Z"
                fill="#01AB31"
              />
            </svg>
          </div>
          <h1 className="font-satoshi text-[#00000099] text-[14px] sm:text-[16px]">
           "This t-shirt is a must-have for anyone who  <br className="block sm:hidden"/>appreciates good design. The <br className="hidden sm:block"/> minimalistic yet <br className="block sm:hidden"/> stylish pattern caught my eye, and the fit is <br className="block sm:hidden"/> perfect. I can <br className="hidden sm:block"/> see the designer's touch in every <br className="block sm:hidden"/> aspect of this shirt."
          </h1>
          <h1 className="text-[#00000099] text-[14px] sm:text-[16px] font-[600] font-satoshi">
        Posted on August 16, 2023
          </h1>
        </div>
        <div className="w-[610px] h-[241.58px] border-[1px] border-[#0000001A] rounded-[20px] sm:flex flex-col justify-center gap-3 p-10 hidden">
          <div className="flex justify-between items-center">
            <svg
              width="127"
              height="23"
              viewBox="0 0 127 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                fill="#FFC633"
              />
              <path
                d="M40.3552 0L43.5536 6.8872L51.0921 7.80085L45.5304 12.971L46.991 20.4229L40.3552 16.731L33.7194 20.4229L35.18 12.971L29.6182 7.80085L37.1567 6.8872L40.3552 0Z"
                fill="#FFC633"
              />
              <path
                d="M69.4211 0L72.6195 6.8872L80.158 7.80085L74.5963 12.971L76.0569 20.4229L69.4211 16.731L62.7853 20.4229L64.2459 12.971L58.6841 7.80085L66.2226 6.8872L69.4211 0Z"
                fill="#FFC633"
              />
              <path
                d="M98.4868 0L101.685 6.8872L109.224 7.80085L103.662 12.971L105.123 20.4229L98.4868 16.731L91.851 20.4229L93.3116 12.971L87.7498 7.80085L95.2883 6.8872L98.4868 0Z"
                fill="#FFC633"
              />
              <path
                d="M120.364 20.4229L127 16.731V0L123.802 6.8872L116.263 7.80085L121.825 12.971L120.364 20.4229Z"
                fill="#FFC633"
              />
            </svg>
            <BsThreeDots className="w-7 h-7 text-[#00000066]" />
          </div>
          <div className="flex items-center gap-1">
            <h1 className="text-[20px] font-satoshi font-[700]">
              Olivia P.{" "}
            </h1>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.8291C10.0716 2.8291 8.18657 3.40093 6.58319 4.47227C4.97982 5.54362 3.73013 7.06636 2.99218 8.84794C2.25422 10.6295 2.06114 12.5899 2.43735 14.4812C2.81355 16.3725 3.74215 18.1098 5.10571 19.4734C6.46928 20.837 8.20656 21.7656 10.0979 22.1418C11.9892 22.518 13.9496 22.3249 15.7312 21.5869C17.5127 20.849 19.0355 19.5993 20.1068 17.9959C21.1782 16.3925 21.75 14.5075 21.75 12.5791C21.7473 9.99408 20.7192 7.51571 18.8913 5.68783C17.0634 3.85994 14.585 2.83183 12 2.8291ZM16.2806 10.8597L11.0306 16.1097C10.961 16.1795 10.8783 16.2348 10.7872 16.2725C10.6962 16.3103 10.5986 16.3297 10.5 16.3297C10.4014 16.3297 10.3038 16.3103 10.2128 16.2725C10.1218 16.2348 10.039 16.1795 9.96938 16.1097L7.71938 13.8597C7.57865 13.719 7.49959 13.5281 7.49959 13.3291C7.49959 13.1301 7.57865 12.9392 7.71938 12.7985C7.86011 12.6577 8.05098 12.5787 8.25 12.5787C8.44903 12.5787 8.6399 12.6577 8.78063 12.7985L10.5 14.5188L15.2194 9.79848C15.2891 9.72879 15.3718 9.67352 15.4628 9.63581C15.5539 9.59809 15.6515 9.57868 15.75 9.57868C15.8486 9.57868 15.9461 9.59809 16.0372 9.63581C16.1282 9.67352 16.2109 9.72879 16.2806 9.79848C16.3503 9.86816 16.4056 9.95088 16.4433 10.0419C16.481 10.133 16.5004 10.2306 16.5004 10.3291C16.5004 10.4276 16.481 10.5252 16.4433 10.6163C16.4056 10.7073 16.3503 10.79 16.2806 10.8597Z"
                fill="#01AB31"
              />
            </svg>
          </div>
          <h1 className="font-satoshi text-[#00000099]">
            "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not <br /> only represents those principles but also feels great to wear. It's evident <br /> that the designer poured their creativity into making this t-shirt stand out."
          </h1>
          <h1 className="text-[#00000099] text-[16px] font-[600] font-satoshi">
            Posted on August 17, 2023
          </h1>
        </div>
        <div className="w-[610px] h-[241.58px] border-[1px] border-[#0000001A] rounded-[20px] hidden sm:flex flex-col justify-center gap-3 p-10">
          <div className="flex justify-between items-center">
            <svg
              width="127"
              height="23"
              viewBox="0 0 127 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                fill="#FFC633"
              />
              <path
                d="M40.3552 0L43.5536 6.8872L51.0921 7.80085L45.5304 12.971L46.991 20.4229L40.3552 16.731L33.7194 20.4229L35.18 12.971L29.6182 7.80085L37.1567 6.8872L40.3552 0Z"
                fill="#FFC633"
              />
              <path
                d="M69.4211 0L72.6195 6.8872L80.158 7.80085L74.5963 12.971L76.0569 20.4229L69.4211 16.731L62.7853 20.4229L64.2459 12.971L58.6841 7.80085L66.2226 6.8872L69.4211 0Z"
                fill="#FFC633"
              />
              <path
                d="M98.4868 0L101.685 6.8872L109.224 7.80085L103.662 12.971L105.123 20.4229L98.4868 16.731L91.851 20.4229L93.3116 12.971L87.7498 7.80085L95.2883 6.8872L98.4868 0Z"
                fill="#FFC633"
              />
              <path
                d="M120.364 20.4229L127 16.731V0L123.802 6.8872L116.263 7.80085L121.825 12.971L120.364 20.4229Z"
                fill="#FFC633"
              />
            </svg>
            <BsThreeDots className="w-7 h-7 text-[#00000066]" />
          </div>
          <div className="flex items-center gap-1">
            <h1 className="text-[20px] font-satoshi font-[700]">
              Liam K.{" "}
            </h1>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.8291C10.0716 2.8291 8.18657 3.40093 6.58319 4.47227C4.97982 5.54362 3.73013 7.06636 2.99218 8.84794C2.25422 10.6295 2.06114 12.5899 2.43735 14.4812C2.81355 16.3725 3.74215 18.1098 5.10571 19.4734C6.46928 20.837 8.20656 21.7656 10.0979 22.1418C11.9892 22.518 13.9496 22.3249 15.7312 21.5869C17.5127 20.849 19.0355 19.5993 20.1068 17.9959C21.1782 16.3925 21.75 14.5075 21.75 12.5791C21.7473 9.99408 20.7192 7.51571 18.8913 5.68783C17.0634 3.85994 14.585 2.83183 12 2.8291ZM16.2806 10.8597L11.0306 16.1097C10.961 16.1795 10.8783 16.2348 10.7872 16.2725C10.6962 16.3103 10.5986 16.3297 10.5 16.3297C10.4014 16.3297 10.3038 16.3103 10.2128 16.2725C10.1218 16.2348 10.039 16.1795 9.96938 16.1097L7.71938 13.8597C7.57865 13.719 7.49959 13.5281 7.49959 13.3291C7.49959 13.1301 7.57865 12.9392 7.71938 12.7985C7.86011 12.6577 8.05098 12.5787 8.25 12.5787C8.44903 12.5787 8.6399 12.6577 8.78063 12.7985L10.5 14.5188L15.2194 9.79848C15.2891 9.72879 15.3718 9.67352 15.4628 9.63581C15.5539 9.59809 15.6515 9.57868 15.75 9.57868C15.8486 9.57868 15.9461 9.59809 16.0372 9.63581C16.1282 9.67352 16.2109 9.72879 16.2806 9.79848C16.3503 9.86816 16.4056 9.95088 16.4433 10.0419C16.481 10.133 16.5004 10.2306 16.5004 10.3291C16.5004 10.4276 16.481 10.5252 16.4433 10.6163C16.4056 10.7073 16.3503 10.79 16.2806 10.8597Z"
                fill="#01AB31"
              />
            </svg>
          </div>
          <h1 className="font-satoshi text-[#00000099]">
            "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the <br /> design speaks volumes about the designer's skill. It's like wearing a piece <br /> of art that reflects my passion for both design and fashion."
          </h1>
          <h1 className="text-[#00000099] text-[16px] font-[600] font-satoshi">
            Posted on August 18, 2023
          </h1>
        </div>
        <div className="w-[610px] h-[241.58px] border-[1px] border-[#0000001A] rounded-[20px] hidden sm:flex flex-col justify-center gap-3 p-10">
          <div className="flex justify-between items-center">
            <svg
              width="127"
              height="23"
              viewBox="0 0 127 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2895 0L14.4879 6.8872L22.0264 7.80085L16.4647 12.971L17.9253 20.4229L11.2895 16.731L4.6537 20.4229L6.11428 12.971L0.552547 7.80085L8.09104 6.8872L11.2895 0Z"
                fill="#FFC633"
              />
              <path
                d="M40.3552 0L43.5536 6.8872L51.0921 7.80085L45.5304 12.971L46.991 20.4229L40.3552 16.731L33.7194 20.4229L35.18 12.971L29.6182 7.80085L37.1567 6.8872L40.3552 0Z"
                fill="#FFC633"
              />
              <path
                d="M69.4211 0L72.6195 6.8872L80.158 7.80085L74.5963 12.971L76.0569 20.4229L69.4211 16.731L62.7853 20.4229L64.2459 12.971L58.6841 7.80085L66.2226 6.8872L69.4211 0Z"
                fill="#FFC633"
              />
              <path
                d="M98.4868 0L101.685 6.8872L109.224 7.80085L103.662 12.971L105.123 20.4229L98.4868 16.731L91.851 20.4229L93.3116 12.971L87.7498 7.80085L95.2883 6.8872L98.4868 0Z"
                fill="#FFC633"
              />
              <path
                d="M120.364 20.4229L127 16.731V0L123.802 6.8872L116.263 7.80085L121.825 12.971L120.364 20.4229Z"
                fill="#FFC633"
              />
            </svg>
            <BsThreeDots className="w-7 h-7 text-[#00000066]" />
          </div>
          <div className="flex items-center gap-1">
            <h1 className="text-[20px] font-satoshi font-[700]">
              Ava H.{" "}
            </h1>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2.8291C10.0716 2.8291 8.18657 3.40093 6.58319 4.47227C4.97982 5.54362 3.73013 7.06636 2.99218 8.84794C2.25422 10.6295 2.06114 12.5899 2.43735 14.4812C2.81355 16.3725 3.74215 18.1098 5.10571 19.4734C6.46928 20.837 8.20656 21.7656 10.0979 22.1418C11.9892 22.518 13.9496 22.3249 15.7312 21.5869C17.5127 20.849 19.0355 19.5993 20.1068 17.9959C21.1782 16.3925 21.75 14.5075 21.75 12.5791C21.7473 9.99408 20.7192 7.51571 18.8913 5.68783C17.0634 3.85994 14.585 2.83183 12 2.8291ZM16.2806 10.8597L11.0306 16.1097C10.961 16.1795 10.8783 16.2348 10.7872 16.2725C10.6962 16.3103 10.5986 16.3297 10.5 16.3297C10.4014 16.3297 10.3038 16.3103 10.2128 16.2725C10.1218 16.2348 10.039 16.1795 9.96938 16.1097L7.71938 13.8597C7.57865 13.719 7.49959 13.5281 7.49959 13.3291C7.49959 13.1301 7.57865 12.9392 7.71938 12.7985C7.86011 12.6577 8.05098 12.5787 8.25 12.5787C8.44903 12.5787 8.6399 12.6577 8.78063 12.7985L10.5 14.5188L15.2194 9.79848C15.2891 9.72879 15.3718 9.67352 15.4628 9.63581C15.5539 9.59809 15.6515 9.57868 15.75 9.57868C15.8486 9.57868 15.9461 9.59809 16.0372 9.63581C16.1282 9.67352 16.2109 9.72879 16.2806 9.79848C16.3503 9.86816 16.4056 9.95088 16.4433 10.0419C16.481 10.133 16.5004 10.2306 16.5004 10.3291C16.5004 10.4276 16.481 10.5252 16.4433 10.6163C16.4056 10.7073 16.3503 10.79 16.2806 10.8597Z"
                fill="#01AB31"
              />
            </svg>
          </div>
          <h1 className="font-satoshi text-[#00000099]">
            "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. <br /> The intricate details and thoughtful layout of the design make this shirt a <br /> conversation starter."
          </h1>
          <h1 className="text-[#00000099] text-[16px] font-[600] font-satoshi">
            Posted on August 19, 2023
          </h1>
        </div>
      </div>

     <div className="flex justify-center mt-5 sm:mt-15">
        <button className="w-[218px] h-[52px] border-[1px] rounded-full border-[#0000001A] font-[500] text-[14px] sm:text-[16px]">
          Load More Reviews
        </button>
      </div>
    </div>
  );
};

export default AllReviews;
