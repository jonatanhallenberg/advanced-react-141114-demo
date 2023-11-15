import { useEffect, useState } from "react";

export const useFetch = (url: string) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                console.log('res', res);
                if (!res.ok) {
                    throw new Error(`HTTP Error: ${res.status}`);
                }
                const data = await res.json();
                setData(data.data);
            } catch (error) {
                console.log('catch error', error);
                setData([]);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        setIsLoading(true);
        fetchData();

    }, [ url ])

    return { data, isLoading, error };
}