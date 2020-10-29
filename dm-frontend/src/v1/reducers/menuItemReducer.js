// actions
import {actions} from '../actions/_index'

export const menuItemReducer = (state = {}, action) => {
    switch(action.type){
        case actions.creator.menuItem.INDEX_REQUEST:
            return {}
        case actions.creator.menuItem.INDEX_SUCCESS:
            return {}
        case actions.creator.menuItem.INDEX_FAILED:
            return {}
        case actions.creator.menuItem.CREATE_REQUEST:
            return {}
        case actions.creator.menuItem.CREATE_SUCCESS:
            return {}
        case actions.creator.menuItem.CREATE_FAILED:
            return {}                    
        case actions.creator.menuItem.UPDATE_REQUEST:
            return {}
        case actions.creator.menuItem.UPDATE_SUCCESS:
            return {}
        case actions.creator.menuItem.UPDATE_FAILED:
            return {}
        case actions.creator.menuItem.DELETE_REQUEST:
            return {}
        case actions.creator.menuItem.DELTE_SUCCESS:
            return {}
        case actions.creator.menuItem.DELETE_FAILED:
            return {}
    default: 
            return state
    }
}