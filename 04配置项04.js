//配置打包css文件
// 安装loader
//-1.yarn add css loader
// 识别css文件
// yarn add style loader(将css样式以style标签的形式插入document中)
// -2.配置loader module.rles
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: 'bundle.js',

    },
    module: {
        rules: [
            //test：正则，匹配文件
            //use:[] 制定匹配的文件的使用
            {
                test:/\.css$/,
                //use解析从右往左
                use: ['style-loader','css-loader'],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './public/index.html'
    })],
    devServer: {
        open: true,
        port: 8888
    }
}