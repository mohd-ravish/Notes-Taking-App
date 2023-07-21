import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./components/Login";
import './index.css';

import {
    createBrowserRouter,
    RouterProvider,
    // Route,
    // Link,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/login",
        element: <Login />
    },
]);

ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById("root")
);