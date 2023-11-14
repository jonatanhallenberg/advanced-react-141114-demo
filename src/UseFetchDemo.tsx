import { useFetch } from "./hooks/useFetch";

export const UseFetchDemo = () => {

    const { data, isLoading, error } = useFetch('https://catfact.ninja/facts');

    return (
        <ul>
            { isLoading ? <div>Laddar...</div> : error ? <>Något gick galet!</> : data.map(catFact => <li>{catFact.fact}</li>)}
        </ul>
    )
}