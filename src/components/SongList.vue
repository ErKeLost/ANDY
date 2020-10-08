<template>
  <div class="song">
    <div class="song-top">
      <h3>最新歌曲</h3>
      <span>查看更多</span>
    </div>
    <ul class="song-list">
      <li
        v-for="value in songs"
        :key="value.id"
        class="item"
        @click="selectmusic(value.id)"
      >
        <img v-lazy="value.song.album.picUrl" alt="" />
        <div>
          <h3>{{ value.name }}</h3>
          <p>{{ value.song.artists[0].name }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "SongList",
  props: {
    songs: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    ...mapActions(["setfullscreen","setsongdetail"]),
    selectmusic(id) {
      this.setfullscreen(true);
      this.setsongdetail([id])
    },
  },
};
</script>
<style lang="scss" scoped>
.song {
  width: 100%;
  .song-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 84px;
    width: 90%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    h3 {
      font-weight: 700;
    }
    span {
      font-size: 26px;
      border: 1px solid rgba(0, 0, 0, 0.5);
      padding: 7px 25px;
      border-radius: 30px;
    }
  }
  .song-list {
    width: 90%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      img {
        width: 150px;
        height: 150px;
        border-radius: 20px;
      }
      div {
        margin-left: 30px;
        h3 {
          font-size: 30px;
        }
        p {
          margin-top: 20px;
          font-size: 26px;
          opacity: 0.6;
        }
      }
    }
  }
}
</style>