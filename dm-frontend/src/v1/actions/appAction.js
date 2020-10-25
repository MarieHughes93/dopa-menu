export const setPage = (route) =>({type: "SET_PAGE", route})
export const clearPage = () => ({type:"CLEAR_PAGE"})

export const sessionCheck= () => {
    if (localStorage.getItem("sessionID")) {
        return true;
    }

    return false;
}

export const appAction = {
    setPage,
    clearPage,
    sessionCheck
}