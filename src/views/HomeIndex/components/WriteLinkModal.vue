<template>
    <Modal
        v-model="modalShow"
        title="分享云链接"
        ok-text="分享"
        @on-ok="saveOk"
        @on-cancel="cancel">
        <div class="fxLinkModal">
            <Input class="linkInput" v-model="linkTitle" placeholder="请填写云标题" clearable style="width: 100%"></Input>
            <Input class="linkInput" v-model="linkUrl" placeholder="请填写云链接" clearable style="width: 100%"></Input>
        </div>
    </Modal>
</template>
<script>
export default {
  name: "WriteLinkModal",
  data() {
    return {
      modalShow: false,
      linkTitle: "",
      linkUrl: ""
    };
  },
  methods: {
    showModal() {
      this.modalShow = true;
    },
    saveOk() {
      this.$Message.info("保存分享");
    },
    cancel() {
      this.$Message.info("退出分享");
    }
  }
};
</script>
<style lang="scss" scoped>
.fxLinkModal {
  .linkInput:first-child {
    width: 100%;
    margin-bottom: 16px;
  }
}
</style>
