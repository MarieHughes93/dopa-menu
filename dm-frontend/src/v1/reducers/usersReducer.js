

export const usersReducer = (state = {}, action) => {
    switch(action.type){
        case 'REQUESTING_REGISTRATION':
            // register signup
            return {
                loading: true
            }
        case 'REGISTERED':
            // register success
            return {}
        case 'REGISTING_FAILURE':
            // register fail
            return {
                registered: false
            }
        default: 
            return state
        }
}