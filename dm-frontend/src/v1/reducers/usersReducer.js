// actions
import {actions} from '../actions/_index'

export const usersReducer = (state = {}, action) => {
    switch(action.type){
        // register
        case  actions.creator.user.CREATE_REQUEST:
            return {
                ...state,
                loading: true}
        case actions.creator.user.CREATE_SUCCESS:
            return {}
        case actions.creator.user.CREATE_FAILED:
            return {
                ...state,
                loading: false,
                registered: false}
        
        //fetch/show
        case actions.creator.user.FETCH_REQUEST:
            return {
                ...state,
                loading: true}
        case actions.creator.user.FETCH_SUCCESS:
            return {
                ...state,
                 currentUser: action.user }
        case actions.creator.user.FETCH_FAILED:
            return {
                ...state,
                loading: false}

        // update
        case actions.creator.user.UPDATE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.creator.user.UPDATE_SUCCESS:
            return {
                currentUser: action.user}
        case actions.creator.user.UPDATE_FAILED:
            return {
                ...state,
                loading: false}

        // delete
        case actions.creator.user.DELETE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actions.creator.user.DELETE_SUCCESS:
            return {}
        case actions.creator.user.DELETE_FAILED:
            return {
                ...state,
                loading: false}

        // end session
        case actions.creator.user.SESSION_END:
            return {}

    default: 
        return state
    }
}