<template>
  <div class="player">
    <NormalPlayer
      ref="hol"
      :totaltime="totaltime"
      :currentTime="currentTime"
    ></NormalPlayer>
    <MinniPlay @showlist="showlist" ref="bottshow"></MinniPlay>
    <ListPlayer ref="listplayer" @tototo="tototo"> </ListPlayer>
    <audio
      :src="currentsong.url"
      ref="audio"
      @timeupdate="timeupdate"
      @ended="end"
    ></audio>
  </div>
</template>
<script>
import NormalPlayer from "../components/NormalPlayer";
import MinniPlay from "../components/MinniPlay";
import ListPlayer from "../components/ListPlayer";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Player",
  components: {
    NormalPlayer,
    MinniPlay,
    ListPlayer,
  },
  methods: {
    ...mapActions(["setcurrentindex"]),
    showlist() {
      this.$refs.listplayer.show();
      this.$refs.bottshow.showa();
      this.$refs.listplayer.shol();
    },
    hidelist() {
      this.$refs.listplayer.hide();
      this.$refs.bottshow.hidea();
      this.$refs.listplayer.hiol();
    },
    tototo() {
      this.$refs.listplayer.hide();
      this.$refs.listplayer.hiol();
      this.$refs.bottshow.hidea();
    },
    timeupdate(e) {
      this.currentTime = e.target.currentTime;
      // console.log(e.target.currentTime);
    },
    end() {
      // console.log("a");
      this.setcurrentindex(this.currentindex + 1);
      if (this.isplaying === true) {
        this.$refs.audio.play();
      }
    },
  },
  mounted() {
    this.$refs.audio.play(); //调用
  },
  computed: {
    ...mapGetters(["currentsong", "isplaying", "curtime", "currentindex"]),
  },
  watch: {
    isplaying(newValue, oldValue) {
      if (newValue) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    },
       currentindex () {
      /*
      注意点: 在iOS中系统不会自动加载歌曲, 所以oncanplay不会自动执行
              https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/AudioandVideoTagBasics/AudioandVideoTagBasics.html
              在PC端和Android端, 系统会自动加载歌曲, 所以oncanplay会自动被执行
      解决方案: 如何监听iOS中Audio的歌曲是否已经准备好了, 通过ondurationchange事件来监听
                ondurationchange事件什么时候执行: 当歌曲加载完成之后执行, 因为只有歌曲加载完成之后才能获取到歌曲的总时长
      * */
      this.$refs.audio.ondurationchange = () => {
        // console.log('执行了2')
        this.totaltime = this.$refs.audio.duration
        if (this.isplaying) {
          // this.setHistorySong(this.currentSong)
          this.$refs.audio.play()
        } else {
          this.$refs.audio.pause()
        }
      }
    },
    curtime(newvalue, oldvalue) {
      this.$refs.audio.currentTime = newvalue;
    },
  },
  mounted() {
    this.$refs.audio.oncanplay = () => {
      this.totaltime = this.$refs.audio.duration;
      // console.log(this.totaltime);
    };
  },
  data() {
    return {
      totaltime: 0,
      currentTime: 0,
    };
  },
};
</script>
<style lang="scss" scoped>
.player {
  // position: fixed;
  // top: 0;
  // bottom: 0;
  // left: 0;
  // right: 0;
  // // background: rgba(0, 0, 0, 0.5);
}
</style>