<template>
  <div id="app">
    <h1 v-text="title"></h1>
    <input id="add-input" v-model="newItem" v-on:keyup.enter="addNew" placeholder="请添加你的清单" />
    <ul>
      <li v-for="(item,index) in lists">
        <span class="Linput">
          <input type="checkbox" @click="itemCheck(item)" />
        </span>
        <span class="item-label" v-bind:class="{'line-through':item.checked}">{{index+1}}.{{item.values}}</span>
        <span class="item-delete" v-if="item.checked" @click="deleteClick(index)">已完成,点击删除</span><br>
        <span class="item-status" v-if="!item.checked">未完成</span><br>
      </li>
    </ul>
  </div>
</template>

<script>
  import Store from '../store';
  export default {
    name: 'IndexApp',
    data() {
      return {
        title: "ONE TODO",
        lists: Store.fetch() == null ? [] : Store.fetch(),
        newItem: '',
        ischecked: true
      }
    },
    watch: {
      lists: {
        handler(lists) {
          Store.save(lists);
        },
        deep: true
      }
    },
    methods: {
      addNew() {
        this.lists.push({
          values: this.newItem,
          checked: false,
        });
        this.newItem = '';
      },
      itemCheck(item) {
        item.checked = !item.checked;
      },
      deleteClick(index) {
        this.lists.splice(index, 1);
      }
    }
  }
</script>

<style scoped="scoped">
  body {
    font-family: "微软雅黑";
  }
  #app {
    border-color: transparent;
    margin-top: 20px;
    width: 500px;
  }
  #add-input {
    width: 450px;
    height: 35px;
    padding: 0 5px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    width: 450px;
  }
  .Linput {
    float: left;
    height: 25px;
    line-height: 25px;
    width: 60px;
    border: 1px solid #ccc;
    margin-left: 18px;
  }
  .item-label {
    float: left;
    height: 25px;
    width: 330px;
    line-height: 25px;
    border: 1px solid #ccc;
    padding-left: 10px;
    margin-left: 2px;
  }
  .item-status {
    background-color: green;
    color: white;
    padding: 0 5px;
    font-size: 12px;
    float: right;
    height: 25px;
    line-height: 25px;
    border: 1px solid #ccc;
    width: 100px;
    margin-top: -27px;
    margin-right: -14px;
  }
  .item-delete {
    text-decoration: underline;
    color: #fff;
    background-color: #42B983;
    float: right;
    padding: 0 5px;
    font-size: 12px;
    float: right;
    height: 25px;
    line-height: 25px;
    border: 1px solid #ccc;
    width: 100px;
    margin-top: -27px;
    margin-right: -14px;
  }
</style>