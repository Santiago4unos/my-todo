import React from "react";

function useLocalStorage<T>(itemName: string, defaultValue: T): {item: T, saveItem: (newItem: T) => void, loading: boolean, error: boolean} {
    const [item, setItem] = React.useState(defaultValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItems = localStorage.getItem(itemName);
                let parsedItems: T;
                if (!localStorageItems) {
                    localStorage.setItem(itemName, JSON.stringify(defaultValue));
                    parsedItems = defaultValue;
                } else {
                    parsedItems = JSON.parse(localStorageItems);
                    setItem(parsedItems);
                }
                
                setLoading(false);
            } catch (e) {
                setLoading(false);
                setError(true);
            }
        }, 2300);
    // eslint-disable-next-line
    }, [itemName]);


    const saveItem = (newItem: T) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
    };

    return {
        item,
        saveItem,
        loading,
        error,
    };
}

export { useLocalStorage };