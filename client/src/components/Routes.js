import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PostListPage from '../Post/pages/PostListPage/PostListPage';
import PostDetailPage from '../Post/pages/PostDetailPage/PostDetailPage';
import SignUpPage from '../Auth/pages/SignUpPage/SignUpPage';
import LoginPage from '../Auth/pages/LoginPage/LoginPage';

const Routes = () => {
    const isAuth = useSelector(state => state.user.isLoggedIn);

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PostListPage} />
                <Route path="/posts/:cuid/:slug" exact component={PostDetailPage} />
                {
                    isAuth ? null
                    : (
                        <>
                            <Route path="/login" exact component={LoginPage} />
                            <Route path="/signup" exact component={SignUpPage} />
                        </>
                    )
                }
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;