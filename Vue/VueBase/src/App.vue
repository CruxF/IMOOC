<template>
  <div id="app">    
    <router-link to="/TestApp">
    	<button>这是清单一号</button>
    </router-link>
    <router-link to="/IndexApp">
    	<button>这是清单二号</button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style>
  #app{
  	width: 500px;
  	height: auto;
  	margin: 80px auto;
  	border: #42B983 solid 1px;
  	text-align: center;  	
  	padding: 30px 0;
  }
  #app button{
  	background-color: #42B983;
  	color: #fff;
  	font-size: 14px;
  	border-radius: 5px;
  	border: none;
  	padding: 5px 15px;
  	cursor: pointer;
  }
</style>