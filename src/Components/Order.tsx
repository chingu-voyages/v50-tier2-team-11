import { Plus, Minus, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";

export type OrderProps = {
  id: string;
  image: string;
  name: string;
  price: number;
  restaurant: string;
  order_quantity: number;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Order = ({
  name,
  image,
  price,
  order_quantity,
  restaurant,
}: OrderProps) => {
  const [quantity, setQuantity] = useState(order_quantity);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="relative flex items-center gap-2 p-2 border rounded-md shadow-sm select-none">
      <div className="relative w-28 overflow-hidden aspect-[4/3] rounded-md">
        <img
          src={image}
          alt={`order_${name}`}
          className="absolute top-0 left-0 object-cover object-center w-full"
        />
      </div>

      <div>
        <h3 className="w-40 text-lg font-bold line-clamp-1">{name}</h3>
        <p className="pb-1 ">{restaurant}</p>
        <div className="flex items-center gap-4 pb-2">
          <p className="text-sm font-semibold text-orange-500">
            ${price * quantity}
          </p>
          {"|"}
          <div className="flex items-center gap-2">
            <Button
              variant={"outline"}
              className="w-6 h-6 p-0 text-white rounded-full bg-primary/80 hover:bg-primary hover:text-white"
              onClick={increaseQuantity}
            >
              <Plus size={16} />
            </Button>
            <span className="text-sm font-semibold">{quantity}</span>
            <Button
              variant={"outline"}
              className="w-5 h-5 p-0 bg-transparent rounded-full border-primary/60"
              onClick={decreaseQuantity}
              disabled={quantity <= 1}
            >
              <Minus size={16} />
            </Button>
          </div>
        </div>
      </div>

      <Button className="absolute p-0 text-red-500 bg-transparent cursor-pointer w-fit h-fit hover:bg-transparent bottom-4 right-4">
        <Trash2
          size={16}
        />
      </Button>
    </div>
  );
};

export default Order;
