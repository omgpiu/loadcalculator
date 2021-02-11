import  {useState} from 'react';

export const useLocalStorage = (key: any, initialValue: any) => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.sessionStorage.getItem(key) ; //
            return item ? JSON.parse(item) : initialValue; //
        } catch (err) {
            console.error(err);
            return initialValue;
        }
    });

    const setValue = (value: any) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.sessionStorage.setItem(key, JSON.stringify(valueToStore)); //
        } catch (err) {
            console.error(err);
        }
    };

    return [storedValue, setValue];
};


// const [storedPage, setPage] = useLocalStorage("page", "PAGE_ONE") // сам хук
// const page = storedPage      - получение данных из Local Storage
// setPage(page)                - сохранение данных в Local Storage


