// actions
import {actions} from '../actions/_index'

export const alertReducer = (state = {}, action) => {
  switch (action.type){
    // good notification
    case actions.creator.alert.GOOD:
      return {
        type: 'alert-success',
        heading: action.heading,
        message: action.message}

    // bad notification
    case actions.creator.alert.BAD:
      return {
        type: 'alert-danger',
        heading: action.heading,
        message: action.message}

    // clear notificaitons
    case actions.creator.alert.CLEAR:
      return {}
      
  default:
    return state
  }
}