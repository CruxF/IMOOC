import React from 'react'
class LikesButton extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
  }
  // 创建方法
  increaseLikes() {
    this.setState({
      // 会报警告，因为++符号，会导致this.state.likes本身加一，这样就相当于你尝试不用setState命令直接操作this.state.likes的值了
      likes: ++this.state.likes
    })
    console.log(this)
  }
  render() {
    return (
      <div className="likes-button-component">
        <button 
          type="button" 
          className="btn btn-outline-primary btn-lg"
          onClick={()=>{this.increaseLikes()}}
        >
          点赞{this.state.likes}        
        </button>
      </div>
    )
  }
}
export default LikesButton