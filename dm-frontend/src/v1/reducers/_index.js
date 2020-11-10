// package
import {combineReducers} from 'redux'
// reducers
import {appReducer as app} from './appReducer'
import {alertReducer as alert} from './alertReducer'
import {menuItemsReducer as menuItems} from './menuItemsReducer'
import {usersReducer as user} from './usersReducer'

const reducers = combineReducers({
    app,
    alert,
    menuItems,
    user
})

export default reducers