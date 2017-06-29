
import React from 'react'
import { Layout,TimePicker,Button } from 'antd';
const { Content } = Layout ;
import { Link ,Route } from 'react-router-dom';

const A = () =>(
     <div>子组件AAAAAA</div>
)

class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       //console.log('组件挂载成功')
       //console.log( "TimePicker页面")
       
    }

    render(){
        //遍历antd所提供的icon名称
       const {match } = this.props;
        return (
            <div current='timepicker' openKeys={['ui']}>
                <TimePicker></TimePicker >
                {match.path}
                <Link to= { `${match.url}/type`}>路由嵌套,跳转到A</Link> 
                <Route exact path= { `${match.url}/type`} component={A}/>
            </div>
        )
    }
}

export default App;