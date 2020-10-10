<template>
  <div class="tabbar">
    <div class="left" @click="hiddennormalplayer"></div>
    <div class="header-title">
      <div>
        <h3>{{currentsong.name}}</h3>
        <p>{{currentsong.singer}}</p>
      </div>
      <img src="../assets/images/live.png" alt="" />
    </div>
    <div class="right"></div>
  </div>
</template>
<script>
import { mapActions , mapGetters} from "vuex";

export default {
  name: "PlayTabbar",
  methods: {
    ...mapActions(["setfullscreen","setminiplayer"]),
    hiddennormalplayer() {
      this.setfullscreen(false)
      this.setminiplayer(true)
    },
  },
  computed:{
    ...mapGetters([
      'currentsong'
    ])
  }
};
</script>
<style lang="scss" scoped>
.tabbar {
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
    background: url("../assets/images/all.png") no-repeat center center;
    background-size: 65% 65%;
  }
  .center {
    width: 75%;
    // background: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      align-items: center;
      span {
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
    img {
      width: 40px;
      height: 40px;
    }
  }
  .right {
    width: 12.5%;
    height: 100%;
    // background-color: yellow;
    background: url("../assets/images/share.png") no-repeat center center;
    background-size: 45% 45%;
  }
}
.wangyi {
  width: 50px;
  height: 50px;
}
.search {
  width: 42px;
  height: 42px;
}
.header-title {
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  img {
    width: 50px;
    height: 50px;
  }
  h3 {
    font-size: 29px;
    margin-top: 20px;
  }
  p {
    display: inline-block;
    font-size: 22px;
    color: rgba(255, 255, 255, 0.5);
    transform: translateY(-20px);
  }
}
</style>