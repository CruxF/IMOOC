import React from 'react'

class DigitalClock extends React.Component{
  // constructor是作组件state初绐化工作，并不是设计来作加载数据的
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  // componentDidMount方法中的代码，是在组件已经完全挂载到网页上才会调用被执行，所以可以保证数据的加载
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000);
  }
  // 组件更新时触发
  componentDidUpdate(currentProps, currentState) {
    console.log(currentState)
  }
  // 组件卸载时触发
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    return (
      <div className="digital-clock-component jumbotron">
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default DigitalClock;