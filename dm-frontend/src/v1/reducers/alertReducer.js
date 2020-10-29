// actions
import {actions} from '../actions/_index'

export const alertReducer = (state = {}, action) => {
  switch (action.type){
    case actions.creator.alert.GOOD:
      return {
        type: 'alert-success',
        heading: action.heading,
        message: action.message}
    case actions.creator.alert.BAD:
      return {
        type: 'alert-danger',
        heading: action.heading,
        message: action.message}
    case actions.creator.alert.CLEAR:
      return {}
  default:
    return state
  }
}