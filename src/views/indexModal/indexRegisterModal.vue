<template>
    <Modal
        v-model="modalShow"
        :loading="loading"
        title="欢迎加入共享云大家庭"
        ok-text="注册"
        @on-ok="saveOk"
        @on-cancel="cancel">
        <div class="fxLinkModal">
            <Input class="regInput" :maxlength="8" v-model="regName" placeholder="请填写用户名" clearable style="width: 100%"></Input>
            <Input class="regInput" :maxlength="3" v-model="regAge" placeholder="请填写年龄" clearable style="width: 100%"></Input>
            <RadioGroup class="regInput regRadio" v-model="regSex">
              <Radio label="男"></Radio>
              <Radio label="女"></Radio>
            </RadioGroup>
            <Input class="regInput" type="password" :maxlength="12" v-model="regPwa" placeholder="请填写密码" clearable style="width: 100%"></Input>
            <Input class="regInput" type="password" :maxlength="12" v-model="regIsPwa" placeholder="请填写确认密码" clearable style="width: 100%"></Input>
        </div>
    </Modal>
</template>
<script>
export default {
  name: "indexRegister",
  data() {
    return {
      loading: true,
      modalShow: false,
      regName: "",
      regAge: "",
      regSex: "",
      regPwa: "",
      regIsPwa: ""
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
        userName: this.regName,
        userAge: this.regAge,
        userSex: this.regSex,
        userPwa: this.regPwa
      };
      this.$ajax
        .post("/gxyundata/postRegUser", userObj)
        .then(res => {
          if (res.data.code === 200 && res.data.success === true) {
            this.$Message.info("注册成功！");
            this.loading = false;
            this.modalShow = false;
            this.regName = "";
            this.regAge = "";
            this.regSex = "";
            this.regPwa = "";
            this.regIsPwa = "";
            return false;
          }
          if (res.data.code === 200 && res.data.success === false) {
            this.$Message.info("该用户名已经存在！");
            setTimeout(() => {
              this.loading = false;
              this.$nextTick(() => {
                this.loading = true;
              });
            }, 50);
            return false;
          }
          if (res.data.code === 500 && res.data.success === false) {
            this.$Message.info("请您检查数据类型重新注册！");
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
      // this.$Message.info("退出注册");
    },
    checkData() {
      if (!this.regName) {
        this.$Message.error("请填写用户名！");
        return false;
      }
      if (!this.regAge) {
        this.$Message.error("请填写年龄！");
        return false;
      }
      if (isNaN(this.regAge)) {
        this.$Message.error("请填写数字年龄！");
        return false;
      }
      if (this.regAge < 3 || this.regAge > 100) {
        this.$Message.error("请填写3-100区间的年龄！");
        return false;
      }
      if (!this.regSex) {
        this.$Message.error("请选择性别！");
        return false;
      }
      if (!this.regPwa || !this.regIsPwa) {
        this.$Message.error("请填写的密码！");
        return false;
      }
      if (this.regPwa !== this.regIsPwa) {
        this.$Message.error("填写的密码不一致！");
        return false;
      }
      if (!/^[0-9a-zA-z]+$/.test(this.regPwa)) {
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
  .regInput {
    width: 100%;
    margin-bottom: 16px;
  }
  .regInput:last-child {
    margin-bottom: 0;
  }
  .regRadio {
    padding-left: 16px;
  }
}
</style>
