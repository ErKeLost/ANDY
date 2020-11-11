<template>
  <div class="singer">
    <ScrollView ref="scrollView">
      <ul class="list-wrapper">
        <li
          class="list-group"
          v-for="(value, index) in list"
          :key="index"
          ref="group"
        >
          <h2 class="group-title">{{ keys[index] }}</h2>
          <ul>
            <li class="group-item" v-for="obj in list[index]" :key="obj.id">
              <div class="itt">
                <img v-lazy="obj.img1v1Url" alt="" />
                <p>{{ obj.name }}</p>
              </div>
              <div class="ett">
                <span>+关注</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </ScrollView>
    <!-- <ul class="list-view">
      <li  v-for="(key,index) in keys " :key="key" @click.stop="keyDown(index)">{{key}}</li>
    </ul> -->
  </div>
</template>
<script>
import { getHotArtists } from "../api/index";
import { getLetterArtists } from "../api/index";
import { getAllArtists } from "../api/index";
import ScrollView from "../components/ScrollView";
export default {
  name: "Win",
  components: {
    ScrollView,
  },
  created() {
    getAllArtists()
      .then((result) => {
        // console.log(result);
        this.keys = result.keys;
        this.list = result.list;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
  methods: {
    keyDown(index) {
      // console.log(index);
      let offsetY = this.groupsTop[index];
      // console.log(scrollTop);
      // console.log(offsetY);
      this.$refs.scrollView.scrollTo(0, -offsetY);

      // console.log(this.$refs.aa);
    },
  },
  data() {
    return {
      keys: [],
      list: [],
      groupsTop: [],
    };
  },
  watch: {
    list() {
      this.$nextTick(() => {
        this.$refs.group.forEach((group) => {
          this.groupsTop.push(group.offsetTop);
        });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.singer {
  // z-index: ;
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  // background: lightpink;
  overflow: hidden;
  .list-view {
    position: fixed;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 30px;
  }
  .list-wrapper {
    // width: 100%;
    // height: 100%;
    .list-group {
      .group-title {
        background: rgb(221, 219, 219);
        font-size: 30px;
        color: rgb(44, 43, 43);
        padding: 10px 20px;
        box-sizing: border-box;
      }
      .group-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 30px;
        padding: 15px 20px;
        font-weight: 510;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-right: 25px;
        }
        .itt{
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .ett{
          margin-right: 30px;
          border: 1px solid brown;
          padding: 10px 15px;
          border-radius: 50px;
          font-size: 25px;
          color: brown;
          letter-spacing: 10px;
        }
      }
    }
  }
}

</style>