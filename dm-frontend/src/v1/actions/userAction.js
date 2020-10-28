import {actionCreator} from './actionCreators'
import {helpers} from '../helpers/_index'
import history from '../helpers/history'


// user
const registerRequest = () => 
({type: actionCreator.user.REGISTER_REQUEST})
const registerSuccess = () => 
({type: actionCreator.user.REGISTER_SUCCESS})
const registerFailure = () => 
({type: actionCreator.user.REGISTER_FAILURE})

const register = (user) => dispatch => {
    dispatch(registerRequest())
        helpers.fetch.apiRegister(user)
            .then(
                data => { 
                    dispatch(registerSuccess())
                    history.push('/login')
                },
                error => {
                    dispatch(registerFailure())
                }
            )
}

        
export const userAction = {
    register
}
