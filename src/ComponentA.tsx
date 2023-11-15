import { useContext } from 'react';
import { AppContext } from "./context/AppContext";

export const ComponentA = () => {

    const { text } = useContext(AppContext);

    return <>
        <h1>Component A</h1>
        <p>Text: {text}</p>
        </>
}