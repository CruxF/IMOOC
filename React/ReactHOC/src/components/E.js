import React, { Component } from 'react'
import D from './D'
class E extends Component {
  componentDidMount() {
    console.log('我是原始生命周期')
  }
  render() {
    return (
      <div>
        我是div
      </div>
    )
  }
}
 export default D(E)