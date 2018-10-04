<template>
  <div id="app" class="layout">
    <Layout>
      <head-nav ref="headNav" @writeLinkModal="writeLinkModal"></head-nav>
      <keep-alive>
        <router-view />
      </keep-alive>
      <footer-index></footer-index>
    </Layout>
    <write-link-modal ref="linkModa"></write-link-modal>
    <index-register-modal ref="registerModa" @AutomaticLogin="AutomaticLogin"></index-register-modal>
    <index-login-modal ref="loginModa" @loginUser="loginUser"></index-login-modal>
    <BackTop class="backTop" :bottom="150">
      <div class="backTopClass">顶部</div>
    </BackTop>
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
    enterPrompt() {
      if (
        !localStorage.getItem("reg_gxy_user_name") &&
        !localStorage.getItem("reg_gxy_user_id") &&
        !localStorage.getItem("reg_gxy_user_pwa")
      ) {
        this.$Notice.success({
          title: "小主，欢迎来到共享云",
          desc: "登录后才能查看【完整链接】呦！",
          duration: 0
        });
      }
    },
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
    },
    loginUser() {
      this.$refs.headNav.isUserLogin();
    },
    // 注册后自动登录
    AutomaticLogin(name, pwa) {
      this.$refs.loginModa.AutomaticLogin(name, pwa);
    }
  },
  mounted() {
    // 提示
    this.enterPrompt();
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
.backTop {
  .backTopClass {
    padding: 15px;
    background: rgba(0, 153, 229, 0.9);
    color: #fff;
    text-align: center;
    letter-spacing: 2px;
  }
  &:hover {
    box-shadow: 0px 0px 5px 3px #ccc;
  }
}
</style>
