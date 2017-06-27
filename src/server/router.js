'use strict'

const router = require('koa-router')();
const React = require('react');
const ReactDOMServer = require('react-dom/server')
const routes = require('../routes.js');

import { StaticRouter as Router,Link ,Route} from 'react-router'
import { isArray } from '../tools/tools.js'

import App from '../components/shared/App.jsx'

//遍历路由
function traversalRoutes( routes ){
    for( let route in routes ){
        if ( isArray(routes[route].children) ){
             traversalRoutes( routes[route].children ) 
        }else{
            //挂载路由
            let obj; //路由对象
            let r = routes[route];
            //判断是多菜单还是独立菜单
            obj =  r.children ? r.children : r ;
            router.get( obj.path ,async (ctx,next)=> {
                const renderProp = {
                    current: obj.key,
                    openKeys: obj.belong
                }        
                await ctx.render("index",{
                    title:obj.key,
                    initData: {...renderProp},
                    global: ReactDOMServer.renderToString( 
                        <Router context={{}} location={ctx.req.url} >
                            <App {...renderProp} />
                        </Router>
                    )
                })
                await next();
            })
        }
    }
}

traversalRoutes(routes)

module.exports = router;