import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./components/Login";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();