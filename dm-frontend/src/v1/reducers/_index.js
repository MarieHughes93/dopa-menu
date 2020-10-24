import {combineReducers} from 'redux'
import {appReducer as app} from './appReducer'
import {menuItemReducer as menuItem} from './menuItemReducer'
import {usersReducer as user} from './usersReducer'

const reducers = combineReducers({
    app,
    menuItem,
    user
})

export default reducers