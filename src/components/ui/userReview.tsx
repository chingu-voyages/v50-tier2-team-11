import React, { Fragment } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
interface UserReviewProps {
    storeFeedback: { first_name: string; last_name: string; email: string; feedback_msg: string; rating: number }[];
}

interface UserFeedback {
    first_name: string;
    last_name: string;
    email: string;
    feedback_msg: string;
    rating: number
}

const UserReview: React.FC<UserReviewProps> = ({ storeFeedback }) => {
    return (
        <Fragment>
            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                autoPlaySpeed={1000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass="custom-dots-class"
                draggable
                focusOnSelect={false}
                infinite={false}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 1024
                        },
                        items: 3,
                        partialVisibilityGutter: 40
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 1,
                        partialVisibilityGutter: 30
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 2,
                        partialVisibilityGutter: 30
                    }
                }}
                rewind
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={true}
                sliderClass=""
                slidesToSlide={2}
                swipeable
            >
                {storeFeedback?.map((user: UserFeedback, index: number) => {
                    return (
                        <div key={index} className=" shadow-lg flex flex-col sm:mx-2 min-h-full p-4 rounded-lg bg-[#013243]  justify-evenly">
                            <div className="flex items-center justify-between align-middle text-center">
                                <div className="flex gap-4">

                                    <div className=" ring-2 ring-gray-300 dark:ring-gray-500 relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                        <svg className=" absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                    </div>

                                    <h2 className="text-white mb-2 text-xl font-semibold">{user?.first_name + user?.last_name}</h2>
                                </div>
                                <div className="flex items-center">
                                    <svg className={user?.rating >= 1 ? " cursor-pointer w-4 h-4 text-yellow-300 ms-1" : " cursor-pointer w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className={user?.rating >= 2 ? "cursor-pointer w-4 h-4 text-yellow-300 ms-1" : "cursor-pointer w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className={user?.rating >= 3 ? "cursor-pointer w-4 h-4 text-yellow-300 ms-1" : "cursor-pointer w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className={user?.rating >= 4 ? "cursor-pointer w-4 h-4 text-yellow-300 ms-1" : "cursor-pointer w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className={user?.rating == 5 ? "cursor-pointer w-4 h-4 text-yellow-300 ms-1" : "cursor-pointer w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="mb-2 mt-4 text-gray-400">{user?.feedback_msg}</p>
                        </div>
                    )
                })}

            </Carousel>
        </Fragment>
        //<Footer/>
    );
};

export default UserReview;
