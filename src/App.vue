<template>
  <div id="app">

      <sider />
      
      <bodys />

      <div style="clear: both;"></div>

      <footers />

  </div>
</template>

<script>

    import Vue from 'vue'
    import sider from './mainView/sider.vue'
    import body from './mainView/body.vue'
    import footer from './mainView/footer.vue'

    Vue.component('sider',sider);
    Vue.component('bodys',body);
    Vue.component('footers',footer);

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background: #e8e8e8;
  }
</style>
