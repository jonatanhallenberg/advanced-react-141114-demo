import { Suspense, lazy } from "react";


const OtherComponent = lazy(() => import("./SuspenseOther"));

export const SuspenseDemo = () => {

    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
            </Suspense>
        </div>
    )



}