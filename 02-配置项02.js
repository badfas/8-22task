
 const path = require('path')
 const HtmlWebpackPlugin = require('html-webpack-plugin')
 module.exports = {
    mode:'development',
     entry: './src/main.js',
     output: {
         path: path.join(__dirname, 'bundle'),
         filename: 'bundle.js',
     },
     plugins: [new HtmlWebpackPlugin({
         template: './public/index.html'
     })],
     devServer:{
        open:true,
        port:8888
     }
 }