<template>
  <div class="player">
    <NormalPlayer ref="hol" :totaltime=totaltime :currentTime=currentTime></NormalPlayer>
    <MinniPlay @showlist="showlist" ref="bottshow"></MinniPlay>
    <ListPlayer ref="listplayer" @tototo="tototo"> </ListPlayer>
    <audio :src="currentsong.url" ref="audio" @timeupdate="timeupdate"></audio>
  </div>
</template>
<script>
import NormalPlayer from "../components/NormalPlayer";
import MinniPlay from "../components/MinniPlay";
import ListPlayer from "../components/ListPlayer";
import { mapGetters } from "vuex";
export default {
  name: "Player",
  components: {
    NormalPlayer,
    MinniPlay,
    ListPlayer,
  },
  methods: {
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
    timeupdate(e){
      this.currentTime = e.target.currentTime
      // console.log(e.target.currentTime);
    }
  },
  computed: {
    ...mapGetters(["currentsong", "isplaying",'curtime']),
  },
  watch: {
    isplaying(newvalue, oldvalue) {
      if (newvalue) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },
    curtime(newvalue, oldvalue){
      this.$refs.audio.currentTime = newvalue
    }
  },
  mounted() {
    this.$refs.audio.oncanplay = () => {
      this.totaltime = this.$refs.audio.duration;
      // console.log(this.totaltime);
    };
  },
  data() {
    return{
      totaltime: 0,
      currentTime:0
    }
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