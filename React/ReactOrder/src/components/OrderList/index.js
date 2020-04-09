import React, { Component } from 'react'
import OrderItem from '../OrderItem'

export default class OrderList extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    fetch('/mock/orders.json').then(res=>{
      if(res.ok) {
        res.json().then(data=>{
          this.setState({
            data: data.result
          })
        })
      }
    })  
  }
  // 组件提交表单数据
  handleonSubmit = (id, comment, stars)=>{
    // 服务端保存评论成功后执行下列代码
    const newData = this.state.data.map(item=>{
      return item.id === id?{...item, comment, stars, ifCommented: true}:item
    })
    this.setState({
      data: newData
    })
  }
  render() {
    return (
      <div>
        {
          this.state.data.map( item=>(
            <OrderItem data={item} key={item.id} onSubmit={this.handleonSubmit}></OrderItem>
            )
          )
        }        
      </div>
    )
  }
}
