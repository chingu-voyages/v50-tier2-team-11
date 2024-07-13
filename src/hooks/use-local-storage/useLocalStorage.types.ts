export type useLocalStorageProps = {
    value: unknown;
    setItem: (value: unknown) => void;
    removeItem: () => void;
}