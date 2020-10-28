import {actions} from '../actions/_index'


export const usersReducer = (state = {}, action) => {
    switch(action.type){
        case actions.creator.user.REGISTER_REQUEST:
            // register signup
            return {
                loading: true
            }
        case actions.creator.user.REGISTER_SUCCESS:
            // register success
            return {
                registered: true
            }
        case actions.creator.user.REGISTER_FAILURE:
            // register fail
            return {
                registered: false
            }
        default: 
            return state
        }
}