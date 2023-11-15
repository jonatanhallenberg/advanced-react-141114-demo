import { createContext } from 'react';

export const AppContext = createContext({
    text: "mitt context",
    setText: (newText: string) => { console.log('not implemented') }
});