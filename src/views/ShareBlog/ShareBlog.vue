<template>
  <Content class="shareBlog">
    <ul>
      <li v-for="item in userList" :key="item.id">{{"姓名：" + item.id+"————————姓名：" + item.name+"——————————年龄：" + item.age}}</li>
    </ul>
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
        .get("/interface/getUserList")
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
  min-height: 700px;
  margin: 0 auto;
  margin-top: 88px;
  background: #fff;
}
</style>
