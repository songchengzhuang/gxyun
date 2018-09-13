<template>
<Layout class="homeIndex">
    <Sider class="homeSiderLeft">排行榜</Sider>
    <Content class="homeContent">
        <carousel-swiper></carousel-swiper>
    </Content>
    <Sider class="homeSiderRight">类型</Sider>
</Layout>
</template>
<script>
import CarouselSwiper from "../../components/CarouselSwiper";
export default {
  name: "HomeIndex",
  components: {
    CarouselSwiper
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
