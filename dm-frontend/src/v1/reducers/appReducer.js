import {actions} from '../actions/_index'
let sessionID = localStorage.getItem("sessionID")

const defaultState = sessionID ? 
{ loggedIn: true, 
    user: {sessionID}
 }:{
    loggedIn: false,
    user: {},
}


export const appReducer = (state = defaultState, action) => {
    switch(action.type){
                case actions.app.SESSION_REQUEST:
                    return {
                        loggingIn: true,
                        user: action.sessionID
                    }
                case actions.app.SESSION_FAILURE:
                    return {}
                case actions.app.SESSION_SUCCESS:
                    return {
                        loggedIn: true,
                        user: {...action.sessionID}
                    }
                case actions.app.SESSION_END_REQUEST:
                    return{}
                case actions.app.SESSION_END_SUCCESS:
                    return {
                        loggedIn: false 
                    }
                case actions.app.SESSION_END_FAILURE:
                    return{}
                default: return state
            }
        }