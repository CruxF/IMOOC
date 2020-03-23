import React, { Component } from 'react'
import A from './A';
class C extends Component {
  render() {
    return (
      <div>
        <div>这是C组件</div>
        <input type='text' {...this.props} ></input>
        <div>{this.props.value}</div>
      </div>
    )
  }
}
export default A("提示")(C);