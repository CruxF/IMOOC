import React from 'react'

class TodoItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.content}
      </div>
    )
  }
}

export default TodoItem;