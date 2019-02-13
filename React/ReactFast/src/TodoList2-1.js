import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        'learn react',
        'learn english'
      ]
    }
    this.handleBtnClick = this.handleBtnClick.bind(this)
  }
  handleBtnClick() {
    this.setState({
      list: [...this.state.list, 'hello world']
    })
  }
  render() {
    return (
      <div>
        <div>
          <input />
          <button onClick={this.handleBtnClick}>Add</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index)=>{
              return <li key={index}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
