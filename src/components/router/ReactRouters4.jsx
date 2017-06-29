import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


const Home = () => (
  <div>
    <h2>首页</h2>
  </div>
)

const About = () => (
  <div>
    <h2>关于</h2>
  </div>
)

const Topics = ({ match }) => (
  <div>
    <h2>主题列表</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          使用 React 渲染
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          组件
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          属性 v. 状态
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>请选择一个主题。</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)




class ReactRouters4 extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){
       
    }

    render(){
        const { match,location} = this.props;
        console.log ( match.url )
        console.log ( location.pathname )
        return (
            <div>
                <h1>路由测试</h1>
                <div>
                    <ul>
                        <li><Link to={ `${match.url}/a`}>AAA</Link></li>
                        <li><Link to={ `${match.url}/b`}>BBB</Link></li>
                        <li><Link to={ `${match.url}/c`}>CCC</Link></li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact path={ `${match.url}/a`} component={Home}/>
                        <Route path={ `${match.url}/b`} component={About}/>
                        <Route path={ `${match.url}/c`} component={Topics}/>
                    </Switch>
                </div>
                <ul>

                </ul>
            </div>
        )
    }
}



export default ReactRouters4;

