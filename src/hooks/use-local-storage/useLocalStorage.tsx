import { useState } from "react";
import { useLocalStorageProps } from "./useLocalStorage.types";

/**
 * Hook that provides methods to interact with local storage using a specified key.
 * @param key - The key to store or retrieve data in/from local storage.
 * @returns An object with methods to set, get, and remove data from local storage using the provided key.
 */
export const useLocalStorage = (key: string): useLocalStorageProps => {
    if (!key) throw new Error("key cannot be null");

    const [value, setValue] = useState<unknown>(null);
    
    /**
     * Stores data in local storage using the provided key and value.
     * @param value - The data to be stored.
     */
    const setItem = (value: unknown) => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            setValue(value);
        } catch (error) {
            console.log(error);
        }
    };

    /**
     * Removes data from local storage using the provided key.
     */
    const removeItem = () => {
        try {
            window.localStorage.removeItem(key);
            setValue(null);
        } catch (error) {
            console.log(error);
        }
    }
    
    return { value, setItem, removeItem };
}