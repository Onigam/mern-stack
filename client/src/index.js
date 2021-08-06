import React from 'react';
import * as ReactDOM from 'react-dom';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import posts from './Post/store/PostReducer';
import user from './Auth/store/UserReducer';
import './index.css';
import App from './App';

// Middleware and store enhancers
const enhancers = [
    applyMiddleware(thunk),
];

const initialStore = createStore(combineReducers({ posts, user }), { }, compose(...enhancers));

ReactDOM.render(<App store={initialStore}/>, document.getElementById('root'));