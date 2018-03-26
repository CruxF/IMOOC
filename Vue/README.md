### 说明
自定义事件：
Vue实例实现了一个自定义事件接口，用于在组件树中通信。这个事件系统独立于原生DOM事件，用法也不同。每个Vue实例都是一个事件触发器。
使用$on()监听事件；
使用$emit()在它上面触发事件；
使用$dispatch()派发事件，事件沿着父链冒泡；(在vue2.0中被弃用)
使用$broadcast()广播事件，事件向下传导给所有的后代(在vue2.0中被弃用)

注意：不同于DOM事件，Vue事件在冒泡过程中第一次触发回到之后自动停止冒泡，除非回调明确返回true。

# vbase

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
