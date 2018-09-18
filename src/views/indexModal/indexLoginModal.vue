<template>
    <Modal
        v-model="modalShow"
        title="欢迎登录分享云"
        ok-text="登录"
        @on-ok="saveOk"
        @on-cancel="cancel">
        <div class="fxLinkModal">
            <Input class="loginInput" v-model="loginNmae" placeholder="请填写用户名" clearable style="width: 100%"></Input>
            <Input class="loginInput" v-model="loginPwa" placeholder="请填写密码" clearable style="width: 100%"></Input>
        </div>
    </Modal>
</template>
<script>
export default {
  name: "indexLogin",
  data() {
    return {
      modalShow: false,
      loginNmae: "",
      loginPwa: ""
    };
  },
  methods: {
    showModal() {
      this.modalShow = true;
    },
    saveOk() {
      this.$Message.info("登录成功");
    },
    cancel() {
      // this.$Message.info("退出分享");
    }
  }
};
</script>
<style lang="scss" scoped>
.fxLinkModal {
  .loginInput {
    width: 100%;
    margin-bottom: 16px;
  }
  .loginInput:last-child {
    margin-bottom: 0;
  }
}
</style>
