const apiUrl = 'http://localhost:4000'

const errorCheck=(res) =>{
    // when error is thrown it will come in string.
    return res.text().then(text => {
        // convert to text first. Then to json 
        const data = text && JSON.parse(text)
        // if issue becoming json, stop promise
        if ( data.ok && data.ok === "false") {
            return Promise.reject(((data && data.message) || res.statusText))
        }
        // else give back data for us to follow sign up with
        return data
    })
}

const apilogout=()=> {
    // remove user from local storage to log user out
    localStorage.clear()
    if (localStorage.getItem("sessionID")) {
        return Promise.reject('Error - Could not close session')
    }
    return Promise.resolve('Success')

}
const apiRegister = ( user) => {
    return fetch(`${apiUrl}/register`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({user})
    }).then(res=> errorCheck(res))
}

const apiLogin=(userInfo)=> {
    return fetch(`http://localhost:4000/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    }).then(res=> errorCheck(res))
}  

export const apiRequest = {
    apiUrl,
    apilogout,
    apiRegister,
    apiLogin
}