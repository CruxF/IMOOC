<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input type="checkbox"
      class="toggle"
      v-model="todo.completed">
    <label>{{todo.content}}</label>
    <button class="destroy"
      @click="deleteTodo"></button>
  </div>
</template>
<script>
  export default {
    // 父子组件间传值
    props: {
      // 接收父组件todo.vue传过来的todo对象
      todo: {
        type: Object,
        require: true
      }
    },
    methods: {
      deleteTodo() {
        // this.$emit 触发del事件，并返回todo.id
        // 往父组件传递 del 方法
        this.$emit('del', this.todo.id)
      }
    }
  }
</script>
<style scoped="scoped">
  .todo-item {
    position: relative;
    background-color: #fff;
    font-size: 24px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  }
  
  .todo-item:hover .destroy:after {
    content: "x";
  }
  
  .todo-item label {
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2em;
    transition: color 0.4s;
  }
  
  .todo-item .completed label {
    color: #d9d9d9;
    text-decoration: line-through;
  }
  
  .toggle {
    text-align: center;
    width: 40px;
    height: 40px;
    line-height: 40px;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border: none;
    appearance: none;
    outline: none;
    padding-left: 5px;
    cursor: pointer;
  }
  
  .toggle:after {
    content: url('../../../static/svg/round.svg');
  }
  
  .toggle:checked:after {
    content: url('../../../static/svg/done.svg');
  }
  
  .destroy {
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    transition: color 0.2s ease-out;
    background-color: transparent;
    appearance: none;
    border-width: 0;
    cursor: pointer;
    outline: none;
  }
</style>