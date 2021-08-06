import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Routes from './Routes';
import { login } from '../Auth/store/UserActions';

const Main = () => {
    const dispatch = useDispatch();
    //if the token is present, let's auto login
    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token) {
            dispatch(login(null, true));
        }
    }, []);

    return (
        <BrowserRouter>
            <Navbar />
            <div className="w-100 pt-5 mt-5">
                <Routes />
            </div>
        </BrowserRouter>
    )
}

export default Main;