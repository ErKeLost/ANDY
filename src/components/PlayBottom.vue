<template>
  <div>
    <div class="player-bottom">
      <div class="play-top">
        <div class="fav" @click="favorite" :class="{'active':isfavorite(currentsong)}"></div>
        <div class="down"></div>
        <div class="sing"></div>
        <div class="comment"></div>
        <div class="more"></div>
      </div>
      <div class="play-progress">
        <span ref="ele">00:00</span>
        <div class="progress-bar" @click="proclick" ref="progressBar">
          <div class="progress-line" ref="progressLine">
            <div class="progress-dot"></div>
          </div>
        </div>
        <span ref="eletotaltime">00:00</span>
      </div>
      <div class="play-controll">
        <div class="mode"></div>
        <div class="prev" @click="prev"></div>
        <div class="play" @click="play" ref="play"></div>
        <div class="next" @click="next"></div>
        <div class="favourite"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { formarttime } from "../tools/tools";
export default {
  name: "PlayBottom",
  computed: {
    ...mapGetters(["isplaying", "currentindex", "curtime","currentsong","favoriteList"]),
  },
  methods: {
    ...mapActions(["setisplaying", "setcurrentindex", "setcurtime","setFavoriteSong"]),
    play() {
      this.setisplaying(!this.isplaying);
    },
    isfavorite(song){
      let result  = this.favoriteList.find(function(currentValue){
        return currentValue.id === song.id
      })
      return result !== undefined
    },
    next() {
      this.setcurrentindex(this.currentindex + 1);
      // this.setisplaying(!this.isplaying);
      // this.$refs.audio.play()
    },

    // play() {
    //   //方法定义
    //   // console.log("子组件function测试！");
    // },

    prev() {
      this.setcurrentindex(this.currentindex - 1);
    },
    favorite(){
      this.setFavoriteSong(this.currentsong)
      // console.log(a);
    },
   
    proclick(e) {
      // 计算进度条的位置
      // let normalleft = e.target.offsetLeft;
      let normalleft = this.$refs.progressBar.offsetLeft
      let eventleft = e.pageX;
      let clickleft = eventleft - normalleft;
      // let prowidth = e.target.offsetWidth;
      let prowidth = this.$refs.progressBar.offsetWidth;
      let value = clickleft / prowidth;
      this.$refs.progressLine.style.width = value * 100 + "%";
      // 计算从什么时候开始播放
      let currentTime = this.totaltime * value;
      // console.log(currentTime);
      this.setcurtime(currentTime);
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
    totaltime(newvalue, oldvalue) {
      let time =formarttime(newvalue);
      this.$refs.eletotaltime.innerHTML = time.minute + ":" + time.second;
    },
    currentTime(newvalue, oldvalue) {
      // 格式化当前播放时间
      let time =formarttime(newvalue);
      this.$refs.ele.innerHTML = time.minute + ":" + time.second;
      // 播放时间计算比例
      let value = (newvalue / this.totaltime) * 100;
      this.$refs.progressLine.style.width = value + "%";
    },
  },
  props: {
    totaltime: {
      type: Number,
      default: 0,
      required: true,
    },
    currentTime: {
      type: Number,
      default: 0,
      required: true,
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
       &.active{
      background: url("../assets/images/ppt.png");
      background-repeat: no-repeat;
      background-size: 70%;
      background-position: 0px 0px;
      }
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
        width: 0%;
        height: 100%;
        background: rgba(255, 255, 255, 1);
        position: relative;
        .progress-dot {
          width: 12px;
          height: 12px;
          background: white;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
        }
      }
    }
  }
  .play-controll {
    // background: red;
    width: 90%;
    margin: 0 auto;
    padding: 20px;
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