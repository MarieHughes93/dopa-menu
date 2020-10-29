// helpers
import {helpers} from '../helpers/_index'
import history from '../helpers/history'
// creators
import {actionCreator} from './actionCreators'
// actions
import {alertAction} from './alertAction'


export const signUpRequest = () => 
({type: actionCreator.user.SIGNUP_REQUEST})
export const signUpSuccess = () => 
({type: actionCreator.user.SIGNUP_SUCCESS})
export const signUpFailure = () => 
({type: actionCreator.user.SIGNUP_FAILED})

export const register =(user)=>dispatch=>{
    dispatch(signUpRequest())
    helpers.fetch.apiRegister(user)
    .then(
        data => {
            dispatch(signUpSuccess())
            history.push('/login')
            dispatch(alertAction.notification('Please login'))},
        error => {
            dispatch(signUpFailure())
            dispatch(alertAction.error(error))
    })
}
        
export const userAction = {
    register
}
