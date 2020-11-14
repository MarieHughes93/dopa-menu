// package
import React from 'react'
import { Route, Redirect} from 'react-router-dom'
// actions
import { activeSession } from '../actions/appAction'

export const PubRoute = ({component: Component, restricted, ...rest}) => {
    return (
    <Route {...rest} render={props => (
        activeSession() && restricted ?
        <Redirect to="/dopa-menu/:id"/>
        : <Component {...props}/>
    )}/>)
}

export const PrivRoute = ({component: Component, ...rest}) => {
    return(
    <Route {...rest} render={props => (
        activeSession() ?
        <Component {...props} />
        : <Redirect to="/dopa-menu/login" />
    )}/>)
}

const PubUrls =[
    {path: '/dopa-menu', text: 'Home',isActive: '',},
    {path: '/dopa-menu/signup', text: 'Join',isActive: ''},

]
const PrivUrls =[
    {path: '/dopa-menu/:id/about', text: 'About', isActive: ''},
    {path: '/dopa-menu/:id', text: 'Dashboard', isActive: ''},
    {path: '/dopa-menu/:id/profile', text: 'Profile', isActive: ''},
    {path: '/dopa-menu/:id/menuItems/create', text:'Add Item', isActive: ''}
]

export const Navi ={
    PubRoute,
    PubUrls,
    PrivRoute,
    PrivUrls
}