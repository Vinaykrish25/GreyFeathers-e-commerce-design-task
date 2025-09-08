import React from 'react'
import product_1 from "../assets/suggested_1.png";
import product_2 from "../assets/suggested_2.png";
import product_3 from "../assets/suggested_3.png";
import product_4 from "../assets/suggested_4.png";

const SuggestionProducts = () => {
  return (
    <div className='max-w-screen mb-10'>
        <div>
            <h1 className='font-integralgf text-[32px] sm:text-[48px] font-extrabold text-center leading-8'>YOU MIGHT <br className='block sm:hidden'/> ALSO LIKE</h1>
        </div>

         <div className="flex items-center justify-between p-4 sm:p-10">
                <div className="flex flex-col">
                  <div className="bg-[#F0EEED] rounded-[20px] w-[198px] h-[200px] sm:w-[280px] sm:h-[298px] overflow-hidden flex items-center justify-center mb-3">
                    <img src={product_1} alt="" className="object-contain w-full" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-satoshi text-[16px] sm:text-[20px] font-[900]">
                      Polo with Contrast Trims
                    </h1>
                    <div className="flex items-center gap-3">
                      <svg className='w-[116px] h-[16px] sm:w-[137px] sm:h-[19px]' viewBox="0 0 138 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.24494 0.255127L11.8641 5.89504L18.0374 6.64322L13.4829 10.8771L14.679 16.9794L9.24494 13.9561L3.8109 16.9794L5.00697 10.8771L0.452479 6.64322L6.62573 5.89504L9.24494 0.255127Z" fill="#FFC633"/>
<path d="M33.0469 0.255127L35.6661 5.89504L41.8394 6.64322L37.2849 10.8771L38.481 16.9794L33.0469 13.9561L27.6129 16.9794L28.809 10.8771L24.2545 6.64322L30.4277 5.89504L33.0469 0.255127Z" fill="#FFC633"/>
<path d="M56.8487 0.255127L59.4679 5.89504L65.6412 6.64322L61.0867 10.8771L62.2827 16.9794L56.8487 13.9561L51.4147 16.9794L52.6107 10.8771L48.0562 6.64322L54.2295 5.89504L56.8487 0.255127Z" fill="#FFC633"/>
<path d="M80.6507 0.255127L83.2699 5.89504L89.4432 6.64322L84.8887 10.8771L86.0847 16.9794L80.6507 13.9561L75.2167 16.9794L76.4127 10.8771L71.8582 6.64322L78.0315 5.89504L80.6507 0.255127Z" fill="#FFC633"/>
<path d="M110.876 12.872H109.7V15H108.72V12.872H103.456V11.976L108.356 4.976H109.7V11.976H110.876V12.872ZM104.548 11.976H108.72V6.012L104.548 11.976ZM113.507 15.154C113.031 15.154 112.625 14.762 112.625 14.3C112.625 13.824 113.031 13.418 113.507 13.418C113.983 13.418 114.389 13.824 114.389 14.3C114.389 14.762 113.983 15.154 113.507 15.154ZM115.464 9.988C115.464 6.88 116.99 4.78 119.482 4.78C121.96 4.78 123.486 6.88 123.486 9.988C123.486 13.11 121.988 15.182 119.482 15.182C116.962 15.182 115.464 13.11 115.464 9.988ZM116.458 9.988C116.458 12.592 117.564 14.272 119.482 14.272C121.4 14.272 122.506 12.592 122.506 9.988C122.506 7.37 121.4 5.704 119.482 5.704C117.564 5.704 116.458 7.37 116.458 9.988ZM124.998 15H124.046L127.952 4.976H128.932L124.998 15Z" fill="black"/>
<path d="M132.987 15.168C130.971 15.168 129.683 13.908 129.683 11.934H130.691C130.691 13.376 131.573 14.244 133.001 14.244C134.513 14.244 135.493 13.236 135.493 11.752C135.493 10.352 134.583 9.246 133.001 9.246C132.077 9.246 131.237 9.666 130.691 10.268L129.893 10.016L131.097 4.976H135.941V5.9H131.825L131.069 9.05C131.629 8.602 132.357 8.35 133.141 8.35C135.227 8.35 136.515 9.848 136.515 11.724C136.515 13.74 135.087 15.168 132.987 15.168Z" fill="black" fill-opacity="0.6"/>
</svg>

                    </div>
                    <div className="flex items-center gap-[10px]">
                      <h1 className="font-satoshi font-[700] text-[20px] sm:text-[24px]">$212</h1>
                      <h1 className="font-satoshi font-[700] text-[20px] sm:text-[24px] text-[#00000066] line-through">
                        $242
                      </h1>
                      <h4 className="font-satoshi font-[700] text-[10px] sm:text-[12px] text-[#FF3333] bg-[#FF33331A] text-center px-4 py-1 rounded-full">
                        -20%
                      </h4>
                    </div>
                  </div>
                </div>
        
                <div className="flex flex-col">
                  <div className="bg-[#F0EEED] rounded-[20px] w-[198px] h-[200px] sm:w-[280px] sm:h-[298px] overflow-hidden flex items-center justify-center mb-3">
                    <img src={product_2} alt="" className="object-contain w-full" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-satoshi text-[16px] sm:text-[20px] font-[900]">
                     Gradient Graphic T-shirt
                    </h1>
                    <div className="flex items-center gap-3">
                      <svg
                        className='w-[90px] h-[16px] sm:w-[137px] sm:h-[19px]'
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
                      <h2 className="font-[400] text-[14px] font-satoshi">3.5/5</h2>
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <h1 className="font-satoshi font-[700] text-[20px] sm:text-[24px]">$145</h1>
                    </div>
                  </div>
                </div>
        
                <div className="hidden sm:flex flex-col">
                  <div className="bg-[#F0EEED] rounded-[20px] w-[280px] h-[298px] overflow-hidden flex items-center justify-center mb-3">
                    <img src={product_3} alt="" className="object-contain w-full" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-satoshi text-[20px] font-[900]">
                  Polo with Tipping Details
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
                    <img src={product_4} alt="" className="object-contain w-full" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h1 className="font-satoshi text-[20px] font-[900]">
                    Black Striped T-shirt
                    </h1>
                    <div className="flex items-center gap-3">
                      <svg width="161" height="19" viewBox="0 0 161 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.24494 0.255127L11.8641 5.89504L18.0374 6.64322L13.4829 10.8771L14.679 16.9794L9.24494 13.9561L3.8109 16.9794L5.00697 10.8771L0.452479 6.64322L6.62573 5.89504L9.24494 0.255127Z" fill="#FFC633"/>
<path d="M33.0469 0.255127L35.6661 5.89504L41.8394 6.64322L37.2849 10.8771L38.481 16.9794L33.0469 13.9561L27.6129 16.9794L28.809 10.8771L24.2545 6.64322L30.4277 5.89504L33.0469 0.255127Z" fill="#FFC633"/>
<path d="M56.8487 0.255127L59.4679 5.89504L65.6412 6.64322L61.0867 10.8771L62.2827 16.9794L56.8487 13.9561L51.4147 16.9794L52.6107 10.8771L48.0562 6.64322L54.2295 5.89504L56.8487 0.255127Z" fill="#FFC633"/>
<path d="M80.6507 0.255127L83.2699 5.89504L89.4432 6.64322L84.8887 10.8771L86.0847 16.9794L80.6507 13.9561L75.2167 16.9794L76.4127 10.8771L71.8582 6.64322L78.0315 5.89504L80.6507 0.255127Z" fill="#FFC633"/>
<path d="M104.452 0.255127L107.072 5.89504L113.245 6.64322L108.69 10.8771L109.886 16.9794L104.452 13.9561L99.0184 16.9794L100.214 10.8771L95.66 6.64322L101.833 5.89504L104.452 0.255127Z" fill="#FFC633"/>
<path d="M130.758 15.168C128.742 15.168 127.454 13.908 127.454 11.934H128.462C128.462 13.376 129.344 14.244 130.772 14.244C132.284 14.244 133.264 13.236 133.264 11.752C133.264 10.352 132.354 9.246 130.772 9.246C129.848 9.246 129.008 9.666 128.462 10.268L127.664 10.016L128.868 4.976H133.712V5.9H129.596L128.84 9.05C129.4 8.602 130.128 8.35 130.912 8.35C132.998 8.35 134.286 9.848 134.286 11.724C134.286 13.74 132.858 15.168 130.758 15.168ZM136.324 15.154C135.848 15.154 135.442 14.762 135.442 14.3C135.442 13.824 135.848 13.418 136.324 13.418C136.8 13.418 137.206 13.824 137.206 14.3C137.206 14.762 136.8 15.154 136.324 15.154ZM138.282 9.988C138.282 6.88 139.808 4.78 142.3 4.78C144.778 4.78 146.304 6.88 146.304 9.988C146.304 13.11 144.806 15.182 142.3 15.182C139.78 15.182 138.282 13.11 138.282 9.988ZM139.276 9.988C139.276 12.592 140.382 14.272 142.3 14.272C144.218 14.272 145.324 12.592 145.324 9.988C145.324 7.37 144.218 5.704 142.3 5.704C140.382 5.704 139.276 7.37 139.276 9.988ZM148.021 15H147.069L150.975 4.976H151.955L148.021 15Z" fill="black"/>
<path d="M156.009 15.168C153.993 15.168 152.705 13.908 152.705 11.934H153.713C153.713 13.376 154.595 14.244 156.023 14.244C157.535 14.244 158.515 13.236 158.515 11.752C158.515 10.352 157.605 9.246 156.023 9.246C155.099 9.246 154.259 9.666 153.713 10.268L152.915 10.016L154.119 4.976H158.963V5.9H154.847L154.091 9.05C154.651 8.602 155.379 8.35 156.163 8.35C158.249 8.35 159.537 9.848 159.537 11.724C159.537 13.74 158.109 15.168 156.009 15.168Z" fill="black" fill-opacity="0.6"/>
</svg>

                    </div>
                    <div className="flex items-center gap-[10px]">
                      <h1 className="font-satoshi font-[700] text-[24px]">$120</h1>
                      <h1 className="font-satoshi font-[700] text-[24px] text-[#00000066] line-through">
                        $150
                      </h1>
                      <h4 className="font-satoshi font-[700] text-[12px] text-[#FF3333] bg-[#FF33331A] text-center px-4 py-1 rounded-full">
                        -30%
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default SuggestionProducts