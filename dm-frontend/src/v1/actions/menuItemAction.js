// helpers
import {helpers} from '../helpers/_index'
import history from '../helpers/history'
// creators
import {actionCreator} from './actionCreators'
// actions
import {alertAction} from './alertAction'

export const indexRequest = () => ({type: actionCreator.menuItem.INDEX_REQUEST})
export const indexSuccess = () => ({type: actionCreator.menuItem.INDEX_SUCCESS})
export const indexFailure = () => ({type: actionCreator.menuItem.INDEX_FAILED})

// index
export const allMenuItemsFetch = (menuItem) => dispatch => {
    dispatch(indexRequest())
    helpers.fetch.apiMenuItemIndex(menuItem)
    .then(
        data => {
            dispatch(indexSuccess())
            dispatch(alertAction.notification(data.heading,data.message))},
        error => {
            dispatch(indexFailure())
            dispatch(alertAction.error(error.heading, error.message))
    })
}

// export const createRequest = () => ({type: actionCreator.menuItem.CREATE_REQUEST})
// export const createSuccess = () => ({type: actionCreator.menuItem.CREATE_SUCCESS})
// export const createFailure = () => ({type: actionCreator.menuItem.CREATE_FAILED})

// create
// export const menuItemCreate =(menuItem)=>dispatch=>{
//     dispatch(createRequest())
//     helpers.fetch.apiMenuItemCreate(menuItem)
//     .then(
//         data => {
//             dispatch(createSuccess())
//             dispatch(alertAction.notification(data.heading,data.message))},
//         error => {
//             dispatch(createFailure())
//             dispatch(alertAction.error(error.heading, error.message))
//     })
// }


// export const fetchRequest = () => ({type: actionCreator.menuItem.FETCH_REQUEST})
// export const fetchSuccess = (menuItem) => ({type: actionCreator.menuItem.FETCH_SUCCESS, menuItem})
// export const fetchFailure = () => ({type: actionCreator.menuItem.FETCH_FAILED})

// Show
// export const menuItemFetch = () => dispatch => {
//     const currentUser = localStorage.getItem('currentUser')
//     const user = JSON.parse(currentUser)
//     dispatch(fetchRequest())
//     return helpers.fetch.apiMenuItemShow(user)
//     .then(
//         data => { 
//             dispatch(fetchSuccess(data.menuItem))
//             return data.menuItem}
//              ,
//         error => {
//             dispatch(fetchFailure(error))
//             dispatch(alertAction.error(error.heading, error.message))
//     })
// }

// export const updateRequest = () => ({type: actionCreator.menuItem.UPDATE_REQUEST})
// export const updateSuccess = (menuItem) => ({type: actionCreator.menuItem.UPDATE_SUCCESS,menuItem})
// export const updateFailure = () => ({type: actionCreator.menuItem.UPDATE_FAILED})

// update
// export const menuItemUpdate = (menuItem) => dispatch => {
//     dispatch(updateRequest())
//     return helpers.fetch.apiMenuItemUpdate(menuItem)
//     .then(
//         data => {
//             dispatch(updateSuccess(data.menuItem))
//             dispatch(alertAction.notification(data.heading, data.message))
//             return data.menuItem},
//         error => {
//             dispatch(updateFailure())
//             dispatch(alertAction.error(error.heading, error.message))
//     })
// }

// export const deleteRequest = () => ({type: actionCreator.menuItem.DELETE_REQUEST})
// export const deleteSuccess = () => ({type: actionCreator.menuItem.DELETE_SUCCESS})
// export const deleteFailure = () => ({type: actionCreator.menuItem.DELETE_FAILED})

// Delete
// export const menuItemDelete = (menuItem) => dispatch => {
//     dispatch(deleteRequest())
//     helpers.fetch.apiMenuItemDelete(menuItem)
//     .then(
//         data => {
//             dispatch(deleteSuccess())
//             history.push('/signup')
//             dispatch(alertAction.notification(data.heading, data.message))},
//         error => {
//             dispatch(deleteFailure())
//             dispatch(alertAction.error(error.heading, error.message))
//     })
// }

export const menuItemSessionEnd=()=>({type: actionCreator.menuItem.SESSION_END})
        
export const menuItemAction = {
    // index
    indexRequest,
    indexSuccess,
    indexFailure,
    allMenuItemsFetch, 

    // create
    // createRequest,
    // createSuccess,
    // createFailure,
    // menuItemCreate,

    // fetch/show
    // fetchRequest,
    // fetchSuccess,
    // fetchFailure,
    // menuItemFetch,

    // update
    // updateRequest,
    // updateSuccess,
    // updateFailure,
    // menuItemUpdate,

    // delete
    // deleteRequest,
    // deleteSuccess,
    // deleteFailure,
    // menuItemDelete,

    // end Session
    // menuItemSessionEnd
}