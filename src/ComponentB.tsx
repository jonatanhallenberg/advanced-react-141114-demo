import { useContext } from 'react';
import { AppContext } from "./context/AppContext";

export const ComponentB = () => {

    const { setText } = useContext(AppContext);


    return <>
        <h1>Component B</h1>
        <input type="text" onChange={(event) => setText(event.target.value)} />
    </>
}