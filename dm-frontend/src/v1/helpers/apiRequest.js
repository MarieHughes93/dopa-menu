const apiUrl = 'http://localhost:4000'

const errorCheck=(res) =>{
    // when error is thrown it will come in string.
    res.text().then(text => {
        // convert to text first. Then to json 
        const data = text && JSON.parse(text)
        // if issue becoming json, stop promis
        if (!data.ok) {
            return Promise.reject(((data && data.message) || res.statusText))
        }
        // else give back data for us to follow sign up with
        return data
    })
}
const register = ( user) => {
    fetch(`${apiUrl}/register`,{
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' },
        body: JSON.stringify({user}),
    }).then(errorCheck)  
}

export const apiRequest = {
    apiUrl,
    errorCheck,
    register
}
