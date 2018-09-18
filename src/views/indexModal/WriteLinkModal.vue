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
            <Input class="linkInput" v-model="linkPwa" placeholder="请填写云密码" clearable style="width: 100%"></Input>
            <Select class="linkInput" multiple v-model="linkClass" placeholder="请选择类别" style="width: 100%">
                <Option value="HTML5">HTML5</Option>
                <Option value="CSS3">CSS3</Option>
                <Option value="Vue">Vue</Option>
                <Option value="React">React</Option>
                <Option value="Angular">Angular</Option>
                <Option value="Node">Node</Option>
                <Option value="Webpack">Webpack</Option>
            </Select>
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
      linkUrl: "",
      linkPwa: "",
      linkClass: []
    };
  },
  watch: {
    linkClass() {
      if (this.linkClass && this.linkClass.length > 4) {
        this.linkClass = this.linkClass.slice(0, 4);
      }
    }
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
  .linkInput {
    width: 100%;
    margin-bottom: 16px;
  }
  .linkInput:last-child {
    margin-bottom: 0;
  }
}
</style>
