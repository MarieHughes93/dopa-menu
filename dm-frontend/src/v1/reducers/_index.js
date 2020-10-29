// package
import {combineReducers} from 'redux'
// reducers
import {appReducer as app} from './appReducer'
import {alertReducer as alert} from './alertReducer'
import {menuItemReducer as menuItem} from './menuItemReducer'
import {usersReducer as user} from './usersReducer'

const reducers = combineReducers({
    app,
    alert,
    menuItem,
    user
})

export default reducers