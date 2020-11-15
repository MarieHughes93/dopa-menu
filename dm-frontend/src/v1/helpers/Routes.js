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
const PrivUrls= (userId)=>([
    {path: `/dopa-menu/${userId}/about`, text: 'About', isActive: ''},
    {path: `/dopa-menu/${userId}`, text: 'Dashboard', isActive: ''},
    {path: `/dopa-menu/${userId}/profile`, text: 'Profile', isActive: ''},
    {path: `/dopa-menu/${userId}/menuItems/create`, text:'Add Item', isActive: ''}
])

export const Navi ={
    PubRoute,
    PubUrls,
    PrivRoute,
    PrivUrls
}