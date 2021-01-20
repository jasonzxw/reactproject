

function createStore(reducer){

    let state = null ;
    const listeners = [] ; //用来订阅渲染
    const getState = () => state
    const subscribe = (listener) => listeners.push(listener)
    const dispatch = (action) =>{
        state = reducer(state,action)
        listeners.forEach(listener => listener()) //调用渲染
    }
    dispatch({})
    return {getState , subscribe , dispatch}
}