import { OrdersContext, OrdersContextType } from "../contexts/OrderContext";
import { OrderProps } from "../components/Order";
import { useCallback, useEffect, useState } from "react";
import { useLocalStorage } from "../hooks/use-local-storage/useLocalStorage";

const ORDER_LIST_KEY = "order-list";

function useOrdersSource(): OrdersContextType {
  const { getLocalData, setLocalData } = useLocalStorage(ORDER_LIST_KEY);
  const [orders, setOrders] = useState<OrderProps[]>([]);

  useEffect(() => {
    const localOrders = getLocalData();
    if (localOrders) {
      setOrders(localOrders);
    } else {
      setLocalData([]);
    }
  }, [getLocalData, setLocalData]);

  const addOrder = useCallback(
    (order: OrderProps) => {
      const updatedOrders = [...orders, order];
      setOrders(updatedOrders);
      setLocalData(updatedOrders);
    },
    [orders, setLocalData]
  );

  const removeOrder = useCallback(
    (id: string) => {
      const updatedOrders = orders.filter((order) => order.id !== id);
      setOrders(updatedOrders);
      setLocalData(updatedOrders);
    },
    [orders, setLocalData]
  );

  const updateOrder = useCallback(
    (id: string, updatedOrder: OrderProps) => {
      const updatedOrders = orders.map((order) =>
        order.id === id ? updatedOrder : order
      );
      setOrders(updatedOrders);
      setLocalData(updatedOrders);
    },
    [orders, setLocalData]
  );

  const clearOrders = useCallback(() => {
    setOrders([]);
    setLocalData([]);
  }, [setLocalData]);

  return {
    orders,
    addOrder,
    updateOrder,
    removeOrder,
    clearOrders
  };
}

export default function OrdersProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <OrdersContext.Provider value={useOrdersSource()}>
      {children}
    </OrdersContext.Provider>
  );
}
