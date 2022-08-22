//安装loader
//-yarn add less loader   (识别less文件)
//less(将.less转成css文件)

//配置less loader
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
            //一个对象对应一个文件类型
            {
                test:/\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                //1.less-loader:识别less文件，调用less-->css
                // 2.css-loader:识别css文件
                //3style-loader :css文件style便签形式插入文档当中
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
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