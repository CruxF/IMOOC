import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
const tarbarArr = [{
  img: "icon-home",
  text: "首页",
  link: '/home'
},{
  img: "icon-fenlei",
  text: "分类",
  link: '/category'
},{
  img: "icon-gouwuche",
  text: "购物车",
  link: '/car'
},{
  img: "icon-yonghu",
  text: "我的",
  link: '/user'
}]

const Tabbar = (WrappedComponent) => class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }
  render() {
    const url = window.location.href;
    return (
      <div className="tabbar-container">
        <div className="tabbar-children">
          <WrappedComponent></WrappedComponent>
        </div>
        <div className="tabbar">
          <div className="tabbar-content">
            {
              tarbarArr.map((item,index)=>(
                <Link 
                  to={item.link}
                  className={"tabar-item"+(url.indexOf(item.link)>-1?" active":"")} 
                  key={index}>
                  <div className={'iconfont '+item.img}></div>
                  <div>{item.text}</div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}
export default Tabbar;
