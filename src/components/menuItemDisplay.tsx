import MenuItem from "./MenuItem";
import React, { useEffect, useState } from "react";
import axios from "axios";


const MenuItemDisplay: React.FC = () => {
  const [getAllMenus, setGetAllMenus] = useState<any[]>([]);

  useEffect(() => {
    const getAllFoodMenus = async () => {
      try {
        let response = await axios.get("https://menus-api.vercel.app/");
        if (response.status === 200) {
          let responseData = response?.data;
          console.log(responseData);
          let temparr = [
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
          for (let i = 0; i < temparr?.length; i++) {
            console.log(temparr[i], "check---", responseData?.[temparr[i]]);
            let menuList = responseData?.[temparr[i]]?.map(
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
        }
      } catch (error) {
        console.log("errrorrrr");
      }
    };
    getAllFoodMenus();
  }, []);

  return (
    <div className="container p-4 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">Menu</h1>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {getAllMenus.map((item, index) => {
          return (
            <li
              key={`${item.id}-${index}`}
              className="p-4 bg-white rounded-lg shadow-md"
            >
              <MenuItem {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuItemDisplay;
