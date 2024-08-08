import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserReview from "../../components/ui/userReview";
import loaderGif from "../../assests/loader.gif";
import "./style.css"
interface UserFeedback {
    first_name: string;
    last_name: string;
    email: string;
    feedback_msg: string;
    rating: number;
}

const Home = () => {
    const [storeFeedback, setStoreFeedback] = useState<UserFeedback[]>([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 3000);
        const feedbackData = localStorage.getItem("YumYum_Feedback");
        if (feedbackData !== null) {
            try {
                const parsedData: UserFeedback[] = JSON.parse(feedbackData);
                setStoreFeedback(parsedData);
            } catch (error) {
                console.error("Error parsing feedback data from localStorage:", error);
            }
        }

    }, []);
    return (
        <>

            <Fragment >
                <div className="sm:px-0 px-4 columns-1 ">
                    <div className="flex flex-col-reverse sm:flex sm:flex-row  ">
                        <div className="pt-12 justify-items-center bg-white w-[100%] sm:w-[50%] p-8 rounded-lg animate-fade-in">
                            <h2 className="text-6xl font-bold text-[#B87333] mb-4 font-serif">Yum Yum: A Culinary Odyssey</h2>
                            <p className=" text-gray-700 text-xl mb-4 font-medium font-serif">
                            At Yum Yum, we don't simply prepare meals - we curate unforgettable dining experiences that captivate the senses.
                            </p>
                            <p className="text-gray-700 text-xl mb-6 font-medium font-serif">
                            Our philosophy is built on the belief that food should be a transformative journey, where every bite unveils new layers of complex flavors and textures. We are dedicated to taking our guests on a culinary expedition, where the boundaries of the ordinary are transcended, and the extraordinary becomes the norm.                            </p>
                            <div className="flex justify-between">
                                <Link to={"/menu"} className="bg-[#013243] hover:bg-[#013243]/70 text-white px-8 py-4 rounded-lg transition-colors duration-300 mr-4 font-semibold text-lg">
                                    Explore the Menu
                                </Link>

                            </div>
                        </div>
                        <div  className="mt-2 mr-2 w-[100%] sm:w-[50%] h-[600px] overflow-hidden relative border-2 border-[rgba(1,50,67,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(1,50,67,1)] to-[rgba(1,50,67,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
                        {!loader ? (<div className="flex gap-44 flex-wrap justify-center items-center h-full">
                                <div className="flex flex-row mt-60 car-moving gap-6 sm:-rotate-45 rotate-45 sm:flex-row justify-between items-center">
                                    <img className=" h-1/2 sm:w-1/2 w-full " src={require("../../assests/top-view-food-frame-with-copy-space.jpg")} alt="bg1" loading="lazy" />
                                    <img className=" h-1/2 sm:w-1/2 w-full " src={require("../../assests/bg-2.jpeg")} alt="bg2" loading="lazy" />
                                    <img className=" h-1/2 sm:w-1/2 w-full " src={require("../../assests/flat-lay-arrangement-with-salad-box-sauce.jpg")} alt="bg3" loading="lazy" />
                                </div>
                                <div className="flex flex-row gap-6 car-moving sm:-rotate-45 rotate-45 sm:flex-row justify-between items-center">
                                    <img className=" h-1/2 sm:w-1/2 w-full " src={require("../../assests/top-view-assortment-with-food-frame-tableware.jpg")} alt="bg4" loading="lazy" />
                                    <img className=" h-1/2 sm:w-1/2 w-full " src={require("../../assests/top-view-food-frame-with-copy-space.jpg")} alt="bg5" loading="lazy" />
                                    <img className=" h-1/2 sm:w-1/2 w-full " src={require("../../assests/top-view-assortment-with-food-frame-tableware.jpg")} alt="bg6" loading="lazy" />
                                </div>
                            </div>) : 
                            <div className="flex items-center justify-center">
                            <img src={loaderGif} width={100} height={100} alt="loader" />
                          </div>}
                        </div>
                    </div>

                    {storeFeedback?.length > 0 &&<div className="p-6">
                        <p className="text-3xl mb-2 ml-1">Customers Review</p>
                       
                            <UserReview storeFeedback={storeFeedback} />
                       
                    </div> }
                </div>
            </Fragment>
        </>
    );
};

export default Home;
