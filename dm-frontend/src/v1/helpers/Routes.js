  import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';
const Public = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};

const Private = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
    )
}

const route ={
    Public,
    Private
}