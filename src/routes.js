//各个页面入口
import Home from './components/ui/Home'
import Button from './components/ui/Button'
import Icon from './components/ui/Icon'
import Cascader from './components/ui/Cascader'
import Table from './components/ui/Table'
import TimePicker from './components/ui/TimePicker'
import TreeSelect from './components/ui/TreeSelect'

//注释：如果含有子菜单，则children为数组，如果菜单没有子菜单，点击直接可跳转，则children为对象
const routes = {
        home : {
            title:'主页',
            iconType:'home',
            children: {
                path:'/',
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
                }]
        }
}

module.exports = routes