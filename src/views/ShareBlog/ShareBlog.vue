<template>
  <Content class="shareBlog">
    <h2>敬请期待...</h2>
    <p v-for="item in userList" :key="item.id">{{"id：" + item.userId+"————姓名：" + item.userName+"———年龄：" + item.userAge+"———性别：" + item.userSex+"———密码：" + item.userPwa+"———时间：" + timestampToTime(item.regTime)}}</p>
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
    },
    timestampToTime(timestamp) {
      var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = change(date.getDate()) + " ";
      var h = change(date.getHours()) + ":";
      var m = change(date.getMinutes()) + ":";
      var s = change(date.getSeconds());
      return Y + M + D + h + m + s;
    }
  },
  mounted() {
    this.userListData();
  }
};
function change(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}
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
