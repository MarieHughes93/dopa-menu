const apiUrl = 'http://localhost:4000'

const errorCheck=(res)=>{
    if (res.error) {
        if (res.auth) {
            localStorage.removeItem("sessionID")
        }
        return Promise.reject(res.message)
    }
    return res   
}


const apilogout=()=> {
    localStorage.removeItem("sessionID")
    if (localStorage.getItem("sessionID")){
        return Promise.reject('error')
    }
    return Promise.resolve('success')

}
const apiRegister = ( user) => {
    return fetch(`${apiUrl}/register`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({user})
    }).then(res=> res.json())
    .then(errorCheck)
}  

const apiLogin=(user)=> {
    return fetch(`http://localhost:4000/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res=> res.json())
    .then(errorCheck)
}  

export const apiRequest = {
    apiUrl,
    apilogout,
    apiRegister,
    apiLogin
}