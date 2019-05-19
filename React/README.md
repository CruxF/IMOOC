# 前言


由于这会是一篇很长的课程学习总结，为了优化大家的阅读体验，强烈建议安装Chrome浏览器的插件——GayHub。[下载安装地址](https://github.com/jawil/GayHub)<br>


# 1、ReactInstance => [基于实例的React16傻瓜课程](https://www.imooc.com/course/qa/id/1045/t/2?page=3)
React萌新不敢评论这门课程到底好不好，只是能确定的是自己能听明白，代码敲的出来，独特的见解暂时还没，还需不断的学习再学习，下面是一些在学习该课程记录的流水账，有兴趣的可以看一看。<br>

## React是什么
- 声明式的写法
- 组件化
- 一次学习，随处编写<br>

## 为什么要学习React
- 大厂光环
- 最流行，使用人数最多，最被开发者热爱
- 简单易懂
- React是什么？以及为什么要学习React？还有就是React和Vue的优点分别是什么？大家可以[来这里](https://www.zhihu.com/question/301860721/answer/545031906)寻找答案<br>

## 准备开发环境
- 配置好Node环境
- 全局安装官方脚手架工具：npm install create-react-app -g
- 创建项目：create-react-app 项目名<br>

## React第一个组件
- 首先在src文件夹目录下创建一个Welcome.js文件
```js
import React from 'react';
class Welcome extends React.Component{
  render() {
    return <h1>Hello React</h1>
  }
}
export default Welcome

// 备注：component组件的意思
```
- 接着将该组件挂载到DOM节点上(index.js为主入口文件)
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Welcome from './Welcome';

ReactDOM.render(<Welcome />, document.getElementById('root'));
serviceWorker.unregister();
```
- 组件中的render方法代表的是这个组件最终显示出来的结果
- 主入口文件中ReactDOM.render方法是能够把组件挂载到DOM节点上
- 关于[serviceWorker.unregister()](https://blog.csdn.net/qq_17347575/article/details/80109046)的知识<br>

## JSX部分
JSX是React的核心组成部分，它使用XML标记的方式去直接声明界面，界面组件之间可以互相嵌套。可以理解为在JS中编写与XML类似的语言,一种定义带属性树结构（DOM结构）的语法，它的目的不是要在浏览器或者引擎中实现，它的目的是通过各种编译器将这些标记编译成标准的JS语言。简单总结如下：
- 是JavaScript的语法扩展，是一种语法糖
- 可以使用花括号{}内嵌任何JavaScript表达式
- JSX属性

我们可以写出这样的代码
```js
import React from 'react';
class Welcome extends React.Component {
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
```
<br>

## React的属性(Props)
- 组件像一个函数一样，接收特定的输入(props)，产出特定的输出(React elements)，下面使用一个例子来更具体的说明，涉及到的主要是有三个文件，并且需要事先安装好bootstrap：npm install bootstrap --save
```js
// index.js文件
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();


// App.js文件
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
const tags = ['恐龙','足球小子']
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <NameCard name="King" number={4324324325} isHuman tags={tags}></NameCard>
      </div>
    );
  }
}
export default App;


// components下的NameCard.js文件
import React from 'react'
class NameCard extends React.Component{
  render() {
    const { name, number, isHuman, tags } = this.props
    return (
      <div className="alert alert-success">
        <h1 className="alert-heading">{name}</h1>
        <ul>
          <li>电话：{number}</li>
          <li>{isHuman?'人类':'外星人'}</li>
          <hr />
          <p>
            {tags.map((tag,index)=>(
              <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
            ))}
          </p>
        </ul>
      </div>
    )
  }
}
export default NameCard
```

其实，组件能够使用函数式的写法，下面我们对NameCard.js文件做一些修改
```js
import React from 'react'
const NameCard = (props) => {
  const { name, number, isHuman, tags } = props
  return (
    <div className="alert alert-success">
      <h1 className="alert-heading">{name}</h1>
      <ul>
        <li>电话：{number}</li>
        <li>{isHuman?'人类':'外星人'}</li>
        <hr />
        <p>
          {tags.map((tag,index)=>(
            <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
          ))}
        </p>
      </ul>
    </div>
  )
}
export default NameCard
```
<br>

## React状态(State)
在一个组件中，属性(props)的内容是不可变的，传入什么就是什么。然而，组件内部的数据是可以动态改变，this.setState()是更新state的唯一途径，下面看代码，引入部分请自行解决
```js
import React from 'react'
class LikesButton extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
    // 在JavaScript的类中是无法自动绑定this的，因此我们需要手动绑定
    this.increaseLikes = this.increaseLikes.bind(this)
  }
  // 点赞增加方法
  increaseLikes() {
    this.setState({
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
          onClick={this.increaseLikes}
        >
          点赞{this.state.likes}        
        </button>
      </div>
    )
  }
}
export default LikesButton
```

关于this的问题，其实我们还能够使用箭头函数来解决
```js
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
```
<br>

## React生命周期
- 组件初始化
- 组件更新
- 组件卸载

下面直接看代码(记住这是安装了bootstrap包的项目：npm install bootstrap --save)
```js
import React from 'react'
class DigitalClock extends React.Component{
  // constructor是作组件state初绐化工作，并不是设计来作加载数据的
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }
  // componentDidMount方法中的代码，是在组件已经完全挂载到网页上才会调用被执行，
  // 所以可以保证数据的加载。state每更新一次，那么组件也是会重新初始化一次。
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
```
<br>

## React表单(Forms)
- 可控表单组件：在render()函数中设置了value的值是一个功能受限的组件，渲染出来的HTML元素始终保持value属性的值，即使用户输入也不会改变。优点是1、符合React单向数据流特性，即从state流向render输出的结果；2、数据存储在state中，便于访问和处理，在情况允许的条件下，我们应该优先考虑编写可控组件。下面看demo代码
```js
import React from 'react'
class CommentBox extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  // 表单数据改变
  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  // 表单数据提交
  handleSubmit(event) {
    alert(this.state.value)
    event.preventDefault()
  }
  render() {
    return (
      <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>留言内容</label>
          <input
            type="text"
            className="form-control"
            placeholder="请输入内容"
            onChange={this.handleChange}
            value={this.state.value} />
        </div>
        <button type="submit" className="btn btn-primary">留言</button>
      </form>
    )
  }
}
export default CommentBox;
```

- 不可控组件：在input标签中不把value绑定到state上的就是不可控组件，它的数据不与state对应，所以在开发时会给自己挖很多坑，但是不可控组件并不是不可掌控，下面看demo代码
```js
import React from 'react'
class CommentBox extends React.Component{
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    alert(this.textInput.value)
    event.preventDefault()
  }
  render() {
    return (
      <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>留言内容</label>
          <input
            type="text"
            className="form-control"
            placeholder="请输入内容"
            ref={(textInput) => {this.textInput = textInput}} />
        </div>
        <button type="submit" className="btn btn-primary">留言</button>
      </form>
    )
  }
}
export default CommentBox;
```
<br>

## React的状态提升和单向数据流
- React中的状态提升概括来说,就是将多个组件需要共享的状态提升到它们最近的父组件上.在父组件上改变这个状态然后通过props分发给子组件.
- props是React中用来让组件之间相互联系的一种机制，props的传递过程对React是非常直观的，React的单向数据流主要的流动管道就是props，props本身是不可变的，当我们试图改变props的原始值，React会报类型错误的警告。组件的props一定是来源于默认指定的属性或者是从父组件传入的。
- 下面请看demo代码，来更好的理解上面两个知识点
```js
// App.js文件
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['this if my first reply']
    }
    this.addComment = this.addComment.bind(this)
  }
  addComment(comment) {
    this.setState({
      // ES6的解构赋值，经常不用会忘的那种
      comments: [...this.state.comments, comment]
    })
  }
  render() {
    const { comments } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <CommentList comments={comments}></CommentList>
        <CommentBox 
          commentsLength={comments.length}
          onAddComment={this.addComment}></CommentBox>
      </div>
    );
  }
}
export default App;


// CommentList.js文件
import React from 'react'
const CommentList = ({comments}) => {
  return (
    <div className="comment-list-component">
      <label>评论列表</label>
      <ul className="list-group mb-3">
        {
          comments.map((comment, index) => 
            <li key={index} className="list-group-item">{comment}</li>
          )
        }
      </ul>
    </div>
  )
}
export default CommentList;


// CommentBox.js文件
import React from 'react'
class CommentBox extends React.Component{
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    // 和vue中的发布订阅模式差不多的思想
    this.props.onAddComment(this.textInput.value)
    this.textInput.value = ""
    event.preventDefault()
  }
  render() {
    return (
      <form className="p-5" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>留言内容</label>
          <input
            type="text"
            className="form-control"
            placeholder="请输入内容"
            ref={(textInput) => {this.textInput = textInput}} />
        </div>
        <button type="submit" className="btn btn-primary">留言</button>
        <p>已有{this.props.commentsLength}条评论</p>
      </form>
    )
  }
}
export default CommentBox;
```
关于最后老师留下的作业，我抄了问答区大佬们的代码，各位可以到[源码区](https://github.com/CruxF/IMOOC/tree/master/React/ReactInstance/src)里进行查看。<br>

## React中的Context
- 简单说就是，当你不想在组件树中通过逐层传递props或者state的方式来传递数据时，可以使用Context来实现跨层级的组件数据传递。有篇文章讲的非常具体，十分建议[来这里看看](https://www.jianshu.com/p/eba2b76b290b)，下面小demo走起
```js
// App.js文件
import React, { Component } from 'react';
import logo from './logo.svg';
import ThemeContext from './theme-context'
import ThemedBar from './components/ThemedBar'
import './App.css';
const themes = {
  light: {
    classnames: 'btn btn-primary',
    bgColor: '#eee',
    color: '#000'
  },
  dark: {
    classnames: 'btn btn-light',
    bgColor: '#222',
    color: '#fff'
  }
}
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: 'light'
    }
    this.changeTheme = this.changeTheme.bind(this)
  }
  // 改变主题颜色
  changeTheme(theme) {
    this.setState({
      theme
    })
  }
  render() {
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
            <a href="#theme-switcher" className="btn btn-light" onClick={()=>{this.changeTheme('light')}}>浅色主题</a>
            <a href="#theme-switcher" className="btn btn-secondary" onClick={()=>{this.changeTheme('dark')}}>深色主题</a>
          </header>
          <ThemedBar></ThemedBar>
        </div>
      </ThemeContext.Provider>
    )
  }
}
export default App;


// theme-context.js文件
import React from 'react'
const ThemeContext = React.createContext()
export default ThemeContext


// ThemeBar.js文件
import React from 'react';
import ThemeContext from '../theme-context'
const ThemedBar = ()=>{
  return (
    <ThemeContext.Consumer>
      {
        theme => {
          return (
            <div 
              className="alert mt-5"
              style={
                {backgroundColor: theme.bgColor,color:theme.color}
              }
              >
              样式区域
              <button className={theme.classnames}>样式按钮</button>
            </div>
          )
        }
      }
    </ThemeContext.Consumer>
  )
}
export default ThemedBar;
```
<br>

## 尾声
Context有点绕，暂时还不能太好理解，先整理这么多先，知识得一点点去消化。<br><br>


# 2、ReactFast => [React16.4快速上手](https://www.imooc.com/learn/1023)
一些基本的知识我在之前一门课程中已经提到了，比如项目的搭建等，在这就不重复说明，还有就是提一下：老师讲的实在是赞赞的！这个可能是老师的[博客地址](https://88250.b3log.org/)，有兴趣的来看一看、瞧一瞧啊，下面整理一些我认为有用的、精彩的、自己还未掌握的知识点。<br>

## 父组件向子组件传值
这个传值的方式跟Vue十分的类似，都是通过属性(props)来进行传值。意思就是说父组件通过属性的形式向子组件传递参数，子组件通过props接受父组件传递过来的参数，下面直接看代码
```js
// 父组件
<ul>
  {
    this.state.list.map((item, index)=>{
      return <TodoItem key={index} content={item} />
    })
  }
</ul>

// 子组件
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
```
<br>

## 子组件向父组件传值
子组件如果想和父组件通信，子组件需要调用父组件传递过来的方法，下面看代码就能略知一二
```js
// 父组件
import React from 'react';
import TodoItem from './TodoItem'
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
  handleDelete(index) {
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
              return <TodoItem delete={this.handleDelete.bind(this)} key={index} content={item} index={index} />
            })
          }
        </ul>
      </div>
    );
  }
}
export default TodoList;


// 子组件
import React from 'react'
class TodoItem extends React.Component {
  handleDelete(){
    this.props.delete(this.props.index)
  }
  render() {
    return (
      <div onClick={this.handleDelete.bind(this)}>
        {this.props.content}
      </div>
    )
  }
}
export default TodoItem;
```

## 代码优化
其实上面的代码都是可以优化，比如在constructor中绑定this以此来提高性能
```js
// 初始的写法
<TodoItem delete={this.handleDelete.bind(this)} key={index} content={item} index={index} />

// 优雅的写法
constructor(props) {
  super(props)
  this.state = {
    list: [],
    inputValue: ''
  }
  this.handleDelete = this.handleDelete.bind(this)
}
<TodoItem delete={this.handleDelete} key={index} content={item} index={index} />
```

我们可以适当的简化代码
```js
// 初始的写法
return (
  <div onClick={this.handleDelete}>
    {this.props.content}
  </div>
)

// 优雅的写法
return (
  const { content } = this.props
  <div onClick={this.handleDelete}>
    {content}
  </div>
)
```

更骚的是对方法的写法还能继续优化
```js
// 还是个孩子的写法
<TodoItem deleteClick={this.handleDelete} key={index} content={item} index={index} />
handleDelete(){
  this.props.deleteClick(this.props.index)
}

// 长大之后的写法
<TodoItem deleteClick={this.handleDelete} key={index} content={item} index={index} />
handleDelete(){
  const { deleteClick, index } = this.props
  deleteClick(index)
}
```

关于JSX比较优雅的写法是将其内部的JavaScript表达式抽取出来封装成一个方法，请看下面代码
```js
// 初始的写法
<ul>
  {
    this.state.list.map((item, index)=>{
      return <TodoItem delete={this.handleDelete.bind(this)} key={index} content={item} index={index} />
    })
  }
</ul>

// 优雅的写法
getTodoItems() {
  this.state.list.map((item, index)=>{
    return (
      <TodoItem 
        deleteClick={this.handleDelete} 
        key={index} 
        content={item} 
        index={index}
      />
    )
  })
}
<ul>{this.getTodoItems()}</ul>
```
<br>

## 使用CSS样式
- 行内样式：最外层的{}表示里面的内容是个表达式，里面那层的{}表示里面的内容是JavaScript的一个对象
```html
<button style={{background: 'red',color: '#fff'}} onClick={this.handleBtnClick}>Add</button>
```
- 外部样式
```js
// 组件中HTML代码
<button className='red-btn' onClick={this.handleBtnClick}>Add</button>

// 外部样式代码
.red-btn {
  background-color: red;
  color: #000;
}

// 在index.js文件中引入css代码
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import './style.css'
ReactDOM.render(<TodoList />, document.getElementById('root'));
```
<br>

## 解决render()中返回的只能有唯一个包裹层问题
说的有点绕，下面我们看代码就行，比如正常情况下，这种写法是正确
```js
render() {
  return (
    <div>
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange} />
        <button className='red-btn' onClick={this.handleBtnClick}>Add</button>
      </div>
      <ul>{this.getTodoItems()}</ul>
    </div>
  );
}
```

当我们想要div与ul标签属于同一级且不被另一个div包裹时，这么写是会报错
```js
render() {
  return (
    <div>
      <input value={this.state.inputValue} onChange={this.handleInputChange} />
      <button className='red-btn' onClick={this.handleBtnClick}>Add</button>
    </div>
    <ul>{this.getTodoItems()}</ul>
  );
}
```

为了达到不被包裹的要求，我们需要借助React.Fragment
```js
render() {
  return (
    <React.Fragment>
      <div>
        <input value={this.state.inputValue} onChange={this.handleInputChange} />
        <button className='red-btn' onClick={this.handleBtnClick}>Add</button>
      </div>
      <ul>{this.getTodoItems()}</ul>
    </React.Fragment>
  );
}
```
<br>

## 尾声
不说这么多了，D大佬的实战课程买了绝对不亏，2019继续学起来。<br><br>


# 3、ReactComponent => [React组件](https://www.imooc.com/learn/944)
这到底是什么时候的课程，太太落伍了，我尝试下用react脚手架工具过一遍这个课程吧<br>

## 章节1-2
我们首先配置好开发环境
- 安装并配置好Node环境
- 安装并配置好webpack环境
- 安装脚手架工具：npm install create-react-app -g
- 创建项目：create-react-app 项目名

接下来我们就开发如同课程一毛一样的代码效果
- 创建firstDemo.js文件
```js
import React, { Component } from 'react';
class FirstDemo extends Component {
  render() {
    return (
      <div className="container">
        <h1>I am Typler</h1>
      </div>
    );
  }
}
export default FirstDemo;
```
- 创建first.css文件
```css
.container {
  padding: 50px;
  background-color: #eee;
}
.container h1 {
  font-size: 144px;
  font-family: sans-serif;
  color: #0090a8;
}
```
- 将组件代码渲染到DOM节点上(index.js文件)
```js
import React from 'react';
import ReactDOM from 'react-dom';
import './first.css';
import FirstDemo from './firstDemo';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<FirstDemo />, document.getElementById('root'));
serviceWorker.unregister();
```
以上开发流程看不明白的建议先把我前面两期的学习整理好好学一遍先。<br>

## 尾声
落伍了，真的是落伍了，不知道怎么回事，实在看不下去，想睡觉，头晕，食言一次，保护头发从现在做起。视频中的几乎所有功能点都可以使用前面两期所学的React16知识来进行改造，然而我就是没啥动力了，呃呃呃呃呃。<br><br>
