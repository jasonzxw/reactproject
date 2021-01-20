const common = require('./webpack.common.js')
const {merge} = require('webpack-merge')
module.exports =  merge(common,{

    mode: 'development',
    devServer :{
        contentBase: './dist' ,
        hot : true ,
        port : 8090
    }
}
    )