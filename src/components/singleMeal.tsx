import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

interface MealDetailProps {
  getAllMenus: any[];
}

const MealDetail: React.FC<MealDetailProps> = ({ getAllMenus }) => {
  const { id } = useParams<{ id: string }>();
  const meal = getAllMenus.find(item => item.id === id);
  const [quantity, setQuantity] = useState(0);

  if (!meal) {
    return <div>Meal not found</div>;
  }

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="container  mx-auto p-4 bg-custom-gradient w-full h-screen">
      <h1 className="text-3xl font-bold text-center mb-6 mx-auto text-[#000000]">{meal.name}</h1>
      <img src={meal.img} alt={meal.name} className="w-80 h-80 object-cover rounded-lg mb-4 mx-auto" />
      <p className="text-[#000000] mb-2 text-center font-medium">{meal.dsc}</p>
      {meal.price !== undefined ? (
        <p className="text-lg font-bold mb-2 text-[#000000]">Price: ${meal.price.toFixed(2)}</p>
      ) : (
        <p className="text-lg font-bold mb-2 text-[#000000]">Price: N/A</p>
      )}
       <div className="mt-4 flex justify-end mb-3">
      <div className="mt-4 border rounded-3xl w-fit border-[#B87333]">
        <div className="flex items-center">
          <button 
            className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 mr-2"
            onClick={decrement}
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button 
            className="bg-gray-200 text-gray-700 rounded-full px-3 py-1 ml-2"
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>
      </div>
      <div className="flex flex-col justify-center items-center border p-4 rounded-lg bg-gray-100 ">
        <p className="text-[#000000] mb-2 font-medium">Rating: {meal.rate}</p>
        <p className="text-[#000000] mb-2 font-medium">Country: {meal.country}</p>
        <p className="text-[#000000] font-medium">Location: {meal.latitude}, {meal.longitude}</p>
      </div>
    
    </div>
  );
};

export default MealDetail;
