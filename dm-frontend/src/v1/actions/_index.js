import {actCreate as create} from './_actionCreators'
import {appAct as app } from './_appActions'
import {menuAct as menu} from './_menuActions'
import {userAct as user} from './_userActions'

export {create}
export const action ={
    app,
    menu,
    user
}