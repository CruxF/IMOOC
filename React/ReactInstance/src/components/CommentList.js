import React from 'react'

class CommentList extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="comment-list-component pl-5 pr-5 mt-5">
        <label>评论列表</label>
        <ul className="list-group contains">
          {
            this.props.comments.map((comment, index) => 
              <div key={index} className="rows p-2">
                <li className="list-group-item mb-3">{comment}</li>
                <button className="btn btn-warning ml-3 mt-1" onClick={(event) => {this.props.onDeleteComment(index)}}>删除</button>
              </div>
            )
          }
        </ul>
      </div>
    )
  }
}

export default CommentList;