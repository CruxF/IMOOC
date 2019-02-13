import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      inputValue: ''
    }
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  // 增加内容
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
  // 输入内容监听
  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  // 删除内容
  handleItemClick(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={this.handleBtnClick}>Add</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index)=>{
              return <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
