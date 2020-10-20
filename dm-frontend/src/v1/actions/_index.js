import creator from './actionCreators'
import {appAct as app } from './appAction'
import {menuAct as menu} from './menuAction'
import {userAct as user} from './userAction'

export const action ={
    creator,
    app,
    menu,
    user
}