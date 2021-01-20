import React from 'react'
import PropTypes from 'prop-types'

class ThemeSwitch extends React.Component{

    static contextTypes = {
        store: PropTypes.object
      }

    constructor(props:any) {
        super(props)
    }

    _updateThemeColor = (action:{}) => {
        const { store } = this.context
        store.dispatch(action)
      }


    render(){
        return(
            <div>
                <button onClick={() =>this._updateThemeColor({type:'change',themeColor:'red'})}>red</button>
                <button onClick={() =>this._updateThemeColor({type:'change',themeColor:'blue'})}>blue</button>
            </div>
        )
    }
}

export default ThemeSwitch