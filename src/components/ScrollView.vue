<template>
  <div id="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
import IScroll from "iscroll/build/iscroll-probe";
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  name: "ScrollView",
  mounted() {
    this.iscroll = new IScroll(this.$refs.wrapper, {
      mouseWheel: true,
      scrollBar: true,
      scrollX:true,
      scrollY:true,
      probeType:3,
      disablePointer:true,
      disableTouch:false,
      disableMouse:true
    });
    // setTimeout(() => {
    //   console.log(this.iscroll.maxScrollY);
    //   this.iscroll.refresh()
    //   console.log(this.iscroll.maxScrollY);
    // },2000)
    // 观察者对象 远望者
    // mutation发生变化的数组
    // observer瞭望塔
    let observer = new MutationObserver((mutationList, observer) => {
      this.iscroll.refresh();
      //  console.log(this.iscroll.maxScrollY);
      //  console.log(this.iscroll.maxScrollY);

    });
    // 观察什么
    let config = {
      childList: true, //子节点变法
      subtree: true,
      attributeFilter: ["height", "offsetHeight"],
      // attributeFilter: ["width","offsetWidth"],
      attributeOldValue: true,
      characterDataOldValue: true,
    };
    //  瞭望谁  什么东西
    observer.observe(this.$refs.wrapper, config);
  },
  methods:{
    // 监听滚动距离的方法
    scrolling(fn){
      this.iscroll.on('scroll',function(){
        fn(this.y)
      })
    },
    refresh(){
      setTimeout(function(){
        this.iscroll.refresh()
      },100)
    }
  }
};
</script>
<style lang="scss" scoped>
#wrapper {
  width: 100%;
  height: 100%;
}
</style>