import { useEffect, useState } from "react";

const SuspenseOther = () => {

    const loadData = new Promise<{ fact: string }>((resolve, reject) => {
        setTimeout(() => {
            resolve({
                fact: "Hej hej"
            })
        }, 2000)
    })

    const [data, setData] = useState<{ fact: string }>();

    useEffect(() => {

        const fetchData = async () => {
            const data = await loadData;
            setData(data);
        }
        fetchData();
    })

    return <>{data && data.fact}</>

}

export default SuspenseOther;