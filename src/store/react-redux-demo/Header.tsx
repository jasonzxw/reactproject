import React from 'react'
import PropTypes from 'prop-types'
interface themeState{
    themeColor : string
}

interface themeProp{

}


const mapStateToProps = (state:any) =>{
    return {
        themeColor: state.themeColor
    }
}

const HighComponent =(mapStateToProps:(state:any)=>void) =>(WramComponents:any) =>{

    class Connect extends React.Component {
        static contextTypes = {
            store: PropTypes.object
          }
          render(){
            const { store } = this.context
            let stateProps = mapStateToProps(store.getState())
            return <WramComponents {...stateProps}/>
          }
    }

    return Connect

}

class Header extends React.Component<themeProp,themeState> {

    static contextTypes = {
        store: PropTypes.object
      }

    constructor(props:any) {
        super(props)
        this.state = { themeColor: '' }
    }

    componentWillMount = () =>{
        const { store } = this.context
        this._updateThemeColor()
        store.subscribe(this._updateThemeColor)
      }
    
      _updateThemeColor =() => {
        const { store } = this.context
        const state = store.getState()
        this.setState({ themeColor: state.themeColor })
      }

    render(){
        return(
            <div>
                <div style={{ color: this.state.themeColor }}>hello react</div>
                <div style={{ color: this.state.themeColor }}>hello react-redux</div>
            </div>
        )
    }
}

export default Header