const apiUrl = 'http://localhost:4000'

const errorCheck=(data) =>{
    const user = JSON.parse(data)
    // when error is thrown it will come in string.
    return data.text().then(text => {
        // convert to text first. Then to json 
        const object = text && JSON.parse(text);
        // if issue becoming json, stop promis
        if (!object.ok) {
            const error = (object && object.message) || data.statusText;
            return Promise.reject(error);
        }
        // else give back object for us to follow sign up with
        return user;
    });
}
const register = ( user) => {
    return fetch(`${apiUrl}/signup`,{
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' },
        body: JSON.stringify({user}),
    }).then(errorCheck)  
}


// function register(user) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
// }

export const apiRequest = {
    apiUrl,
    errorCheck,
    register
}
