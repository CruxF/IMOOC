<template>
  <div id="footer"> 
  	<span>作者是:{{this.author}},博客地址:{{this.blog}}</span> 
  </div>
</template>
<script>
  export default {
    data() {
      return {
        author: "fengxiong",
        blog: "cruxf"
      }
    }
  }
</script>
<style>
/*导入外部样式*/
@import '../../common/footer.css';
</style>