<template>
    <div class="AdvertisUnit">
        <img src="../assets/images/lunbo03.png" alt="图片">
    </div>
</template>
<script>
export default {
  name: "AdvertisUnit",
  data() {
    return {
      //
    };
  }
};
</script>
<style lang="scss" scoped>
.AdvertisUnit {
  width: 100%;
  height: 260px;
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
