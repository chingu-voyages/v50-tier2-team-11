import { createContext, useContext } from "react";
import { OrderProps } from "../components/Order";

export type OrdersContextType = {
  orders: OrderProps[];
  addOrder: (order: OrderProps) => void;
  updateOrder: (id: string, updatedOrder: OrderProps) => void;
  removeOrder: (id: string) => void;
  clearOrders: () => void;
};

export const OrdersContext = createContext<OrdersContextType>(
  {} as unknown as OrdersContextType
);

export function useOrders() {
  return useContext(OrdersContext);
}
