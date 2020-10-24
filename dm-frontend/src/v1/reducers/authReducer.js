// import {actions} from '../actions/_index'


export const authReducer = (state ={}, action) => {
    switch(action.type){
        case 'SESSION_REQUEST':
            return {
                
            }
        case 'SESSION_FAILURE':
            return {
            }
        case 'SESSION_LOGGED':
            return {
                loggedIn: true,
                user: {...action.user}
            }
        case 'SESSION_LOGOUT':
            localStorage.clear()
            return {
                loggedIn: false,
                user: {}
            }
        default: return state
    }
}
