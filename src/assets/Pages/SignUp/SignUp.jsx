import React, { useState } from 'react'
import { FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi'
import { LuUserRound } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function SignUp() {

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, SetShowConfirmPassword] = useState(false)
    return (
        <div className=' flex md:flex-row flex-col gap-10 items-center justify-center h-screen '>
            <div className='flex items-center justify-center w-full'>
                <h1 className='font-raleway  text-[40px] font-extrabold'>LOGO</h1>
            </div>
            <div className='text-[#3D619B]'>

                <h1 className='font-semibold text-4xl'>Create account</h1>
                <p className='text-[16px] mt-6'>Enter the email address associated with your account. We'll send you an OTP to your email. </p>
                <form action="" className='space-y-4 mt-6'>

                    <div className='relative'>
                        <LuUserRound className="absolute left-3 top-[62px] transform -translate-y-1/2 text-gray-400" />
                        <label htmlFor="email">User name</label><br />
                        <input className='border text-[16px] mt-2 pl-10 border-[#3D619B] md:w-[536px] h-[56px] rounded-2xl text-[#3D619B]' type="text" name="name" placeholder="Enter name" />
                    </div>
                    <div className=''>
                       
                        <label htmlFor="email">Your proffession</label><br />
                        <input className='border text-[16px] mt-2 pl-10 border-[#3D619B] md:w-[536px] h-[56px] rounded-2xl text-[#3D619B]' type="text" name="name" placeholder="Enter name" />
                    </div>
                    <div className='relative'>
                        <FiMail className="absolute left-3 top-[62px] transform -translate-y-1/2 text-gray-400" />
                        <label htmlFor="email">Your Email</label><br />
                        <input className='border text-[16px] mt-2 pl-10 border-[#3D619B] text-[#3D619B] md:w-[536px] h-[56px] rounded-2xl' type="email" name="email" placeholder="Enter Email" />
                    </div>
                    <div className='relative'>
                        <FiLock className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400" />
                        <label htmlFor="password">New Password</label><br />
                        <input className='border text-[16px] mt-2 pl-10 border-[#3D619B] text-[#3D619B] md:w-[536px] h-[56px] rounded-2xl' type={showPassword ? "text" : "password"}  // Toggle input type based on showPassword state
                            name="password" placeholder="Enter New Password" />

                        {
                            showPassword ?
                                <FiEyeOff className="absolute right-6 top-[54px]  cursor-pointer text-black" onClick={() => setShowPassword(!showPassword)} />
                                :
                                <FiEye className="absolute right-6
                                                    top-[54px]
                                                      cursor-pointer text-black" onClick={() => setShowPassword(!showPassword)} />
                        }
                    </div>
                    <div className='relative'>
                        <FiLock className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400" />
                        <label htmlFor="password">Confirm Password</label><br />
                        <input className='border text-[16px] mt-2 pl-10 border-[#3D619B] text-[#3D619B] md:w-[536px] h-[56px] rounded-2xl' type={showConfirmPassword ? "text" : "password"}  // Toggle input type based on showPassword state
                            name="password" placeholder="Confirm New Password" />

                        {
                            showConfirmPassword ?
                                <FiEyeOff className="absolute right-6 top-[54px]  cursor-pointer text-black" onClick={() => SetShowConfirmPassword(!showConfirmPassword)} />
                                :
                                <FiEye className="absolute right-6
                                                    top-[54px]
                                                      cursor-pointer text-black" onClick={() => SetShowConfirmPassword(!showConfirmPassword)} />
                        }
                    </div>
                    <div>
                        <button type='submit' className='btn rounded-full bg-[#43506C] md:w-[536px] h-[56px] text-white '>Sign up</button>
                    </div>
                    <div className='text-center flex justify-center'>
                        <p>Already have an account?</p><Link className='text-blue-600 font-semibold ml-2' to="/login">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp