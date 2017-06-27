import React from 'react'
import { Layout,Card,Row, Col,Icon,Cascader} from 'antd';
const { Content,Slider } = Layout ;

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            options: [
                {
                     value: 'fujian',
                     label: '福建',
                     isLeaf: false,
                }
            ]
        };
    }

    componentWillMount(){
       //console.log('组件挂载成功')
       
    }

    onChange = () => {

    }

    loadData = ( selectedOptions ) => {
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;
        //异步操作
        setTimeout(() => {
            targetOption.loading = false;
            if(targetOption.value == 'fujian'){
                 targetOption.children = [{
                    label: "福州",
                    value: "fuzhou",
                }, {
                    label: "厦门",
                    value: 'xiamen',
                    isLeaf: false,
                }];
            }
            if(targetOption.value == 'xiamen'){
                 targetOption.children = [{
                    label: "集美区",
                    value: "jimei",
                }, {
                    label: "湖里区",
                    value: 'huli',
                }];
            }
            
            this.setState({
                options: [...this.state.options],
            });
         }, 500);
    }

    render(){
        return (
           <div>
                  <Cascader 
                      options = {this.state.options} 
                      loadData= {this.loadData}
                  />                  
          </div>
        )
    }
}

export default App;

