export const apiUrl = typeof process.env.REACT_APP_API_HOST !== 'undefined' ? process.env.REACT_APP_API_HOST : 'http://localhost:3000';
export const errorCheck=(res)=>{
    if (res.auth === false ){
        localStorage.removeItem('sessionID')
        localStorage.removeItem('currentUser')
    }
    if (res.error){
        return Promise.reject(res)
    }
    return res   
}
export const authHeading=()=>{
    const sessionID = localStorage.getItem('sessionID')
    if (sessionID){
        return{ 'Authorization': `Bearer ${sessionID}`}
    } else {
        return {}
    }
}
// login (POST)
export const apiLogin=(user)=> {
    return fetch(`${apiUrl}/login`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'},
        body: JSON.stringify({user})
    }).then(res=> res.json())
    .then(errorCheck)
}
// logout
export const apilogout=()=> {
    localStorage.removeItem('sessionID')
    localStorage.removeItem('currentUser')
    if (localStorage.getItem('sessionID')){
        return Promise.reject('error')
    }
    return Promise.resolve('success')
}
// session_auth (GET)
export const apiSessionAuth=()=>{
    return fetch(`${apiUrl}/session_auth`,{
        headers: authHeading()
    }).then(res=> res.json())
    .then(errorCheck)
}
// user create (POST)
export const apiUserCreate=(user)=>{
    return fetch(`${apiUrl}/register`,{
        method: 'POST',
        headers:{ 'Content-Type': 'application/json',
        'Accept': 'application/json'},
        body: JSON.stringify({user})
    }).then(res=> res.json())
    .then(errorCheck)
}  
// user show (GET)
export const apiUserShow=(user)=>{
    return fetch(`${apiUrl}/users/${user.id}`,{
        method: 'GET',
        headers: authHeading()
    }).then(res=> res.json())
    .then(errorCheck)
}
// user update (PUT)
export const apiUserUpdate=(user)=>{
    return fetch(`${apiUrl}/users/${user.id}`,{
        method: 'PUT',
        headers:{...authHeading(),
            'Content-Type': 'application/json',
            'Accept': 'application/json'},
        body: JSON.stringify({name: user.name})
    }).then(res=> res.json())
    .then(errorCheck)
}
// user destroy (DELETE)
export const apiUserDelete=(user)=>{
    return fetch(`${apiUrl}/users/${user.id}`,{
        method: 'DELETE',
        headers: authHeading()
    }).then(res=> res.json())
    .then(errorCheck)
}
// menu_items index (GET) 
export const apiMenuItemsIndex=(user)=>{
    return fetch(`${apiUrl}/users/${user.id}/menu`,{
        method: 'GET',
        headers: authHeading()
    }).then(res=> res.json())
    .then(errorCheck)
}

// menu_items create (POST)
export const apiMenuItemCreate=(user,menuItem)=>{
    return fetch(`${apiUrl}/users/${user.id}/menu`,{
        method: 'POST',
        headers: {...authHeading(),
            'Content-Type': 'application/json',
            'Accept': 'application/json'},
        body: JSON.stringify(menuItem)
    }).then(res=> res.json())
    .then(errorCheck)
}
// menu_item GET show 
export const apiMenuItemShow=(user, menuItemId)=>{
    return fetch(`${apiUrl}/users/${user.id}/menu/${menuItemId}`,{
        method: 'GET',
        headers: authHeading()
    }).then(res=> res.json())
    .then(errorCheck)
}
// menu_items Update     update
export const apiMenuItemUpdate=(menu_item)=>{
    return fetch(`${apiUrl}/users/${menu_item.id}/menu/${menu_item.id}`,{
        method: 'PUT',
        headers:{...authHeading(),
            'Content-Type': 'application/json',
            'Accept': 'application/json'},
        body: JSON.stringify({menu_item})
    }).then(res=> res.json())
    .then(errorCheck)
}
// menu_items DELETE  destroy
export const apiMenuItemDelete=(menu_item)=>{
    return fetch(`${apiUrl}/users/${menu_item.user_id}/menu/${menu_item.id}`,{
        method: 'DELETE',
        headers:{...authHeading(),
            'Content-Type': 'application/json',
            'Accept': 'application/json'},
    }).then(res=> res.json())
    .then(errorCheck)
}
export const apiRequest={
    // helpers
    apiUrl,
    errorCheck,
    authHeading,
    // session control
    apiLogin,
    apilogout,
    apiSessionAuth,
    // user
    apiUserCreate,
    apiUserShow,
    apiUserUpdate,
    apiUserDelete,
    // menuItems
    apiMenuItemsIndex,
    apiMenuItemCreate,
    apiMenuItemShow,
    apiMenuItemUpdate,
    apiMenuItemDelete
}


