const apiUrl = 'http://localhost:4000/users/'

const errorCheck=(data) =>{
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
        return object;
    });
}
const signUp=( name,email,password)=> {
    const user = {
        name: name,
        email: email,
        password: password
    }
    return fetch(`${apiUrl}`,{
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json' },
        body: JSON.stringify({user}),
    }).then(errorCheck)  
}
const apiRequest = {
    apiUrl,
    errorCheck,
    signUp
}