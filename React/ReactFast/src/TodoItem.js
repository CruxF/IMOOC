import React from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  // 删除数据，子组件向父组件传值
  handleDelete(){
    const { deleteClick, index } = this.props
    deleteClick(index)
  }
  render() {
    const { content } = this.props
    return (
      <div onClick={this.handleDelete}>
        {content}
      </div>
    )
  }
}

export default TodoItem;