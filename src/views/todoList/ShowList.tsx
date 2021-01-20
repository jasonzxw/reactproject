import React from 'react'
import ShowData from './ShowData'

interface ShowState {
    data : string[]
}

interface Showprop{

}
class ShowList extends React.Component<Showprop,ShowState>{
    constructor(props:any) {
        super(props)
        this.state={
            data: ['华为','小米','苹果']
        }
    }

    //删除item
    deleteItem = (index:number) =>{
        console.log('index',index)
        let data = this.state.data
        data.splice(index,1)
        this.setState({
            data:[...data]
        })
    }

    addItem(e:any){
        let data = this.state.data
        data.push(e.target.value)
        this.setState({
            data:[...data]
        })
        e.target.value = ""
    }
    render(){
        return(
            <div>
                添加:<input onBlur={(e)=>this.addItem(e)}/>
                <ShowData data={this.state.data} opClick={this.deleteItem}/>
            </div>
        )
    }
}

export default ShowList