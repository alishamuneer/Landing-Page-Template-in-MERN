import React from 'react'

const ContactForm = () => {
    return (
        <div className="flex flex-col justify-evenly" id="contact">
            <div className="m-[79px] lg:m-[33px] self-center" >
                <h2 className="my-[5px] font-sans text-[42px] xl:text-[32px] md:text-[28px] md:leading-[27px] xl:leading-[31px] leading-10 font-bold tracking-[-3px]">Write us a letter</h2>
                <h5 className="mt-[5px] font-serif leading-[22px] text-base italic font-normal text-center">We appreciate your ideas</h5>
            </div>
            <div>
                <form className="flex flex-col justify-evenly" id="email-form" name="email-form" data-name="Email Form">
                    <div className="self-center">
                        <label className="font-serif leading-[-1px] uppercase font-bold" htmlFor="name">Name</label>
                    </div>
                    <div className="w-full mb-[10px]">
                        <input className="block w-[50%] lg:w-[90%] h-[38px] py-2 px-3 mb-[10px] leading-[1.42857143] text-[#555]  focus:border-cyan-400 outline-none bg-[#fff] border-[1px] border-solid border-[#ccc] m-auto font-serif tracking-[-1px] text-xs" id="name" type="text" placeholder="Enter your name" name="name"
                            data-name="Name" />
                    </div>
                    <div className="self-center">
                        <label className="font-serif leading-[-1px] uppercase font-bold" htmlFor="email">Email Address</label>
                    </div>
                    <div className="w-full mb-[10px]">
                        <input className="block w-[50%] lg:w-[90%] h-[38px] py-2 px-3 mb-[10px] leading-[1.42857143] text-[#555]  focus:border-cyan-400 outline-none bg-[#fff] border-[1px] border-solid border-[#ccc] m-auto font-serif tracking-[-1px] text-xs" id="email" type="email" placeholder="Enter your email address"
                            name="email" data-name="Email" required="required" />
                    </div>
                    <div className="self-center">
                        <label className="font-serif leading-[-1px] uppercase font-bold" htmlFor="field"> YOUR&nbsp;MESSAGE</label>
                    </div>
                    <div>
                        <textarea className="block w-[50%] lg:w-[90%] py-2 px-3 mb-[10px] leading-[1.42857143] text-[#555]  focus:border-cyan-400 outline-none bg-[#fff] border-[1px] border-solid border-[#ccc] m-auto font-serif tracking-[-1px] text-xs h-auto" id="field" placeholder="Example Text"
                            name="field"></textarea>
                    </div>
                    <div className="self-center">
                        <input className="inline-block mt-[30px] xl:mt-[15px] py-[15px] px-[35px] border-2 border-solid border-black text-[#333] hover:border-[#878787] hover:bg-[#878787] hover:text-white transition-all duration-200 ease-linear font-sans font-[12px] text-center tracking-[-1px] no-underline bg-white" type="submit" value="Submit"
                            data-wait="Please wait..." />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
