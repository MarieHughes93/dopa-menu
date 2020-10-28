import React from 'react'
import { Route, Redirect} from 'react-router-dom';
import { activeSession } from '../actions/appAction'

const PubRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            activeSession() && restricted ?
                <Redirect to="/dashboard" />
            : <Component {...props} />
        )} />
    );
};

const PrivRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            activeSession() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    )
}

const PubUrls =[
    {path: "/", text: "Home",isActive: "",},
    {path: "/signup", text: "Join",isActive: ""},

]
const PrivUrls =[
    {path: "/", text: "About", isActive: ""},
    {path: "/dashboard", text: "Dashboard", isActive: ""},
    {path: "/profile", text: "Profile", isActive: ""},
]

export const Navi ={
    PubRoute,
    PubUrls,
    PrivRoute,
    PrivUrls
}