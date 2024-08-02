import { Plus, Minus, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useOrders } from "../contexts/OrderContext";

export type OrderProps = {
  id: string;
  image: string;
  name: string;
  price: number;
  restaurant: string;
  quantity: number;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Order = (props: OrderProps) => {
  const { id, name, image, price, quantity, restaurant } = props;

  const { updateOrder, removeOrder } = useOrders();

  const increaseQuantity = () => {
    updateOrder(id, { ...props, quantity: quantity+1 });
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      updateOrder(id, { ...props, quantity: quantity-1 });
    }
  };

  const handleRemoveOrder = () => {
    removeOrder(id);
  }

  return (
    <div className="relative flex items-center gap-2 p-2 transition-all border rounded-md shadow-sm select-none">
      <div className="relative w-24 sm:w-28 overflow-hidden aspect-[4/3] rounded-md">
        <img
          src={image}
          alt={`order_${name}`}
          className="absolute top-0 left-0 object-cover object-center w-full"
        />
      </div>

      <div>
        <h3 className="w-40 text-base font-bold leading-none sm:text-lg line-clamp-1">{name}</h3>
        <p className="pb-1 leading-none">{restaurant}</p>
        <div className="flex items-center gap-2 pb-2 sm:gap-4">
          <p className="text-sm font-semibold text-orange-500">
            ${Math.floor(price * quantity * 100) / 100}
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

      <Button className="absolute p-0 text-red-500 bg-transparent cursor-pointer w-fit h-fit hover:bg-transparent bottom-2 sm:bottom-4 right-2 sm:right-4"
      onClick={handleRemoveOrder}>
        <Trash2 size={16} />
      </Button>
    </div>
  );
};

export default Order;
