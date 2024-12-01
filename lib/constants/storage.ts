import { QueryParamEnum } from '@/lib/hooks/useAppRouter';

const setLocalStorage = (name: QueryParamEnum, value: string) => {
  localStorage.setItem(name, value);
};

const setItemFromLocalStorage = (name: QueryParamEnum) => {
  return localStorage.getItem(name);
};

const removeItemFromLocalStorage = (name: QueryParamEnum) => {
  localStorage.removeItem(name);
};

const clearAllLocalStorageData = () => {
  localStorage.clear();
};

export const storage = {
  localStorage: {
    set: setLocalStorage,
    get: setItemFromLocalStorage,
    remove: removeItemFromLocalStorage,
    clearAll: clearAllLocalStorageData,
  },
};

export default storage;
