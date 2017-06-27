import React from 'react'

import { Layout,Card,Row, Col,Icon,Table,Spin,Button} from 'antd';
const { Content,Slider } = Layout ;
const { Column, ColumnGroup } = Table;

import 'isomorphic-fetch'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            loading:false,
            dataSource:[],
            pagination:{},
            show:true
        };
    }

    //fetch方法
    fetchTabalData = (opts) =>{
          this.setState({
                loading: true
          })
          const _fetchInstance = fetch( 'https://randomuser.me/api?' + 'results=' + opts.data.results + '&page=' + opts.data.page,{
              method:'GET',

          })
          return _fetchInstance;
    }

    componentWillMount(){

    }

    componentDidMount(){
       console.log('组件挂载成功')
       let that = this ;
       this.setState({
                loading: true
       })
       const initTableData = window.STATE;
       that.setState({
            dataSource:initTableData,
            pagination:{
                total:100,
                pageSize:12
            },
            loading: false,
        })

      
       
    }

    handleRefreshTable = () =>{
            this.setState({
                loading: true
            })
        setTimeout( () => {
            this.setState({
                loading: false,
                selectedRowKeys:[]
            })
        },1000)
        
        this.setState({
            show: !this.state.show
        })
    }

    handleTableChange = (pagination, filters, sorter) => {
        let that = this ;
        this.fetchTabalData({
           data:{
                results:12,
                page:pagination.current
           }
       }).then(function(response){
           return response.json()
       }).then(function(data){
           that.setState({    
               dataSource:data.results,
               pagination:{
                   total:100,
                   pageSize:12
               },
               loading: false,
           })
           
       })
    }

    handleDelete = (text,record,index) =>{

         console.log( index )
    }

    handleEdit = (text,record,index) =>{
         console.log(record)
    }

    handlePopBox = (text,record,index) =>{
        
    }

    handleclickTest = (e) =>{
        e.preventDefault();
        console.log(e.target.id)
    }
  
    render(){
        const that = this;
        const  columns = [
             {
                 title:'姓名',
                 key:"name",
                 dataIndex:'name',
                 render: (name, record, index) => <a href="#">{name.first} {name.last}</a>,
                 filters: [
                    { text: '陈家', value: 'chen' },
                    { text: '魏家', value: 'wei' },
                ],
                width: "15%",
                //filteredValue:['chen','wei'],
                sorter: (a, b) => a.name.length - b.name.length,
                //onFilter: (value, record) => record.name.includes(value),

             },{
                 title:'电话号码',
                 key:"cell",
                 dataIndex:'cell'
             },
             {
                 title:'邮箱',
                 key:"email",
                 dataIndex:'email'
             },
             {
                 title:'地址',
                 key:"location",
                 dataIndex:'location',
                 render: location => `${location.city}\\${location.state}\\${location.street}`

             },
             {
                 title:'操作',
                 key:"action",
                 dataIndex:'action',
                 render:  (text, record, index) => ( 
                       <div>
                            <span> <a href="#" onClick={ this.handleDelete.bind(this,text,record,index ) } >删除  </a> </span>
                            <span> <a href="#" onClick={ this.handleEdit.bind(this,text,record,index ) } >编辑  </a> </span>
                            <span> <a href="#" onClick={ this.handlePopBox.bind(this,text,record,index ) } > 弹出框  </a> </span>
                       </div>
                       ),
             }
        ]

       

        const { selectedRowKeys }= this.state

        const rowSelection = {
             type:'checkbox',
             onChange:function( selectedRowKeys ){
                  that.setState( { selectedRowKeys });
             },
             onSelect:function(selectedRowKeys){
                 //console.log("用户手动选择/取消选择某列的回调")
             },
             getCheckboxProps: record => ({
                disabled: record.name === '某某某',    // Column configuration not to be checked
             }),
             selectedRowKeys,
             selections:[
                 {
                     key:'choose1',
                     text:'不常用的功能',
                     onSelect:function(){
                         console.log("选中了一个不常用的功能")
                     }
                 }
             ]
        }

        

        return (
           <div>
                <Button onClick = {this.handleRefreshTable} >刷新列表</Button>
                <Table  columns={columns}
                        rowKey ={ record => record.registered}
                        dataSource = {this.state.dataSource}
                        
                        onChange = {this.handleTableChange}
                        loading = {this.state.loading}
                        pagination = {this.state.pagination}
                        style={{background:'#fff'}}

                />  
                { this.state.show  &&
                     <h2>
                          <a id="clickTest" href="" onClick= {this.handleclickTest} >点我,会不会跳转?</a> 
                    </h2>
                }

                
                         
                      
                     
          </div>
        )
    }
}

export default App;

