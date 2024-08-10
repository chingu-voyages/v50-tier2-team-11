import React, { useState } from 'react'
import BackgroundIMG from "../../src/assests/foodPNG.png"
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Registration: React.FC = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");

    const handleSubmit = () => {
        if(!firstName){
            toast.error("First Name Should not be empty")
            return
        }
        if(!lastName){
            toast.error("Last Name Should not be empty")
            return
        }
        if(!email){
            toast.error("Email Should not be empty")
            return
        }
        if(!password){
            toast.error("Email Should not be empty")
            return
        }
        if(!gender){
            toast.error("Please select Gender first")
            return
        }
        localStorage.setItem("user_details", JSON.stringify(
            {   firstName: firstName, 
                lastName: lastName, 
                email: email, 
                password: password, 
                gender: gender 
            }))
        navigate("/sign-in")
    }

    return (
        <>
            <ToastContainer/>
            <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="mt-12 flex flex-col items-center">
                            <h1 className="text-2xl xl:text-3xl font-extrabold">
                                Sign up
                            </h1>
                            <div className="w-full flex-1 mt-8">
                                <div className="mx-auto max-w-xs">
                                    <input
                                        onChange={(e) => {
                                            setFirstName(e.target.value)
                                        }}
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text" id='first_name' placeholder="First Name" />
                                    <input
                                        onChange={(e) => {
                                            setLastName(e.target.value)
                                        }}
                                        className="w-full px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text" id='last_name' placeholder="Last Name" />
                                    <input
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                        }}
                                        className="w-full px-8 py-4 mt-5 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" id='email' placeholder="Email" />
                                    <input
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        type="password" id='password' placeholder="Password" />
                                    <div className="flex mt-3 gap-x-6">

                                        <div className="flex">
                                            <input
                                                onChange={() => {
                                                    setGender("Male")
                                                }}
                                                type="radio" name="hs-radio-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-radio-group-2" />
                                            <label className="text-sm text-gray-500 ms-2">Male</label>
                                        </div>

                                        <div className="flex">
                                            <input
                                                onChange={() => {
                                                    setGender("Female")
                                                }}
                                                type="radio" name="hs-radio-group" className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" id="hs-radio-group-3" />
                                            <label className="text-sm text-gray-500 ms-2">Female</label>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleSubmit()}
                                        className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">
                                            Sign Up
                                        </span>
                                    </button>
                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                        I agree to abide by YumYum
                                        <a href="#" className="mx-2 border-b border-gray-500 border-dotted">
                                            Terms of Service
                                        </a>
                                        and its
                                        <a href="#" className="mx-2 border-b border-gray-500 border-dotted">
                                            Privacy Policy
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 items-center bg-[#013243] text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                        >
                            <img className='w-full' src={BackgroundIMG} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Registration