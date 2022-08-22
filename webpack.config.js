//webpack可以识别图片
// -webpack4：url-loader和file-loader处理图片
// webpack 觉得处理文件资源(字体图标，图片，txt文本。。。)非常频繁，
// webpack5 处理文件资源 使用内置assetsMoudle处理


//generator 生成器：制定大白易购的产物生成到哪里
//Rule.generator

// extension:扩展名
// generator.filename:指定文件的名字
// [name]：原文件的名字 [hash:字符串位数] 代表随机生成的字符串
// [ext]：代表文件的原始后缀
// -base64  也叫Dataurl
//-base64  优点：减少网络请求的次数  缺点：生成的字符串会比原始图片大上1/3左右


// 总结:assetModule
//asset/resoure  将文件打包成单独的文件
//asset/inline  将文件打包成base64
// asset  以8kb为界限 ，大于8kb打包成文件马晓宇8kb打包成base64    


const path = require('path')
// 引入抽离包
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: 'bundle.js',
        clean: true
    },
    module: {
        rules: [{
                // 配置loader
                //loader有字符串写法，也有对象的写法
                test: /\.css$/,
                // 替换style-loader
                use: [MiniCssExtractPlugin.loader,  {
                    loader: 'css-loader',
                    //配置loder的选项
                    options: {
                        url: false
                    }
                }],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // 处理图片
            //type:制定资源模块的方式(怎么处理图片)
            // 值：'asset/resource'，它会把图片打包成单独的文件
            // {
            //     test: /\.(gif|jpg|png|svg|ico)$/,   
            //     type:'asset/resource',
            //     generator:{
            //         filename:'images/[name]-[hash:6][ext]'
            //     }

            // }
            // {
            //     test: /\.(gif|jpg|png|svg|ico)$/, 
            //     //把图片以base64的形式去打包进js
            //     type:'asset/inline'
            // }
            {
                test: /\.(gif|jpg|png|svg|ico)$/,
                //以8kb大小为界限，大于8kb会打包成文件，小于8kg生成base64
                //如果不想以8kb为界限了？
                //Rule.parser
                type: 'asset',
                generator: {
                    filename: 'images/[name]-[hash:6][ext]',
                },
                parser: {
                    // base64打包的时候选项调教
                    dataUrlCondition: {
                        //maxSize单位 是字节 1kb = 1024字节
                        maxSize: 25 * 1024
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name]-[hash:10][ext]'
                }
            },
            {
                // babel
                // babel: js的语法降级的

                // 1. 下载babel: yarn add @babel/core @babel/preset-env babel-loader
                // 2. module.rules.{ test:/\.js$/,use:['babel-loader] }
                // 3. 在项目根目录下, 新建 babel.config.js


                //假如我写了一个包: wzk 上传到npm以后
                // yarn add wzk

                //假如我写了一个包: wzk ,上传到npm的时候, 在npm注册了一个自己作用域 sucan, 我把wzk包上传到sucan
                // yarn add @sucan/wzk

                // @babel/core
                // 包名: core  只不过是 babel账户的core
                // @vue/cli
                // 包名: cli --> command-line-interface

                // @babel/core 核心包

                // @babel/preset-env
                // 比如 箭头函数 --> function  class --> function
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'style/[name].css'
        })
    ],
    devServer: {
        open: true,
        port: 8888
    }
}