import React from 'react'
import { Layout,Card,Row, Col,Icon} from 'antd';
const { Content,Slider } = Layout ;

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       //console.log('组件挂载成功')
    }

    render(){
        return (
           <div>首页</div>
        )
    }
}

export default Home;

