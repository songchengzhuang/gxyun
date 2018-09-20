<template>
    <Modal
        v-model="modalShow"
        :loading="loading"
        title="分享云链接"
        ok-text="分享"
        @on-ok="saveOk"
        @on-cancel="cancel">
        <div class="fxLinkModal">
            <Input class="linkInput" v-model="linkTitle" :maxlength="30" placeholder="请填写云标题" clearable style="width: 100%"></Input>
            <Input class="linkInput" v-model="linkUrl" :maxlength="80" placeholder="请填写云链接" clearable style="width: 100%"></Input>
            <Input class="linkInput" v-model="linkPwa" :maxlength="12" placeholder="请填写云密码" clearable style="width: 100%"></Input>
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
      loading: true,
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
      var localkey =
        localStorage.getItem("reg_gxy_user_id") +
        localStorage.getItem("reg_gxy_user_name");
      if (!localStorage.getItem(localkey)) {
        this.$Message.info("请您先登录共享云！");
        return false;
      }
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
      var linkObj = {
        linkTitle: this.linkTitle,
        linkUrl: this.linkUrl,
        linkPwa: this.linkPwa,
        linkClass: this.linkClass,
        userId: localStorage.getItem("reg_gxy_user_id"),
        linkAuthor: localStorage.getItem("reg_gxy_user_name")
      };
      this.$ajax
        .post("/gxyundata/postLinkData", linkObj)
        .then(res => {
          if (res.data.code === 200 && res.data.success === true) {
            this.$Message.info("感谢您的分享！");
            this.loading = false;
            this.modalShow = false;
            return false;
          }
          if (res.data.code === 200 && res.data.success === false) {
            this.$Message.info("用户信息不符合，请重新登录！");
            setTimeout(() => {
              this.loading = false;
              this.$nextTick(() => {
                this.loading = true;
              });
            }, 50);
            return false;
          }
          if (res.data.code === 500 && res.data.success === false) {
            this.$Message.info("服务器脑子进水啦！");
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
      this.$Message.info("退出分享");
    },
    checkData() {
      if (!this.linkTitle) {
        this.$Message.error("请填写云标题");
        return false;
      }
      if (!this.linkUrl) {
        this.$Message.error("请填写云链接");
        return false;
      }
      if (this.linkClass.length < 1) {
        this.$Message.error("请选择类别");
        return false;
      }
      return true;
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
