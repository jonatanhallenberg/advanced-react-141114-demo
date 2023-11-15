import { AppContext } from './AppContext';
import { useState } from 'react';

type AppContextProviderProps = {
    children: React.ReactNode
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const [text, setText] = useState("");

    return (
        <AppContext.Provider value={{ text, setText }}>
            {children}
        </AppContext.Provider>
    )
}