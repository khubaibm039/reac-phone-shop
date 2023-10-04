import ReactDOM from "react-dom/client";
import React from "react"
import "./index.css";
import { RouterProvider } from "react-router-dom";
import myRouter from "./Router/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={myRouter}></RouterProvider>
    </React.StrictMode>
);
