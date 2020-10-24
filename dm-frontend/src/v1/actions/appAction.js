export const setPage = (route) =>({type: "SET_PAGE", route})
export const clearPage = () => ({type:"CLEAR_PAGE"})


export const appAction = {
    setPage,
    clearPage
}