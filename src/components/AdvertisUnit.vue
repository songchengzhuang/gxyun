<template>
    <div class="AdvertisUnit" :style="{'height':imgHeight}">
        <img :src="imgSrcLink" alt="图片">
    </div>
</template>
<script>
export default {
  name: "AdvertisUnit",
  props: {
    height: {
      type: String,
      default: "260px"
    },
    imgSrc: {
      type: String,
      default: "http://sczgodofwar.top/gxyImges/logo_yun.png"
    }
  },
  data() {
    return {
      imgHeight: this.height,
      imgSrcLink: this.imgSrc
    };
  }
};
</script>
<style lang="scss" scoped>
.AdvertisUnit {
  width: 100%;
  // height: 260px;
  position: relative;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
