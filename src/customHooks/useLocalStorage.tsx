export const useLocalStorage = (): [
  (key: string, value: any) => void,
  (key: string) => any,
  (key: string) => void
] => {
  const saveItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  const getItem = (key: string) => localStorage.getItem(key) || "";
  const deleteItem = (key: string) => localStorage.removeItem(key);

  return [saveItem, getItem, deleteItem];
};
