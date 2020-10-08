<template>
  <div class="personalized">
    <div class="personalized-top">
      <span class="le">{{ title }}</span>
      <span class="ri">查看更多</span>
    </div>
    <div class="personalized-list">
      <div class="item" v-for="value in personalized" :key="value.id" @click="selectItem(value.id)">
        <img v-lazy="value.picUrl" alt="" />
        <p>{{ value.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Personalized",
  props: {
    personalized: {
      type: Array,
      default: () => [],
      required: true,
    },
    title: {
      type: String,
      default: "",
      required: true,
    },
    type:{
      type: String,
      default: "",
      required: true,
    }
  },
  methods:{
    selectItem(id){
      // console.log(id);
      this.$emit('select',id,this.type)
      // console.log(this.$emit('select',id));
    }
  }
};
</script>
<style lang="scss" scoped>
// @import '../assets/css/mixin.css';
.personalized {
  margin-top: 3vh;
  .personalized-top {
    width: 90%;
    height: 84px;
    // line-height: 84px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    background: rgb(255, 255, 255);
    .le {
      font-size: 30px;
      color: rgba(0, 0, 0, 1);
      font-weight: bold;
    }
    .ri {
      font-size: 25px;
      color: rgba(0, 0, 0, 1);
      border: 1px solid rgba(0, 0, 0, 0.5);
      padding: 8px 25px;
      border-radius: 30px;
    }
  }
  .personalized-list {
    width: 95%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    .item {
      width: 200px;
      img {
        width: 100%;
        // height: 200px;
        padding: 20px 0;
        border-radius: 25%;

      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 27px;
      }
    }
  }
}
</style>