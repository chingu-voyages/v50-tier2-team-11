import { Plus, Minus } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export type MenuItemProps = {
  id: string;
  name: string;
  img: string;
  dsc: string;
  price: number | undefined;
  rate: number;
  country: string;
  latitude: string;
  longitude: string;
};

const MenuItem = (prpos: MenuItemProps) => {
  const { id, name, img, dsc, price, rate, country, latitude, longitude } = prpos;
  const [orderNumber, setOrderNumber] = useState(1);

  const inscreaseOrder = () => {
    setOrderNumber(orderNumber + 1);
  };

  const decreaseOrder = () => {
    if (orderNumber > 1) {
      setOrderNumber(orderNumber - 1);
    }
  };
  return (
    <Link to={`/meal/${id}`}>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <img
          src={img}
          alt={name}
          className="object-cover w-full h-64 mb-4 rounded-t-lg"
        />
        <h2 className="mb-2 text-xl font-semibold">{name}</h2>
        <p className="mb-2 text-gray-600">{dsc}</p>
        {price !== undefined ? (
          <p className="mb-2 text-lg font-bold">Price: ${price.toFixed(2)}</p>
        ) : (
          <p className="mb-2 text-lg font-bold">Price: N/A</p>
        )}
        <p className="mb-2 text-gray-600">Rating: {rate}</p>
        <p className="mb-2 text-gray-600">Country: {country}</p>
        <p className="text-gray-600">
          Location: {latitude}, {longitude}
        </p>
        <div className="flex items-center mt-4">
          <div className="flex items-center gap-2 mr-8">
            <Button
              variant={"outline"}
              className="w-8 h-8 p-0 rounded-full"
              onClick={inscreaseOrder}
            >
              <Plus size={16} />
            </Button>
            <span className="text-xl font-bold">{orderNumber}</span>
            <Button
              variant={"outline"}
              className="w-8 h-8 p-0 rounded-full"
              onClick={decreaseOrder}
              disabled={orderNumber <= 1}
            >
              <Minus size={16} />
            </Button>
          </div>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </Link>
  );
};

export default MenuItem;
