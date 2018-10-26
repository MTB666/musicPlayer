<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 雅虎的样式从置，以及移除隐藏显示省略号，万能清浮动等base */
  @import './assets/scss/base.scss';
  @import './assets/scss/reset.scss';

  html,body{height:100%;}
  body{background:#282828;}
</style>
