<template>
  <div>
    <!--swiper的bug,如果数据是从网络获取的, 那么自动轮播到最后一页之后就不轮播了-->
    <!--只需要在swiper组件上面加上v-if="数据.length > 0"-->
    <swiper :options="swiperOption" class="banner">
      <!-- slides -->
      <swiper-slide class="cd">
        <img ref="bbq" class="bbq" src="../assets/images/stick_bg.png" alt="" />

        <div class="cd-wrapper" ref="cdwrapper">
          <img :src="currentsong.picUrl" alt="" />
        </div>
        <p>ERKELOST</p>
        <p>ALLWAYS</p>
        <p>ADNYa</p>
      </swiper-slide>
      <swiper-slide class="lyric">
        <ScrollView>
          <ul>
            <li>我是你爹1</li>
            <li>我是你爹2</li>
            <li>我是你爹3</li>
            <li>我是你爹4</li>
            <li>我是你爹5</li>
            <li>我是你爹6</li>
            <li>我是你爹7</li>
            <li>我是你爹8</li>
            <li>我是你爹9</li>
            <li>我是你爹10</li>
            <li>我是你爹11</li>
            <li>我是你爹12</li>
            <li>我是你爹13</li>
            <li>我是你爹14</li>
            <li>我是你爹15</li>
            <li>我是你爹16</li>
            <li>我是你爹17</li>
            <li>我是你爹18</li>
            <li>我是你爹19</li>
            <li>我是你爹20</li>
            <li>我是你爹21</li>
            <li>我是你爹22</li>
            <li>我是你爹23</li>
            <li>我是你爹24</li>
            <li>我是你爹25</li>
            <li>我是你爹26</li>
            <li>我是你爹27</li>
            <li>我是你爹28</li>
            <li>我是你爹29</li>
            <li>我是你爹30</li>
            <li>我是你爹31</li>
            <li>我是你爹32</li>
            <li>我是你爹33</li>
            <li>我是你爹34</li>
            <li>我是你爹35</li>
            <li>我是你爹36</li>
            <li>我是你爹37</li>
            <li>我是你爹38</li>
            <li>我是你爹39</li>
            <li>我是你爹40</li>
            <li>我是你爹41</li>
            <li>我是你爹42</li>
            <li>我是你爹43</li>
            <li>我是你爹44</li>
            <li>我是你爹45</li>
            <li>我是你爹46</li>
            <li>我是你爹47</li>
            <li>我是你爹48</li>
            <li>我是你爹49</li>
            <li>我是你爹50</li>
          </ul>
        </ScrollView>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css";
import ScrollView from "../components/ScrollView";
import { mapGetters } from "vuex";
export default {
  name: "PlayMiddle",
  components: {
    swiper,
    swiperSlide,
    ScrollView,
  },
  computed: {
    ...mapGetters(["isplaying","currentsong"]),
  },
  watch: {
    isplaying(newvalue, oldvalue) {
      if (newvalue) {

        this.$refs.cdwrapper.classList.add('active');
        this.$refs.bbq.classList.add('activea');


      } else {
        this.$refs.cdwrapper.classList.remove('active');
        this.$refs.bbq.classList.remove('activea');

      }
    },
  },
  data() {
    return {
      swiperOption: {
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active",
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
      },
    };
  },
};
</script>
<style lang="scss">
.banner {
  position: fixed;
  top: 100px;
  bottom: 250px;
  left: 0;
  right: 0;
  .cd-wrapper {
    box-sizing: border-box;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    // border: 60px solid black;
    background: url("../assets/images/blacksing.png");
    // background: url('../assets/images/disc_default.png');

    background-repeat: no-repeat;
    // background-position: center;
    background-size: cover;
    // object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    // flex-direction: column;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    top: -150px;
    animation: sport 20s linear infinite;
    animation-play-state: paused;
    animation-delay: .5s;
    &.active {
      animation-play-state: running;
    }
    img {
      width: 70%;
      height: 70%;
      border-radius: 50%;
      object-fit: cover;
      object-position: top;
    }
  }
}
.cd {
  p {
    text-align: center;
    font-size: 30px;
    color: white;
    // white-space: 50px;
    // white-space: 15px ;
    // word-spacing: 15px;
    letter-spacing: 15px;
    padding-bottom: 35px;
  }
}
.lyric {
  li {
    text-align: center;
    font-size: 30px;
    color: white;

    padding: 15px 0;
    &:last-of-type {
      padding-bottom: 100px;
    }
  }
}
.bbq {
  position: relative;
  top: -35px;
  left: 50%;
  z-index: 1;
  // transform: translateX(-10%);
  /* top: -100px; */
  transition: all 1s;
  animation: ADNY .5s linear ;
  animation-play-state: paused;
  &.activea {
  animation: ERKE .5s linear ;
    animation-play-state: running;

  }
}
@keyframes ADNY {
  from {
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    -webkit-transform: rotate(-25deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
  }
  to {
    transform: rotate(0deg);
    
  }
  
}
@keyframes ERKE {
  from {
    -webkit-transform-origin: 0 0;
    -moz-transform-origin: 0 0;
    -o-transform-origin: 0 0;
    -webkit-transform: rotate(-25deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
  }
  to {
    transform: rotate(0deg);
    
  }
  
}

.bbqq{
  	-webkit-transform-origin:0 0;
		-moz-transform-origin:0 0;
		-o-transform-origin:0 0;
		-webkit-transform:rotate(-25deg);
		-moz-transform:rotate(45deg);
		-o-transform:rotate(45deg);
}
@keyframes sport {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
<style>
.my-bullet {
  display: inline-block;
  width: 15px;
  height: 15px;
  background: white;
  border-radius: 10px;
  margin: 0 15px;
  margin-bottom: 50px;
  transition: all 0.3s;
  opacity: 1;
}
.my-bullet-active {
  background: white;
  width: 60px;
  opacity: 0.8;
}
</style>