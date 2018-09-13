<template>
<Layout class="homeIndex">
    <Sider class="homeSiderLeft">排行榜</Sider>
    <Content class="homeContent">
        主体内容
    </Content>
    <Sider class="homeSiderRight">类型</Sider>
</Layout>
</template>
<script>
export default {
  name: "HomeIndex",
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
  margin-top: 88px;
  background: #f5f7f9;
  .homeSiderLeft,
  .homeSiderRight {
    width: 150px;
    margin: 0 10px;
    background: #fff;
  }

  .homeContent {
    background: #fff;
  }
}
</style>
