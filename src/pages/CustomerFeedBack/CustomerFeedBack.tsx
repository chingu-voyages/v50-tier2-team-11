import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { ToastContainer, toast } from "react-toastify";
const FeedBackForm = () => {

    const [tickState, setTickState] = useState("")

    const [feedback, setFeedback] = useState([{
        first_name: "",
        last_name: "",
        email: "",
        feedback_msg: "",
        rating: 0
    }]);

    const handleSubmit = () => {
        // localStorage.removeItem("YumYum_Feedback");
        let temp: any[] = [];
        if (feedback[0]?.feedback_msg == "") {
            toast.error("Please write few words in suggestion")
            return
        }
        if (feedback[0]?.first_name == "") {
            toast.error("Please enter your first name")
            return
        }
        if (feedback[0]?.email == "") {
            toast.error("Please enter your email")
            return
        }
        if (feedback[0]?.rating == 0) {
            toast.error("please give rating")
            return
        }
        let storeFeedback = localStorage.getItem("YumYum_Feedback") !== "" || localStorage.getItem("YumYum_Feedback") !== undefined ? localStorage.getItem("YumYum_Feedback") : "[]"
        if (storeFeedback !== null) {
            temp = JSON.parse(storeFeedback)
            temp.push(feedback[0])
            localStorage.setItem("YumYum_Feedback", JSON.stringify(temp))
            toast.success("Feedback has been submitted")
            setFeedback(
                [{
                    first_name: "",
                    last_name: "",
                    email: "",
                    feedback_msg: "",
                    rating: 0
                }]
            )
        }
        else {
            localStorage.setItem("YumYum_Feedback", JSON.stringify(feedback))
            toast.success("Feedback has been submitted")
            setFeedback(
                [{
                    first_name: "",
                    last_name: "",
                    email: "",
                    feedback_msg: "",
                    rating: 0
                }]
            )
        }

    }
    return (
        <>
            <ToastContainer />
            <div className="sm:container sm:p-8">
                <div className="relative flex flex-col min-h-full p-4 overflow-hidden duration-500 rounded animate__animated animate__zoomIn group bg-[#013243] justify-evenly">
                    <div className="absolute duration-500 rounded-full blur group-hover:blur-none w-72 h-72 group-hover:translate-x-12 group-hover:translate-y-12 bg-[#B87333] right-1 -bottom-24"></div>
                    <div className="absolute w-12 h-12 duration-500 bg-[#013243] rounded-full blur group-hover:blur-none group-hover:translate-x-12 group-hover:translate-y-2 right-12 bottom-12"></div>
                    <div className="absolute duration-500 bg-indigo-800 rounded-full blur group-hover:blur-none w-36 h-36 group-hover:translate-x-12 group-hover:-translate-y-12 right-1 -top-12"></div>
                    <div className="absolute w-24 h-24 duration-500 rounded-full blur group-hover:blur-none bg-[#013243] group-hover:-translate-x-12"></div>
                    <div className="z-10">
                        <div className=" flex flex-col align-middle text-center items-center pt-8">
                            <svg
                                className="mb-6"
                                xmlns="http://www.w3.org/2000/svg"
                                width="100"
                                height="100"
                                version="1.1"
                                viewBox="0 0 512 512"
                                xmlSpace="preserve"
                            >
                                <path fill="#B0E0E6" d="M309.333 320c29.397 0 53.333-23.936 53.333-53.333V117.333C362.666 87.936 338.73 64 309.333 64h-256C23.936 64 0 87.936 0 117.333v149.333C0 296.064 23.936 320 53.333 320H64l-19.2 25.6c-2.88 3.819-2.837 9.088.064 12.885a10.637 10.637 0 008.469 4.181c1.323 0 2.667-.256 3.947-.768L162.048 320h147.285zm-153.28-20.587l-71.36 28.544 9.173-12.245a10.702 10.702 0 001.003-11.157 10.684 10.684 0 00-9.536-5.888h-32c-17.643 0-32-14.357-32-32V117.333c0-17.643 14.357-32 32-32v-.021h256.021c17.643 0 32 14.357 32 32v149.333c0 17.643-14.357 32-32 32H160.021c-1.365 0-2.709.278-3.968.768z"></path>
                                <path fill="#D5D5D5" d="M458.667 149.333h-64c-5.888 0-10.667 4.779-10.667 10.667s4.779 10.667 10.667 10.667h64c17.643 0 32 14.357 32 32V352c0 17.643-14.357 32-32 32h-32a10.665 10.665 0 00-9.536 5.909 10.613 10.613 0 001.003 11.157l9.195 12.245-71.36-28.544a10.672 10.672 0 00-3.968-.768H202.667c-17.643 0-32-14.357-32-32 0-5.888-4.779-10.667-10.667-10.667s-10.667 4.779-10.667 10.667c0 29.397 23.936 53.333 53.333 53.333h147.285l104.747 41.899c1.301.512 2.624.768 3.968.768 3.243 0 6.4-1.472 8.469-4.181 2.901-3.797 2.944-9.067.064-12.885l-19.2-25.6h10.667C488.064 405.333 512 381.397 512 352V202.667c0-29.398-23.936-53.334-53.333-53.334z"></path>
                            </svg>
                            <p className=" text-3xl font-bold text-[#B87333] mb-3">Customer Feedback Form</p>
                            <p className=" text-lg font-bold text-white">Thank you for taking time to provide feedback. We appreciate hearing from you and will review your comments carefully.</p>
                        </div>
                        <hr className=" mt-16"></hr>
                        <div>
                            <div className=" flex flex-col align-middle text-center items-center mt-10">
                                <p className="text-white text-lg font-bold">Would you recommend it to your friends and colleagues?</p>
                                <div className=" flex sm:gap-40 sm:ml-0 ml-10 gap-20 mt-6">
                                    <div className="flex items-center">
                                        <label className="relative text-[#008080] flex cursor-pointer items-center justify-center gap-[1em]">
                                            <input
                                                type="radio"
                                                id="yes"
                                                name="tick"
                                                className="peer appearance-none"
                                                checked={tickState === "Yes"}
                                                onChange={(e) => setTickState("Yes")}
                                            />
                                            <span className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#008080]"></span>
                                            <svg
                                                viewBox="0 0 69 89"
                                                className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
                                                fill="none"
                                                height="89"
                                                width="69"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
                                                    stroke-width="6px"
                                                    stroke="#008080"
                                                    pathLength="100"
                                                ></path>
                                            </svg>
                                            <p className="text-[1em] font-bold [user-select:none]">Yes</p>
                                        </label>
                                    </div>
                                    <div className="flex items-center">

                                        <label className="relative text-[#008080] flex cursor-pointer items-center justify-center gap-[1em]">
                                            <input
                                                type="radio"
                                                id="no"
                                                name="tick"
                                                className="peer appearance-none"
                                                checked={tickState === "No"}
                                                onChange={(e) => setTickState("No")}
                                            />
                                            <span className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 rounded-[0.25em] border-[2px] border-[#008080]"></span>
                                            <svg
                                                viewBox="0 0 69 89"
                                                className="absolute left-0 top-1/2 h-[2em] w-[2em] -translate-x-full -translate-y-1/2 duration-500 ease-out [stroke-dasharray:100] [stroke-dashoffset:100] peer-checked:[stroke-dashoffset:0]"
                                                fill="none"
                                                height="89"
                                                width="69"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M.93 63.984c3.436.556 7.168.347 10.147 2.45 4.521 3.19 10.198 8.458 13.647 12.596 1.374 1.65 4.181 5.922 5.598 8.048.267.4-1.31.823-1.4.35-5.744-30.636 9.258-59.906 29.743-81.18C62.29 2.486 63.104 1 68.113 1"
                                                    stroke-width="6px"
                                                    stroke="#008080"
                                                    pathLength="100"
                                                ></path>
                                            </svg>
                                            <p className="text-[1em] font-bold [user-select:none]">No</p>
                                        </label>
                                    </div>
                                </div>



                            </div>
                            <div className=" flex flex-col align-middle text-center items-center mt-20">
                                <p className="text-white text-lg font-bold">Do you have any suggestions to improve our product and service?</p>
                                <div className="mb-4 mt-3 sm:w-[80vw] w-[90vw]">
                                    <textarea
                                        value={feedback[0]?.feedback_msg}
                                        placeholder="Enter Your Suggestion Here"
                                        className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 focus:bg-white"
                                        rows={5}
                                        name="Comment"
                                        id="Comment"
                                        onChange={(e) => {
                                            setFeedback((prev) => {
                                                return [
                                                    {
                                                        ...prev[0],
                                                        feedback_msg: e.target.value,
                                                    },
                                                ];
                                            });
                                        }}
                                    ></textarea>
                                </div>
                            </div>
                            <div className=" flex flex-col align-middle text-center items-center mt-6 mb-9">
                                <p className="text-white text-lg font-bold">How satisfied are you with our product overall?</p>
                                <div className="flex items-center">
                                    <svg onClick={() => {
                                        setFeedback((prev) => {
                                            return [
                                                {
                                                    ...prev[0],
                                                    rating: 1
                                                }
                                            ]
                                        })
                                    }} className={feedback[0]?.rating >= 1 ? " cursor-pointer w-6 h-6 text-yellow-300 ms-1" : " cursor-pointer w-6 h-6 ms-1 text-gray-300 dark:text-gray-500"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg onClick={() => {
                                        setFeedback((prev) => {
                                            return [
                                                {
                                                    ...prev[0],
                                                    rating: 2
                                                }
                                            ]
                                        })
                                    }} className={feedback[0]?.rating >= 2 ? "cursor-pointer w-6 h-6 text-yellow-300 ms-1" : "cursor-pointer w-6 h-6 ms-1 text-gray-300 dark:text-gray-500"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg onClick={() => {
                                        setFeedback((prev) => {
                                            return [
                                                {
                                                    ...prev[0],
                                                    rating: 3
                                                }
                                            ]
                                        })
                                    }} className={feedback[0]?.rating >= 3 ? "cursor-pointer w-6 h-6 text-yellow-300 ms-1" : "cursor-pointer w-6 h-6 ms-1 text-gray-300 dark:text-gray-500"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg onClick={() => {
                                        setFeedback((prev) => {
                                            return [
                                                {
                                                    ...prev[0],
                                                    rating: 4
                                                }
                                            ]
                                        })
                                    }} className={feedback[0]?.rating >= 4 ? "cursor-pointer w-6 h-6 text-yellow-300 ms-1" : "cursor-pointer w-6 h-6 ms-1 text-gray-300 dark:text-gray-500"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg onClick={() => {
                                        setFeedback((prev) => {
                                            return [
                                                {
                                                    ...prev[0],
                                                    rating: 5
                                                }
                                            ]
                                        })
                                    }} className={feedback[0]?.rating == 5 ? "cursor-pointer w-6 h-6 text-yellow-300 ms-1" : "cursor-pointer w-6 h-6 ms-1 text-gray-300 dark:text-gray-500"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                            </div>
                            <div className=" flex flex-col align-middle text-center items-center mt-6 pb-6">
                                <p className=" text-white text-lg font-bold">Please leave your email address if you would like us to contact you regarding any questions.</p>
                                <div className="flex gap-5 sm:w-[40vw]">
                                    <input
                                        value={feedback[0]?.first_name}
                                        onChange={(e) => {
                                            setFeedback((prev) => {
                                                return [
                                                    {
                                                        ...prev[0],
                                                        first_name: e.target.value,
                                                    },
                                                ];
                                            });
                                        }}
                                        className="w-1/2 px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text" id='f-name' placeholder="First Name" />
                                    <input
                                        value={feedback[0]?.last_name}
                                        onChange={(e) => {
                                            setFeedback((prev) => {
                                                return [
                                                    {
                                                        ...prev[0],
                                                        last_name: e.target.value,
                                                    },
                                                ];
                                            });
                                        }}
                                        className="w-1/2 px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="text" id='l-name' placeholder="Last Name" />
                                </div>
                                <div className="w-[90svw] sm:w-[40vw]">
                                    <input
                                        value={feedback[0]?.email}
                                        onChange={(e) => {
                                            setFeedback((prev) => {
                                                return [
                                                    {
                                                        ...prev[0],
                                                        email: e.target.value,
                                                    },
                                                ];
                                            });
                                        }}
                                        className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" id='email' placeholder="Email" />

                                </div>
                            </div>
                        </div>
                        <div className=" flex flex-col align-middle text-center items-center pt-8">
                            <Button className="text-xl" onClick={() => handleSubmit()}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeedBackForm;
