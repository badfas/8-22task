// production 模式打包特点？-->开启压缩，速度很慢

// webpack-devserver
//express编写的node服务器
//功能：在内存中打包，在内存当中部署 到服务器上
// 1.yarn add webpack-dev-server -D
//2.配置脚本"serve":"webpack serve"
 const path = require('path')
 const HtmlWebpackPlugin = require('html-webpack-plugin')
 module.exports = {
    mode:'development',
     entry: './src/main.js',
     output: {
         path: path.join(__dirname, 'bundle'),
         filename: 'bundle.js',
         clean:true
     },
     plugins: [new HtmlWebpackPlugin({
         template: './public/index.html'
     })]
 }