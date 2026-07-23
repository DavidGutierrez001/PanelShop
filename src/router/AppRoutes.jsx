import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";
import NotFound from "@/pages/NotFound";

import PublicRoutes from "@/router/PublicRoutes";
import PrivateRoutes from "@/router/PrivateRoutes";

const router = createBrowserRouter([

    {
        element: <PublicRoutes />,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/", element: <Login /> },
        ]
    },

    {
        element: <PrivateRoutes />,
        children: [
            { path: "/dashboard", element: <Dashboard /> },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;