<template>
  <div id="app" :key="key">
         <TopNav></TopNav>
         <Header></Header>
         <img alt="Vue logo" src="./assets/images/logo.png">
         <router-view></router-view>
         <Footer></Footer>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


import {router} from "./routes/router"
export default {
  name: 'app',
  router,
  components: {
    TopNav,
    Header,
    Footer
  },
  data(){
    return {
      key:"" //监听url 变化（解决路由不变，参数变但页面不刷新的问题
    }
  },
  watch:{
    $route:function(newUrl,oldUrl){
      //路由（包括参数发生变化时 ，对key进行赋值）
      //如果key 发生了变化则页面执行刷新
      this.key=new Date().getTime()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 6px; */
}
</style>
