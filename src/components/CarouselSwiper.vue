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
        <CarouselItem>
            <div class="demo-carousel">1111111111111111111</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2222222222222222</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3333333333333333333</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">44444444444444444444</div>
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
  height: 500px;
  background: darkgray;
}
</style>
