<template>
  <div>
    <div class="player-bottom">
      <div class="play-top">
        <div class="fav"></div>
        <div class="down"></div>
        <div class="sing"></div>
        <div class="comment"></div>
        <div class="more"></div>
      </div>
      <div class="play-progress">
        <span>00:00</span>
        <div class="progress-bar">
          <div class="progress-line">
            <div class="progress-dot"></div>
          </div>
        </div>
        <span>00:00</span>
      </div>
      <div class="play-controll">
        <div class="mode"></div>
        <div class="prev" @click="prev"></div>
        <div class="play" @click="play" ref="play"></div>
        <div class="next" @click="next"></div>
        <div class="favourite" ></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PlayBottom",
  computed: {
    ...mapGetters(["isplaying", "currentindex"]),
  },
  methods: {
    ...mapActions(["setisplaying", "setcurrentindex"]),
    play() {
      this.setisplaying(!this.isplaying);
    },
    next() {
      this.setcurrentindex(this.currentindex + 1);
    },
    prev() {
      this.setcurrentindex(this.currentindex - 1);
    },
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
.player-bottom {
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  .play-top {
    width: 90%;
    margin: 0 auto;
    // background: blue;
    padding-bottom: -20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      width: 84px;
      height: 84px;
    }
    .fav {
      background: url("../assets/images/favourite.png");
      background-repeat: no-repeat;
      background-size: 70%;
    }
    .down {
      background: url("../assets/images/downaa.png");
      background-repeat: no-repeat;
      background-size: 70%;
    }
    .sing {
      background: url("../assets/images/singaa.png");
      background-repeat: no-repeat;
      background-size: 70%;
      background-position: 10px 0;
    }
    .comment {
      background: url("../assets/images/comaa.png");
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: 20px 3px;
    }
    .more {
      background: url("../assets/images/moaaa.png");
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: 15px 3px;
    }
  }
  .play-progress {
    width: 95%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 22px;
      color: rgba(255, 255, 255, 0.5);
    }
    .progress-bar {
      width: 100%;
      margin: 20px 30px;
      height: 3px;
      background: rgba(255, 255, 255, 0.4);
      position: relative;
      .progress-line {
        width: 50%;
        height: 100%;
        background: rgba(255, 255, 255, 1);
        // position: relative;
        .progress-dot {
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  .play-controll {
    // background: red;
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      width: 84px;
      height: 84px;
    }
    .mode {
      background: url("../assets/images/loop_163.png");
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: 0 15px;
    }
    .prev {
      background: url("../assets/images/prev_163.png");
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: 0 15px;
    }
    .play {
      background: url("../assets/images/play_163.png");
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: 0px;
      &.active {
        background: url("../assets/images/pause_163.png");
        background-repeat: no-repeat;
        background-size: 100%;
      }
    }
    .next {
      background: url("../assets/images/next_163.png");
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: 20px 15px;
    }
    .favourite {
      background: url("../assets/images/open.png");
      background-repeat: no-repeat;
      background-size: 60%;
      background-position: 15px 15px;
    }
  }
}
</style>