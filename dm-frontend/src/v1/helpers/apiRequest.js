const apiUrl = 'http://localhost:4000'

const errorCheck=(res) =>{
    console.log(res)
    // when error is thrown it will come in string.
    res.text().then(text => {
        // convert to text first. Then to json 
        const data = text && JSON.parse(text)
        // if issue becoming json, stop promise
        if (!data.ok) {
            return Promise.reject(((data && data.message) || res.statusText))
        }
        // else give back data for us to follow sign up with
        return data
    })
}

const apilogout=()=> {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}
const apiRegister = ( user) => {
    fetch(`${apiUrl}/register`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({user})
    }).then(errorCheck)  
}

export const apiRequest = {
    apiUrl,
    apilogout,
    apiRegister,
    apiLogin
}
