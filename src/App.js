import * as React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Home from "./routes/home";
import ApiCallback from "./routes/api-callback";
import GetNotified from "./routes/data-access";
import ErrorPage from "./routes/error-page";
import DataDisplay from "./routes/data-display";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/data-access" element={<GetNotified />} />
                <Route path="/data-display" element={<DataDisplay />} />
                <Route path="/api-callback" element={<ApiCallback />} />
                <Route path="/page-not-found" element={<ErrorPage />} />
                <Route
                    path="*"
                    element={<Navigate replace to="/page-not-found" />}
                />
            </Route>
        </Routes>
    );
}
function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </div>
    );
}
