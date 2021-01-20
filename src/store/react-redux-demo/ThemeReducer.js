

export function ThemeReducer(state,action){

    if(!state){
        state ={color: 'red'}
    }
    switch(action){
        case 'change':
            return {...state,color:action.color}
        default :
        return state
    }
}

