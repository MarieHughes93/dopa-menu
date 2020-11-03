export const apiUrl = 'http://localhost:4000'

export const errorCheck=(res)=>{
    if (res.error) {
        if (res.auth) {
            localStorage.removeItem('sessionID')
            localStorage.removeItem('user')
        }
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

// register (POST)
export const apiRegister = (user) => {
    return fetch(`${apiUrl}/register`,{
        method: 'POST',
        headers:{ 
        'Content-Type': 'application/json',
        'Accept': 'application/json'},
        body: JSON.stringify({user})
    }).then(res=> res.json())
    .then(errorCheck)
}  

// login (POST)
export const apiLogin=(user)=> {
    return fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'},
        body: JSON.stringify({user})
    }).then(res=> res.json())
    .then(errorCheck)
}

export const apilogout=()=> {
    localStorage.removeItem('sessionID')
    localStorage.removeItem('user')
    if (localStorage.getItem('sessionID')){
        return Promise.reject('error')
    }
    return Promise.resolve('success')
}

// session_auth (GET)
export const apiSessionAuth=()=>{
    return fetch(`${apiUrl}/session_auth`, {
        headers: authHeading()
    }).then(res=> res.json())
    .then(errorCheck)
}


// user show (GET)
export const apiUserShow=(user)=>{
    return fetch(`${apiUrl}/users/${user}`, {
        method: 'GET',
        headers: authHeading()
    }).then(res=> res.json())
    .then(errorCheck)
}

// user update (PUT)
export const apiUserUpdate=(user)=>{
    return fetch(`${apiUrl}/users/${user.id}`, {
        method: 'PUT',
        headers:{...authHeading(),
            'Content-Type': 'application/json',
            'Accept': 'application/json',},
        body: JSON.stringify({user})
    }).then(res=> res.json())
    .then(errorCheck)
}

// user destroy (DELETE)
export const apiUserDelete=(user)=>{
    return fetch(`${apiUrl}/users/${user.id}`, {
        method: 'DELETE',
        headers: authHeading()
    }).then(res=> res.json())
    .then(errorCheck)
}

// menu_items index (GET) 
export const apiMenuIndex=(user)=>{
    return fetch(`${apiUrl}/users/${user.id}/menu`, {
        method: 'GET',
        headers: authHeading(),
    }).then(res=> res.json())
    .then(errorCheck)
}

// menu_items create (POST)
export const apiMenuItemCreate=(user,menuItem)=>{
    return fetch(`${apiUrl}/users/${user.id}/menu`, {
        method: 'POST',
        headers: authHeading(),
        body: JSON.stringify({menuItem})
    }).then(res=> res.json())
    .then(errorCheck)
}

// menu_item GET     show 
export const apiMenuItemShow=(user, menuItem)=>{
    return fetch(`${apiUrl}/users/${user.id}/menu/${menuItem.id}`, {
        method: 'GET',
        headers: authHeading()
    }).then(res=> res.json())
    .then(errorCheck)
}

// menu_items Update     update
export const apiMenuItemUpdate=(user, menuItem)=>{
    return fetch(`${apiUrl}/users/${user.id}/menu/${menuItem.id}`, {
        method: 'PUT',
        headers: authHeading(),
        body: JSON.stringify({menuItem})
    }).then(res=> res.json())
    .then(errorCheck)
}

// menu_items DELETE  destroy
export const apiMenuItemDelete=(user, menuItem)=>{
    return fetch(`${apiUrl}/users/${user.id}/menu/${menuItem.id}`, {
        method: 'DELETE',
        headers: authHeading(),
    }).then(res=> res.json())
    .then(errorCheck)
}

export const apiRequest = {
    apiUrl,
    apiUserShow,
    apiSessionAuth,
    apilogout,
    apiRegister,
    apiLogin
}


