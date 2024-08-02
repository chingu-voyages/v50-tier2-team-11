import { useMemo } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { ShoppingCart, Trash2 } from "lucide-react";
import Order from "./Order";
import { useOrders } from "../contexts/OrderContext";

const OrderList = () => {
  const { orders, clearOrders } = useOrders();
  const totalPrice = useMemo(
    () => orders.reduce((acc, order) => acc + order.price * order.quantity, 0),
    [orders]
  );

  const handleClearOrders = () => {
    clearOrders();
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 h-10 p-0 border-2 rounded-xl">
          <ShoppingCart size={24} className="transform -scale-x-100" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col w-5/6 gap-1 p-0 sm:gap-2">
        <SheetHeader className="p-4 pb-2 m-0 shadow-sm">
          <SheetTitle>Order List</SheetTitle>
          <SheetDescription>
            {orders.length === 0
              ? "Your cart is empty. Browse our menu and add some delicious items to your order!"
              : "Thank you for your order! Add a tip to support our team and enjoy great service."}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col flex-grow h-[74vh] gap-4 px-4 overflow-auto">
          {orders
            ? orders.map((order) => <Order key={`order_${order.id}`} {...order} />)
            : null}
        </div>
        <SheetFooter className="flex items-center justify-between w-full px-4 pt-4 pb-2 !flex-row sm:justify-between rounded-t-xl bg-slate-200">
          <span className="font-bold">Total: ${totalPrice}</span>
          <div className="flex items-center gap-1">
            <Button type="submit">Purchase</Button>
            <Button
              variant={"outline"}
              className="flex items-center gap-1 text-red-500 bg-transparent border-red-500 hover:bg-red-400 hover:text-white"
              onClick={handleClearOrders}
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
