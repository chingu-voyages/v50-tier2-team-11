export type useLocalStorageProps = {
    getLocalData: () => any | null,
    setLocalData: (value: unknown) => void;
    removeLocalData: () => void;
}