<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input id="add-input" v-model="newItem" v-on:keyup.enter="addNew" placeholder="请添加你的清单" />
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <p>显示内容:{{childWords}}</p>
    <!--显示组件内容-->
    <ComponentA msgfromfather="父亲的值" v-on:child-tell-me-something="listenToMyBoy"></ComponentA>
  </div>
</template>

<script>
  import Store from '../store';
  console.log(Store);
  //导入组件
  import ComponentA from './componentA';
  export default {
    name: 'App',
    data() {
      return {
        title: "这是一个清单",
        items: Store.fetch() == null ? [] : Store.fetch(),
        newItem: '',
        childWords: ''
      }
    },
    watch: {
      items: {
        handler(items) {
          Store.save(items);
        },
        deep: true
      }
    },
    methods: {
      toggleFinish(item) {
        item.isFinished = !item.isFinished;
      },
      addNew() {
        this.items.push({
          label: this.newItem,
          isFinished: false
        });
        this.newItem = '';
      },
      listenToMyBoy(msg) {
        console.log(msg);
        this.childWords = msg;
      }
    },
    //注册组件
    components: {
      ComponentA
    }
  }
</script>

<style scoped="scoped">
  .finished {
    text-decoration: line-through;
  }
</style>