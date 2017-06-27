'use strict'
//only in dev 时实转码，所以只在开发环境中使用
require('babel-polyfill')

require('babel-register')({
   "presets":["react","es2015","stage-0"],
    "plugins": [
          ["import", { 
             "libraryName": "antd", 
             }
          ]
      ]

});  

const path = require('path');
const koa = require('koa');
const koaEjs = require('koa-ejs');
const React = require('react')

const router = require('./router.js');

//react路由
const ReactRouterDom = require('react-router-dom');
const StaticRouter  = ReactRouterDom.StaticRouter ;
const Link = ReactRouterDom.Link;
const matchPath = ReactRouterDom.matchPath;

//koa2服务
const app = new koa();

//静态资源服务
app.use(require('koa-static')(path.resolve(__dirname,"../../public")));
app.use(require('koa-static')(path.resolve(__dirname,"../../dist")));

//配置后端渲染模板                            
koaEjs(app,{
    root: path.join(__dirname,"../views"),
    layout:false,
    viewExt: 'ejs',
})

app.use( router.routes()).use(router.allowedMethods());

//监听端口
app.listen(3302, () => console.log('3302端口正在监听...'));


