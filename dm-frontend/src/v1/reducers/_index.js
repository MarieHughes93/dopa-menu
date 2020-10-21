import {combineReducers} from 'redux'
import {appReducer  as app} from './appReducer'
import {authReducer as auth } from './authReducer'
import {menuItemReducer as menuItem} from './menuItemReducer'
import {usersReducer as user} from './usersReducer'

const reducers = combineReducers({
    app,
    auth,
    menuItem,
    user
})

export default reducers