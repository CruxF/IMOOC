### 高阶函数的基本概念
- 函数可以作为参数被传递
```js
setTimeout(()=>{
  console.log(1)
}, 1000)
```
- 函数可以作为返回值输出
```js
function foo(x) {
  return function() {
    return x;
  }
}
```

### 高阶组件基本概念（High Order Component，简称HOC）
- 高阶组件就是接受一个组件作为参数并返回一个新组件的函数
- 高阶组件是一个函数，并不是组件

### 为什么需要高阶组件
- 多个组件都需要某个相同的功能，使用高阶组件能减少重复实现
- 重复是优秀系统设计的大敌——Robert C.Martin

### 一个高阶组件的简单案例(普通事例)
```js
// A组件
import React, { Component } from 'react'
import './A.css';
function A(WrappedComponent) {
  return class A extends Component {
    render() {
      return (
        <div>
          <div className="header">这是BC组件公共的部分</div>
          <div className="content">
            <WrappedComponent></WrappedComponent>
          </div>
        </div>
      )
    }
  }
}
export default A;

// A组件样式
.header {
  width: 400px;
  height: 50px;
  line-height: 50px;
  color: #fff;
  background-color: bisque;
  text-align: center;
}
.content {
  width: 400px;
  height: 300px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

// B组件
import React from 'react'
import A from './A';
function B() {
  return (
    <div>
      这是B组件
    </div>
  )
}
export default A(B);

// C组件
import React from 'react'
import A from './A';
function C() {
  return (
    <div>
      这是C组件
    </div>
  )
}
export default A(C);

// APP.js文件
import React from 'react';
import './App.css';
import B from './components/B';
import C from './components/C';
function App() {
  return (
    <div className="App">
      <B></B>
      <C></C>
    </div>
  );
}
export default App;
```

### 一个高阶组件的简单案例(装饰器事例)
- 我没能跑起来。。。

### 代理方式的高阶组件
概念：返回的新组件类直接继承自React.Component类，新组件扮演的角色传入参数组件的一个代理，在新组件的render函数中，将被包裹组件渲染出来，除了高阶组件自已要做的工作，其余功能全都转手给了被包裹的组件<br>

具有以下的特点：
- 操纵prop
- 抽取状态
- 访问ref
- 包装组件

#### 1、操纵prop
```js
// App.js
import React from 'react';
import './App.css';
import B from './components/B';
import C from './components/C';
function App() {
  return (
    <div className="App">
      <B name={'小王'} age={18}></B>
      <C></C>
    </div>
  );
}
export default App;

// A.js
import React, { Component } from 'react'
import './A.css';
export default (title)=> WrappedComponent => class A extends Component {
  render() {
    const { age, ...otherProps } = this.props
    return (
      <div>
        <div className="header">这是BC组件公共的部分</div>
        <div className="content">
          {/* 能拿到props中的所有数据 */}
          {/* <WrappedComponent sex={'男'} {...this.props}></WrappedComponent> */}
          {/* 不能拿到age数据 */}
          <WrappedComponent sex={'男'} {...otherProps}></WrappedComponent>
        </div>
      </div>
    )
  }
}

// B.js
import React, { Component } from 'react'
import A from './A';
class B extends Component {
  render() {
    return (
      <div>
        <h3>这是B组件</h3>
        <div>我的名字是：{this.props.name}</div>
        <div>我的年龄是：{this.props.age}</div>
        <div>我的性别是：{this.props.sex}</div>
      </div>
    )
  }
}
export default A("提示")(B);

// C.js
import React from 'react'
import A from './A';
function C() {
  return (
    <div>
      这是C组件
    </div>
  )
}
export default A("提示")(C);
```

#### 2、访问ref
```js
// C.js
import React, { Component } from 'react'
import A from './A';
class C extends Component {
  getName() {
    return '我是C组件'
  }
  render() {
    return (
      <div>
        这是C组件
      </div>
    )
  }
}
export default A("提示")(C);

// A.js
import React, { Component } from 'react'
import './A.css';
export default (title)=> WrappedComponent => class A extends Component {
  refc(instance) { //instance指的是WrappedComponent外部组件的实例
    instance.getName && alert(instance.getName()); //外部组件没有getName方法的不执行getName()
  }
  render() {
    const { age, ...otherProps } = this.props
    return (
      <div>
        <div className="header">这是BC组件公共的部分</div>
        <div className="content">
          <WrappedComponent sex={'男'} {...this.props} ref={this.refc.bind(this)}></WrappedComponent>
        </div>
      </div>
    )
  }
}
```

#### 3、抽取状态
假如我们没有将状态抽离出来，那么就会写重复的代码，比如B、C组件有相同的功能，那么在B组件写一套，在C组件又得写一套一样的
```js
import React, { Component } from 'react'
import A from './A';

class B extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    // 在JavaScript的类中是无法自动绑定this的，因此我们需要手动绑定
    this.changeInput = this.changeInput.bind(this)
  }
  changeInput(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h3>这是B组件</h3>
        <div>我的名字是：{this.props.name}</div>
        <div>我的年龄是：{this.props.age}</div>
        <div>我的性别是：{this.props.sex}</div>
        <input type='text' {...this.props}></input>
        <div>{this.state.value}</div>
      </div>
    )
  }
}
export default A("提示")(B);
```

然后我们将子组件的状态抽取出来（也叫状态提升）
```js
// App.js
import React from 'react';
import './App.css';
import B from './components/B';
import C from './components/C';
function App() {
  return (
    <div className="App">
      <B name={'小王'} age={18}></B>
      <C></C>
    </div>
  );
}
export default App;


// A.js
import React, { Component } from 'react'
import './A.css';
export default (title)=> WrappedComponent => class A extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    // 在JavaScript的类中是无法自动绑定this的，因此我们需要手动绑定
    this.changeInput = this.changeInput.bind(this)
  }
  changeInput(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    const newProps = {
      value: this.state.value,
      onChange: this.changeInput
    }
    return (
      <div>
        <div className="header">这是BC组件公共的部分</div>
        <div className="content">
          <WrappedComponent sex={'男'} {...this.props} {...newProps}></WrappedComponent>
        </div>
      </div>
    )
  }
}

// B.js
import React, { Component } from 'react'
import A from './A';

class B extends Component { 
  render() {
    return (
      <div>
        <h3>这是B组件</h3>
        <div>我的名字是：{this.props.name}</div>
        <div>我的年龄是：{this.props.age}</div>
        <div>我的性别是：{this.props.sex}</div>
        <input type='text' {...this.props} ></input>
        <div>{this.props.value}</div>
      </div>
    )
  }
}
export default A("提示")(B);

// C.js
import React, { Component } from 'react'
import A from './A';
class C extends Component {
  render() {
    return (
      <div>
        <div>这是C组件</div>
        <input type='text' {...this.props} ></input>
        <div>{this.props.value}</div>
      </div>
    )
  }
}
export default A("提示")(C);
```

#### 4、包装组件
类似于下面的代码
```js
return (
  <div>
    <div className="header">这是BC组件公共的部分</div>
    <div className="content">
      <WrappedComponent sex={'男'} {...this.props} {...newProps}></WrappedComponent>
    </div>
  </div>
)
```

### 继承方式的高阶组件
概念：采用继承关联作为参数的组件和返回的组件，假如传入的组件参数是WrappedComponent，那么返回的组件就直接继承自WrappedComponent<br>

- 代理方式的高阶组件
```js
export default ()=> WrappedComponent => class A extends Component {
  render() {
    const { ...otherProps } = this.props
    return <WrappedComponent {...otherProps} />
  }
}
```
- 继承方式的高阶组件
```js
export default ()=> WrappedComponent => class A extends WrappedComponent {
  render() {
    const { ...otherProps } = this.props_
    this.props = otherProps_
    return super.render()
  }
}
```

#### 1、操纵prop
```js
// D.js
import React from 'react'
const D = (WrappedComponent) => class NewComponent extends WrappedComponent {
  render() {
    const element = super.render();
    const newStyle = {
      color: element.type==='div'?'red':'green'
    }
    const newProps = {...this.props, style: newStyle}
    return React.cloneElement(element, newProps, element.props.children)
  }
}
export default D;

// E.js
import React, { Component } from 'react'
import D from './D'
class E extends Component {
  render() {
    return (
      <div>
        我是div
      </div>
    )
  }
}
export default D(E)

// F.js
import React, { Component } from 'react'
import D from './D'
class F extends Component {
  render() {
    return (
      <p>
        我是p
      </p>
    )
  }
}
export default D(F)

// App.js
import React from 'react';
import './App.css';
import E from './components/E';
import F from './components/F';
function App() {
  return (
    <div className="App">
      <E></E>
      <F></F>
    </div>
  );
}
export default App;
```

#### 2、操纵生命周期函数
```js
// D.js
import React from 'react'
const D = (WrappedComponent) => class NewComponent extends WrappedComponent {
  componentDidMount() {
    console.log('我是修改后的生命周期')
  }
  render() {
    const element = super.render();
    const newStyle = {
      color: element.type==='div'?'red':'green'
    }
    const newProps = {...this.props, style: newStyle}
    return React.cloneElement(element, newProps, element.props.children)
  }
}
export default D;

// E.js
import React, { Component } from 'react'
import D from './D'
class E extends Component {
  componentDidMount() {
    console.log('我是原始生命周期')
  }
  render() {
    return (
      <div>
        我是div
      </div>
    )
  }
}
export default D(E)
```

### 高阶组件显示名
一般情况下，组件的代码在浏览器中是不会直接表明来自哪个组件的，那么此时我们需要这么来进行处理
```js
import React from 'react'
const D = (WrappedComponent) => class NewComponent extends WrappedComponent {
  static displayName = `NewComponent(${getDisplayName(WrappedComponent)})`
  componentDidMount() {
    console.log('我是修改后的生命周期')
  }
  render() {
    const element = super.render();
    const newStyle = {
      color: element.type==='div'?'red':'green'
    }
    const newProps = {...this.props, style: newStyle}
    return React.cloneElement(element, newProps, element.props.children)
  }
}
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
export default D;
```

### iconfont的使用
- 在iconfont官网选择+下载
- 把.css、.eot、.js、.svg、.ttf、.woff的文件导入到项目中
- 在APP.js文件中导入`import './static/iconfont.css';`
- 在组件中使用`<div className={'iconfont icon-home'}></div>`<br><br>

### 路由的使用
- 安装：npm install -S react-router-dom
- 编写route.js
```js
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home';
import Category from './pages/category';
import Car from './pages/car';
import User from './pages/user';
export default ()=>(
  <BrowserRouter>
    <Switch>
      <Route path='/home' component={Home}></Route>
      <Route path='/category' component={Category}></Route>
      <Route path='/car' component={Car}></Route>
      <Route path='/user' component={User}></Route>
    </Switch>
  </BrowserRouter>
)
```
- 调用route.js
```js
import React from 'react';
import RouteMap from './router';
import './static/iconfont.css';
import './App.css';
function App() {
  return (
    <div className="App">
      <RouteMap></RouteMap>
    </div>
  );
}
export default App;
```
- 底部公共组件Tabbar的编写
```js
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
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }
  render() {
    const url = window.location.href;
    return (
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
    )
  }
}
```

### 使用高阶组件改写Tabbar
在上面的代码中，Tabbar组件被home、car、user、category页面用到，每个页面都有相同的引入和相同的CSS代码，这是非常多余的事情
```js
// home.js
import React, { Component } from 'react';
import Tabbar from '../components/tabbar/index';

export default class home extends Component {
  render() {
    return (
      <div>
        <div className="home-header"></div>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
```

因此我们可以把Tabbar改写为一个高阶组件
```js
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
```
通过这种方式，我们可以在Tarbar组件中统一定义外部组件WrappedComponent的一套CSS样式代码，以及减少外部组件WrappedComponent的代码调用
```js
import React, { Component } from 'react';
import Tabbar from '../components/tabbar/index';

class home extends Component {
  render() {
    return (
      <div>
        <div className="home-header"></div>
      </div>
    )
  }
}
export default Tabbar(home);
```