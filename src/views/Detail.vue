<template>
  <div class="detail">
    <SubTabbar :title="playlist.name"></SubTabbar>
    <DetailTop :path="playlist.coverImgUrl" ref="top"></DetailTop>
    <div class="bottom">
      <ScrollView ref="scrollview">
        <DetailBottom :playlist="playlist.tracks"></DetailBottom>
      </ScrollView>
    </div>
  </div>
</template>
<script>
import SubTabbar from "../components/SubTabbar";
import DetailTop from "../components/DetailTop";
import DetailBottom from "../components/DetailBottom";
import ScrollView from "../components/ScrollView";
import { getAlbum, getPlayList } from "../api/index";
export default {
  name: "Detail",
  components: {
    SubTabbar,
    DetailTop,
    DetailBottom,
    ScrollView
  },
  data: function () {
    return {
      playlist: {},
    };
  },
  created() {
    // console.log(this.$route.params.type);
    if(this.$route.params.type === 'personalized'){
      getPlayList({ id: this.$route.params.id })
      .then((data) => {
        // console.log(data);
        this.playlist = data.playlist;
      })
      .catch((err) => {
        console.log(err);
      });
    }else if(this.$route.params.type === 'album'){
       getAlbum({ id: this.$route.params.id })
      .then((data) => {
        // console.log(data);
        this.playlist = {
          name:data.album.name,
          coverImgUrl:data.album.picUrl,
          tracks:data.songs
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
      
    
    
  },
  mounted(){
    let defaultHeight =  this.$refs.top.$el.offsetHeight
    this.$refs.scrollview.scrolling((offsetY) => {
      // console.log(offsetY);
      if(offsetY<0){
        // console.log('向上滚动');
        // let scale = 100 * Math.abs(offsetY) /defaultHeight
         let scale = Math.abs(offsetY) /defaultHeight
         this.$refs.top.changemask(scale)

        // this.$refs.top.$el.style.filter = `blur(${scale}px)`
      }else{
        // console.log('向下滚动');
         let scale =1 + offsetY / defaultHeight
      this.$refs.top.$el.style.transform = `scale(${scale})`
      }
     
    })
  }
};
</script>
<style lang="scss" scoped>
.detail {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
}
.bottom{
  position: fixed;
  top: 500px;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>