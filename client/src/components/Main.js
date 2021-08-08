import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from './Routes';
import { getUser, logout } from '../Auth/store/UserActions';

const Main = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector(state => state.user.isLoggedIn);
    const userEmail = useSelector(state => state.user.user.email);

    const handleLogout = () => {
        dispatch(logout());
    }

    //if the token is present, let's auto login
    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token) {
            dispatch(getUser());
        }
    }, []);

    return (
        <BrowserRouter>
            <Navbar userEmail={userEmail} isAuth={isAuth} handleLogout={handleLogout} />
            <div className="w-100 pt-5 mt-5">
                <Routes isAuth={isAuth} />
            </div>
        </BrowserRouter>
    )
}

export default Main;