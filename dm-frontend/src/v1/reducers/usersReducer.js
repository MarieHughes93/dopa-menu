import {actions} from '../actions/_index'


export const usersReducer = (state = {}, action) => {
    switch(action.type){
        case actions.creator.user.REGISTER_REQUEST:
            // register signup
            return {
                registerRequest: true
            }
        case actions.creator.user.REGISTER_SUCCESS:
            // register success
            return {
                registerRequest: "complete"
            }
        case actions.creator.user.REGISTER_FAILURE:
            // register fail
            return {
                registerRequest: false,
                error: action.error
            }
        default: 
            return state
        }
}