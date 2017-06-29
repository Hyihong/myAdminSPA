//各个页面入口
import Home from './components/ui/Home'
import Button from './components/ui/Button'
import Icon from './components/ui/Icon'
import Cascader from './components/ui/Cascader'
import Table from './components/ui/Table'
import TimePicker from './components/ui/TimePicker'
import TreeSelect from './components/ui/TreeSelect'
import ReactRouters4 from './components/router/ReactRouters4'
import RRCustom from './components/router/RRCustom'


//注释：如果含有子菜单，则children为数组，如果菜单没有子菜单，点击直接可跳转，则children为对象
const routes = {
        home : {
            title:'主页',
            iconType:'home',
            children: {
                path:'/home',
                component:Home,
                key:'home',
                belong:null,
                title:'主页'
            }
        },
        ui: {
            title:"UI",
            iconType:'laptop',
            children:[
                {
                    path:'/ui/btn',
                    component:Button,
                    key:'button',
                    belong:'ui',
                    title:'按钮页'
                },{
                    path:'/ui/icon',
                    component:Icon,
                    key:'icon',
                    belong:'ui',
                    title:'图标'
                },{
                    path:'/ui/timepicker',
                    component:TimePicker,
                    key:'timepicker',
                    belong:'ui',
                    title:'时间选择'
                },{
                    path:'/ui/treeSelect',
                    component:TreeSelect,
                    key:'treeSelect',
                    belong:'ui',
                    title:'树形选择'
                },{
                    path:'/ui/cascader',
                    component:Cascader,
                    key:'cascader',
                    belong:'ui',
                    title:'联级选择'
                },{
                    path:'/ui/table',
                    component:Table,
                    key:'table',
                    belong:'ui',
                    title:'表格'
                }]
        },
        router:{
            title:'路由测试',
            iconType:'home',
            children: [{
                path:'/router/base',
                component:ReactRouters4,
                key:'router',
                belong:'router',
                title:'嵌套路由'
            },
            {
                path:'/router/custom',
                component:RRCustom,
                key:'custon',
                belong:'router',
                title:'自定义链接'
            },
            ]
        }
}

module.exports = routes