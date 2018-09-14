<template>
    <Carousel
        v-model="selectItem"
        :height="setting.height"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
        <CarouselItem v-for="item in [1, 2, 3]" :key="item">
            <div class="demo-carousel" :style="{backgroundImage: 'url(' + require('../assets/images/lunbo02.jpg') + ')'}"></div>
        </CarouselItem>
    </Carousel>
</template>
<script>
export default {
  name: "CarouselSwiper",
  data() {
    return {
      selectItem: 0,
      setting: {
        height: 260,
        autoplay: true,
        autoplaySpeed: 3500,
        dots: "inside",
        radiusDot: false,
        trigger: "hover",
        arrow: "hover"
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.demo-carousel {
  height: 260px;
  background: fff;
  background-size: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
}
</style>
