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
                ...state,
                loading: false,
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
                ...state,
                loading: false,
                items:[
                    ...state.items, action.menuItem
                ]
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
            return {
                ...state,
                item: action.menuItem
            }
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
            const indx = state.items.findIndex((item)=> item.id === action.menuItem.id )
            return {
                ...state,
                items:[
                    ...state.items.slice(0, indx),
                    action.menuItem,
                    ...state.items.slice(indx + 1)
                ]
            }
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