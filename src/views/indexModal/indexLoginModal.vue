<template>
    <Modal
        v-model="modalShow"
        :loading="loading"
        title="欢迎登录分享云"
        ok-text="登录"
        @on-ok="saveOk"
        @on-cancel="cancel">
        <div class="fxLinkModal">
            <Input class="loginInput" v-model="loginName" placeholder="请填写用户名" clearable style="width: 100%"></Input>
            <Input class="loginInput" type="password" v-model="loginPwa" placeholder="请填写密码" clearable style="width: 100%"></Input>
        </div>
    </Modal>
</template>
<script>
export default {
  name: "indexLogin",
  data() {
    return {
      loading: true,
      modalShow: false,
      loginName: "",
      loginPwa: ""
    };
  },
  methods: {
    showModal() {
      this.$nextTick(() => {
        this.loading = true;
      });
      this.modalShow = true;
    },
    saveOk() {
      var isAudit = this.checkData();
      if (!isAudit) {
        setTimeout(() => {
          this.loading = false;
          this.$nextTick(() => {
            this.loading = true;
          });
        }, 50);
        return false;
      }
      var userObj = {
        userName: this.loginName,
        userPwa: this.loginPwa
      };
      this.$ajax
        .post("/gxyundata/postLogin", userObj)
        .then(res => {
          if (res.data.code === 200 && res.data.success === true) {
            this.$Message.info("登录成功");
            this.loading = false;
            this.modalShow = false;
            return false;
          }
          if (res.data.code === 200 && res.data.success === false) {
            this.$Message.info(res.data.message);
            setTimeout(() => {
              this.loading = false;
              this.$nextTick(() => {
                this.loading = true;
              });
            }, 50);
            return false;
          }
          if (res.data.code === 500 && res.data.success === false) {
            this.$Message.info("请您检查数据类型重新登录！");
            setTimeout(() => {
              this.loading = false;
              this.$nextTick(() => {
                this.loading = true;
              });
            }, 50);
            return false;
          }
        })
        .catch(error => {
          console.log(error);
        });
    },
    cancel() {
      // this.$Message.info("退出分享");
    },
    checkData() {
      if (!this.loginName) {
        this.$Message.error("请填写用户名！");
        return false;
      }
      if (!this.loginPwa) {
        this.$Message.error("请填写的密码！");
        return false;
      }
      if (!/^[0-9a-zA-z]+$/.test(this.loginPwa)) {
        this.$Message.error("密码由数字和字母组成！");
        return false;
      }
      return true;
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
