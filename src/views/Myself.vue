<template>
  <transition appear>
  <div class="account">
    <div class="top">
      <div class="rr">
      <div class="le">
        <div class="left">
        <img src="../assets/images/6.jpg" alt="">
      </div>
      <div class="center">
        <h3>晓星尘i</h3>
        <div class="vip">
          <div class="a">
            <img src="../assets/images/VIP.png" alt="">
          <h3>续费</h3>
          </div>
          <div class="b">
            <h3>Lv.7</h3>
          </div>
        </div>
      </div>
      </div>
      <div class="right">
        <img src="../assets/images/backa.png" alt="">
      </div>
      </div>
      
    </div>
  </div>
  </transition>
</template>
<script>
export default {
  name:'Myself'  
}
</script>
<style lang="scss" scoped>
.vip{
  // width: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 2.2rem;
  transform: translateY(20px);
}
.b{

}
.center{
  display: flex;
  flex-direction:column;
  justify-content: flex-end;

}
.right{
  transform: rotate(180deg) translateY(-20px);
  // transform: translateX(50px);
}
.right img{
  width: 50px;
  height: 50px;
}
.vip{
}
.a{
  display: flex;
  padding: 3px 20px;
  border: 1px solid black;
  border-radius: 30px;
}
.a img{
  width: 40px;
  height: 40px;
}
.center{
  height: 1rem;
  
}
.le{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rr{
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: 50px;
}
.left img{
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  position: relative;
  left: -50px;
}
h3{
  font-size: 30px;
}

.account{

  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  background: lightpink;
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