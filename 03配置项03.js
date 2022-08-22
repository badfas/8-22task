 //修改webpack默认配置 

 //  比如修改入口 出口
 //-src/indesx.js
 // - dist / main.js

//npx脚本命令
// npx webpack
// -首先到node—_modules找到webpack命令执行
// -看看有没有安装webpack,使用webpack命令
// -如果没有安装？下载webpack并且打包，打包完了再删除
//npx webpack去启动打包
//npx webpack serve 启动开发服务器

 //commonjs规范导出一个配置项
 const path = require('path')
 const HtmlWebpackPlugin = require('html-webpack-plugin')
 module.exports = {
    //mode:'production'：生产,'development':开发
    mode:'development',//不会开启压缩，打包快
    // mode:'production0',//开启压缩模式，打包慢
     //webpack自定义配置
     // entry相对路径
     entry: './src/main.js',
     //output.path：输出目录绝对路径
     // output.filename:输出文件的名字
     output: {
         // __dirname当前文件夹得绝对路径
         path: path.join(__dirname, 'bundle'),
         filename: 'bundle.js',
         // clean:true // 先说清楚path目录

     },
     plugins: [new HtmlWebpackPlugin({
         template: './public/index.html'
     })],
     devServer:{
        // 当serve 打开时open为true是会自动打开浏览器
        open:true,
        //默认端口号是8080，范围是[0,65535]
        port:8888
     }
 }