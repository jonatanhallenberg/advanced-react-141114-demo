import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary"

const Component1 = () => {

    const [ throwError, setThrowError ] = useState(false);

    if (throwError) {
        throw new Error("Något gick fel");
    }

    return <>
        <button onClick={() => setThrowError(true)}>Kasta fel</button>
    </>

}


export const ErrorBoundaryDemo = () => (
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        <Component1 />
    </ErrorBoundary>
)