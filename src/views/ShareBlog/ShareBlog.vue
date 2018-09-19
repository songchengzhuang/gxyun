<template>
  <Content class="shareBlog">
    <h2>敬请期待...</h2>
    <p v-for="item in userList" :key="item.id">{{"id：" + item.userId+"————姓名：" + item.userName+"———年龄：" + item.userAge+"———性别：" + item.userSex+"———密码：" + item.userPwa+"———时间：" + item.regTime}}</p>
  </Content>
</template>
<script>
export default {
  name: "ShareBlog",
  data() {
    return {
      userList: []
    };
  },
  methods: {
    userListData() {
      this.$ajax
        .get("/gxyundata/getRegUserList")
        .then(res => {
          console.log(res.data.data); // node的返回的数据在data中
          this.userList = res.data.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.userListData();
  }
};
</script>
<style lang="scss" scoped>
.shareBlog {
  width: 1260px;
  min-height: 90vh;
  margin: 0 auto;
  margin-top: 80px;
  background: #fff;
}
</style>
