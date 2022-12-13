import React from 'react'
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function ProtectedRoute() {
    const {isAuth} = useSelector((state) => state.userList);

   
 return isAuth ? <Outlet /> : <Navigate to="/logIn" replace={true} />;
  
}

export default ProtectedRoute