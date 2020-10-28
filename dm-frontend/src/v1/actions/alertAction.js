import {actionCreator} from './actionCreators'

const notification = (message) => 
    ({type: actionCreator.alert.ALERT_SUCCESS, message})

const error = (message) => 
({type: actionCreator.alert.ALERT_ERROR, message})
const clear = ()=> 
({type: actionCreator.alert.ALERT_CLEAR})

export const alertAction = {
    notification,
    error,
    clear
};