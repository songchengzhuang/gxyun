<template>
<Layout class="homeIndex">
    <Sider class="homeSiderLeft">
        <h3>排行榜</h3>
    </Sider>
    <Content class="homeContent">
        <carousel-swiper></carousel-swiper>
        <link-item></link-item>
    </Content>
    <Sider class="homeSiderRight">
        <h3>类别</h3>
    </Sider>
</Layout>
</template>
<script>
import CarouselSwiper from "../../components/CarouselSwiper";
import LinkItem from "./components/LinkItem";

export default {
  name: "HomeIndex",
  components: {
    CarouselSwiper,
    LinkItem
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
    min-width: 230px !important;
    max-width: 230px !important;
    flex: 0 0 230px !important;
  }
  .homeSiderLeft,
  .homeSiderRight {
    margin: 0 10px;
    background: #fff;
    z-index: 1;
  }

  .homeContent {
    background: #fff;
  }
}
</style>
