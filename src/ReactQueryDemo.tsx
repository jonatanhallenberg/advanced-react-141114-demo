import { useQuery, useMutation, useQueryClient } from 'react-query';
import { getItems } from './api/getItems';
import { postItem } from './api/postItem';
export const ReactQueryDemo = () => {

    const queryClient = useQueryClient();

    const { isLoading, error, data: items } = useQuery('items', getItems)
    const { mutate, isLoading: isPosting, error: mutationError } = useMutation({
        mutationFn: postItem,
        onMutate: async (newItem) => {
            const previousData = queryClient.getQueryData('items');
            console.log(previousData, newItem);
            queryClient.setQueryData('items', (old) => [...old, newItem]);
            return { previousData };
        },
        onSettled: (data, error, variables, context) => {
            console.log('onSettled');
            //queryClient.invalidateQueries({ queryKey: ['items']})
            if (context && context.previousData && !error) {
                queryClient.setQueryData('items', () => [...context.previousData, data]);
            }
        },
        onError: (err, data, context) => {
            queryClient.setQueryData('items', () => context?.previousData);
        }
    })

    return <>
        <h1>ReactQueryDemo</h1>
        {isLoading && <p>Laddar...</p>}
        {error && <p style={{ color: 'red' }}>Data kunde inte hämtas!</p>}
        {items && items.map(item => <p key={item.id}>{item.title} ({item.id || "No id"})</p>)}


        <button disabled={isPosting} onClick={() => mutate({ title: "Hårtork" })}>Lägg till item!</button>
        {isPosting && "Postar ny item"}
        {mutationError && <p style={{ color: 'red' }}>Data kunde inte postas!</p>}
    </>
}