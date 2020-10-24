import {actionCreator} from './actionCreators'
import {helpers} from '../helpers/_index'

const registerRequest = (payload) => ({type: actionCreator.user.REGISTER_REQUEST, payload})
const registerSuccess = (payload) => ({type: actionCreator.user.REGISTER_SUCCESS, payload})
const registerFailure = (payload) => ({type: actionCreator.user.REGISTER_FAILURE, payload})
const loginRequest = (payload) => ({type: actionCreator.auth.SESSION_REQUEST, payload})
const loginSuccess = (payload) => ({type: actionCreator.auth.SESSION_LOGGED, payload})
const loginFailure =( payload) => ({type: actionCreator.auth.SESSION_FAILURE, payload})

const register = (user) => dispatch => {
        dispatch(registerRequest(user))
        helpers.fetch.apiRegister(user)
            .then(
                user => { 
                    dispatch(registerSuccess())
                },
                error => {
                    dispatch(registerFailure(error.toString()))
                }
            )
}
export const userAction = {
    register,
    logIn
}
