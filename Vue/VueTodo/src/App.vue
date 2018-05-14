<template>
  <!-- app.vue 的template标签内只能有一个节点 -->
  <div id="app">
    <div id="cover"></div>
    <APP_Header></APP_Header>
    <APP_Todo></APP_Todo>
    <APP_Foote></APP_Foote>
    <router-view></router-view>
  </div>
</template>
<script>
  // 引入header.vue组件
  import APP_Header from './components/header/header.vue';
  // 引入todo.vue组件
  import APP_Todo from './components/todo/todo.vue';
  // 引入todo.vue组件
  import APP_Foote from './components/footer/footer.vue';
  export default {
    // 声明组件，之后便可以使用组件标签
    components: {
      APP_Header,
      APP_Todo,
      APP_Foote
    }
  }
</script>
<!-- 设置scoped 表示当前组件下的id只在当前组件起作用，不会跟其他组件引起冲突 -->
<style>
#app{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
}
#cover{
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background-color: #555;
	opacity: 0.5;
	z-index: -1;
}
</style>