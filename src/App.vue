<template>
  <div id="app">
         <Header></Header>
         <img alt="Vue logo" src="./assets/images/logo.png">
         <router-view></router-view>
         <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


import {router} from "./routes/router"
export default {
  name: 'app',
  router,
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 6px;
}
</style>
