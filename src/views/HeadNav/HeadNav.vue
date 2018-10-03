<template>
    <!-- 导航 -->
    <Header class="Header">
          <Menu mode="horizontal" theme="dark" active-name="1">
              <router-link class="layout-logo" tag="div" to="/"></router-link>
              <div class="layout-nav">
                  <MenuItem name="1">
                    <router-link tag="span" to="/">
                        <Icon type="ios-navigate"></Icon>
                        <span>共享云</span>
                    </router-link>
                  </MenuItem>
                  <MenuItem name="2">
                    <router-link tag="div" to="/ShareBlog">
                        <Icon type="ios-paper"></Icon>
                        <span>博客云</span>
                    </router-link>
                  </MenuItem>
              </div>
              <p class="navMotto">山不在高，有仙则名。水不在深，有龙则灵。</p>
              <div class="userLogin">
                <span class="shareBtn" @click="writeLinkModal('linkModa')"><Icon type="md-create" size="16"></Icon>我的分享</span>
                <span class="loginBtn" v-if="!userData">
                  <span @click="writeLinkModal('loginModa')"><Icon type="md-redo" size="16"></Icon>登录</span> | 
                  <span @click="writeLinkModal('registerModa')"><Icon type="ios-thunderstorm-outline" size="16"></Icon>注册</span>
                </span>
                <span class="loginUser" v-if="userData">
                  <Icon class="sexIcon" v-if="userData.userSex === '女'" type="ios-female" size="16" color="#ff80aa"></Icon>
                  <Icon class="sexIcon" v-if="userData.userSex === '男'" type="ios-male" size="16" color="#80aaff"></Icon>
                  <span class="loginName" v-text="userData.userName"></span>
                  <Icon class="loginClear" type="ios-power" size="18" @click="clearLocal"></Icon>
                </span>
              </div>
              <Input class="searchLink" v-model="searchLink" icon="ios-search" :maxlength="16" @on-enter="searchYunLink" @on-click="searchYunLink" placeholder="搜索云链接..." style="width: 260px"></Input>
          </Menu>
      </Header>
</template>
<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "HeadNav",
  data() {
    return {
      searchLink: "",
      userData: ""
    };
  },
  computed: {
    ...mapState(["useState"]),
    yunUseState() {
      this.isUserLogin();
      return this.useState;
    }
  },
  methods: {
    ...mapActions(["actSearchList", "actUseState"]),
    // 搜索云链接
    searchYunLink() {
      this.actSearchList(this.searchLink);
    },
    writeLinkModal(type) {
      this.$emit("writeLinkModal", type);
    },
    // 是否登录
    isUserLogin() {
      let userPwa = localStorage.getItem("reg_gxy_user_pwa");
      let linkAuthor = localStorage.getItem("reg_gxy_user_name");
      if (userPwa && linkAuthor) {
        this.userData = JSON.parse(localStorage.getItem(userPwa + linkAuthor));
      } else {
        this.userData = "";
      }
    },
    clearLocal() {
      localStorage.getItem("reg_gxy_user_pwa");
      localStorage.getItem("reg_gxy_user_name");
      var keyData =
        localStorage.getItem("reg_gxy_user_pwa") +
        localStorage.getItem("reg_gxy_user_name");
      localStorage.removeItem("reg_gxy_user_id");
      localStorage.removeItem("reg_gxy_user_pwa");
      localStorage.removeItem("reg_gxy_user_name");
      localStorage.removeItem(keyData);
      this.userData = "";
      this.actUseState("注销");
    }
  },
  mounted() {
    this.isUserLogin();
  }
};
</script>
<style lang="scss" scoped>
.ivu-menu-horizontal {
  height: 64px;
  line-height: 64px;
}
.Header {
  position: fixed;
  top: 0;
  width: 100%;
  min-width: 1260px;
  z-index: 999;
  .layout-logo {
    width: 130px;
    height: 40px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 12px;
    left: 20px;
    background: url(../../assets/images/logo_yun.png) no-repeat center;
    background-size: cover;
    cursor: pointer;
  }
  .layout-nav {
    float: left;
    width: 300px;
    margin: 0 auto;
    margin-left: 70px;
    .ivu-icon {
      margin-right: 8px;
    }
  }
  .navMotto {
    color: #fff;
    margin: 0 auto;
    position: absolute;
    left: 50%;
    margin-left: -175px;
  }

  .searchLink {
    float: right;
    margin-top: 16px;
    margin-right: 80px;
    cursor: pointer;
  }
  .userLogin {
    color: #fff;
    float: right;
    margin-right: 23px;
    cursor: pointer;
    .shareBtn,
    .loginBtn {
      padding: 8px 12px 8px 10px;
      margin-right: 16px;
      border-radius: 6px;
      background-color: #6c7893;
      &:hover {
        background-color: #7b869e;
      }
      .ivu-icon {
        margin-right: 5px;
      }
    }
    .loginBtn span {
      &:hover {
        color: #515a6e;
      }
    }
    .loginUser {
      .sexIcon {
        font-weight: 600;
        margin-right: 5px;
      }
      .loginName {
        padding: 8px 12px;
        margin-right: 10px;
        border-radius: 32px;
        background-color: #7b869e;
        &:hover {
          box-shadow: 0px 0px 5px 1px #ccc;
        }
      }
      .loginClear {
        &:hover {
          color: #ff6666;
        }
      }
    }
  }
}

@media screen and (max-width: 1550px) {
  .navMotto {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  .searchLink {
    display: none;
  }
}
</style>
