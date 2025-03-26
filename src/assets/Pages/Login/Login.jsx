import React, { useState } from 'react'
import { FaApple} from 'react-icons/fa'
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from 'react-icons/fc'
import { FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi'


function Login() {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className='flex md:flex-row flex-col gap-10 items-center justify-center h-screen '>
            <div className='flex items-center justify-center w-full'>
                <h1 className='font-raleway  text-[40px] font-extrabold'>LOGO</h1>
            </div>
            <div className='w-full '>
                <div className='space-y-6 mb-10'>
                    <h1 className='font-semibold text-4xl'>Hello, Welcome!</h1>
                    <p className='text-[16px]'>Please Enter Your Details Below to Continue</p>
                </div>
                <form className='space-y-4'>
                    <div className='relative'>
                        <FiMail className="absolute left-3 top-[62px] transform -translate-y-1/2 text-gray-400" />
                        <label htmlFor="email">Your Email</label><br />
                        <input className='border text-[16px] mt-2 pl-10 border-[#000000] md:w-[536px] h-[56px] rounded-2xl' type="email" name="email" placeholder="Enter Email" />
                    </div>
                    <div className='relative'>
                        <FiLock className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400" />
                        <label htmlFor="password">Password</label><br />
                        <input className='border text-[16px] mt-2 pl-10 border-[#000000] md:w-[536px] h-[56px] rounded-2xl' type={showPassword ? "text" : "password"}  // Toggle input type based on showPassword state
                        name="password" placeholder="Enter Password" /> 

                        {
                            showPassword ?
                                <FiEyeOff className="absolute right-28 top-[54px]  cursor-pointer text-black" onClick={() => setShowPassword(!showPassword)} />
                                :
                                <FiEye className="absolute right-28 
                                top-[54px]
                                  cursor-pointer text-black" onClick={() => setShowPassword(!showPassword)} />
                        }
                    </div>
                    <div className='flex justify-between '>

                        <div className='flex gap-2'>
                            <input type="checkbox" name="option1" value="value1">

                            </input>

                            <p>Remember me</p>
                        </div>
                        <p className='mr-24'>Forgot password?</p>
                    </div>
                    <div>
                        <button type='submit' className='btn rounded-full bg-gradient-to-r from-[#00B6FE] via-[#5C7DFB] to-[#8C3AFD] md:w-[536px] h-[56px] text-white '>Login</button>
                    </div>
                    <div className='md:w-[536px]'>
                        <p className='text-center'>I already have an account</p>
                    </div>
                    <div className='md:w-[536px] flex justify-center gap-4 pt-3'>
                    <FaApple className="h-8 w-8" />
                    <FcGoogle className="h-8 w-8"/>
                    <FaFacebook className="h-8 w-8"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login