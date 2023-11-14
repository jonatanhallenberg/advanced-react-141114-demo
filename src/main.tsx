import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UseStateDemo from './UseStateDemo';
import UseReducerDemo from './UseReducerDemo';
import { UseCounterDemo } from './UseCounterDemo';
import { UseFetchDemo } from './UseFetchDemo';


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
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
