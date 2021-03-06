var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

//webpack配置
module.exports = {
    //入口文件
    entry:{
        app: "./src/app.js",
        //vendor 是如何找寻文件的
        vendor:['jquery','bootstrap','vue']
    },
    //输出
    output:{
        //入口文件输出的位置
        path: path.join(__dirname,'dist'),
        //publicPath 给生成的文件添加的路径前缀
        publicPath: "/vue-webpack/dist",
        filename: "/js/[name].js",
        //非入口文件,用AMD和CMD加载就会生成无名的chunk文件，异步加载 列入用require,define
        chunkFilename: "/lib/[name].bundle.js"
    },

    //loader
    module:{
        loaders:[
            //解析vue
            {
                test:/\.vue$/,
                loader:"vue"
            },
            //json加入
            {
                test:/\.json$/,
                loader:"json-loader"
            },
            //转化ES6
            {
                test: /\.(js|es6)$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            // 编译css并自动添加css前缀
            {
                test: /\.css$/,
                //必须这样才能用插件合并CSS
                loader: ExtractTextPlugin.extract("style-loader", "css!autoprefixer")
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
            //字体？
            {
                test: /\.(eot|svg|ttf|woff|woff2|cur)$/,
                loader: "url-loader",
                query: {
                    limit: 1,
                    name: "/fonts/[name].[ext]"
                }
            },
            //html模板编译
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
    //开启source-map,方便定位
    devtool: 'stack-source-map',
    //其他配置
    resolve:{
        //省略扩展名
        extensions: ["", ".js", ".es6", ".vue", ".html"],
        //别名
        alias:{
            "jquery": path.join(__dirname,"./src/assets/lib/jquery/jquery.min.js"),
            "echarts": path.join(__dirname,"./src/assets/lib/echarts/echarts.min.js"),
            "bootstrap": path.join(__dirname,"./src/assets/lib/bootstrap/js/bootstrap.min.js"),
            "vue": path.join(__dirname,"./src/assets/lib/vue/vue.min.js"),
        }
    },
    //插件
    plugins:[
        new webpack.ProvidePlugin({ //加载组件
            jQuery: "jquery",
            $: "jquery",
            echarts: "echarts"
        }),
        //生成公共Css文件
        new ExtractTextPlugin("css/css.css"),

        //生成index.html
        new HtmlWebpackPlugin({
            name: 'html',
            filename: "index.html",
            template: "./src/index.html",
            //多个入口文件  用 excludeChunks:排除不用的
            //excludeChunks: ['app', 'login'],
            inject: true
        }),
        
    ],
    //配置webpack-dev-server
    devServer:{
        // historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,
        port:9090,
        contentBase:"./dist"
    }
}