// creator
import {actionCreator} from './actionCreators'

const notification = (message) =>
({type: actionCreator.alert.GOOD, message})
const error = (message) => 
({type: actionCreator.alert.BAD, message})
const clear = ()=> 
({type: actionCreator.alert.CLEAR})

export const alertAction = {
    notification,
    error,
    clear
}