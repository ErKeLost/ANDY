<template>
  <transition @enter="enter" @leave="leave" :css="false">
    <!-- <div class="normal-player" v-show="this.$store.getters.isfullscreen" > -->
    <div class="normal-player" v-show="this.isfullscreen" ref="normalplayer">
      <div class="player-wrapper">
        <PlayTabbar></PlayTabbar>
        <PlayMiddle></PlayMiddle>
        <PlayBottom></PlayBottom>
      </div>
      <div class="play_bg">
        <img :src="currentsong.picUrl" alt="" />
        <div class="bgc"></div>
      </div>
    </div>
  </transition>
</template>
<script>
import PlayTabbar from "../components/PlayTabbar";
import PlayMiddle from "../components/PlayMiddle";
import PlayBottom from "../components/PlayBottom";
import { mapGetters, mapActions } from "vuex";
import Velocity from "velocity-animate";
import "velocity-animate/velocity.ui";
export default {
  name: "NormalPlayer",
  components: {
    PlayTabbar,
    PlayMiddle,
    PlayBottom,
  },
  computed: {
    ...mapGetters(["isfullscreen", "currentsong"]),
  },
  methods: {
    ...mapActions(["getSongLyric"]),

    enter(el, done) {
      Velocity(
        this.$refs.normalplayer,
        "transition.shrinkIn",
        {
          duration: 500,
        },
        function () {
          done();
        }
      );
    },
    leave(el, done) {
      Velocity(
        this.$refs.normalplayer,
        "transition.shrinkOut",
        {
          duration: 500,
        },
        function () {
          done();
        }
      );
    },
  },
  watch: {
    // currentsong(newValue, oldValue) {
    //   //  if (newValue.id === undefined) {
    //   //    return
    //   // }
    //   this.getSongLyric(newValue.id);
    // },
  },
};
</script>
<style lang="scss" scoped>
.normal-player {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  // transform: translateY(15px);
  // background: red;
  .player-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 9999999999;
  }
  .play_bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      filter: blur(5px);
    }
    .bgc {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      top: 0;
    }
  }
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