import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import './assets/css/index.css';

import {HomePage} from "./Pages/HomePage.tsx";
import {HistoryPage} from "./Pages/HistoryPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/history",
        element: <HistoryPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div>

            <RouterProvider router={router} />

        </div>
    </React.StrictMode>,
)
