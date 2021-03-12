// creator
import {actionCreator} from './actionCreators'

const notification=(heading, message)=>({type: actionCreator.alert.GOOD, heading, message})
const error=(heading, message)=>({type: actionCreator.alert.BAD, heading, message})
const clear=()=>({type: actionCreator.alert.CLEAR})
export const alertAction={
    notification,
    error,
    clear
}