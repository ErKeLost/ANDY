<template>
  <transition @enter="enter" @leave="leave" :css="false">
    <div>
      <div class="minni-player" v-show="isshowminiplayer" ref="xx">
        <div class="player-wrapper" v-show="isShow">
          <div class="player-left" @click.stop="shownormalplayer">
            <img :src="currentsong.picUrl" alt="" />
            <div class="player-title">
              <h3>{{currentsong.name}}</h3>
              <P>{{currentsong.singer}}</P>
            </div>
          </div>
          <div class="player-right">
            <div class="play" @click="play" ref="play"></div>
            <div class="list" @click="showlist"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Velocity from "velocity-animate";
import "velocity-animate/velocity.ui";
export default {
  name: "MinniPlay",
  data: function () {
    return {
      isShow: true,
    };
  },
  methods: {
    showlist() {
      this.$emit("showlist");
    },
    showa() {
      this.isShow = false;
    },
    hidea() {
      this.isShow = true;
    },
    ...mapActions(["setfullscreen", "setminiplayer", "setisplaying"]),
    shownormalplayer() {
      this.setfullscreen(true);
      this.setminiplayer(false);
    },
    enter(el, done) {
      Velocity(
        el,
        "transition.bounceDownIn",
        {
          duration: 800,
        },
        function () {
          done();
        }
      );
    },
    leave(el, done) {
      Velocity(
        el,
        "transition.bounceDownOut",
        {
          duration: 800,
        },
        function () {
          done();
        }
      );
    },
    play() {
      this.setisplaying(!this.isplaying);
    },
  },
  computed: {
    ...mapGetters(["isshowminiplayer", "isplaying","currentsong"]),
  },
  watch: {
    isplaying(newvalue, oldvalue) {
      if (newvalue) {
        this.$refs.play.classList.add("active");
      } else {
        this.$refs.play.classList.remove("active");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.minni-player {
  position: fixed;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 120px;
  background: white;
  border: 1px solid rgba(0,0,0,.5);
  border-left: none;
  border-right: none;
  .player-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .player-left {
      padding-left: 20px;
      display: flex;
      img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 20px;
      }
      .player-title {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        h3 {
          font-size: 25px;
        }
        p {
          font-size: 20px;
        }
      }
    }
    .player-right {
      display: flex;
      align-items: center;
      justify-content: center;
      .play {
        width: 84px;
        height: 84px;

        background: url("../assets/images/ppl.png");

        background-repeat: no-repeat;
        background-size: 70%;
        background-position: center center;
        &.active {
          width: 84px;
          height: 84px;

          background: url("../assets/images/vidd.png");
          background-repeat: no-repeat;
          background-size: 80%;
          background-position: center center;
        }
      }
      .list {
        width: 84px;
        height: 84px;
        background: url("../assets/images/menuuu.png");
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: center center;
      }
    }
  }
}
// .v-enter {
//   transform: translateY(100%);
//   // opacity: 1;
// }
// .v-enter-to {
//   transform: translateY(0);
//   // opacity: 0;
// }
// .v-enter-active {
//   transition: transform 1s;
// }
// .v-leave {
//   transform: translateY(0%);
//   // opacity: 0;
// }
// .v-leave-to {
//   transform: translateY(100%);
//   // opacity: 1;
// }
// .v-leave-active {
//   transition: transform 1s;
// }
</style>