

//初始化或更新state 是纯函数
function reducer(state,action){
    if(!state){
        //初始化state
    }
    switch(action.type){
        case '':
            return {...state} //大括号里做额外的数据操作
        //此处省略多个case
        default:
            return state
    }
}