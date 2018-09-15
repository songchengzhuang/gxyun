<template>
  <div id="app" class="layout">
    <Layout>
      <head-nav></head-nav>
      <keep-alive>
        <router-view/>
      </keep-alive>
      <footer-index></footer-index>
  </Layout>
</div>
</template>
<script>
import HeadNav from "./views/HeadNav/HeadNav";
import FooterIndex from "./views/FooterIndex/FooterIndex";
export default {
  name: "App",
  components: {
    HeadNav,
    FooterIndex
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style lang="scss" scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout > .ivu-layout {
  background: url(./assets/images/indexBg01.jpg);
  background-size: 33%;
}
</style>
