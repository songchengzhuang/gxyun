<template>
  <Footer class="layout-footer-center">
      <p class="footBrief">2018 - 2022  &copy; 共享云 - 学习云 - 智慧共享</p>
      <p class="footRelief">本网站只提供平台不提供资源！</p>
  </Footer>
</template>
<script>
export default {
  name: "FooterIndex",
  data() {
    return {
      //
    };
  }
};
</script>
<style lang="scss" scoped>
.layout-footer-center {
  color: #fff;
  text-align: center;
  text-shadow: 5px 5px 5px #000;
  padding-bottom: 8px;
  background-color: transparent;
  .footBrief {
    margin-bottom: 12px;
  }
  .footRelief {
    font-size: 12px;
  }
}
</style>
