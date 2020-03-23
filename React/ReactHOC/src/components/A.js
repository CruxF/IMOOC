import React, { Component } from 'react'
import './A.css';
export default (title)=> WrappedComponent => class A extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    // 在JavaScript的类中是无法自动绑定this的，因此我们需要手动绑定
    this.changeInput = this.changeInput.bind(this)
  }
  changeInput(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    const newProps = {
      value: this.state.value,
      onChange: this.changeInput
    }
    return (
      <div>
        <div className="header">这是BC组件公共的部分</div>
        <div className="content">
          <WrappedComponent sex={'男'} {...this.props} {...newProps}></WrappedComponent>
        </div>
      </div>
    )
  }
}