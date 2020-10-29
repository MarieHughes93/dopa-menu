// actions
import {actions} from '../actions/_index'

export const usersReducer = (state = {}, action) => {
    switch(action.type){
        case  actions.creator.user.SIGNUP_REQUEST:
            // register signup
            return {
                loading: true}
        case actions.creator.user.SIGNUP_SUCCESS:
            // register success
            return {}
        case actions.creator.user.SIGNUP_FAILED:
            // register fail
            return {
                registered: false}
        case actions.creator.user.UPDATE_REQUEST:
            return {}
        case actions.creator.user.UPDATE_SUCCESS:
            return {}
        case actions.creator.user.UPDATE_FAILED:
            return {}
        case actions.creator.user.DELETE_REQUEST:
            return {}
        case actions.creator.user.DELTE_SUCCESS:
            return {}
        case actions.creator.user.DELETE_FAILED:
            return {}
    default: 
        return state
    }
}