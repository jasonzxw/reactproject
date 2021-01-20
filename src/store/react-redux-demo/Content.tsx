import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import ThemeSwitch from './ThemeSwitch'


 function CreateStore(themeReducer:any){
    let state:any = null 
    const listeners:any= []
    const getState = () => state
    const subscribe = (listener:any) => listeners.push(listener)
    const dispatch = (action:any) =>{
        state = themeReducer(state,action)
        listeners.forEach( (listener:any) => listener())
    }
    dispatch({})//初始化
    return {getState , subscribe , dispatch}
}

function ThemeReducer(state:any,action:any){
    if(!state){
        state ={themeColor: 'red'}
    }
    switch(action.type){
        case 'change':
            return {...state,themeColor:action.themeColor}
        default :
        return state
    }
}


const store = CreateStore(ThemeReducer)

class Content extends React.Component{

    static childContextTypes  ={
        store: PropTypes.object
    }

    getChildContext = () => ({store})
    
    constructor(props:any) {
        super(props)
    }

    render(){
        return (
            <div>
                <Header />
                <ThemeSwitch />
            </div>
        )
    }
}

export default Content