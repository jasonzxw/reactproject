


export function CreateStore(themeReducer){
    let state = null 
    const listeners = []
    const getState = () => state
    const subscribe = (listener) => listeners.push(listener)
    const dispatch = (action) =>{
        state = themeReducer(state,action)
        listeners.forEach( listener => listener())
    }
    dispatch({})//初始化
    return {getState , subscribe , dispatch}
}
