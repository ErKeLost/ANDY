<template>
  <transition appear="">
  <div class="pol">
    
  </div>
  </transition>
</template>
<script>
export default {
  name :"Pol"
}
</script>
<style lang="scss" scoped>
  .pol{
    font-size: 30px;
  width: 80%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: lightblue;
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
  transform: translateX(-100%);
}
.v-leave-active {
  transition: transform 1s;
}
</style>