<template>
  <div class="tabbar">
    <div class="left" @click="accountClick">
      <router-link tag="div" to="/pol"> </router-link>
    </div>
    <div class="center">
      <router-link tag="div" class="item" to="/myself">
        <span>我的</span>
      </router-link>
      <router-link tag="div" class="item" to="/find">
        <span>发现</span>
      </router-link>
      <router-link tag="div" class="item" to="/win">
        <span>云村</span>
      </router-link>
      <router-link tag="div" class="item" to="/video">
        <span>视频</span>
      </router-link>
    </div>
    <div class="right">
      <router-link tag="div" to="/search"></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
  methods:{
    accountClick(){
      this.$router.push('/pol')
    }
  }
};

</script>
<style lang="scss" scoped>
@import "../assets/css/variable";
@import "../assets/css/mixin";
.tabbar {
  width: 100%;
  height: 100px;
  background: #fff;
  // position: relative;
  // z-index: 9;
  // background-color: #fba;
  display: flex;
  justify-content: space-between;
  .left {
    width: 12.5%;
    height: 100%;
    // background: green;
    background: url("../assets/images/menu.png") no-repeat center center;
    background-size: 40% 40%;
  }
  .center {
    width: 65%;
    // background: red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .item {
      span {
        font-size: 30px;
        // @include font_size($font_medium);
        color: rgba(0, 0, 0, 0.8);
      }
      &.router-link-active {
        span {
          font-size: 34px;
          position: relative;
          top: -2.5px;
          font-weight: 600;
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
  .right {
    width: 12.5%;
    height: 100%;
    // background-color: yellow;
    background: url("../assets/images/search.png") no-repeat center 30px;
    background-size: 40% 40%;
  }
}
</style>