<template>
  <div class="find">
      <div class="find-wrapper">
      <ScrollView>
    <!-- <BetterScroll> -->
      <div>
          <xxx
        :personalized="personalized"
        :title="'懂你的精选歌单'"
        :type="'personalized'"
      >
      </xxx>
      </div>
    <!-- </BetterScroll> -->
      </ScrollView>
      </div>
  </div>
</template>
<script>
import BetterScroll from "../components/BetterScroll";
import { getPersonalized } from "../api/index";
import xxx from "../components/xxx";
import ScrollView from '../components/ScrollView'

export default {
  name: "Myself",
  components: {
    BetterScroll,
    xxx,
    ScrollView
  },
  data() {
    return {
      personalized: [],
    };
  },

  created() {
    getPersonalized()
      .then((data) => {
        // console.log(data)
        this.personalized = data.result;
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
</style>