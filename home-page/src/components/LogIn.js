import React from 'react'
import { useFormik } from "formik";
import * as yup from 'yup';
import p2 from '../images/p2.jpg'
import { authenticationActions } from '../store';
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';

const LogIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginHandler = () => {
        dispatch(authenticationActions.logedIn())
        localStorage.setItem('isLoggedIn', '1')
        navigate('/home');
    }

    const { values, handleChange, handleSubmit, handleBlur, isSubmitting, errors, touched } = useFormik({
        initialValues: {
            email: "",
            password: "",

        },

        onSubmit: (values, actions) => {

            axios.post('http://localhost:3000/api/login', values)
                .then(res => {

                    setTimeout(() => {
                        loginHandler()
                        toast.success(res.data, {
                            position: toast.POSITION.TOP_LEFT
                        });
                    }, 1000);


                })
                .catch((err) => {

                    toast.error(err.response.data, {
                        position: toast.POSITION.TOP_CENTER
                    });
                    setTimeout(() => {
                        actions.resetForm();
                    }, 1000);
                    console.log("Something went wrong ", err)
                })
        },

        validationSchema: yup.object({
            email: yup.string()
                .email("invalid Email").required("Required*"),
            password: yup.string()
                .min(6, "minimum 6 characters long").required("Required*"),

        })
    })

    return (
        <>
            <div style={{ backgroundImage: `url(${p2})`, filter: "blur(10px)" }} className={' w-screen h-screen'} ></div>
            <div className={' absolute left-[32%] bottom-[35px] bg-[ghostwhite] rounded-md border-[2px] border-solid shadow-2xl h-[78vh] w-[32%]'} >
                <h1 className="text-center text-[30px] h-[175px] pt-[95px] font-sans font-extrabold">Log In</h1>
                <form onSubmit={handleSubmit} className="flex flex-col justify-evenly" id="email-form" name="email-form" data-name="Email Form">

                    <div className="self-center">
                        <label className="font-serif leading-[-1px] uppercase font-bold" htmlFor="email">Email Address</label>
                    </div>
                    <div className="w-full">
                        <input id="email" type="email" placeholder="Enter your Email address"
                            name="email" data-name="Email" required="required"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`block w-[50%] lg:w-[90%] h-[38px] py-2 f px-3 mb-[10px] leading-[1.42857143] text-[#555] bg-[#fff] focus:border-cyan-400 outline-none border-[1px] border-solid  m-auto font-serif tracking-[-1px] text-xs 
                    ${touched.email && errors.email ? "border-red-600 " : "border-[#ccc]"}`}
                        />
                    </div>
                    {touched.email && errors.email ? <p className='text-center text-red-600 pb-[1.5rem]'>{errors.email}</p> : null}
                    <div className="self-center">
                        <label className="font-serif leading-[-1px] uppercase font-bold" htmlFor="password">Password</label>
                    </div>
                    <div className="w-full">
                        <input id="password" type="password" placeholder="Enter your Password" name="password"
                            data-name="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`block w-[50%] lg:w-[90%] h-[38px] py-2 px-3 mb-[10px] leading-[1.42857143] text-[#555] bg-[#fff] focus:border-cyan-400 outline-none border-[1px] border-solid  m-auto font-serif tracking-[-1px] text-xs 
                    ${touched.password && errors.password ? "border-red-600" : "border-[#ccc]"}`}
                        />
                    </div>
                    {touched.password && errors.password ? <p className='text-center text-red-600'>{errors.password}</p> : null}
                    <div className="self-center">
                        <button className="iinline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded bg-slate-700 shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition-all duration-200 ease-linear w-full mt-4 " type="submit" value="Submit"
                            data-wait="Please wait..." disabled={isSubmitting}>LogIn</button>
                    </div>
                </form>
                <h1 className="text-center text-black h-[100px] pt-[30px] font-bold font-serif">Didn't Sign Up?</h1>
                <div className='text-center'>
                    <Link to='/signup' className=' text-black my-[5px] font-sans text-[30px] xl:text-[32px] md:text-[28px] md:leading-[27px] xl:leading-[31px] leading-10 font-bold tracking-[-3px] hover:text-blue-700 hover:underline decoration-2 decoration-black transition-all duration-200 ease-linear '>Sign UP</Link>
                </div>
            </div>
            <ToastContainer />

        </>
    )

}

export default LogIn
