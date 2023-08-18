import React from 'react'

const SecondRowBox = (prop) => {
    return (
        <div className="w-[25%] md:w-[44%] lg:w-[46%]  mr-[10px] lg:mx-0 mt-[12px] lg:mt-[13px] relative">
            <a id="inline-block w-full h-full decoration-0" href="#">
                <div className="absolute w-full h-[99%] group">
                    <div className="relative w-full h-full bg-[#000000] bg-opacity-80 opacity-0 transition-all duration-500 ease-linear text-center invisible group-hover:visible group-hover:opacity-100">
                        <div className="h-full border border-solid border-white">
                            <p className="w-full mb-[5px] mr-[-36px] mt-[35px] font-[Source_Sans_Pro',sans-serif] text-[#5c5c5c] text-[15px] xl:text-[13px] xl:leading-[21px] leading-[19px] font-normal tracking-[-0.5px] relative top-[120px]">
                                <span style={{transform: "none", color: "white"}}>PORTFOLIO&nbsp;TITLE<br />Branding, Web
                                    Design</span>
                            </p>

                        </div>
                    </div>
                </div>
                <img className="w-full h-auto" src={prop.pic}/>
            </a>
        </div>

    )
}

export default SecondRowBox
