<template>
  <div id="app" class="layout">
    <Layout>
      <head-nav @writeLinkModal="writeLinkModal"></head-nav>
      <keep-alive>
        <router-view/>
      </keep-alive>
      <footer-index></footer-index>
  </Layout>
  <write-link-modal ref="linkModa"></write-link-modal>
  <index-register-modal ref="registerModa"></index-register-modal>
  <index-login-modal ref="loginModa"></index-login-modal>
</div>
</template>
<script>
import HeadNav from "./views/HeadNav/HeadNav";
import FooterIndex from "./views/FooterIndex/FooterIndex";
import WriteLinkModal from "./views/indexModal/WriteLinkModal";
import indexRegisterModal from "./views/indexModal/indexRegisterModal";
import indexLoginModal from "./views/indexModal/indexLoginModal";
export default {
  name: "App",
  components: {
    HeadNav,
    FooterIndex,
    WriteLinkModal,
    indexRegisterModal,
    indexLoginModal
  },
  data() {
    return {
      //
    };
  },
  methods: {
    writeLinkModal(type) {
      if (type === "linkModa") {
        this.$refs.linkModa.showModal();
      }
      if (type === "registerModa") {
        this.$refs.registerModa.showModal();
      }
      if (type === "loginModa") {
        this.$refs.loginModa.showModal();
      }
    }
  },
  created() {
    console.log("****************************************");
    console.log("打造属于自己的人生吧！");
    console.log("****************************************");
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
  background-size: 33.5%;
}
</style>
