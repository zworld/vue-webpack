var path = require("path");
var webpack = require("webpack");



//webpack配置

module.exports = {
    //入口文件
    entry:{
        app: "./src/app.js",
        //vendor 是如何找寻文件的
    },
    //输出
    output:{
        path: path.join(__dirname,'dist/public'),
        //publicPath 插件文件生成的默认位置
        publicPath: "/vue-webpack/dist/public/",
        filename: "js/[name].js",
        //chunkFilename不了解
    },

    //loader
    module:{
        loaders:[
            //解析vue
            {
                test:/\.vue$/,
                loader:"vue"
            },
            //转化ES6
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            // 编译css并自动添加css前缀
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer'
            },
            //less
            {
                test: /\.less$/,
                loader: "style-loader!css!less"
            },
            // 图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader",
                query: {
                    limit: 8192,
                    //?
                    name: "./images/[name].[ext]?[hash:8]"
                }
            },
            //html模板编译？
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            },

        ]
    },

    // .vue的配置。需要单独出来配置
    vue: {
        loaders: {
            css: "style!css!autoprefixer",
            js: "babel"
        }
    },

    // 配置babel转化成es5的语法
    babel: {
        presets: ["es2015"],
        plugins: ["transform-runtime"]
    },
    //其他配置
    resolve:{
        //省略扩展名
        extensions: ["", ".js", ".es6", ".vue", ".html"],
        //别名
        alias:{

        }
    },
    //插件

}