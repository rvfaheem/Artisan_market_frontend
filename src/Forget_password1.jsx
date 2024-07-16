import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Forget_password1 = () => {
    const navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [verifyotp, setVerifyotp] = useState('');

    const sendOTP = async () => {
        try {
            const response = await axios.post(`https://artisan-market-backend.onrender.com/sendOTP`, { email });
            setMessage(response.data.message);
            setVerifyotp(response.data.otp);
            
  
        } catch (error) {
            setMessage('Error sending OTP. Please try again.');
        }
    };

    const verifyOTP = async () => {
        try {
            // Concatenate individual digits of OTP
            
            console.log(otp)
            console.log(verifyotp);

            if (verifyotp == otp) {
                console.log(otp)
                alert('OTP verification successful!');
                navigate(`/forget_password/${email}`)

            } else {
                console.log(otp)
                alert('Invalid OTP. Please try again.');
            }
        } catch (error) {
            setMessage('Error verifying OTP. Please try again.');
        }
    };

    return (
        <div>
            <div className="organise relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
                <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                        <div className="flex flex-col items-center justify-center text-center space-y-2">
                            <div className="font-semibold text-3xl">
                                <p>Forget password?</p>
                            </div>
                            <div className="flex flex-row text-sm font-medium text-gray-400">
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col space-y-16">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
                                </div>
                                <div>
                                    <button onClick={sendOTP} className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                        SEND OTP
                                    </button>
                                </div>
                                <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Verification Code</label>
                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                                {/* <button onClick={verifyOTP}>Verify OTP</button> */}
                                <div>
                                    <button onClick={verifyOTP} className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm">
                                    Verify OTP
                                    </button>
                                </div>
                                <p>{message}</p>
                                <div className="flex flex-col space-y-5">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
