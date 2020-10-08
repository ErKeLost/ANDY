<template>
  <div>
    <div class="detail-top">
      <div class="img-container">
        <img :src="path" alt="">
        <div class="mask" ref="mask"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"DetailTop",
  props:{
    path:{
      type:String,
      default:'',
      required:true
    }
  },
  methods:{
    changemask(opacity){
      this.$refs.mask.style.opacity = opacity
    }
  }
}
</script>
<style lang="scss" scoped>
  .detail-top{
    width: 100%;
    height: 600px;
    overflow: hidden;
    position: relative;
    top: -100px;
    img{
      width: 100%;
    }
  }
  .mask{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0;
  }
</style>