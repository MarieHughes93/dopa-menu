let sessionToken = localStorage.getItem("sessionID")

const defaultState = sessionToken ? 
{ loggedIn: true, 
    user: {sessionToken}
    // page: '/'} 
 }:{
    loggedIn: false,
    user: {},
    // page: ''
}


export const appReducer = (state = defaultState, action) => {
    switch(action.type){
                // case 'PAGE_SET':
                //         return {
                //             page: action.url
                //     }
                // case 'PAGE_CLEAR':
                //         return{
                //             page: null
                //         }
                // case 'PAGE_REGUEST':
                //         return{}
                // case 'PAGE_FAILURE':
                //     return{}
                case 'SESSION_REQUEST':
                    return {
                        loggingIn: true,
                        user: action.sessionToken
                    }
                case 'SESSION_FAILURE':
                    return {}
                case 'SESSION_LOGGED':
                    return {
                        loggedIn: true,
                        user: {...action.sessionToken}
                    }
                case 'SESSION_LOGOUT':
                    localStorage.clear()
                    return {}
                default: return state
            }
        }