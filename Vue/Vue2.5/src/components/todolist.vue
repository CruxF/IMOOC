<template>
  <div class="hello">
    <li @click="handleOnclick">{{content}}</li>
  </div>
</template>

<script>
  export default {
    name: 'todolist',
    props: ['content', 'index'],
    methods: {
      handleOnclick() {
        this.$emit('delete', this.index);
      }
    }
  }
</script>

<style scoped>

</style>