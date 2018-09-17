<template>
    <!-- 导航 -->
    <Header class="Header">
          <Menu mode="horizontal" theme="dark" active-name="1">
              <!-- <div class="layout-logo"></div> -->
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
                <span class="shareBtn" @click="writeLinkModal('linkModa')"><Icon type="ios-pricetags-outline" size="16"></Icon>我的分享</span>
                <span class="loginBtn">
                  <span @click="writeLinkModal('loginModa')"><Icon type="ios-redo-outline" size="16"></Icon>登录</span> | 
                  <span @click="writeLinkModal('registerModa')"><Icon type="social-octocat" size="16"></Icon>注册</span>
                </span>
              </div>
              <Input class="searchLink" v-model="searchLink" icon="ios-search" :maxlength="16" @on-click="searchYunLink" placeholder="搜索云链接..." style="width: 260px"></Input>
          </Menu>
      </Header>
</template>
<script>
export default {
  name: "HeadNav",
  data() {
    return {
      searchLink: ""
    };
  },
  methods: {
    // 搜索云链接
    searchYunLink() {
      if (this.searchLink) {
        console.log(this.searchLink);
      }
    },
    writeLinkModal(type) {
      this.$emit("writeLinkModal", type);
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
  }
}

@media screen and (max-width: 1330px) {
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
