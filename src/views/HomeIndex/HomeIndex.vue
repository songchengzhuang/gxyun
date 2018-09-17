<template>
<Layout class="homeIndex">
    <Sider class="homeSiderLeft">
        <div class="siderLeftDiv"></div>
        <h2>排行榜</h2>
        <link-ranking-list></link-ranking-list>
    </Sider>
    <Content class="homeContent">
        <carousel-swiper></carousel-swiper>
        <h1>最新共享</h1>
        <link-item></link-item>
    </Content>
    <Sider class="homeSiderRight">
        <advertis-unit :imgSrc="imgSrc02"></advertis-unit>
        <h2>分类</h2>
        <link-class></link-class>
        <advertis-unit :imgSrc="imgSrc01"></advertis-unit>
    </Sider>
</Layout>
</template>
<script>
import CarouselSwiper from "../../components/CarouselSwiper";
import AdvertisUnit from "../../components/AdvertisUnit";
import LinkItem from "./components/LinkItem";
import LinkRankingList from "./components/LinkRankingList";
import LinkClass from "./components/LinkClass";

export default {
  name: "HomeIndex",
  components: {
    CarouselSwiper,
    LinkItem,
    LinkRankingList,
    LinkClass,
    AdvertisUnit
  },
  data() {
    return {
      imgSrc01: "http://sczgodofwar.top/gxyImges/rightImg01.png",
      imgSrc02: "http://sczgodofwar.top/gxyImges/rightImg02.jpg"
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.homeIndex {
  width: 1260px;
  min-height: 90vh;
  margin: 0 auto;
  margin-top: 80px;
  background: rgba(245, 247, 249, 0.5);
  .homeSiderLeft {
    width: 230px !important;
    height: 900px;
    min-width: 230px !important;
    max-width: 230px !important;
    flex: 0 0 230px !important;
    .siderLeftDiv {
      width: 100%;
      height: 260px;
      background: url(../../assets/images/logo_yun.png) no-repeat center;
      background-size: 80%;
    }
    h2 {
      color: #000;
      text-align: center;
      margin: 27px 0;
    }
  }
  .homeSiderLeft,
  .homeSiderRight {
    margin: 0 10px;
    background: #fff;
    z-index: 1;
  }
  .homeSiderRight {
    height: 1200px;
    h2 {
      color: #000;
      text-align: center;
      margin: 27px 0;
    }
  }

  .homeContent {
    width: 790px;
    background: #fff;
    h1 {
      color: #000;
      margin: 20px 0 0 20px;
    }
  }
}
</style>
