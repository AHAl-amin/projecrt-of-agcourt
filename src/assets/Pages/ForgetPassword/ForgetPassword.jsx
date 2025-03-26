import React from 'react'
import { FiMail } from 'react-icons/fi'

function ForgetPassword() {
    return (
        <div className=' space-y-20 h-screen flex flex-col justify-center items-center  '>
            <div className='flex items-center justify-center w-full'>
                <h1 className='font-raleway  text-[40px] font-extrabold'>LOGO</h1>
            </div>
          <div className='space-y-10'>
          <div className=' '>
                <h1 className='font-bold text-4xl '>Forgot Password</h1>
                <p className='text-[16px] mt-2 text-[#3D619B]'>Please enter your email address to reset password.</p>
            </div>
            <div className='relative'>
                <FiMail className="absolute left-3 top-[62px] transform -translate-y-1/2 text-gray-400" />
                <label className='text-[#3D619B]' htmlFor="email">Your Email</label><br />
                <input className='border text-[16px] mt-2 pl-10 border-[#2563EA] md:w-[661px] h-[56px] rounded-2xl' type="email" name="email" placeholder="Enter Email" />
            </div>
            <div>
                <button type='submit' className='btn rounded-full bg-gradient-to-r from-[#00B6FE] via-[#5C7DFB] to-[#8C3AFD] md:w-[661px] h-[56px] text-white '>Login</button>
            </div>
          </div>
        </div>
    )
}

export default ForgetPassword