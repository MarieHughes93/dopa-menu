export const apiUrl = 'http://localhost:4000'

export const errorCheck=(res)=>{
    if (res.error) {
        if (res.auth) {
            localStorage.removeItem("sessionID")}
        return Promise.reject(res.message)
    }
    return res   
}

export const apilogout=()=> {
    localStorage.removeItem("sessionID")
    if (localStorage.getItem("sessionID")){
        return Promise.reject('error')
    }
    return Promise.resolve('success')
}

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

export const apiSessionAuth=(sessionId)=>{
    return fetch(`${apiUrl}/session_auth`, {
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${sessionId}`}
    }).then(res=> res.json())
    .then(errorCheck)
}

export const apiRequest = {
    apiUrl,
    apiSessionAuth,
    apilogout,
    apiRegister,
    apiLogin
}