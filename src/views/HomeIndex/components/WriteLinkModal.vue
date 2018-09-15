<template>
    <Modal
        v-model="modalShow"
        title="分享云链接"
        @on-ok="saveOk"
        @on-cancel="cancel">
        <p>分享云链接</p>
        <p>分享云链接</p>
        <p>分享云链接</p>
    </Modal>
</template>
<script>
export default {
  name: "WriteLinkModal",
  data() {
    return {
      modalShow: false
    };
  },
  methods: {
    showModal() {
      this.modalShow = true;
    },
    saveOk() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    }
  }
};
</script>
