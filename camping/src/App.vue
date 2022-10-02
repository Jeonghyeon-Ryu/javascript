<template>
  <div>
    <HeaderNav></HeaderNav>
    <router-view></router-view>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
import MainSwiper from './components/MainSwiper.vue'
import Sns from './components/SNS.vue'
import NodeMenu from './components/NoteMenu.vue'

export default {
  name: 'App',
  components: {
    HeaderNav,
    MainSwiper,
    Sns,
    NodeMenu
  }
}
</script>

<style>
  * { 
    margin: 0;
    padding: 0;
    list-style: none;
    font-style: none;
    box-sizing: border-box;
  }
  /* total width */
body::-webkit-scrollbar {
    background-color:#fff;
    width:16px
}

/* background of the scrollbar except button or resizer */
body::-webkit-scrollbar-track {
    background-color:#fff
}
body::-webkit-scrollbar-track:hover {
    background-color:#f4f4f4
}

/* scrollbar itself */
body::-webkit-scrollbar-thumb {
    background-color:rgba(6, 68, 32, 0.8) ;
    border-radius:16px;
    border:5px solid #fff
}
body::-webkit-scrollbar-thumb:hover {
    background-color:rgb(6,68,32);
    border:4px solid #f4f4f4
}

/* set button(top and bottom of the scrollbar) */
body::-webkit-scrollbar-button {display:none}
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
