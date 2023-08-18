import React from 'react'
import p1 from '../images/p1.png'
import logo from '../images/logo.png'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { authenticationActions } from '../store'

import { Link } from 'react-router-dom'

const Header = () => {

    const isAuth = useSelector(state => state.auth.isAuthenticate);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        dispatch(authenticationActions.logedOut())
        
    }

    const [hidden, setHidden] = useState(true);
    const navRemove = () => {
        setHidden(true);
    }
    const show = () => {
        setHidden(false)
    }
    return (
        <>
            <header>
                <div className="absolute left-[85px] xl:left-[22px] flex justify-start xl:justify-between z-10 mt-2 w-auto xl:w-[95%] lg:w-[90%]">
                    <a className="mx-3.5 mb-3.5 mt-2" href="#" ><img className=" w-[60px] h-[60px] xl:max-w-[40px] xl:h-[40px]" src={p1} /></a>
                    {isAuth && 
                        <nav className="flex justify-start bg-transparent text-slate-50 mx-3.5 mb-3.5 mt-2 pl-10 md:pl-0" >
                            <a className="m-3.5 uppercase text-[13px] tracking-tight font-sans px-6 xl:invisible xl:p-0 xl:text-[1px]" href="#head">home</a>
                            <a className="m-3.5 uppercase text-[13px] tracking-tight font-sans px-6 xl:invisible xl:p-0 xl:text-[1px]" href="#about">about</a>
                            <a className="m-3.5 uppercase text-[13px] tracking-tight font-sans px-6 xl:invisible xl:p-0 xl:text-[1px]" href="#services">services</a>
                            <a className="m-3.5 uppercase text-[13px] tracking-tight font-sans px-6 xl:invisible xl:p-0 xl:text-[1px]" href="#portfolio">portfolio</a>
                            <a className="m-3.5 uppercase text-[13px] tracking-tight font-sans px-6 xl:invisible xl:p-0 xl:text-[1px]" href="#contact">contact</a>
                            <Link reloadDocument to='/login' className="m-3.5 uppercase text-[13px] tracking-tight font-sans px-6 xl:text-[10px] xl:m-0" onClick={logoutHandler}>Logout</Link>
                            <a>
                                <div className="hidden xl:block" onClick={show}>
                                    <div className="w-4 h-[2px] m-[3px] bg-white"></div>
                                    <div className="w-4 h-[2px] m-[3px] bg-white"></div>
                                    <div className="w-4 h-[2px] m-[3px] bg-white"></div>
                                </div>
                            </a>
                        </nav>
                    }
                </div>

                {!hidden &&

                    <div style={{ transition: 'transform 600ms ease 0s', transform: 'translateX(0px)' }} className="absolute left[0%] z-[1] bg-white w-full min-h-[150%]">
                        <nav className="flex items-center flex-col w-full h-full mt-24">
                            <a className="text-center w-[12%] h-[12%] mb-[10px] " href="#head" ><img src={logo} /></a>
                            <a className="uppercase text-[13px] tracking-tight font-sans px-6 text-[#222] h-[50px] mb-[10px] " href="#head" onClick={navRemove}>home</a>
                            <a className="uppercase text-[13px] tracking-tight font-sans px-6 text-[#222] h-[50px] mb-[10px] " href="#about" onClick={navRemove}>about</a>
                            <a className="uppercase text-[13px] tracking-tight font-sans px-6 text-[#222] h-[50px] mb-[10px] " href="#services" onClick={navRemove}>service</a>
                            <a className="uppercase text-[13px] tracking-tight font-sans px-6 text-[#222] h-[50px] mb-[10px] " href="#portfolio" onClick={navRemove}>portfolio</a>
                            <a className="uppercase text-[13px] tracking-tight font-sans px-6 text-[#222] h-[50px] mb-[10px] " href="#contact" onClick={navRemove}>contact</a>
                        </nav>

                    </div>}
            </header>
        </>
    )
}

export default Header
