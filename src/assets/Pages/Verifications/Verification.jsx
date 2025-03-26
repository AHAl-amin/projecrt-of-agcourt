import { useState, useRef } from "react";


const Verification = () => {
    const [otp, setOtp] = useState(["", "", "", "", ""]);
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        if (!/^\d?$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
        if (value && index < 5) inputRefs.current[index + 1].focus();
    };

    const handleKeyDown = (index, e) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleSubmit = () => {
        alert(`Entered OTP: ${otp.join("")}`);
    };

    return (
        <div className="flex flex-col items-center rounded-md  justify-center h-screen space-y-20">
            <div className='flex items-center justify-center w-full'>
                <h1 className='font-raleway  text-[40px] font-extrabold'>LOGO</h1>
            </div>
            <div className="text-center space-y-16">
                <div className="flex flex-col justify-start items-start">
                    <h2 className="text-[36px] font-bold text-[#43506C] ">OTP Verification</h2>
                    <p className="text-[16px] text-[#43506C] ">
                        Enter OTP sent to bill*****s@example.com
                    </p>
                </div>

                <div className="flex justify-center space-x-6 my-4">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            ref={(el) => (inputRefs.current[index] = el)}
                            className="  w-14 h-14 text-center text-2xl border border-[#8CAB91] rounded-md focus:outline-none bg-[#3D619B] text-white"
                        />
                    ))}
                </div>


                <button onClick={handleSubmit} type='submit' className='btn rounded-full bg-gradient-to-r from-[#00B6FE] via-[#5C7DFB] to-[#8C3AFD] md:w-[661px] h-[56px] text-white '>VERIFY</button>
               
            </div>
        </div>
    );
};

export default Verification;