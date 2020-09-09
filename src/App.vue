<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <img width="400" src="./assets/sw logo.png"><br>
    <div class="ui three item menu">
      <router-link class="item" to="/">Home</router-link>
      <router-link class="item" to="/Planets">Planets</router-link>
      <router-link class="item" to="/Other">Other</router-link>  
    </div>
    
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App' 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
