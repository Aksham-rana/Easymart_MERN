import React from 'react'
import { getCurrentSession } from '../utils/localStorage';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {

    const isLoggedIn =  getCurrentSession('user')

    if(!isLoggedIn){
        return <Navigate to={'/'}/>
    }
    return children;
}

export default ProtectedRoute
