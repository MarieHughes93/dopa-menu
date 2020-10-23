import {actionCreator} from './actionCreators'
import {helpers} from '../helpers/_index'

const registerRequest = (payload) => ({type: actionCreator.user.REGISTER_REQUEST, payload})
const registerSuccess = (payload) => ({type: actionCreator.user.REGISTER_SUCCESS, payload})
const registerFailure = (payload) => ({type: actionCreator.user.REGISTER_FAILURE, payload})

const signUp = (user) => dispatch => {
        dispatch(registerRequest(user))
        helpers.fetch.register(user)
            .then(
                user => { 
                    dispatch(registerSuccess())
                    //  push to login
                },
                error => {
                    dispatch(registerFailure(error.toString()))
                }
            )
}

export const userAction = {
    signUp
}

