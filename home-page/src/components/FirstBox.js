import React from 'react'
import p8 from '../images/p8.svg'

const FirstBox = () => {
  return (
    <div>
      <div className="bg-[rgb(245,245,245)] text-center mt-5 pt-10 pb-[50px] px-[50px] mr-[10px] xl:h-auto xl:pt-0 xl:px-5 hover:bg-[#d4d4c7] box-tran">
                <img src={p8}className="w-[125px] m-auto "/>
                <h2 className="my-[5px] font-sans text-[42px] xl:text-[32px] md:text-[28px] md:leading-[27px] xl:leading-[31px] leading-10 font-bold tracking-[-3px]" >Branding</h2>
                <p className=" w-full mb-[5px] mr-[-36px] mt-[35px] font-[Source_Sans_Pro',sans-serif] text-[#5c5c5c] text-[15px] xl:text-[13px] xl:leading-[21px] leading-[22px] font-normal tracking-[-0.5px]">
                    Focus infographic venture business model canvas gamification ecosystem. Business plan gamification
                    user experience low hanging fruit twitter. Metrics research & development market paradigm shift growth hacking
                    disruptive user experience iPad social media angel investor alpha.
                </p>
            </div>
    </div>
  )
}

export default FirstBox
