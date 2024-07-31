import React, { useState, useEffect, useRef } from 'react';

const Header: React.FC = () => {
  
    let temparr: any[] = ["bbqs", "best-foods", "breads", "burgers", "chocolates", "desserts", "drinks", "fried-chicken", "ice-cream", "pizzas", "sandwiches", "sausages", "steaks", "our-foods"]

  return (
    <form className="max-w-sm mx-auto">
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
  <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose a country</option>

    {temparr?.map((item,index) => {
        return(
            <option key={index} value={item}>{item?.toUpperCase()}</option>
        )
    })}
  </select>
</form>
  );
};

export default Header;