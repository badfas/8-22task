//手写轮播图和选项卡逻辑
//按需引入
import {
    marquee
} from './marquee.js'
// m默认引入  可以改名字
import tab from './tabs.js'
marquee()
tab()
//webpack 默认只能打包js和son
//-如果说我们想扩展webpack的打包能力，需要配置和下载对应的loader(加载器)

//1.在main.js里引入css文件
//-引入css文件的时候，直接引入整个文件


// You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
//  > .marquee{
//  |     width: 100px;
//  |     height: 100px;
//   @ ./src/main.js 11:0-27



import './styles/index.css'

//引入less
import './styles/index.less'

// 1.引入图片
import gifSrc from './assets/1.gif'
//创img节点
const img = document.createElement('img')
// 添加src属性
img.src = gifSrc
// 添加img节点
document.body.appendChild(img)


import pngSrc from './assets/logo_small.png'
const png = document.createElement('img')
png.src = pngSrc
document.body.appendChild(png)

//引入字体图标css
//字体和入口文件产生间接引入
import './assets/fonts/iconfont.css'
//兼容问题
class Person {
    name = '张三';
    age = "18";
}
console.log(Person);
import './styles/style.css'