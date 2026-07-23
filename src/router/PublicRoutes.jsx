import { Navigate, Outlet } from "react-router-dom";

function PublicRoutes() {
    const isAuth = !!localStorage.getItem("sesion");

    return isAuth ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

export default PublicRoutes;