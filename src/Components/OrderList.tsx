import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useLocalStorage } from "../hooks/use-local-storage/useLocalStorage";
import Order, { OrderProps } from "./Order";

const OrderList = () => {
  // const { value, setItem } = useLocalStorage("orderList");
  const value:OrderProps[] = [
    {
      id: 'order_1',
      name: "Kings BBQ",
      price: 89,
      restaurant: "Kinston, NC",
      image: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      order_quantity: 2
    },
    {
      id: 'order_2',
      name: "Zuppardi's Apizza",
      price: 79,
      restaurant: "West Haven, CT",
      image: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131840/choose-your-own-new-haven-style-pizza-6-pack.ab82828afc6172cdd4017556c15e36dd.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
      order_quantity: 1
    },
  ]
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 h-10 p-0 border-2 rounded-xl">
          <ShoppingCart size={24} className="transform -scale-x-100" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between h-full p-0">
        <SheetHeader className="p-4">
          <SheetTitle>Order List</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col flex-1 gap-4 px-4">
          {
            value.map((item) => (
              <Order key={item.id} {...item} />
            ))
          }
        </div>
        <SheetFooter className="flex items-center justify-between w-full px-4 pt-4 pb-2 sm:justify-between rounded-t-xl bg-slate-200">
          <div className="font-bold">
            <span>Total: </span>
            {/* {(value as any[]).reduce((acc, item) => acc + item.price, 0)} */}
            <span>
              $50
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Button type="submit">Purchase</Button>
            <Button
              variant={"outline"}
              className="flex items-center gap-1 text-red-500 bg-transparent border-red-500 hover:bg-red-400 hover:text-white"
            >
              <Trash2 size={16} />
              <span>Clear All</span>
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default OrderList;
