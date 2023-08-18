import React from 'react'
import { useState } from 'react';



const slides = [
    {
        imgPath: 'pic1'

    },
    {
        imgPath: 'pic2'

    },
    {
        imgPath: 'pic3'

    },
];

const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    

    return (
        <div className="relative w-[100%] h-[730px] lg:h-[400px] xl:h-[550px] mx-auto text-right mt-20px">
            
                <div  className={`h-full relative slider-tran animate-[fade_1s] ${slides[currentIndex].imgPath} bg-top bg-cover`} >
                    <div className="h-52 m-auto absolute top-60 lg:top-20  right-12 w-auto left-[27px] " >
                        {currentIndex === 0 && <div> <h1 className="mt-[38px] mb-2.5 mr-[86px] xl:mr-[15px] font-sans text-[62px] xl:text-[48px] md:text-[28px] leading-[53px] xl:leading-[49px] md:leading-[28px] font-bold tracking-[-3px] xl:tracking-[-4] text-white  "> We can change <br /> Your digital world </h1>
                            <h4 className="my-2.5 mr-[105px] xl:mr-[13px] font-serif text-white text-[15px] md:text-[14px] leading-[22px] md:leading-[15px] italic font-normal tracking-normal " >Bold enough to blow a hole in your next marketing campaign.</h4>
                        </div>
                        }
                        {currentIndex === 1 && <div>
                            <h1 className="mt-[38px] mb-2.5 mr-[86px] xl:mr-[15px] font-sans text-[62px] xl:text-[48px] md:text-[28px] leading-[53px] xl:leading-[49px] md:leading-[28px] font-bold tracking-[-3px] xl:tracking-[-4] text-white">You need<br />a good partner</h1>
                            <h4 className="my-2.5 mr-[105px] xl:mr-[13px] font-serif text-white text-[15px] md:text-[14px] leading-[22px] md:leading-[15px] italic font-normal tracking-normal ">Let us help you realise your true potential</h4>
                        </div>
                        }
                        {currentIndex === 2 && <div>
                            <h1 className="mt-[38px] mb-2.5 mr-[86px] xl:mr-[15px] font-sans text-[62px] xl:text-[48px] md:text-[28px] leading-[53px] xl:leading-[49px] md:leading-[28px] font-bold tracking-[-3px] xl:tracking-[-4] text-white">Shoot for<br />the hoop!</h1>
                            <h4 className="my-2.5 mr-[105px] xl:mr-[13px] font-serif text-white text-[15px] md:text-[14px] leading-[22px] md:leading-[15px] italic font-normal tracking-normal ">Aiming low is not an option for us</h4>
                        </div>
                        }
                    </div>
                </div>


            {/* previos */}
            <a className="absolute left-0 top-1/2 p-2 -translate-y-1/2  hover:bg-black/25 text-white hover:text-amber-500 cursor-pointer transition-all duration-500 ease-linear"
                onClick={goToPrevious}>❮</a>

            {/* next */}
            <a className="absolute right-0 top-1/2 p-2 -translate-y-1/2 hover:bg-black/25 text-white hover:text-amber-500 cursor-pointer transition-all duration-500 ease-linear"
                onClick={goToNext}>❯</a>

        </div>
    )
}

export default Slider
