import React, { useState } from 'react'
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi'

function ResetPassword() {

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, SetShowConfirmPassword] = useState(false)

    return (
        <div className=' space-y-32 h-screen flex flex-col justify-center items-center '>
            <div className='flex items-center justify-center w-full'>
                <h1 className='font-raleway  text-[40px] font-extrabold'>LOGO</h1>
            </div>
            <div className=' space-y-8'>

                <div className=' '>
                    <h1 className='font-bold text-4xl text-[#43506C] '>Reset Password </h1>
                    <p className='text-[16px] mt-2 text-[#3D619B]'>Please enter your email address to reset password.</p>
                </div>
                <div className='relative'>
                    <FiLock className="absolute left-3 top-2/3 transform -translate-y-1/2 text-gray-400" />
                    <label className='text-[#283C63]' htmlFor="password">New Password</label><br />
                    <input className='border text-[16px] mt-2 pl-10 border-[#3D619B] text-[#3D619B] md:w-[661px] h-[56px] rounded-2xl' type={showPassword ? "text" : "password"}  // Toggle input type based on showPassword state
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
                    <label className='text-[#283C63]' htmlFor="password">Confirm Password</label><br />
                    <input className='border text-[16px] mt-2 pl-10 border-[#3D619B] text-[#3D619B] md:w-[661px] h-[56px] rounded-2xl' type={showConfirmPassword ? "text" : "password"}  // Toggle input type based on showPassword state
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
                <button type='submit' className='btn rounded-full bg-[#43506C] md:w-[661px] h-[56px] text-white '>Get OTP</button>
            </div>
        </div>
    )
}

export default ResetPassword