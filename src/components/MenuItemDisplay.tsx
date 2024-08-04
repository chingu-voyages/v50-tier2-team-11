import React, { useEffect, useState } from "react";
import axios from "axios";
import loader from "../../src/assests/loader.gif";
import { ToastContainer, toast } from "react-toastify";
import MenuItem from "./MenuItem";
import OrderList from "./OrderList";

const FetchMenuItems: React.FC = () => {
  const [page, setPage] = useState<number>(0);

  const [getAllMenus, setGetAllMenus] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [category, setCategory] = useState<string>("bbqs");
  const [searchFood, setSearchFood] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  let temparr: any[] = [
    "bbqs",
    "best-foods",
    "breads",
    "burgers",
    "chocolates",
    "desserts",
    "drinks",
    "fried-chicken",
    "ice-cream",
    "pizzas",
    "sandwiches",
    "sausages",
    "steaks",
    "our-foods",
  ];
  let temp: any[] = [];
  useEffect(() => {
    setLoading(true);
    const getAllFoodMenus = async () => {
      try {
        let response = await axios.get("https://menus-api.vercel.app/");
        if (response.status === 200) {
          let responeData = response?.data;
          // temparr = ["bbqs", "best-foods", "breads", "burgers", "chocolates", "desserts", "drinks", "fried-chicken", "ice-cream", "pizzas", "sandwiches", "sausages", "steaks", "our-foods"];
          // let temp: any[] = [];
          for (let i = 0; i < temparr?.length; i++) {
            // console.log(temparr[i], "check---", responeData?.[temparr[i]]);
            let menuList = responeData?.[temparr[i]]?.map(
              (ele: {
                country: string;
                dsc: string;
                id: string;
                img: string;
                latitude: number;
                longitude: number;
                name: string;
                price: number;
                rate: number;
              }) => {
                return {
                  country: ele?.country,
                  dsc: ele?.dsc,
                  id: ele?.id,
                  img: ele?.img,
                  latitude: ele?.latitude,
                  longitude: ele?.longitude,
                  name: ele?.name,
                  price: ele?.price,
                  rate: ele?.rate,
                  category: temparr[i],
                };
              }
            );
            temp?.push(menuList);
          }
          setGetAllMenus(temp?.flat());
          setFilteredData(
            temp
              ?.flat()
              ?.filter((item) => item?.category?.toLowerCase() === "bbqs")
          );
          setLoading(false);
        }
      } catch (error) {
        toast.error("Data Not Available");
      }
    };
    getAllFoodMenus();
  }, []);

  const handlePageNext = () => {
    setPage(page + 1);
  };
  const handlePagePrevious = () => {
    console.log("running");
    setPage(page - 1);
  };
  const handleSearch = () => {
    setFilteredData(
      filteredData?.filter((item) => {
        return (
          item?.name?.toLowerCase()?.includes(searchFood?.toLowerCase()) ||
          item?.dsc?.toLowerCase()?.includes(searchFood?.toLowerCase()) ||
          item?.country?.toLowerCase()?.includes(searchFood?.toLowerCase()) ||
          item?.id?.includes(searchFood)
        );
      })
    );
  };

  useEffect(() => {
    searchFood === "" &&
      setFilteredData(
        getAllMenus?.filter((item) => item?.category?.toLowerCase() === category)
      );
  }, [searchFood]);

  const ActiveMenu =
    "inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600 cursor-pointer";
  const InActiveMenu =
    "inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer";

  return (
    <>
      <ToastContainer />

      <div className="p-6 bg-slate-900">
        <div className="md:flex">
          <ul className="mb-4 space-y-4 text-sm font-medium text-gray-500 flex-column space-y dark:text-gray-400 md:me-4 md:mb-0">
            {temparr?.map((item, index) => {
              return (
                <li>
                  <p
                    onClick={() => {
                      setLoading(true);
                      setCategory(item);
                      // console.log("itemmmm",getAllMenus)
                      let filterArr = getAllMenus;
                      setFilteredData(
                        filterArr?.filter(
                          (item1: { category: string }) =>
                            item1?.category?.toLowerCase() === item
                        )
                      );
                      setLoading(false);
                      setPage(0);
                      setSearchFood("");
                    }}
                    className={category === item ? ActiveMenu : InActiveMenu}
                  >
                    {item?.toUpperCase()}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="w-full p-6 text-gray-500 rounded-lg bg-gray-50 text-medium dark:text-gray-400 dark:bg-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                {category?.toUpperCase()}
              </h3>
              <OrderList />
            </div>
            {loading ? (
              <div className="flex items-center justify-center">
                <img width={"150px"} src={loader} alt="loader" />
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-center">
                  <div className="relative w-3/4 overflow-hidden bg-white rounded-full shadow-xl ">
                    <input
                      type="text"
                      name="text"
                      value={searchFood}
                      onChange={(e) => {
                        setSearchFood(e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSearch();
                        }
                      }}
                      placeholder="Search Food"
                      className="w-full py-3 pl-6 pr-10 font-semibold bg-transparent border-none outline-none input"
                    />
                    <div className="absolute right-2 top-[0.4em]">
                      <button
                        onClick={() => handleSearch()}
                        className="relative flex items-center justify-center w-10 h-10 overflow-hidden bg-blue-600 rounded-full shadow-xl group"
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="relative z-10"
                        >
                          <path
                            d="M63.6689 29.0491L34.6198 63.6685L0.00043872 34.6194L29.0496 1.67708e-05L63.6689 29.0491Z"
                            fill="white"
                            fill-opacity="0.01"
                          ></path>
                          <path
                            d="M42.8496 18.7067L21.0628 44.6712"
                            stroke="white"
                            stroke-width="3.76603"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M26.9329 20.0992L42.85 18.7067L44.2426 34.6238"
                            stroke="white"
                            stroke-width="3.76603"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                        <div className="w-full h-full rotate-45 absolute left-[32%] top-[32%] bg-black group-hover:-left-[100%] group-hover:-top-[100%] duration-1000"></div>
                        <div className="w-full h-full -rotate-45 absolute -left-[32%] -top-[32%] group-hover:left-[100%] group-hover:top-[100%] bg-black duration-1000"></div>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="container p-4 mx-auto">
                  {/* <h1 className="mb-6 text-3xl font-bold text-center">Menu</h1> */}

                  <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredData
                      ?.slice(page * 10, page * 10 + 10)
                      ?.map((item, index) => {
                        return (
                          <li key={`${item.id}-${index}`}>
                            <MenuItem {...item} />
                          </li>
                        );
                      })}
                  </ul>

                  <div className="flex items-center justify-center mt-5">
                    <div className="flex">
                      <button
                        disabled={page === 0}
                        onClick={() => handlePagePrevious()}
                        className={
                          page === 0
                            ? "flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-not-allowed"
                            : "flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        }
                      >
                        Previous
                      </button>
                      <button
                        disabled={
                          page + 1 === Math.ceil(filteredData?.length / 10)
                        }
                        onClick={() => handlePageNext()}
                        className={
                          page + 1 === Math.ceil(filteredData?.length / 10)
                            ? "flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-not-allowed"
                            : "flex items-center justify-center px-4 h-10 ms-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        }
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FetchMenuItems;
