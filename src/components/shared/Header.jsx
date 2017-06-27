// ***  ***
// ***  file description: 导航栏 ***
// ***  ***
import React from 'react'
import { Layout,Menu,Icon} from 'antd';
import screenFull from "screenfull" ;
const { Item, SubMenu ,ItemGroup } = Menu;
const { Header } = Layout  ;

class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       
    }

    //全屏显示
    screenFull = () => {
        console.log('全屏')
        if (screenFull.enabled) {
            screenFull.request();
        }
    }

    render(){
        return (
               <Header style={{height:'56px'}}>
                   <div className="logo"><img src="/images/t1.jpg" alt="logo"/></div>
                   <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['menu1']}
                        style={{ lineHeight: '56px',float:'right' }}
                    >
                        <Item key ='menu1'><Icon type="mail" />菜单一</Item>
                        <SubMenu key ='menu2' title= "菜单二XXXXXXXX" >
                             <Item key="sub1">菜单2-1</Item>
                             <Item key="sub2">菜单2-2</Item>
                        </SubMenu>
                        <Item key ='alt' onClick={ this.screenFull }> <Icon type="arrows-alt" onClick={ this.screenFull }/></Item>
                        <Item key ='menu4'><span className="avatar"><img src='/images/t1.jpg' alt="头像" /></span></Item>
                    </Menu>
               </Header>
        )
    }
}

export default App