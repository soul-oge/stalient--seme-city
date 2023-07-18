import {Navigate, Outlet } from 'react-router-dom';

function AuthenticatedRoute(auth) {
    return auth ? <Outlet /> : <Navigate to="/register"/>;
}

export default AuthenticatedRoute;