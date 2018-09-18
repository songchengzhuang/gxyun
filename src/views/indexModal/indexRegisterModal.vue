<template>
    <Modal
        v-model="modalShow"
        title="欢迎加入共享云大家庭"
        ok-text="注册"
        @on-ok="saveOk"
        @on-cancel="cancel">
        <div class="fxLinkModal">
            <Input class="regInput" :maxlength="6" v-model="regName" placeholder="请填写用户名" clearable style="width: 100%"></Input>
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
      this.modalShow = true;
    },
    saveOk() {
      this.$Message.info("注册成功");
      console.log(
        this.regName,
        this.regAge,
        this.regSex,
        this.regPwa,
        this.regIsPwa
      );
    },
    cancel() {
      // this.$Message.info("退出注册");
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
