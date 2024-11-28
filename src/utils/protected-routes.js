import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({children}) => {
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);

    useEffect(() => { console.log('token', token) }, [token]);
    
    if(!token) navigate('/login', { replace: true });
    
    return children;
}

export default ProtectedRoutes; 