<template>
  <div id="app">
  <Tabbar></Tabbar>
  <router-view></router-view>
  <Player></Player>
  </div>
</template>
<script>
import Tabbar from './components/Tabbar'
import Player from './views/Player'
export default {
  name : 'App',
  components:{
    Tabbar,
    Player
  }
}
</script>
<style lang="scss">


</style>
