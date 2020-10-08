<template>
  <div class="find">
    <div class="find-wrapper">
      <ScrollView>
        <div>
          <Banner :banners="banners"></Banner>
          <Personalized
            :personalized="personalized"
            :title="'懂你的精选歌单'"
            @select="fatherSelectItem"
            :type="'personalized'"
          >
          </Personalized>
          <Personalized
            :personalized="albums"
            :title="'深入人心的最新专辑'"
            @select="fatherSelectItem"
            :type="'album'"
          >
          </Personalized>
          <SongList :songs="songs"></SongList>
        </div>
      </ScrollView>
    </div>

    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
// import func from "../../vue-temp/vue-editor-bridge";
import {
  getBanner,
  getPersonalized,
  getNewAlbum,
  getNewSong,
} from "../api/index";
import Banner from "../components/Banner";
import Personalized from "../components/Personalized";
import SongList from "../components/SongList";
// import Scroll from "../components/scroll/Scroll";
import ScrollView from "../components/ScrollView";
export default {
  name: "Find",
  components: {
    Banner,
    Personalized,
    SongList,
    ScrollView,
  },
  data() {
    return {
      banners: [],
      personalized: [],
      albums: [],
      songs: [],
    };
  },
  methods: {
    fatherSelectItem(id, type) {
      this.$router.push({
        path: `/find/detail/${id}/${type}`,
      });
    },
  },
  created() {
    getBanner()
      .then((data) => {
        // console.log(data)
        this.banners = data.banners;
      })
      .catch(function (err) {
        console.log(err);
      }),
      getPersonalized()
        .then((data) => {
          // console.log(data)
          this.personalized = data.result;
        })
        .catch(function (err) {
          console.log(err);
        });
    getNewAlbum()
      .then((data) => {
        // console.log(data)
        this.albums = data.albums;
      })
      .catch(function (err) {
        console.log(err);
      });
    getNewSong()
      .then((data) => {
        // console.log(data);
        this.songs = data.result;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>
<style lang="scss" scoped>
.find {
  font-size: 30px;
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  .find-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}

.v-enter {
  transform: translateX(-100%);
}
.v-enter-to {
  transform: translateX(0);
}
.v-enter-active {
  transition: transform 1s;
}
.v-leave {
  transform: translateX(0%);
}
.v-leave-to {
  transform: translateX(100%);
}
.v-leave-active {
  transition: transform 1s;
}
</style>