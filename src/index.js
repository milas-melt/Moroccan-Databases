import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./input.css";
// import Home from "./routes/home";
// import ErrorPage from "./error-page";
import App from "./App";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />,
//         errorElement: <ErrorPage />,
//     },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
