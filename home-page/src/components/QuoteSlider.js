import React from 'react'
import { useState, useEffect } from 'react';


const quotes = [
    {
        quote : <><em>"ABC&nbsp;Agency our the best.&nbsp;Not only did they deliver my work on time, they evenwalked my dog when I was out of town”</em><br/>A&nbsp;Smith – Neighbour,</>
    },
    {
        quote : <><em>"I don’t like people, but I make an exception for ABC&nbsp;Agency. They’re pretty damn cool.”</em><br/>Brian&nbsp;Jones, &nbsp;America Big Corporation" </>
    }
]
const QuoteSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? quotes.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
   useEffect(()=>{
   setTimeout(() => {
    nextSlide();
   }, 2000);
   },[nextSlide])
    

  return (
    <>
     <div className="py-[100px] xl:py-[50px] px-5 text-center">
            <h2 className="my-[5px] font-sans text-[42px] xl:text-[32px] md:text-[28px] md:leading-[27px] xl:leading-[31px] leading-10 font-bold tracking-[-3px]">Our clients<br/>love our work</h2>
            <h5 className="mt-[5px] font-serif leading-[22px] text-base italic font-normal">But don’t just take our word for it...</h5>
            <div className="relative ">
                <div className="text-center mt-[50px] lg:mt-0 ">
                    <p className=" w-full mb-[5px] mr-[-36px] mt-[35px] font-[Source_Sans_Pro',sans-serif] text-[#5c5c5c] text-[15px] xl:text-[13px] xl:leading-[21px] leading-[22px] font-normal tracking-[-0.5px] slider-tran animate-[fade_1.5s]">
                        {quotes[currentIndex].quote}
                    </p>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default QuoteSlider
