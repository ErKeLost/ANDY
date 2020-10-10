<template>
  <div>
    <ul class="detail-bottom">
      <li class="bottom-top" >
        <div class="lef" @click="selectallmusic">
          <div class="bottom-icon"></div>
          <div class="bottom-title">
            <span class="span-big">播放全部</span>
            <span class="span-small">(共32首)</span>
          </div>
        </div>
        <div class="rig">
          <div>
            <span class="rr">+</span>
            <span>收藏810954</span>
          </div>
        </div>
      </li>
      <li
        v-for="value in playlist"
        :key="value.id"
        class="item"
        @click="selectmusic(value.id)"
      >
        <div class="leff">
          <h3>{{ value.name }}</h3>
          <p>{{ value.al.name }}</p>
        </div>
        <div class="rigg">
          <img src="../assets/images/morea.png" alt="" />
        </div>
        <!-- - {{ value.ar[0].name }} -->
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions , mapGetters} from "vuex";
export default {
  name: "DetailBottom",
  props: {
    playlist: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  computed:{
       ...mapGetters([
         'isplaying'
       ])
  },

  methods: {
    ...mapActions(["setfullscreen", "setsongdetail"]),
    selectmusic(id) {
      // this.$store.dispatch('setfullscreen',true)
      // console.log("6666666");
      this.setfullscreen(true);
      this.setsongdetail([id]);
      // this.isplaying(true)
    },
    selectallmusic() {
      this.setfullscreen(true);
      let ids = this.playlist.map(function (item) {
        return item.id;
      });
      this.setsongdetail(ids);
    },
  },
};
</script>
<style lang="scss" scoped>
.detail-bottom {
  width: 100%;
  li {
    width: 100%;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
    background: #fff;
    &:last-of-type{
      padding-bottom: 200px;
    }
    
  }
  .bottom-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    .bottom-icon {
      width: 60px;
      height: 60px;
      background: url("../assets/images/small_play_qq.png");
      background-repeat: no-repeat;
      background-size: 80% 80%;
    }
    .bottom-title {
      font-size: 30px;
      transform: translateY(-5px);
      margin-left: 30px;
      .span-big {
        font-weight: 600;
        font-size: 30px;
      }
      .span-small {
        padding-left: 15px;
        font-size: 25px;
        font-weight: 400;
      }
    }
  }
}

.item {
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  background: #fff;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  .rigg {
    img {
      height: 40px;
      opacity: 0.5;
      transform: translateY(10px);
    }
  }
  h3 {
    font-size: 28px;
    padding-bottom: 5px;
  }
  p {
    font-size: 22px;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
    padding-bottom: 20px;
  }
}
.lef {
  display: flex;
  align-items: center;
}
.rig {
  margin-right: 0px;
  transform: translateY(-4px);
  div {
    border: 1px solid red;
    padding: 5px 30px;
    border-radius: 50px;
    background: red;
    color: white;
    display: flex;
    align-items: center;
    .rr {
      font-size: 50px;
      margin-right: 10px;
    }
  }
}
</style>