import React, { Component } from 'react'
import A from './A';

class B extends Component { 
  render() {
    return (
      <div>
        <h3>这是B组件</h3>
        <div>我的名字是：{this.props.name}</div>
        <div>我的年龄是：{this.props.age}</div>
        <div>我的性别是：{this.props.sex}</div>
        <input type='text' {...this.props} ></input>
        <div>{this.props.value}</div>
      </div>
    )
  }
}
export default A("提示")(B);