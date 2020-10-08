<template>
  <div @click.stop="hidelist">
    <transition>
      <div class="list-player" v-show="isShow">
        <div class="player-wrapper">
          <div class="hide">
            <div class="player-top">
              <p>当前播放</p>
              <span>(number)</span>
            </div>
            <div class="player-middle">
              <div class="lefft">
                <img src="../assets/images/gdg.png" alt="" />
                <p>列表循环</p>
              </div>
              <div class="riggh">
                <img src="../assets/images/abo.png" alt="" />
                <p>收藏全部</p>
                <span>|</span>
                <img @click="delall" src="../assets/images/del.png" alt="" />
              </div>
            </div>
          </div>
          <div class="player-bottom">
            <ScrollView ref="scrollview">
              <ul>
                <li
                  v-for="(value, index) in songs"
                  :key="value.id"
                  @click="selectmusic(index)"
                >
                  <img src="../assets/images/vo.png" alt="" />
                  <p>{{ value.name }}</p>
                  <span class="po">播放来源</span>
                  <img
                    @click.stop="del(index)"
                    class="wudi"
                    src="../assets/images/x.png"
                    alt=""
                  />
                </li>
              </ul>
            </ScrollView>
          </div>
        </div>
      </div>
    </transition>
    <div class="mask" v-show="showw" ref="hh" @click.stop="tototo"></div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import ScrollView from "../components/ScrollView";
export default {
  name: "ListPlayer",
  components: {
    ScrollView,
  },
  computed: {
    ...mapGetters(["songs", "isshowlistplayer"]),
  },

  data: function () {
    return {
      isShow: false,
      showw: false,
    };
  },
  methods: {
    ...mapActions(["setcurrentindex", "setdelsong"]),
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
    shol() {
      this.showw = true;
    },
    hiol() {
      this.showw = false;
    },
    hidelist() {
      this.$emit("hidelist");
    },
    tototo() {
      this.$emit("tototo");
    },
    selectmusic(index) {
      this.setcurrentindex = index;
    },
    del(index) {
      this.setdelsong(index);
    },
    delall() {
      this.setdelsong();
      },
  },
  watch: {
    isshowlistplayer(newValue, oldValue) {
      if (newValue) {
        this.$refs.scrollview.refresh();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.hide {
  position: relative;
  z-index: 9989;
  // background: white;
}
.list-player {
  border-radius: 10%;
  box-sizing: border-box;
  // border: 10px solid;
  height: 888px;
  font-size: 25px;
  position: fixed;
  left: 0;
  bottom: 20px;
  width: 90%;
  // left: 50%;
  // transform: translateX(-50%);
  margin-left: 5%;
  background: white;
  position: fixed;
  z-index: 9;
  // height: 400px;
  .player-wrapper {
    .player-top {
      width: 100%;
      height: 80px;
      display: flex;
      align-items: center;
      margin-left: 40px;
      font-size: 30px;
      font-weight: 600;
      span {
        padding-left: 20px;
      }
    }
    .player-middle {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 28px;
      .lefft {
        img {
          width: 40px;
          height: 40px;
        }
        display: flex;
        justify-content: center;
        margin-left: 20px;
      }
      .riggh {
        img {
          width: 40px;
          height: 40px;
        }
        display: flex;
        margin-right: 20px;
        span {
          padding: 0 40px;
          opacity: 0.5;
        }
        p {
          margin-left: 20px;
        }
      }
    }
    .player-bottom {
      border-top: 1px solid rgba(0, 0, 0, 0.5);
      margin-top: 10px;
      padding-top: 50px;
      display: flex;
      height: 500px;
      justify-content: space-between;
      font-size: 28px;
      img {
        width: 35px;
        height: 35px;
        margin: 0 20px;
      }
      div {
        display: flex;
      }
      .po {
        margin-bottom: 460px;
        padding: 0 20px;
        font-size: 25px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 20px;
        margin: 0 20px;
      }
      ul {
        height: 630px;
        overflow: hidden;
      }
      li {
        display: flex;
        margin-bottom: 45px;
      }
      .wudi {
        transform: translateX(25px);
      }
    }
  }
}
.v-enter {
  transform: translateY(100%);
}
.v-enter-to {
  transform: translateY(0);
}
.v-enter-active {
  transition: transform 0.5s;
}
.v-leave {
  transform: translateY(0%);
}
.v-leave-to {
  transform: translateY(100%);
}
.v-leave-active {
  transition: transform 0.5s;
}
.mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
}
</style>