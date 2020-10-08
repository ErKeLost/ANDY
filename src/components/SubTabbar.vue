<template>
  <div class="tabbar">
    <div class="left" @click="back"></div>
    <div class="center">
      <div>
        <img class="wangyi" src="../assets/images/wangyi.png" alt="">
      <span>{{title}}</span>
      </div>
      <img class="search" src="../assets/images/66.png" alt="">
    </div>
    <div class="right"></div>
  </div>
</template>
<script>
export default {
  name: "SubTabbar",
  props: {
   title: {
      type: String,
      default: "",
      required: true
    }
  },
  methods:{
    back(){
      window.history.back()
    }
  }
};
</script>
<style lang="scss" scoped>
.tabbar {
  color: white;
  width: 100%;
  height: 100px;
  // background: #000;
  position: relative;
  z-index: 9;
  // background-color: #fba;
  display: flex;
  justify-content: space-between;
  .left {
    width: 12.5%;
    height: 100%;
    // background: green;
    background: url("../assets/images/backa.png") no-repeat center center;
    background-size: 40% 40%;
  }
  .center {
    width: 75%;
    // background: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
      display: flex;
      align-items: center;
      span{
        padding-left: 2vh;
      }
    }
    .item {
      span {
        font-size: 30px;
        // @include font_size($font_medium);
        color: rgba(0, 0, 0, 0.5);
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
    img{
      width: 40px;
      height: 40px;
    }
  }
  .right {
    width: 12.5%;
    height: 100%;
    // background-color: yellow;
    background: url("../assets/images/morea.png") no-repeat center center;
    background-size: 40% 40%;
  }
}
.wangyi{
  width: 50px;
  height: 50px;
}
.search{
  width: 42px;
  height: 42px;
}
</style>