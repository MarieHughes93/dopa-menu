import {combineReducers} from 'redux'
import appReducer from './appReducer'
import authReducer from './authReducer'
import menuReducer from './menuReducer'
import usersReducer from './usersReducer'

const reducers = combineReducers({
    appReducer,
    authReducer,
    menuReducer,
    usersReducer
})

export default reducers