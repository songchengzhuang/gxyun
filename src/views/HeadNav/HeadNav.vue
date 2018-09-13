<template>
    <!-- 导航 -->
    <Header class="Header">
          <Menu mode="horizontal" theme="dark" active-name="1">
              <div class="layout-logo"></div>
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
                        <span>博客</span>
                    </router-link>
                  </MenuItem>
              </div>
          </Menu>
      </Header>
</template>
<script>
export default {
  name: "HeadNav",
  data() {
    return {
      //
    };
  }
};
</script>
<style lang="scss" scoped>
.Header {
  position: fixed;
  width: 100%;
  z-index: 999;
  .layout-logo {
    width: 125px;
    height: 50px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 5px;
    left: 20px;
    //
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    background: url(../../assets/images/logo_yun.png) no-repeat center;
    background-size: cover;
  }
  .layout-nav {
    float: left;
    width: 320px;
    margin: 0 auto;
    margin-left: 70px;
    .ivu-icon {
      margin-right: 8px;
    }
  }
}
</style>
