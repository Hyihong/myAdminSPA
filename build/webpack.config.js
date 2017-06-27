
const fs = require('fs')
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");//单独提取出.css文件
const pkg = require("../package.json");

const ENTRY_PATH = path.resolve(__dirname,'../src/client/client.js');
const OUTPUT_PATH = path.resolve(__dirname,'../dist');



//读取package.json中的theme字段,如果是string类型，读取配置文件。如果是object类型，则作为参数传给modifyVar
 let theme = {};
  if (pkg.theme && typeof(pkg.theme) === 'string') {
    let cfgPath = pkg.theme;
    // relative path
    if (cfgPath.charAt(0) === '.') {
       cfgPath = path.resolve(cfgPath);
    }
    theme = require(cfgPath);
  } else if (pkg.theme && typeof(pkg.theme) === 'object') {
    theme = pkg.theme;
}


module.exports = {
    entry : ENTRY_PATH,
    output:{
        path: OUTPUT_PATH,
        filename: 'js/bundle.js',
    },
    module:{
        rules:[
            {
               test:/\.(js|jsx)$/,
               exclude:/node_modules/,
               use: {
                   loader:'babel-loader',
                   options:{}
                }
            },{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },{
                test: /\.less$/,
                exclude:/node_modules/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader","less-loader"],
                    fallback: "style-loader"
                })
            },
            //对于antd组件，在less-loader转换过程中，通过modifyVars配置覆盖原来的样式变量
            {
                test: /\.less$/,
                include:/node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [
                    { 
                        loader:"css-loader",
                        options:{
                           sourceMap: true
                        }
                    },{
                        loader:"less-loader",
                        options:{
                           sourceMap: true,
                           modifyVars:theme
                        }
                    }],
                    fallback: "style-loader",
                })
            }
        ]
    },
    resolve :{
        extensions: [".js", ".jsx"],
    },
    externals: {
        "react":"React",
        "react-dom":"ReactDOM"
    },
    plugins:[
        new ExtractTextPlugin("css/[name].css"),
    ]

}