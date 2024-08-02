import React, { useState } from 'react'
import BackgroundIMG from "../../src/assests/hand-drawn-thai-food-illustration.png"
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


const Login: React.FC<{ setAuthLogin: (value: boolean) => void }> = ({ setAuthLogin }) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [loginCriteria, setLoginCriteria] = useState(false);

    const handleLogin = () => {
        if(!email){
            toast.error("Enter Email first")
            return
        }
        if(!password){
            toast.error("Enter Password first")
            return
        }
        const userDetailsString = localStorage.getItem("user_details");
        if (userDetailsString !== null) {
          const userDetails = JSON.parse(userDetailsString);
          if(userDetails?.email === email && userDetails?.password === password)
          {
            // setLoginCriteria(true)
            toast.success("Login successful")
            setAuthLogin(true)
            sessionStorage.setItem("Auth", "true");
            navigate("/")
          }
          else{
            console.log(email,"Useeee",userDetails?.email)
            userDetails?.email !== email ? toast.error("Wrong Email Address") : userDetails?.password !== password ? toast.error("Wrong Password") : toast?.error("Invalid User")
          }
        } else {
            toast.error("No user found create account first")
        }
      };

    return (
        <>
            <ToastContainer/>
            <div className="flex justify-center min-h-screen text-gray-900 bg-gray-100">
                <div className="flex justify-center flex-1 max-w-screen-xl m-0 bg-white shadow sm:m-10 sm:rounded-lg">
                    <div className="p-6 lg:w-1/2 xl:w-5/12 sm:p-12">
                        <div className="flex flex-col items-center mt-12">
                            <h1 className="text-2xl font-extrabold xl:text-3xl">
                                Sign In
                            </h1>
                            <div className="flex-1 w-full mt-8">
                                <div className="max-w-xs mx-auto">
                                    <input
                                        onChange={(e) => {
                                            setEmail(e.target.value?.trim())
                                        }}
                                        className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" id='email' placeholder="Email" />
                                    <input
                                        onChange={(e) => {
                                            setPassword(e.target.value)
                                        }}
                                        className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="password" id='password' placeholder="Password" />
                                   
                                    <button
                                        onClick={() => handleLogin()}
                                        className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out bg-indigo-500 rounded-lg hover:bg-indigo-700 focus:shadow-outline focus:outline-none">
                                        {/* <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg> */}
                                        <span className="ml-3">
                                            Sign In
                                        </span>
                                    </button>
                                    <div>
                                        <p>Not registered? <Link to='/sign-up'>Create account</Link></p>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="items-center flex-1 hidden text-center bg-orange-400 lg:flex">
                        <div className="w-full m-12 bg-center bg-no-repeat bg-contain xl:m-16"
                        >
                            <img className='w-full' src={BackgroundIMG} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Login