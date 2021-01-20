const path = require('path')
const {resolve} = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry : './src/index.tsx' ,
    output : {
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
          },
        extensions: ['.ts', '.tsx', '.js','.jsx']
      },
    module:{
        rules :[
            {test:/\.tsx?$/,loader:'awesome-typescript-loader'},
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {test:/\.css?$/,use:['style-loader', 'css-loader']}
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template : './src/Template.html'
        })
    ],
   
    
}