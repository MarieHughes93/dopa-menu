// actions
import {actions} from '../actions/_index'

export const menuItemsReducer = (state = {}, action) => {
    switch(action.type){

        // index
        case actions.creator.menuItems.INDEX_REQUEST:
            return {
                ...state,
                loading: true}
        case actions.creator.menuItems.INDEX_SUCCESS:
            return {
                items: action.menuItems
            }
        case actions.creator.menuItems.INDEX_FAILED:
            return {
                ...state,
                loading: false}
        
        // create
        case actions.creator.menuItems.CREATE_REQUEST:
            return {
                ...state,
                loading: true}
        case actions.creator.menuItems.CREATE_SUCCESS:
            return { 
            }
        case actions.creator.menuItems.CREATE_FAILED:
            return {
                ...state,
                loading: false}

        // fetch/show
        case actions.creator.menuItems.FETCH_REQUEST:
            return {
                ...state,
                loading: true}
        case actions.creator.menuItems.FETCH_SUCCESS:
            return {}
        case actions.creator.menuItems.FETCH_FAILED:
            return {
                ...state,
                loading: false}

        // update
        case actions.creator.menuItems.UPDATE_REQUEST:
            return {
                ...state,
                loading: true}
        case actions.creator.menuItems.UPDATE_SUCCESS:
            return {}
        case actions.creator.menuItems.UPDATE_FAILED:
            return {
                ...state,
                loading: false}

        // delete
        case actions.creator.menuItems.DELETE_REQUEST:
            return {
                ...state,
                loading: true}
        case actions.creator.menuItems.DELETE_SUCCESS:
            return {}
        case actions.creator.menuItems.DELETE_FAILED:
            return {
                ...state,
                loading: false}

        // end session
        case actions.creator.menuItems.SESSION_END:
            return {}

    default: 
            return state
    }
}