import React from 'react';
import p9 from '../images/p9.svg';

const MiddleBox = () => {
  return (
   <>
   <div className={`bg-[rgb(245,245,245)] text-center mt-5 pt-10 pb-[50px] px-[50px]  ml-[10px] mr-[10px] xl:h-auto xl:pt-0 xl:px-5 hover:bg-[#f0d8d8] box-tran`}>
                <img src={p9} className="w-[125px] m-auto"/>
                <h2 className="my-[5px] font-sans text-[42px] xl:text-[32px] md:text-[28px] md:leading-[27px] xl:leading-[31px] leading-10 font-bold tracking-[-3px]">Web design</h2>
                <p className=" w-full mb-[5px] mr-[-36px] mt-[35px] font-[Source_Sans_Pro',sans-serif] text-[#5c5c5c] text-[15px] leading-[22px] font-normal tracking-[-0.5px]">
                    Focus infographic venture business model canvas gamification ecosystem. Business plan gamification
                    user experience low
                    hanging fruit twitter. Metrics research & development market paradigm shift growth hacking
                    disruptive user experience
                    iPad social media angel investor alpha.
                </p>
            </div>
   </>
  )
}

export default MiddleBox
