import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

const Protected = () => (
    <div>授权之前</div>
)

class RRCustom extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillMount(){

    }

    render(){
        const { match } = this.props;
        return (
            <div>
                <h1>路由测试</h1>
                
            </div>
        )
    }
}



export default RRCustom;

