import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const Client1 = lazy(() => import('./playground/client1'));
const Client2 = lazy(() => import('./playground/client2'));
const Client3 = lazy(() => import('./playground/client3'));

const router = createBrowserRouter([
  {
    path: "/client/1",
    element: <Client1 />,
  },
  {
    path: "/client/2",
    element: <Client2 />,
  },
  {
    path: "/client/3",
    element: <Client3 />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ChakraProvider>
      <Suspense fallback={<h1>Loading</h1>}>
        <RouterProvider router={router} />
      </Suspense>
    </ChakraProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
