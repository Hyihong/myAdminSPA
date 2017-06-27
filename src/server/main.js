require('babel-polyfill')

var Webpack_isomorphic_tools = require('webpack-isomorphic-tools') 
var project_base_path = require('path').resolve(__dirname, '../../') //webpack环境参数配置

var webpack_isomorphic_tools_configuration = require('../../build/webpack-isomorphic-tools-configuration');

// this global variable will be used later in express middleware 
global.webpack_isomorphic_tools = 
        new Webpack_isomorphic_tools( webpack_isomorphic_tools_configuration )
        .server(project_base_path, function(){
              require('./server')
        })