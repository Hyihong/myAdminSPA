// ***  ***
// ***  file description: 导航栏与侧边栏的集合 ***
// ***  ***
import React from 'react'
import { Layout} from 'antd';
const { Content } = Layout ;

import { Route } from 'react-router-dom';

import Header from './Header.jsx'
import SilderMenu from './SilderMenu.jsx'

//各个页面入口
import Home from '../ui/Home'
import Button from '../ui/Button'
import Cascader from '../ui/Cascader'
import Icon from '../ui/Icon'
import Table from '../ui/Table'
import TimePicker from '../ui/TimePicker'
import TreeSelect from '../ui/TreeSelect'

class BaseFrame extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       
    }

    render(){
        return (
            <Layout style={{width:"100%","minWidth":"1200px",height:'100%',position:'absolute'}} >
                <Header></Header>
                <Layout style={{width:"100%","minWidth":"1200px",height:'100%'}} className="ant-layout-has-sider">
                    <SilderMenu current= {this.props.current}  openKeys= {this.props.openKeys}></SilderMenu>
                    <Content style={{ padding: '10px 15px' }}>
                         <Route exact path="/" component={Home}/>
                         <Route path="/ui/btn" component={Button}/>
                         <Route path="/ui/icon" component={Icon}/>
                         <Route path="/ui/timepicker" component={TimePicker}/>
                         <Route path="/ui/treeSelect" component={Cascader}/>
                         <Route path="/ui/cascader" component={Cascader}/>
                         <Route path="/ui/table" component={Table}/>
                         <Route path="/spa/animationEntry" component={Cascader}/>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default BaseFrame