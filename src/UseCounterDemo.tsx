import { useCounter } from './hooks/useCounter';

export const UseCounterDemo = () => {

    const { count, increment, decrement } = useCounter(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );

}