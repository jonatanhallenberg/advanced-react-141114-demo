import { useGetItemsQuery } from "./slices/itemSlice"

export const RTKQueryDemo = () => {

    const { data, error, isLoading } = useGetItemsQuery(null);

    return <>
        <h1>RTK Query</h1>
        { isLoading && <p>Laddar...</p>}
        { error && <p style={{color: 'red'}}>Något gick fel!</p> }
        { data && data.map(item => <p key={item.id}>{item.title}</p>)}
    </>
}