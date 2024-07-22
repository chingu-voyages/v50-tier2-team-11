import React, { useEffect, useState } from "react";
import axios from 'axios';

const FetchMenuItems: React.FC = () => {
  const [getAllMenus, setGetAllMenus] = useState<any[]>([]);

  useEffect(() => {
    const getAllFoodMenus = async () => {
      try {
        let response = await axios.get('https://menus-api.vercel.app/');
        if (response.status === 200) {
          let responeData = response?.data;
          console.log(responeData);
          let temparr = ["bbqs", "best-foods", "breads", "burgers", "chocolates", "desserts", "drinks", "fried-chicken", "ice-cream", "pizzas", "sandwiches", "sausages", "steaks", "our-foods"];
          let temp: any[] = [];
          for (let i = 0; i < temparr?.length; i++) {
            console.log(temparr[i], "check---", responeData?.[temparr[i]]);
            let menuList = responeData?.[temparr[i]]?.map((ele: {
              country: string, dsc: string, id: string, img: string, latitude: number, longitude: number, name: string, price: number, rate: number
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
                category: temparr[i]
              }
            })
            temp?.push(menuList)
          }
          setGetAllMenus(temp?.flat())
        }
      }
      catch (error) {
        console.log("errrorrrr")
      }
    }
    getAllFoodMenus()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Menu</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getAllMenus.map((item, index) => {
          return (
            <li key={`${item.id}-${index}`} className="bg-white rounded-lg shadow-md p-4">
              <img src={item.img} alt={item.name} className="w-full h-64 object-cover rounded-t-lg mb-4" />
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-2">{item.dsc}</p>
              {item.price !== undefined ? (
                <p className="text-lg font-bold mb-2">Price: ${item.price.toFixed(2)}</p>
              ) : (
                <p className="text-lg font-bold mb-2">Price: N/A</p>
              )}
              <p className="text-gray-600 mb-2">Rating: {item.rate}</p>
              <p className="text-gray-600 mb-2">Country: {item.country}</p>
              <p className="text-gray-600">Location: {item.latitude}, {item.longitude}</p>
            </li>
          );
        })}
      </ul>
    </div>
  )
}

export default FetchMenuItems;
