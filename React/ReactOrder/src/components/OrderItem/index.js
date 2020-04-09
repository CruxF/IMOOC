import React, { Component } from 'react'
import './style.css'

export default class OrderItem extends Component {
  // 打分等级
  constructor(props) {
    super(props)
    this.state = {
      stars: props.data.stars || 0,
      editing: false,
      comment: props.data.comment || ""
    }
  }
  // 评价订单组件
  renderEditArea() {
    return (
      <div className="orderItem-commentContainer">
        <textarea className="orderItem-comment" onChange={this.handleCommentChange} value={this.state.comment}></textarea>
        {this.renderStars()}
        <button className="orderItem-btn orderItem-btn-red" onClick={this.handleSubmitComment}>提交</button>
        <button className="orderItem-btn orderItem-btn-gray" onClick={this.handleCancelComment}>取消</button>
      </div>
    )
  }
  // 五角星渲染组件
  renderStars() {
    const { stars } = this.state
    return (
      <div className="orderItem-star">
        {
          [1,2,3,4,5].map((item,index)=>{
            const lightClass = stars >= item?"orderItem-star-light":"";
            return <span key={index} className={lightClass} onClick={this.handleClickStars.bind(this, item)}>★</span>
          })
        }        
      </div>
    )
  }
  // 点击评价事件
  handleEditArea = ()=>{
    this.setState({
      editing: true
    })
  }
  // 文本区域内容
  handleCommentChange = (e)=>{
    this.setState({
      comment: e.target.value
    })
  }
  // 点击星星事件
  handleClickStars = (index)=>{
    this.setState({
      stars: index
    })
  }
  // 点击提交评论
  handleSubmitComment = ()=>{
    const { id } = this.props.data
    const { comment, stars } = this.state
    this.setState({
      editing: false
    })
    this.props.onSubmit(id, comment, stars)
  }
  // 点击取消评论
  handleCancelComment = ()=>{
    this.setState({
      editing: false,
      comment: this.props.data.comment || "",
      stars: this.props.data.stars || 0
    })
  }
  render() {
    const { shop, product, price, picture, ifCommented} = this.props.data
    return (
      <div className='orderItem'>
        <div className='orderItem-picContainer'>
          <img className='orderItem-pic' src={picture}></img>
        </div>
        <div className='orderItem-content'>
          <div className='orderItem-product'>{product}</div>
          <div className='orderItem-shop'>{shop}</div>
          <div className='orderItem-detail'>
            <div className='orderItem-price'>{price}</div>
            <div>
              {
                ifCommented? (
                  <button className='orderItem-btn orderItem-btn-gray'>已评价</button>
                ): (
                  <button className='orderItem-btn orderItem-btn-red' onClick={this.handleEditArea}>评价</button>
                )
              }              
            </div>
          </div>
        </div>
        {/* 评价模块 */}
        <div>
          {this.state.editing?this.renderEditArea():null}
        </div>
      </div>
    )
  }
}
