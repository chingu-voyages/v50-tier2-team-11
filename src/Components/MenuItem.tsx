import { Plus, Minus } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

export type MenuItemProps = {
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
  const { name, img, dsc, price, rate, country, latitude, longitude } = prpos;
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
    <>
    <div
  className="min-h-full animate__animated animate__zoomIn duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly"
>
  <div
    className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"
  ></div>
  <div
    className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"
  ></div>
  <div
    className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"
  ></div>
  <div
    className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12"
  ></div>
  
  <div className="z-10">
      <img
        src={img}
        alt={name}
        className="object-cover w-full h-64 mb-4 rounded-t-lg"
      />
      <h2 className="mb-2 text-xl font-semibold">{name}</h2>
      <p className="mb-2 text-gray-400">{dsc}</p>
      {price !== undefined ? (
        <p className="mb-2 text-lg font-bold">Price: ${price.toFixed(2)}</p>
      ) : (
        <p className="mb-2 text-lg font-bold">Price: N/A</p>
      )}
      <p className="mb-2 text-gray-400">Rating: {rate}</p>
      <p className="mb-2 text-gray-400">Country: {country}</p>
      <p className="text-gray-400">
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

</div>

    {/* <div className="p-4 bg-white rounded-lg shadow-md">
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
    </div> */}
    </>
  );
};

export default MenuItem;
