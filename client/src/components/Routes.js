import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import PostListPage from '../Post/pages/PostListPage/PostListPage';
import PostDetailPage from '../Post/pages/PostDetailPage/PostDetailPage';
import SignUpPage from '../Auth/pages/SignUpPage/SignUpPage';
import LoginPage from '../Auth/pages/LoginPage/LoginPage';

const Routes = ({isAuth}) => {
    return (
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
    )
}

Routes.propTypes = {
    isAuth: PropTypes.bool.isRequired
};

export default Routes;