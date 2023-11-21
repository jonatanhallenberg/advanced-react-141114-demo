import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import UseStateDemo from './UseStateDemo';
import UseReducerDemo from './UseReducerDemo';
import { UseCounterDemo } from './UseCounterDemo';
import { UseFetchDemo } from './UseFetchDemo';
import { UseEffectDemo } from './UseEffectDemo';
import { CategoryPicker } from './CategoryPicker';
import { ComponentA } from './ComponentA';
import { ComponentB } from './ComponentB';
import { AppContextProvider } from "./context/AppContextProvider";
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDemo } from "./ReactQueryDemo";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import store from './store'
import { Provider } from 'react-redux'
import { RTKQueryDemo } from "./RTKQueryDemo";
import { ProductList } from "./ProductList";
import { Accordion } from "./Accordion";


const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
    {
        path: "/usestate",
        element: <UseStateDemo />,
    },
    {
        path: "/usereducer",
        element: <UseReducerDemo />,
    },
    {
        path: "/usecounter",
        element: <UseCounterDemo />,
    },
    {
        path: "/usefetchdemo",
        element: <UseFetchDemo />
    },
    {
        path: "/useeffectdemo",
        element: <UseEffectDemo />
    },
    {
        path: "/categorypicker",
        element: <CategoryPicker />
    },
    {
        path: "/reactquerydemo",
        element: <ReactQueryDemo />
    },
    {
        path: "/rtkquerydemo",
        element: <RTKQueryDemo />
    },
    {
        path: "/products",
        element: <ProductList />
    },
    {
        path: "/accordion",
        element: <Accordion />
    }
]);

const queryClient = new QueryClient();

export const App = () => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient} contextSharing={true}>
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
                <AppContextProvider>
                    {/* <ComponentA />
                <ComponentB /> */}
                    <RouterProvider router={router} />
                </AppContextProvider>
            </QueryClientProvider>
        </Provider>
    )
}