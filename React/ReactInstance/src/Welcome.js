import React from 'react';

class Welcome extends React.Component{
  render() {
    const todoList = ['hello','hi'];
    const isLogin = true
    return <div className="box">
      <h1>Hello React</h1>
      <ul>
        {
          todoList.map(item=>
            <li>{item}</li>  
          )
        }
      </ul>
      <h3>{isLogin?'你已经登录':'请登录'}</h3>
    </div>   
  }
}

export default Welcome