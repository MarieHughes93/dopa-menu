// helpers
import {helpers} from '../helpers/_index'
import history from '../helpers/history'
// creators
import {actionCreator} from './actionCreators'
// actions
import {alertAction} from './alertAction'

export const createRequest = () => ({type: actionCreator.user.CREATE_REQUEST})
export const createSuccess = () => ({type: actionCreator.user.CREATE_SUCCESS})
export const createFailure = () => ({type: actionCreator.user.CREATE_FAILED})
// signup
export const userCreate =(user)=>dispatch=>{
    dispatch(createRequest())
    helpers.fetch.apiRegister(user)
    .then(
        data => {
            dispatch(createSuccess())
            history.push('/login')
            dispatch(alertAction.notification('Please login'))},
        error => {
            dispatch(createFailure())
            dispatch(alertAction.error(error.heading, error.message))
    })
}


export const fetchRequest = () => ({type: actionCreator.user.FETCH_REQUEST})
export const fetchSuccess = (user) => ({type: actionCreator.user.FETCH_SUCCESS, user})
export const fetchFailure = () => ({type: actionCreator.user.FETCH_FAILED})

// Show
export const userFetch = () => dispatch => {
    const currentUser = localStorage.getItem('currentUser')
    const user = JSON.parse(currentUser)
    dispatch(fetchRequest())
    return helpers.fetch.apiUserShow(user)
    .then(
        data => { 
            dispatch(fetchSuccess(data.user))
            return data.user}
             ,
        error => {
            dispatch(fetchFailure(error))
    })
}

// export const updateRequest = () => ({type: actionCreator.user.UPDATE_REQUEST})
// export const updateSuccess = (user) => ({type: actionCreator.user.UPDATE_SUCCESS,user})
// export const updateFailure = () => ({type: actionCreator.user.UPDATE_FAILED})

// update
// export const userUpdate = (user) => dispatch => {
//     dispatch(updateRequest())
//     helpers.fetch.apiUserUpdate(user)
//     .then(
//         data => {
//             dispatch(updateSuccess())},
//         error => {
//             dispatch(updateFailure())
//     })
// }

// export const deleteRequest = () => ({type: actionCreator.user.DELETE_REQUEST})
// export const deleteSuccess = () => ({type: actionCreator.user.DELETE_SUCCESS})
// export const deleteFailure = () => ({type: actionCreator.user.DELETE_FAILED})

// Delete
// export const userDelete = (user) => dispatch => {
//     dispatch(deleteRequest())
//     helpers.fetch.apiUserDelete(user)
//     .then(
//         data => {
//             dispatch(deleteSuccess())},
//         error => {
//             dispatch(deleteFailure())
//     })
// }

export const userSessionEnd=()=>({type: actionCreator.user.SESSION_END})
        
export const userAction = {
    // create
    createRequest,
    createSuccess,
    createFailure,
    userCreate,

    // fetch/show
    fetchRequest,
    fetchSuccess,
    fetchFailure,
    userFetch,

    // update
    // updateRequest,
    // updateSuccess,
    // updateFailure,
    // userUpdate,

    // delete
    // deleteRequest,
    // deleteSuccess,
    // deleteFailure,
    // userDelete

    // end Session
    userSessionEnd
}
