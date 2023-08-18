import React from 'react'
import p1 from '../images/p1.png';

const Footer = () => {
    return (
        <div className="flex lg:flex-col lg:items-center  justify-evenly bg-[#242424] mt-[100px] mb-5 pt-10 pb-[50px] pl-5">
            <div className="w-[20%] lg:w-[80px]" >
                <div className="relative top-[3px]">
                    <img src={p1} className="w-[80px]"/>
                </div>
            </div>
            <div className="flex lg:flex-col lg:items-center  w-[70%]">
                <div className="ml-[10px] grow-[0.5] lg:w-full lg:mt-[19px] lg:text-center lg:ml-0">
                    <div>
                        <h6 className="mb-[10px] font-serif text-[#7d7d7d] text-sm leading-[18px] font-bold ">MENU</h6>
                    </div>
                    <div>
                        <p className="mt-7 text-white leading-7 ml-[3px] mr-[1px] lg:mx-0 lg:mb-5 w-full mb-[5px] font-[Source_Sans_Pro',sans-serif] xl:mt-1 text-[15px] xl:text-[13px] xl:leading-[21px] font-normal tracking-[-0.5px]">
                            <a className="text-white no-underline" href="#about">ABOUT</a><br/>
                            <a href="#services" className="text-white no-underline">SERVICES</a><br/>
                            <a className="text-white no-underline" href="#portfolio">PORTFOLIO</a><br/>
                            <a href="#contact" className="text-white no-underline">CONTACT</a>
                        </p>
                    </div>
                </div>
                <div className="ml-[10px] grow-[0.5] lg:w-full lg:mt-[19px] lg:text-center lg:ml-0">
                    <div>
                        <h6 className="mb-[10px] font-serif text-[#7d7d7d] text-sm leading-[18px] font-bold">ADDRESS</h6>
                    </div>
                    <div>
                        <p className="mt-7 text-white leading-7 ml-[3px] mr-[1px]  lg:mx-0 lg:mb-5   w-full mb-[5px] font-[Source_Sans_Pro',sans-serif] xl:mt-1  text-[15px] xl:text-[13px] xl:leading-[21px] font-normal tracking-[-0.5px]">Suite #913<br/>Corporation Building<br/>Tibb Street<br/>Manchester<br/>M1 1TA</p>
                    </div>
                </div>
                <div className="ml-[10px] grow-[0.5] lg:w-full lg:mt-[19px] lg:text-center lg:ml-0">
                    <div>
                        <h6 className="mb-[10px] font-serif text-[#7d7d7d] text-sm leading-[18px] font-bold">CONTACT</h6>
                    </div>
                    <div>
                        <p className="mt-7 text-white leading-7 ml-[3px]  mr-[1px] lg:mx-0 lg:mb-5  w-full mb-[5px] font-[Source_Sans_Pro',sans-serif] xl:mt-1  text-[15px] xl:text-[13px] xl:leading-[21px] font-normal tracking-[-0.5px]">E: info(at)youragency.com<br/>T: +44 800 123 456<br/>F: +44 800 123 400</p>
                    </div>
                </div>
            </div>
        </div>
     )
}

export default Footer
