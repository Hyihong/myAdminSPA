import React from 'react'
import {Layout,Button,Row,Col,Card} from 'antd';
const { Content } = Layout ;

class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
       //console.log('组件挂载成功')
    }

    render(){
        return (
            <div>
                    <Row gutter={16} className ="row">
                        <Col span={12}>
                            <Card>
                                <Button type="primary">Primary</Button>
                                <Button>Default</Button>
                                <Button type="dashed">Dashed</Button>
                                <Button type="danger">Danger</Button>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card>
                                <Button type="primary" shape="circle" icon="search" />
                                <Button type="primary" icon="search">Search</Button>
                                <Button shape="circle" icon="search" />
                                <Button icon="search">Search</Button>
                                <Button shape="circle" icon="search" />
                                <Button icon="search">Search</Button>
                                <Button type="dashed" shape="circle" icon="search" />
                                <Button type="dashed" icon="search">Search</Button>
                            </Card>
                        </Col>
                    </Row>
                    <Row gutter={16} className ="row">
                        <Col span={12} >
                            <Card style={{background:'#d7d7d7'}}>
                                <Button type="primary" ghost>Primary</Button>
                                <Button ghost>Default</Button>
                                <Button type="dashed" ghost>Dashed</Button>
                                <Button type="danger" ghost>danger</Button>
                            </Card>
                        </Col>
                        <Col span={12}>
                            <Card>
                                <Button type="primary">Primary</Button>
                                <Button type="primary" disabled>Primary(disabled)</Button>
                                <br />
                                <Button>Default</Button>
                                <Button disabled>Default(disabled)</Button>
                                <br />
                                <Button>Ghost</Button>
                                <Button disabled>Ghost(disabled)</Button>
                                <br />
                                <Button type="dashed">Dashed</Button>
                                <Button type="dashed" disabled>Dashed(disabled)</Button>
                            </Card>
                        </Col>
                    </Row>
                <style>{`
                    .row {
                        margin-bottom: 12px;
                    }
                `}</style>
            </div>
        )
    }
}

export default App;

