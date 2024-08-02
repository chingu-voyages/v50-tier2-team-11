import { useCallback } from "react";
import { useLocalStorageProps } from "./useLocalStorage.types";

/**
 * Hook that provides methods to interact with local storage using a specified key.
 * @param key - The key to store or retrieve data in/from local storage.
 * @returns An object with methods to set, get, and remove data from local storage using the provided key.
 */
export const useLocalStorage = (key: string): useLocalStorageProps => {
  if (!key) throw new Error("key cannot be null");

  /**
   * Stores data in local storage using the provided key and value.
   * @param value - The data to be stored.
   */
  const setLocalData = useCallback((value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  /**
   * Retrieves data from local storage using the provided key.
   * @returns The stored data or null if it doesn't exist.
   */
  const getLocalData = useCallback(() => {
    try {
      const storedValue = window.localStorage.getItem(key);
      if (storedValue) {
        return JSON.parse(storedValue);
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  /**
   * Removes data from local storage using the provided key.
   */
  const removeLocalData = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  return { getLocalData, setLocalData, removeLocalData };
};
