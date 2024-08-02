import { Plus, Minus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { OrderProps } from "./Order";
import { useOrders } from "../contexts/OrderContext";

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

const MenuItem = (props: MenuItemProps) => {
  const { id, name, img, dsc, price, rate, country, latitude, longitude } =
    props;
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [isOrdered, setIsOrdered] = useState(false);
  const { orders, addOrder } = useOrders();

  useEffect(() => {
    setIsOrdered(orders.some((order) => order.id === id));
  }, [id, orders]);

  const increaseOrder = () => {
    setOrderQuantity(orderQuantity + 1);
  };

  const decreaseOrder = () => {
    if (orderQuantity > 1) {
      setOrderQuantity(orderQuantity - 1);
    }
  };

  const addToCart = () => {
    addOrder({
      id,
      name,
      image: img,
      price: price!,
      quantity: orderQuantity,
      restaurant: country,
    } as OrderProps);
  };

  return (
    <>
      <div className="relative flex flex-col min-h-full p-4 overflow-hidden duration-500 rounded animate__animated animate__zoomIn group bg-neutral-800 text-neutral-50 justify-evenly">
        <div className="absolute duration-500 rounded-full blur group-hover:blur-none w-72 h-72 group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
        <div className="absolute w-12 h-12 duration-500 bg-indigo-700 rounded-full blur group-hover:blur-none group-hover:translate-x-12 group-hover:translate-y-2 right-12 bottom-12"></div>
        <div className="absolute duration-500 bg-indigo-800 rounded-full blur group-hover:blur-none w-36 h-36 group-hover:translate-x-12 group-hover:-translate-y-12 right-1 -top-12"></div>
        <div className="absolute w-24 h-24 duration-500 rounded-full blur group-hover:blur-none bg-sky-700 group-hover:-translate-x-12"></div>

        <div className="z-10">
          <Link to={`/meal/${id}`}>
            <img
              src={img}
              alt={name}
              className="object-cover w-full h-64 mb-4 rounded-t-lg"
            />
          </Link>
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
            <div
              className={cn("flex items-center gap-2 mr-8", {
                hidden: isOrdered,
              })}
            >
              <Button
                variant={"outline"}
                className="w-8 h-8 p-0 bg-transparent rounded-full"
                onClick={increaseOrder}
              >
                <Plus size={16} />
              </Button>
              <span className="text-xl font-bold">{orderQuantity}</span>
              <Button
                variant={"outline"}
                className="w-8 h-8 p-0 bg-transparent rounded-full"
                onClick={decreaseOrder}
                disabled={orderQuantity <= 1}
              >
                <Minus size={16} />
              </Button>
            </div>
            <Button disabled={isOrdered} onClick={addToCart}>
              {isOrdered ? "Ordered" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
