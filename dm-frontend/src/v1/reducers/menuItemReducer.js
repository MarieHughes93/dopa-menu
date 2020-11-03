// actions
import {actions} from '../actions/_index'

export const menuItemReducer = (state = {}, action) => {
    switch(action.type){

        // index
        case actions.creator.menuItem.INDEX_REQUEST:
            return {
                ...state,
                loading: true}
        case actions.creator.menuItem.INDEX_SUCCESS:
            return {
            }
        case actions.creator.menuItem.INDEX_FAILED:
            return {
                ...state,
                loading: false}
        
        // create
        case actions.creator.menuItem.CREATE_REQUEST:
            return {
                ...state,
                loading: true}
        case actions.creator.menuItem.CREATE_SUCCESS:
            return {}
        case actions.creator.menuItem.CREATE_FAILED:
            return {
                ...state,
                loading: false}

        // fetch/show
        case actions.creator.menuItem.FETCH_REQUEST:
            return {
                ...state,
                loading: true}
        case actions.creator.menuItem.FETCH_SUCCESS:
            return {}
        case actions.creator.menuItem.FETCH_FAILED:
            return {
                ...state,
                loading: false}

        // update
        case actions.creator.menuItem.UPDATE_REQUEST:
            return {
                ...state,
                loading: true}
        case actions.creator.menuItem.UPDATE_SUCCESS:
            return {}
        case actions.creator.menuItem.UPDATE_FAILED:
            return {
                ...state,
                loading: false}

        // delete
        case actions.creator.menuItem.DELETE_REQUEST:
            return {
                ...state,
                loading: true}
        case actions.creator.menuItem.DELETE_SUCCESS:
            return {}
        case actions.creator.menuItem.DELETE_FAILED:
            return {
                ...state,
                loading: false}

        // end session
        case actions.creator.menuItem.SESSION_END:
            return {}

    default: 
            return state
    }
}