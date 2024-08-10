import React, { Fragment, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import UserReview from "../../components/ui/userReview";
import BackgroungIMG1 from "../../assests/brooke-lark-kVCRP3uiLiE-unsplash.jpg"
import BackgroungIMG2 from "../../assests/close-up-hand-holding-taco-with-yellow-background.jpg"
import BackgroungIMG3 from "../../assests/flat-lay-arrangement-with-salad-box-sauce.jpg"
import BackgroungIMG4 from "../../assests/flat-lay-frame-with-egg-fries-plate.jpg"
import BackgroungIMG5 from "../../assests/food-frame-with-yellow-background.jpg"
import BackgroungIMG6 from "../../assests/top-view-assortment-with-food-frame-tableware.jpg"
import BackgroungIMG7 from "../../assests/top-view-food-frame-with-copy-space.jpg"
// import "./style.css"
interface UserFeedback {
    first_name: string;
    last_name: string;
    email: string;
    feedback_msg: string;
    rating: number;
}

const Home = () => {
    const [storeFeedback, setStoreFeedback] = useState<UserFeedback[]>([]);

    useEffect(() => {
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

                    <div className="flex-column sm:flex  ">
                    <div className=" bg-white w-[100%] sm:w-[50%] p-8 rounded-lg animate-fade-in">
                                <h2 className="text-6xl font-bold text-[#B87333] mb-4 font-serif">Indulge in a Culinary Odyssey</h2>
                                <p className="text-gray-700 text-xl mb-4 font-medium font-serif">
                                    We don't simply prepare meals - we curate unforgettable dining experiences that captivate the senses.
                                </p>
                                <p className="text-gray-700 text-xl mb-6 font-medium font-serif">
                                    Our philosophy is built on the belief that food should be a transformative journey, where every bite unveils new layers of complex flavors and textures.
                                </p>
                                <div className="flex justify-between">
                                    <Link to={"/menu"} className="bg-[#013243] text-white px-8 py-4 rounded-lg hover:[#013243] transition-colors duration-300 mr-4 font-semibold text-lg">
                                        Explore the Menu
                                    </Link>
                                    
                                </div>
                            </div>
                    <div className="w-[100%] sm:w-[50%] bg-[#013243] overflow-hidden relative">
                        
                        <div className="flex flex-wrap justify-center items-center h-full">
                            <div className="flex flex-row sm:flex-row justify-between items-center">
                                <img className=" h-[30%] w-[30%] sm:-rotate-45 rotate-45 m-8 sm:my-20 sm:mx-8 car-moving" src={BackgroungIMG7} alt="bg" />
                                <img className=" h-[30%] w-[30%] sm:-rotate-45 rotate-45 m-8 sm:my-20 sm:mx-8 car-moving" src={BackgroungIMG2} alt="bg" />
                                <img className=" h-[30%] w-[30%] sm:-rotate-45 rotate-45 m-8 sm:my-20 sm:mx-8 car-moving" src={BackgroungIMG3} alt="bg" />
                            </div>
                            <div className="flex flex-row sm:flex-row justify-between items-center">
                                <img className=" h-[30%] w-[30%] sm:-rotate-45 rotate-45 m-8 sm:my-20 sm:mx-8 car-moving" src={BackgroungIMG6} alt="bg" />
                                <img className=" h-[30%] w-[30%] sm:-rotate-45 rotate-45 m-8 sm:my-20 sm:mx-8 car-moving" src={BackgroungIMG7} alt="bg" />
                                <img className=" h-[30%] w-[30%] sm:-rotate-45 rotate-45 m-8 sm:my-20 sm:mx-8 car-moving" src={BackgroungIMG6} alt="bg" />
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div className="p-6">
                   
                    <p className="text-3xl mb-2 ml-1">Customers Review</p>
                    
                    {storeFeedback?.length > 0 &&
                        <UserReview storeFeedback={storeFeedback} />
                    }
</div>
                </div>
            </Fragment>
        </>
    );
};

export default Home;
