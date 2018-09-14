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
        <div class="siderRightDiv"></div>
        <h2>分类</h2>
    </Sider>
</Layout>
</template>
<script>
import CarouselSwiper from "../../components/CarouselSwiper";
import LinkItem from "./components/LinkItem";
import linkRankingList from "./components/linkRankingList";

export default {
  name: "HomeIndex",
  components: {
    CarouselSwiper,
    LinkItem,
    linkRankingList
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style lang="scss" scoped>
.homeIndex {
  width: 1260px;
  min-height: 90vh;
  margin: 0 auto;
  margin-top: 80px;
  background: #f5f7f9;
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
      margin-top: 25px;
    }
  }
  .homeSiderLeft,
  .homeSiderRight {
    margin: 0 10px;
    background: #fff;
    z-index: 1;
  }
  .homeSiderRight {
    .siderRightDiv {
      width: 100%;
      height: 260px;
      background: url(../../assets/images/logo_yun.png) no-repeat center;
      background-size: 80%;
    }
    h2 {
      color: #000;
      text-align: center;
      margin-top: 25px;
    }
  }

  .homeContent {
    background: #fff;
    h1 {
      color: #000;
      margin: 20px 0 0 20px;
    }
  }
}
</style>
