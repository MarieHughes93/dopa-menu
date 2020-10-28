import {actionCreator} from './actionCreators'
import {helpers} from '../helpers/_index'
import history from '../helpers/history'
import {alertAction} from './alertAction'


const signUpRequest = () => 
({type: actionCreator.user.SIGNUP_REQUEST})
const signUpSuccess = () => 
({type: actionCreator.user.SIGNUP_SUCCESS})
const signUpFailure = () => 
({type: actionCreator.user.SIGNUP_FAILURE})

const register = (user) => dispatch => {
    dispatch(signUpRequest())
        helpers.fetch.apiRegister(user)
            .then(
                data => { 
                    dispatch(signUpSuccess())
                    history.push('/login')
                    dispatch(alertAction.notification('Please login'))
                },
                error => {
                    dispatch(signUpFailure())
                    dispatch(alertAction.error(error))
                }
            )
}

        
export const userAction = {
    register
}
