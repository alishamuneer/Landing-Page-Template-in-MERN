import React from 'react'

const AboutSec2 = () => {
  return (
    <>
    <div className="flex h-[600px] lg:flex-col xl:h-[400px] lg:h-auto lg:justify-start justify-evenly " id="about">
            <div className="bg-[rgb(245,245,245)] text-center mt-[20px] mr-[10px] lg:mr-0  w-full max-h-[600px] lg:w-auto lg:min-h-auto lg:pb-5 ">
                <h2 className="my-[5px] font-sans text-[42px] xl:text-[32px] xl:leading-[31px] md:text-[28px] md:leading-[27px] leading-10 font-bold tracking-[-3px] pt-[90px] xl:pt-9 pb-[5px] ">
                    Hip<br/>& funky</h2>
                <h5 className="mt-[5px] font-serif leading-[22px] text-base italic font-normal ">We try new things</h5>
                <p className=" w-full mb-[5px] mr-[-36px] mt-[35px] xl:mt-1 font-[Source_Sans_Pro',sans-serif] text-[#5c5c5c] text-[15px] xl:text-[13px] xl:leading-[21px] leading-[22px] font-normal tracking-[-0.5px] px-20 xl:px-5">
                    Focus infographic venture business model canvas gamification ecosystem. Business plan
                    gamification user experience low hanging fruit twitter. Metrics research & development
                    market paradigm shift growth hacking disruptive user experience iPad social media angel 
                    investor alpha. Social proof lean startup alpha scrum project non-disclosure agreement.
                </p>
                <a className="inline-block mt-[30px] xl:mt-2 py-[15px] px-[35px] border-2 border-solid border-black text-[#333] hover:border-[#878787] hover:bg-[#878787] hover:text-white transition-all duration-200 ease-linear font-sans font-[12px] text-center tracking-[-1px] no-underline " href="#portfolio">VIEW PORTFOLIO</a>
            </div>
            <div className="mt-[20px] ml-[10px] lg:ml-0  w-full pic5 bg-left-top bg-cover max-h-[600px] lg:min-h-[250px] lg:w-auto"></div>
        </div>
    </>
  )
}

export default AboutSec2
