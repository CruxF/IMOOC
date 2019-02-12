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

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import CommentBox from './components/CommentBox';
// import CommentList from './components/CommentList';

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       comments: ['this if my first reply']
//     }
//     this.addComment = this.addComment.bind(this)
//     this.deletecomment = this.deletecomment.bind(this)
//   }
//   // 添加留言
//   addComment(comment) {
//     this.setState({
//       comments: [...this.state.comments, comment]
//     })
//   }
//   // 删除留言
//   deletecomment(deleteIndex) {
//     this.setState({
//       comments: this.state.comments.filter((item, index) => {return index !== deleteIndex})
//     })
//   }
//   render() {
//     const { comments } = this.state
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//         </header>
//         <CommentList comments={comments} onDeleteComment={this.deletecomment}></CommentList>
//         <CommentBox 
//           commentsLength={comments.length}
//           onAddComment={this.addComment}></CommentBox>
//       </div>
//     );
//   }
// }

// export default App;
