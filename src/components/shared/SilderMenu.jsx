// ***  ***
// ***  file description: 侧边菜单 ***
// ***  ***
import React from 'react'
import { Layout,Menu,Icon,Slider} from 'antd';
import { Link } from 'react-router-dom';
import { isArray } from '../../tools/tools.js'

const { Item, SubMenu } = Menu;
const { Sider } = Layout
const routes = require('../../routes.js');


class SilderMenu extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.state = {
            current: this.props.current,
            openKeys: [ this.props.openKeys ],
        }
    }

   //只展开当前父级菜单
    onOpenChange =(openKeys)=>{
        console.log("触发 onOpenChange")
        const state = this.state ;
        const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
        const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));
 
        let nextOpenKeys = [];
        if (latestOpenKey) {
        nextOpenKeys = this._getAncestorKeys(latestOpenKey).concat(latestOpenKey);
        }
        if (latestCloseKey) {
        nextOpenKeys = this._getAncestorKeys(latestCloseKey);
        }
        this.setState({ openKeys: nextOpenKeys });
    }

    _getAncestorKeys = (key) => {
        const map = {
        sub3: ['sub2'],
        };
        return map[key] || [];
    }

    traversalRoutes = ( routes )=> {
    
    }

    render(){
       //遍历路由，生产左侧菜单栏
        let html = Object.keys(routes).map( route => 
             {
                 if( isArray (routes[route].children )  ){
                     return (<SubMenu key={ route } title= { route }>{
                        routes[route].children.map( r => {
                            return <Item key={ r.key}> <Link to={r.path}>{ r.title}</Link> </Item>
                        })
                         }</SubMenu >)
                    
                 }else{
                     let _r = routes[route].children;
                     return <Item key={ _r.key} ><Link to={_r.path}>{ _r.title }</Link></Item>
                 }
             }
        ) 

        return (
              <div  style={{width:"180px",height:"100%",background:"#404040",flexShrink:'0'}}>
                   <Menu
                        theme="dark"
                        mode="inline"

                        openKeys={this.state.openKeys}
                        current = {this.state.current}
                        defaultSelectedKeys={[ this.state.current ]}
                        style={{}}
                        onOpenChange = { this.onOpenChange }
                    >
                        {html}
                    </Menu>
               </div>
        )
    }
}

export default SilderMenu

                        // <Item key="home"><Link to="/"><Icon type="home"></Icon>首页</Link></Item>
                        // <SubMenu key ='ui' title= { <div><Icon type="laptop" /><span>UI</span></div>} >
                        //      <Item key="button"><Link to="/ui/btn">按钮</Link></Item>
                        //      <Item key="icon"><Link to="/ui/icon">图标</Link></Item>
                        //      <Item key="timepicker"><Link to="/ui/timepicker">时间选择器</Link></Item>
                        //      <Item key="treeSelect"><Link to="/ui/treeSelect">树选择</Link></Item>
                        //      <Item key="cascader"><Link to="/ui/cascader">联级选择</Link></Item>
                        //      <Item key="table"><Link to="/ui/table">表格</Link></Item>
                        // </SubMenu>