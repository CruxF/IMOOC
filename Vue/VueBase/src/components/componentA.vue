<template>
  <div class="hello">
    <h1>{{message}}</h1>
    <button v-on:click="onClickMe">点击我！</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "hello vuee"
      }
    },
    //父子组件传值
    props: ['msgfromfather'],
    methods: {
      onClickMe() {
        //console.log(this.msgfromfather)
        this.$emit('child-tell-me-something',this.message);
      }
    }
  }
</script>

<style>

</style>